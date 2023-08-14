import React,{useState,useEffect} from 'react'
import { Col, Container, Form } from 'react-bootstrap'
import Btn from './elements/Button'
import {useNavigate,Link,useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {clearContacts, createContact,updateContact,clearErrors, selectContact, clearCurrent, updateContacts} from '../redux/features/contactSlice'



const Update = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const allContacts = useSelector(state=>state.contact.contact);
  const contacts = allContacts.find(u=>u.id===id)
  const custFormControl={
    margin:'20px 0'
  }
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

// useEffect(()=>{
//   if(current){
//     setValues(current)
//   }else{
//     setValues({
//       name:"",
//       avatar:"",
//       phone:"",
//       email:"",
//       Company:"",
//       Title:"",
//       Group:"",
//     })
//   }
// },[current])

  
  
const refresh=()=>window.location.reload(true)
const handleUpdate=(e)=>{
 dispatch(updateContacts({values}))
 dispatch(updateContact({id,values})) 
 navigate("/")
refresh()
}
  const handleClearAll = () => {
    // dispatch(clearCurrent());
}

  return (
    <Container >
    <h2 style={{color:'green'}}>edit Contact</h2>
    <p>
    Liet telt zoo veel zoo elk lang ter iets. Gezegend kolonist lot rug genoemde weg dikwijls laatsten. Ketting dik tienden luister zij van meestal. Zes met dik tin rijken hoopen tonnen. Snelleren nabijheid gif een inlandsen dit onzuivere sultanaat.
    </p>
 
    <Form onSubmit={handleUpdate} >
      <Col md={4}>
      <Form.Control 
        type="text" 
        placeholder="Name" 
        name="name"
        style={custFormControl}
        onChange={(e)=>setValues({...values,name:e.target.value})}
        value={values.name}
        />

      <Form.Control 
        type="text"  
        placeholder="Photo Url" 
        style={custFormControl}
        onChange={(e)=>setValues({...values,avatar:e.target.value})}
        value={values.avatar}
        />

      <Form.Control 
        type="text" 
        placeholder="Mobile" 
        name='phone'
        style={custFormControl}
        onChange={(e)=>setValues({...values,phone:e.target.value})}
        value={values.phone}
        />

      <Form.Control 
        type="email" 
        placeholder="Email" 
        name='email'
        style={custFormControl}
        onChange={(e)=>setValues({...values,email:e.target.value})}
        value={values.email}
        />

      <Form.Control 
        type="text" 
        placeholder="Company" 
        name='Company'
        style={custFormControl}
        onChange={(e)=>setValues({...values,Company:e.target.value})}
        value={values.Company}
        />

      <Form.Control 
        type="text" 
        placeholder="Title" 
        name='Title'
        style={custFormControl}
        onChange={(e)=>setValues({...values,Title:e.target.value})}
        value={values.Title}
        />

      <Form.Select
       onChange={(e)=>setValues({...values,Group:e.target.value})}
       value={values.Group}
      >
        <option>Group by...</option>
        <option value='Collegue'>Collegue</option>
        <option value='Friend'>Friend</option>
        <option value='Family'>Family</option>
        <option value='Service'>Service</option>
        <option value='Community'>Community</option>
        <option value='Social'>Social</option>
      </Form.Select>
      </Col>
      <Btn  type ="submit" name={'Update Contact'} bg={'green'} color={'white'} marg={'20px 10px'} onClick={handleUpdate}/>
      <Btn name={'Clear Fields'} bg={'black'} color={'white'} marg={'20px 30px'} onClick={handleClearAll}/>

    </Form>
    {/* <p>Empty</p>
    } */}
    {/* {users._id && <p>Updated Contact ID: {users._id}</p>} */}
    {/* {error && <p>{error}</p>} */}
  </Container>
 
  )
}

export default Update
