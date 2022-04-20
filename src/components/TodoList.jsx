import React, { useEffect, useState } from 'react'
import Formulario from './Formulario'
import Todo from './Todo'

const TodoList = () => {

  const [todos, setTodos] = useState([])

  useEffect(()=>{
   if(localStorage.getItem('todos')){
     setTodos(JSON.parse)
   }
  },[])
  const agregarTodo = (todo) => {
    setTodos((old)=>[...old,todo])
  }

  const eliminarTodo=(id)=>{
    setTodos((old)=>old.filter(item=> item.id !== id))
  }

  const editarTodo= id =>{
    const editarTodos=todos.map(item=>(
      item.id === id ? {...item,estado: !item.estado} : item
    ))
    setTodos(editarTodos)
  }

  return (
    <>
        <Formulario
          agregarTodo={agregarTodo}
        />
        {
          todos.map(item =>(
            <ul className='list-group list-group-numbered mt-2'>
            <Todo key={item.id} todo={item} eliminarTodo={eliminarTodo}
            editarTodo={editarTodo}
            />
            </ul>
          ))
        }
    </>
  )
}

export default TodoList