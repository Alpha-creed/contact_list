import React from 'react'
import { deleteIcon, editIcon, viewIcon } from '../utils/assest'
import Btn from './elements/Button'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const ViewItem = ({Contacts,del,view,edit}) => {
    const myCont={
        padding:"10px",
        display:'flex',
        alignItems:'center',
        border:'1px solid black',
        borderRadius:'15px',
        justifyContent:"space-evenly",
      margin:"30px 20px",
      width:"100%"
      }
    const img={
        borderRadius: '154px 154px 154px 154px',
    webkitBorderRadius: '154px 154px 154px 154px',
    mozBorderRadius: '154px 154px 154px 154px',
    border:' 1px solid #ff6550',
    width:'150px',
    height:'150px',
    objectFit:'cover',
    }
    const myBtn={
        display:'flex',
        flexDirection: 'column',
    }

    const {loading,error,contact} = useSelector(state => state.contact);

    return (
      <div style={{display:'flex',justifyContent:"space-evenly"}}>
    <div style={myCont}>
      <div>
        <img src={Contacts.avatar} alt={Contacts.name} style={img}/>
      </div>
      <div>
        <p>Name: {Contacts.name}</p>
        <p>Mobile: {Contacts.phone}</p>
        <p>Email: {Contacts.email}</p>
      </div>
      <div style={myBtn}>
      <Link to={`/view/${Contacts._id}`}> <Btn  marg={"2px"} icon={viewIcon} bg={'yellow'} color={'black'} onClick={view}/></Link>
       <Link to={`/update-contact/${Contacts._id}`}><Btn marg={"2px"} icon={editIcon} bg={'blue'} color={'white'} onClick={edit}/></Link>
        <Btn  marg={"2px"} icon={deleteIcon} bg={'red'} color={'white'} onClick={del}/> 
      </div>
    </div>
    </div>
  )
} 

export default ViewItem
