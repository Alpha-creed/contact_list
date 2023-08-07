import React from 'react'
import ViewItem from './ViewItem'
import pic from '../utils/thumb-315771.jpg'

const View = () => {
  return (
    <div>
      <ViewItem image={pic} name={"Creed"} phone={"029481323"} email={"brad@gmail.com"}/>
    </div>
  )
}

export default View
