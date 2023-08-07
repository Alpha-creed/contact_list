import React from 'react'
import { phoneIcon } from '../utils/assest'
import { Container } from 'react-bootstrap'

const Header = () => {
    const myText ={
        color:"white",
        fontSize:"24px",
    }

    const myContainer={
        backgroundColor:"black",
        height:"100px",
        color:"white",
    }   
  return (
    <div className="d-flex justify-content-start align-items-center" style={myContainer}>
      <div style={{marginBottom:'15px',padding:"0 20px",marginLeft:"100px"}} >{phoneIcon}</div>
      <p style={myText}>React PhoneDir</p>
    </div>
  )
}

export default Header
