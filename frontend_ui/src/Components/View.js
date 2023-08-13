import React, { useEffect, useState } from 'react'
import ViewItem from './ViewItem'
import pic from '../utils/thumb-315771.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card, Spinner } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { Image, Title, company, email, group, name, phoneIcon } from '../utils/assest'

const View = ({contact}) => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const allContacts = useSelector(state=>state.contact.contact);
  const contacts = allContacts.find(u=>u.id===id)
  const custFormControl={
    margin:'20px 0'
  }
  // const{name,avatar,phone,email,Company,Title,Group}= contacts
    console.log(contacts);

    useEffect(()=>{
      if(contacts){
      setValues({
        id:id,
        name:contacts.name,
        avatar:contacts.avatar,
        phone:contacts.phone,
        email:contacts.email,
        Company:contacts.Company,
        Title:contacts.Title,
        Group:contacts.Group,
      })
      }
    },[contacts])

  const [values,setValues] = useState({
    id:id,
    name:"",
    avatar:"",
    phone:"",
    email:"",
    Company:"",
    Title:"",
    Group:"",
  })
  return (
    <div>
      {contacts?
 <Card 
            bg="light"
            style={{  margin: '0.3rem' }}
        >
            <Card.Body style={{ padding: '0.75rem',textAlign:'center' }}>
                <Card.Title >
                 <h1> {values.name}{' '}</h1>
                </Card.Title>
                <ul style={{ listStyleType: 'none', paddingLeft: 0,textAlign:'center' }}>
                     <li>
                         <img src={values.avatar} alt={values.name}/>
                    </li>
                     <li>
                     {name} {values.name}
                    </li>
                   <li>
                        {phoneIcon} {values.phone}
                    </li>
                    <li>
                        {email} {values.email}
                    </li>
                   <li>
                        {Title} {values.Title}
                    </li>
                    <li>
                        {company} {values.Company}
                    </li>
                   <li>
                        {group} {values.Group}
                    </li>
                </ul>
                <Button 
                    variant="dark" 
                    size="sm" 
                    style={{ width: '4rem' }} 
                    onClick={() => navigate(`/update-contact/${id}`)}
                >
                        Edit
                </Button>
                <span>{' '}</span>
                <Button 
                    variant="danger" 
                    size="sm" 
                    style={{ width: '4rem' }} 
                    onClick={()=>navigate("/")}
                >
                        Cancel
                </Button>
            </Card.Body>
        </Card>  :
             <div
             style={{
               position: 'fixed',
               top: 0,
               left: 0,
               width: '100vw',
               height: '100vh',
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               background: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
               zIndex: 9999, // Adjust the z-index as needed
             }}
           >
             <Spinner animation="border" role="status">
               <span className="visually-hidden">Loading...</span>
             </Spinner>
           </div>
          
        }  
        
    </div>
  )
}

export default View 
