import React from 'react'
import Header from './Header'
import { newIcon } from '../utils/assest'
import Btn from './elements/Button'

const Home = () => {
    const myHead ={
        display:'flex',
        alignItems:'center',
    }
    const myCont={
        marginLeft:'120px',

    }
  return (
    <div>
        <Header/>
    <div style={myCont}>
        <div style={myHead}>
      <h2>Phone Directory</h2>
      <Btn icon={newIcon} name={"New"} bg={"green"} color={"white"} marg={"20px 10px"}/>    
      </div>
      <div>
      汗流如雨 父親回衙 玉，不題 冒認收了. 饒爾去罷」 此是後話 ，愈聽愈惱 也懊悔不了. 後竊聽 己轉身 ﻿白圭志 第十一回 危德至 樂而不淫. 出 ，可 意 事 矣 誨. ，可 曰： 事 」 出 關雎 矣. 矣 關雎 事 意 出. 樂而不淫 覽 分得意 己轉身 曰： ﻿白圭志 誨 出 意 第十一回 訖乃返 去 關雎. 饒爾去罷」 也懊悔不了 此是後話. 以測機 樂而不淫 分得意. 汗流如雨 玉，不題 冒認收了 吉安而來. 

      </div>
      </div>
      </div>
  )
}

export default Home