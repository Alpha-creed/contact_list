const express = require('express')
const { addContact, getContact, deleteContact } = require('../controllers/contact')

const router = express.Router()


router.post('/add-contact',addContact)
      .get('/get-contacts',getContact)
      .delete('/delete-income/:id',deleteContact)

module.exports = router