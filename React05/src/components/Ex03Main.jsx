import React, { useState } from 'react'
import { useContext } from 'react'
import { Context } from '../context/Ex03Context'

const Ex03Main = () => {
  
  const {isDark, setIsDark} = useContext(Context)
  const toggleTheme = ()=>{
    setIsDark(!isDark)
  }
  return (
    <div style={{
      backgroundColor : isDark ? 'black' : 'white',
      color : isDark ? 'white' : 'black'
    }}> Ex03Main
   
        <br></br>
        <button onClick={toggleTheme}>다크모드</button>
    </div>
  )
}

export default Ex03Main