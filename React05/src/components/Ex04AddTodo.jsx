import React, { useContext } from 'react'
import { TodoContext } from '../context/Ex04TodoContext'

const Ex04AddTodo = () => {
    
    /* 전역 데이터 중, 내가 가지고 와야할 자료들 */
    const {newTodo, handleNewTodo,handleTodoAddiotion } = useContext(TodoContext)

  return (
    <div>
        <input type='text' onChange={handleNewTodo} value={newTodo}/>
        <button onClick={handleTodoAddiotion}>추가</button>
    </div>
  )
}

export default Ex04AddTodo