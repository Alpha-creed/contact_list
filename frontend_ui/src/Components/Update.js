import React,{useState} from 'react'
import { Col, Container, Form } from 'react-bootstrap'
import Btn from './elements/Button'
import {useNavigate,Link,useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createContact, updateContact } from '../redux/features/contactSlice'

const Update = () => {
  const custFormControl={
    margin:'20px 0'
  }
  // const{id} = useParams();
  // const users = useSelector((state)=>state.contact);
  const {loading,error,contactId} = useSelector(state => state.contact);
  // const existingUser = users.filter(f=>f.id == id);
  // const {loading,name,phone,email,Company,Title,Group,avatar} = existingUser[0];
  // const [values,setValues] = useState({
  //   uname:name,
  //   uimage:avatar,
  //   uphone:phone,
  //   uemail:email,
  //   uCompany:Company,
  //   uTitle:Title,
  //   uGroup:Group,
  // })
  const [values,setValues] = useState({
    name:"",
    image:"",
    phone:"",
    email:"",
    Company:"",
    Title:"",
    Group:"",
  })

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleUpdate = (e)=>{
      e.preventDefault();
      // dispatch(updateContact({
      //   name:values.uname,
      //   avatar:values.uImage,
      //   phone:values.uPhone,
      //   email:values.uEmail,
      //   Company:values.uCompany,
      //   Title:values.uTitle,
      //   Group:values.uGroup,
      // }))
      dispatch(updateContact({id:contactId,...values}))
      navigate("/")
  }
  return (
    <Container >
    <h2 style={{color:'green'}}>Create Contact</h2>
    <p>
    Liet telt zoo veel zoo elk lang ter iets. Gezegend kolonist lot rug genoemde weg dikwijls laatsten. Ketting dik tienden luister zij van meestal. Zes met dik tin rijken hoopen tonnen. Snelleren nabijheid gif een inlandsen dit onzuivere sultanaat.
    </p>
    <Form onSubmit={handleUpdate} >
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
      <Btn  type ="submit" name={'Update'} bg={'green'} color={'white'} marg={'20px 10px'} onClick={()=>loading==false?console.log("Updated"):navigate("/")} />
      <Btn name={'Cancel'} bg={'black'} color={'white'} marg={'20px 30px'} onClick={()=>navigate("/")}/>
    </Form>
    {contactId && <p>Updated Contact ID: {contactId}</p>}
    {error && <p>{error}</p>}
  </Container>

  )
}

export default Update
