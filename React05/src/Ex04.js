import React, { useState } from 'react'
import Ex04AddTodo from './components/Ex04AddTodo'
import Ex04List from './components/Ex04List'
import { TodoContext } from './context/Ex04TodoContext'



const Ex04 = () => {
    const[todos, setTodos] = useState([{text : 'React 복습하기', completed : false},
    {text : 'Spring 복습하기', completed : false}
])
    const [newTodo, setNewTodo]= useState("")

    /* newTodo에 값을 추가하는 함수 */
    const handleNewTodo = (e)=>{
        //console.log('handleNewTodo Function', e.target.value);
        setNewTodo(e.target.value)
    }

    /* 기존 todos 배열에 새로운 할일을 추가하는 함수 */
    const handleTodoAddiotion = ()=>{
        console.log('handleTodoAddiotion Function');
        console.log('newTodo : ', newTodo);
        setTodos([...todos, {text : newTodo , completed : false}])
        setNewTodo("")
    }

    /* 마친 일을 체크해주는 함수 */
    const handleTodoToggle = (index)=>{
        console.log('handleTodoToggle');
        const newTodos = [...todos]
       newTodos [index].completed =!newTodos[index].completed
       setTodos(newTodos)
    }

    /* 일을 삭제하는 함수 */
    const handleTodoDelete = (index)=>{
        console.log('handleTodoDelete Function');
       const newTodos = [...todos]
       newTodos.splice(index,1)
       setTodos(newTodos)
        
    }
  return (
    <TodoContext.Provider value ={{todos,setTodos, newTodo,
     setNewTodo,handleNewTodo,handleTodoAddiotion,handleTodoToggle,handleTodoDelete}}>
    <div>
        <h1>Todo List</h1>
        <Ex04List/>
        <Ex04AddTodo/>
        
    </div>
    </TodoContext.Provider>
  )
}

export default Ex04