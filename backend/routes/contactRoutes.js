const router=require('express').Router();
const {addContact, getContact, deleteContact, UpdateContact } = require('../controllers/contact')




router.post('/add-contact',addContact)
      .get('/get-contacts',getContact)
      .put('/update-contact',UpdateContact)
      .delete('/delete-income/:id',deleteContact)

module.exports = router