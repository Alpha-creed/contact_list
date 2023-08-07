import React from 'react'
import { deleteIcon, editIcon, viewIcon } from '../utils/assest'
import Btn from './elements/Button'

const ViewItem = ({contact,del,view,edit}) => {
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
    return (
      <div style={{display:'flex',justifyContent:"space-evenly"}}>
    <div style={myCont}>
      <div>
        <img src={contact.image} alt={contact.name} style={img}/>
      </div>
      <div>
        <p>Name: {contact.name}</p>
        <p>Mobile: {contact.phone}</p>
        <p>Email: {contact.email}</p>
      </div>
      <div style={myBtn}>
        <Btn  marg={"2px"} icon={viewIcon} bg={'yellow'} color={'black'} onClick={view}/>
        <Btn marg={"2px"} icon={editIcon} bg={'blue'} color={'white'} onClick={edit}/>
        <Btn  marg={"2px"} icon={deleteIcon} bg={'red'} color={'white'} onClick={del}/> 
      </div>
    </div>
    </div>
  )
} 

export default ViewItem
