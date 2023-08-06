
import React, { useContext } from 'react'
import { Context } from '../context/Ex03Context'


const Ex03Header = () => {
  const {isDark} = useContext(Context)
  return (
    <div style={{
      backgroundColor : isDark ? 'black' : 'white',
      color : isDark ? 'white' : 'black'
    }} >Ex03Header</div>
  )
}

export default Ex03Header