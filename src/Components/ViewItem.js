import React from 'react'
import Btn from './elements/Button'
import { deleteIcon, editIcon, viewIcon } from '../utils/assest'

const ViewItem = ({image,name,phone,email,del,view,edit}) => {
    const myCont={
        padding:"10px",
        display:'flex',
        alignItems:'center',
        border:'1px solid black',
        borderRadius:'15px',
        width:'500px',
    }
    const img={
        borderRadius: '154px 154px 154px 154px',
    webkitBorderRadius: '154px 154px 154px 154px',
    mozBorderRadius: '154px 154px 154px 154px',
    border:' 1px solid #ff6550',
    width:'150px',
    height:'150px',
    objectFit:'cover',
    margin:'0 20px'
    }
    const myBtn={
        display:'flex',
        flexDirection: 'column',
        padding:'0 20px',
        marginLeft:'30px',
    }
    return (
    <div style={myCont}>
      <div>
        <img src={image} alt={name} style={img}/>
      </div>
      <div>
        <p>Name: {name}</p>
        <p>Mobile: {phone}</p>
        <p>Email: {email}</p>
      </div>
      <div style={myBtn}>
        <Btn  marg={"2px"} icon={viewIcon} bg={'yellow'} color={'black'} onClick={view}/>
        <Btn marg={"2px"} icon={editIcon} bg={'blue'} color={'white'} onClick={edit}/>
        <Btn  marg={"2px"} icon={deleteIcon} bg={'red'} color={'white'} onClick={del}/>
      </div>
    </div>
  )
}

export default ViewItem
