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
    // const {id} = req.params;
    try{
    const {_id,name,phone,email,Company,Title,Group,avatar} = req.body
    const updatedContact = await ContactSchema.findByIdAndUpdate(
        req.params.id,
        {name,phone,email,Company,Title,Group,avatar},
        {new :true}
    );

    if (!updatedContact) {
        return res.status(404).json({ error: 'Contact not found' });
      }
    res.json({ id: updatedContact._id });
}catch(err){
    res.status(500).json({ error: 'An error occurred' });
}    
    
}

