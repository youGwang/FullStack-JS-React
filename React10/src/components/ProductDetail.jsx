import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const ProductDetail = () => {

   let {num}= useParams()
   console.log('num', num)

   const [item, setItem] = useState({})

   // axios를 통해서 한가지 상품에 대한 정보만 가지고 올 것
   // 'http://172.30.1.46:8090/shop/' => 'http://172.30.1.46:8090/shop/p10'
   
   useEffect(()=>{
      axios.get(`http://172.30.1.46:8090/shop/${num}`)
      .then(res => {
         console.log('단일 결과',res.data.product)
         setItem(res.data.product)
      })
   },[])

   // useEffect(()=>{},[item])
  return (
    <div>
      <img width='100px' src={"data:image/;base64,"+item.img}></img>
      <p>{item.pname}</p>
      <p>{item.price}</p>
    </div>
  )
}

export default ProductDetail