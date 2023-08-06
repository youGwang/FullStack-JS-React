import React from 'react'
import Ex03Header from './components/Ex03Header'
import Ex03Main from './components/Ex03Main'
import { useState } from 'react'
import { Context } from './context/Ex03Context'

const Ex03 = () => {
  
  //어플리케이션의 Theme와 관련된 데이터
  // -> 전역적으로 사용, 관리 => context
  const[isDark, setIsDark] = useState(false);

  return (
    <Context.Provider value = {{isDark, setIsDark}} >
    <div style={{isDark}  ? {color:'black'} : {color:'white'} }>
        
        <Ex03Header/>
        <Ex03Main/>
        
    </div>
    </Context.Provider>
  )
}

export default Ex03