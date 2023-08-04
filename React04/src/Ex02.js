import React from 'react'
import menu from "./menu.json"
import MenuItem from './components/Ex02MenuItem'


const Ex02 = () => {
    console.log('menu : ', menu.list)
    


   // =========================== Filter =============================
   let newList = menu.list.filter(item => item.price >= 4200)
   console.log('new menu : ', newList);

  return (
    <div>

      <h1>전체메뉴</h1>
      <div className='menu-container'>

      
      {menu.list.map(item => <MenuItem key={item.name} 
      name={item.name} price={item.price} content={item.content} 
      imgSrc={item.imgSrc}/>)}
    
      </div>
      <h1>4200원보다 비싼 메뉴들</h1>
        {/* 문제 풀이
        메뉴의 가격이 4200원 이상인 메뉴만 보여주세요
        사진, 제목, 가격, 내용 이 뜨도록
      */}
      <div className='menu-container'>
      {newList.map(item => <MenuItem key={item.name} 
      name={item.name} price={item.price} content={item.content} 
      imgSrc={item.imgSrc}/>)}
      </div>
    </div>
  )
}

export default Ex02