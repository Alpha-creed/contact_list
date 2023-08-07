import React from 'react'
import { Button } from 'react-bootstrap'

const Btn = ({width,name,bg,color,marg,icon,onClick}) => {
    const myBtn ={
        height:width,
        backgroundColor:bg,
        color:color,
        padding:'10px',
        margin:marg,
        border:'none',
    }
  return (
    <Button style={myBtn} onClick={onClick}>
      {icon} {name}
    </Button>
  )
}

export default Btn