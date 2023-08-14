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
       const savedContact =await contact.save();
       res.json({ id: savedContact._id });
   
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
    const id = req.params.id;
    ContactSchema.findByIdAndDelete({_id:id})
        .then(res=>res.json(res)
        )
        .catch((err)=>{
            res.status(500).json({message:'Server Error'})
        })
} 

exports.UpdateContact = async (req,res)=>{
    const id = req.params.id;
    try{
    ContactSchema.findByIdAndUpdate({_id:id},{
        name:req.body.name,
        avatar:req.body.avatar,
        phone:req.body.avatar,
        email:req.body.email,
        Company:req.body.Company,
        Title:req.body.Title,
        Group:req.body.Group,
    })
    .then(contacts=>res.json(contacts))
    .catch(err=>res.json(err))
}catch(err){
    res.status(500).json({ error: 'An error occurred' });
}    
    
}

