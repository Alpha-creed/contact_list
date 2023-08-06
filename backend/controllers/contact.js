const ContactSchema = require('../models/contactModel')


exports.addContact = async (req,res)=>{
    const {name,phone,email,Company,Title,Group,avatar} = req.body

    const contact = ContactSchema({
        name,
        phone,
        email,
        Company,
        Title,
        Group,
        avatar
    })

    try {
        //Validations
        if(!name || !phone || !email ||!Company||!Title||!Group|| !avatar){
            return res.status(400).json({message:"All fields are required"});
        }
        if(!phone === 'number'){
            return res.status(400).json({message:'The phone section should be number'})
        }
        await contact.save()
        res.status(200).json({message:'Contact Added'})
    } catch (error) {
        res.status(500).json({message:'Server Error'})    
    }
    console.log(contact);
}

exports.getContact = async(req,res)=>{
    try {
        const contacts = await ContactSchema.find().sort({createdAt:-1})
        res.status(200).json(contacts)
    } catch (error) {
        res.status(500).json({message:'Server Error'})
    }
}

exports.deleteContact = async (req,res)=>{
    const {id} = req.params;
    ContactSchema.findByIdAndDelete(id)
        .then((contact)=>{
            res.status(200).json({message:'Contact Deleted'})
        })
        .catch((err)=>{
            res.status(500).json({message:'Server Error'})
        })
}