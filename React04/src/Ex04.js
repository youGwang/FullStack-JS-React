import React from 'react'
import Like from "./LikeImg.json"
import LikeImg from "./components/Ex03LikePic"
import './App.css'

const Ex04 = () => {
  return (
    <div >
      <h1 >에스파 </h1>
          <div className='menu-container'>

      
            {Like.list.map(item => <LikeImg key={item.name} 
            name={item.name} group={item.group} content={item.content} 
            imgSrc={item.imgSrc}/>)}

          </div>
    </div>
  )
}

export default Ex04