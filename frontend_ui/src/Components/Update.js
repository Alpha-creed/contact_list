import React,{useState,useEffect} from 'react'
import { Col, Container, Form } from 'react-bootstrap'
import Btn from './elements/Button'
import {useNavigate,Link,useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createContact, updateContact ,selectedContact} from '../redux/features/contactSlice'

const Update = () => {
  const custFormControl={
    margin:'20px 0'
  }
  // const [setContactId,ContactId] = useState();
  const{id} = useParams();
  const users = useSelector((state)=>state.contact.contact);
    const existingUser = users.filter(f=>f.id == id);
  const {name,phone,email,Company,Title,Group,avatar} = existingUser; 
  // const [uname,setuname] = useState("");
  // const [uphone,setuphone] = useState("");
  // const [uemail,setuemail] = useState("");
  // const [uCompany,setuCompany] = useState("");
  // const [uTitle,setuTitle] = useState("");
  // const [uGroup,setuGroup] = useState("");
  // const [uavatar,setuavatar] = useState("");




  // if (users && Array.isArray(users)) {
  //   const filteredUsers = users.filter(user => user.name === 'Alice');
  // } else {
  //   console.log('Users data is undefined or not an array');
  // }
  // const {loading,error,contact} = useSelector(state => state.contact);
  // const existingUser = users.filter(f=>f.id == id);
  // const {name,phone,email,Company,Title,Group,avatar} = existingUser[0]; 
  const [values,setValues] = useState({
    uname:"",
    uimage:"",
    uphone:"",
    uemail:"",
    uCompany:"",
    uTitle:"",
    uGroup:"",
  })
  // const [values,setValues] = useState({
  //   name:"",
  //   image:"",
  //   phone:"",
  //   email:"",
  //   Company:"",
  //   Title:"",
  //   Group:"",
  // })
useEffect(()=>{
  const contact = users.find(contact=>contact.id===id)
  if(contact){
    setValues.uname(contact.name)
    setValues.uimage(contact.image)
    setValues.uphone(contact.phone)
    setValues.uemail(contact.email)
    setValues.uCompany(contact.Company)
    setValues.uTitle(contact.Title)
    setValues.uGroup(contact.Group)
  }
  console.log(id,contact,users,existingUser)
},[id,users])

  const dispatch = useDispatch()
  const navigate = useNavigate();

    // const handleSelected = (contactId)=>{
    //   dispatch(selectedContact(contactId))
    // }
  const handleUpdate =async (e)=>{
      e.preventDefault();
      dispatch(updateContact({
        name:values.uname,
        avatar:values.uimage,
        phone:values.uphone,
        email:values.uemail,
        Company:values.uCompany,
        Title:values.uTitle,
        Group:values.uGroup,
      }))
      // if(contact){
      // dispatch(updateContact({id:contact._id,...values}))
      // }else{
      //   const newContactId = await dispatch(createContact(values));
      //   if (newContactId) {
      //     newContactId(newContactId); // Store the generated _id
      //   }
      // }
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
        onChange={(e)=>setValues.uname(e.target.value)}
        value={values.uname}
        />

      <Form.Control 
        type="text"  
        placeholder="Photo Url" 
        style={custFormControl}
        onChange={(e)=>setValues.uimage(e.target.value)}
        value={values.uimage}/>

      <Form.Control 
        type="text" 
        placeholder="Mobile" 
        style={custFormControl}
        onChange={(e)=>setValues.uphone(e.target.value)}
        value={values.uphone}/>

      <Form.Control 
        type="email" 
        placeholder="Email" 
        style={custFormControl}
        onChange={(e)=>setValues.uemail(e.target.value)}
        value={values.uemail}/>

      <Form.Control 
        type="text" 
        placeholder="Company" 
        style={custFormControl}
        onChange={(e)=>setValues.uCompany(e.target.value)}
        value={values.uCompany}/>

      <Form.Control 
        type="text" 
        placeholder="Title" 
        style={custFormControl}
        onChange={(e)=>setValues.uTitle(e.target.value)}
        value={values.uTitle}/>

      <Form.Select
        onChange={(e)=>setValues.uGroup(e.target.value)}
        value={values.uGroup}
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
      <Btn  type ="submit" name={'Update'} bg={'green'} color={'white'} marg={'20px 10px'}/* onClick={()=>loading==false?console.log("Updated"):navigate("/")}*/ />
      <Btn name={'Cancel'} bg={'black'} color={'white'} marg={'20px 30px'} onClick={()=>navigate("/")}/>
    </Form>
    {/* {users._id && <p>Updated Contact ID: {users._id}</p>} */}
    {/* {error && <p>{error}</p>} */}
  </Container>
 
  )
}

export default Update
