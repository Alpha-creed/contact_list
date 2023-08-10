import React,{useState} from 'react'
import {useSelector} from 'react-redux'


const ContactDetail = () => {
  const { selectedContact } = useSelector(state => state.contact);
  const [contactDetails, setContactDetails] = useState(null);

  const handleSelectContact = async (contactId) => {
    // Assuming you have an API endpoint to fetch contact details by ID
    const response = await fetch(`http://localhost:5000/api/get-contact/${contactId}`);
    const data = await response.json();
    setContactDetails(data);
  };

  return (
    <div>
       {selectedContact && (
        <div>
          <p>ID: {selectedContact.id}</p>
          <p>Name: {selectedContact.name}</p>
          {/* Display other contact details */}
        </div>
      )}
    </div>
  )
}

export default ContactDetail
