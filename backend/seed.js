const {faker} = require('@faker-js/faker');
const {MongoClient} = require('mongodb');

require('dotenv').config();

async function main(){
    const url = process.env.MONGO_URL
    const client = new MongoClient(url);

    try {
        await client.connect(); 

        const contactCollection = client.db('Contact_List_App').collection('contacts')

        await contactCollection.drop();

        let contacts =[];
        for(let i=0;i<10;i+=1){
            let newContact = {
                name:faker.person.fullName(),
                phone:faker.phone.number(),
                email:faker.internet.email(),
                Company:faker.company.name(),
                Title:faker.person.jobTitle(),
                Group:faker.person.jobDescriptor(),
                avatar:faker.image.avatar(),
            }
            contacts.push(newContact);
            console.log("Contact pushed:",newContact);
        }
        await contactCollection.insertMany(contacts);
        console.log("Contacts inserted successfully");
        
    } catch (error) {
        console.log("Error:",error);
    }finally{
        await client.close()
    }
}

main();