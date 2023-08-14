import React, { useEffect, useState } from 'react'
import Header from './Header'
import { deleteIcon, newIcon } from '../utils/assest'
import Btn from './elements/Button'
import ViewItem from './ViewItem'
import { Button, Col, Form, Container, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import {setContacts, setSelectedContact,getContact, getContacts, deleteContact, deleteContacts} from '../redux/features/contactSlice'
import {useDispatch,useSelector} from 'react-redux'
import axios from 'axios'

const Home = () => {
    const [contact,setContacts] = useState([]);
    const navigate=useNavigate()
    const dispatch = useDispatch()

    const myHead ={
        display:'flex',
        alignItems:'center',
    }
    const search ={
        display:'flex',
        alignItems:'center',
        margin:"40px 0"
    }

    const customInput={
        width: '500px',      
    height: '45px',      
    fontSize: '15px',    
    padding: '4px 8px',
    }
    const allContacts = useSelector(state=>state.contact.contact);
     const refresh=()=>window.location.reload(true)

    const handleDel=(id)=>{
        console.log("it gone",id);
        dispatch(deleteContact(id))
        dispatch(deleteContacts(id))
        refresh()
    }
    


  return (
    <Container>
        <div style={myHead}>
      <h2>Phone Directory</h2>
    <Btn icon={newIcon} name={"New"} bg={"green"} color={"white"} marg={"20px 10px"} onClick={()=>navigate("/new-contact")}/>    
      </div>
      <div>
      汗流如雨 父親回衙 玉，不題 冒認收了. 饒爾去罷」 此是後話 ，愈聽愈惱 也懊悔不了. 後竊聽 己轉身 ﻿白圭志 第十一回 危德至 樂而不淫. 出 ，可 意 事 矣 誨. ，可 曰： 事 」 出 關雎 矣. 矣 關雎 事 意 出. 樂而不淫 覽 分得意 己轉身 曰： ﻿白圭志 誨 出 意 第十一回 訖乃返 去 關雎. 饒爾去罷」 也懊悔不了 此是後話. 以測機 樂而不淫 分得意. 汗流如雨 玉，不題 冒認收了 吉安而來. 
      </div>
      <div style={search}>
            <Form.Control 
                placeholder='Enter a name to search'
                style={customInput}
                />
                <Btn name={'search'} color={'black'} bg={'#D8D3D3'}/>
      </div>
      <br/>
      <br/>
      <Row >
        {
            allContacts.length>0 && allContacts.map((cont,index)=>{
                return(
                    <Col key={index} md={5}>
                    <div >
                        <ViewItem key={index} Contacts={cont} edit={cont.id} view={cont.id} del={()=>handleDel(cont.id)}/>
                    </div>
                    </Col>

                )
            })
        }
      </Row>
      </Container>
  )
}

export default Home