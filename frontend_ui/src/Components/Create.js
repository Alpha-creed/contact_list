import React,{useState} from 'react'
import { Col, Container, Form } from 'react-bootstrap'
import Btn from './elements/Button'
import {useNavigate,Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createContact } from '../redux/features/contactSlice'

const Create = () => {
  const custFormControl={
    margin:'20px 0'
  }
  const [values,setValues] = useState({
    name:"",
    image:"",
    phone:"",
    email:"",
    Company:"",
    Title:"",
    Group:"",
  })
  const [showContact,setShowContact] = useState(false)
  
  const navigate=useNavigate()
  const dispatch = useDispatch()
  const {loading,contact} = useSelector((state)=>({...state.contact}))
  const refresh=()=>window.location.reload(true)
  const handleSubmit=(e)=>{
   dispatch(createContact({values}))
    setValues({
      name:"",
      image:"",
      phone:"",
      email:"",
      Company:"",
      Title:"",
      Group:"",
    })
    setShowContact(true)
    refresh()
  }
  return (
    <Container >
      <h2 style={{color:'green'}}>Create Contact</h2>
      <p>
      Liet telt zoo veel zoo elk lang ter iets. Gezegend kolonist lot rug genoemde weg dikwijls laatsten. Ketting dik tienden luister zij van meestal. Zes met dik tin rijken hoopen tonnen. Snelleren nabijheid gif een inlandsen dit onzuivere sultanaat.
      </p>
      <Form >
        <Col md={4}>
        <Form.Control 
          type="text" 
          placeholder="Name" 
          style={custFormControl}
          onChange={(e)=>setValues({...values,name:e.target.value})}
          value={values.name}
          />

        <Form.Control 
          type="text" 
          placeholder="Photo Url" 
          style={custFormControl}
          onChange={(e)=>setValues({...values,image:e.target.value})}
          value={values.image}/>

        <Form.Control 
          type="text" 
          placeholder="Mobile" 
          style={custFormControl}
          onChange={(e)=>setValues({...values,phone:e.target.value})}
          value={values.phone}/>

        <Form.Control 
          type="email" 
          placeholder="Email" 
          style={custFormControl}
          onChange={(e)=>setValues({...values,email:e.target.value})}
          value={values.email}/>

        <Form.Control 
          type="text" 
          placeholder="Company" 
          style={custFormControl}
          onChange={(e)=>setValues({...values,Company:e.target.value})}
          value={values.Company}/>

        <Form.Control 
          type="text" 
          placeholder="Title" 
          style={custFormControl}
          onChange={(e)=>setValues({...values,Title:e.target.value})}
          value={values.Title}/>

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
        <Btn  type ="submit" name={'Create'} bg={'green'} color={'white'} marg={'20px 10px'} onClick={()=>loading==false?handleSubmit():navigate("/")}/>
        <Btn name={'Cancel'} bg={'black'} color={'white'} marg={'20px 30px'} onClick={()=>navigate("/")}/>
      </Form>
    </Container>
  )
}

export default Create
