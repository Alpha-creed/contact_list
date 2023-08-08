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
        console.log(contact);

        //Validations
        if(!name || !phone || !email ||!Company||!Title||!Group||!avatar){
            return res.status(400).json({message:"All fields are required"});
        }
       
        await contact.save();
        // await contact.save((err,user)=>{
        //     if(err){
        //         res.status(400).send({error:err})
        //     }else{
        //         res.status(200).send({data:contact})
        //     } 
        // })
        res.status(200).json({message:'Contact Added'})
    } catch (error) {
        res.status(500).json({message:'Server Error',error})    
    }
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

exports.UpdateContact = async (req,res)=>{
    const {id} = req.params;
    ContactSchema.findByIdAndUpdate(id)
        .then((contact)=>{
            res.status(200).json({message:'Contact Updated'})
        })
        .catch((err)=>{
            res.status(500).json({message:'Server Error'})
        })
}

