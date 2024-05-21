// TodoList.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAppContext } from '@/Context/AppContext';
import { FaTrash, FaEdit } from 'react-icons/fa'; // Import FontAwesome icons

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const { isupdated, setIsUpdated, setTodo } = useAppContext();

  //  Get todos from mongoose db
  const getTodos = async () => {
    try {
       const todos = await axios.get('http://localhost:3002///api/crud/todos')

      setTodos(todos.data.todos)
      
    } catch (error) {
      console.loge("error", error)
      
    }
  }

  const deleteTodo = async (id) => {
    console.log('id', id)
    try {
      await axios.post(`http://localhost:3001/api/crud/deletetodo`, {id});
      setIsUpdated(prev => prev + 1)
    } catch (error) {
      console.log("error", error)
    }
  }

  const updateTodo = async (id) => {
    try {
      const todo = await axios.post(`http://localhost:3001/api/crud/gettodo`, {id});
      setTodo(todo.data.existTodo)
    } catch (error) {
      console.log("error", error)
    }
  }

  useEffect(() => {
    getTodos()
  }, [isupdated])

  console.log('todos', todos)

  return (
		<div className="max-w-md mx-auto mt-8">
			<h2 className="text-xl font-bold mb-4">Todos</h2>
			<ul>
				{todos.map((todo, index) => (
					<li key={index} className="bg-gray-100 p-4 rounded mb-2 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">{todo.title}</h3>
            <p className="text-gray-600">{todo.description}</p>
          </div>
          <div>
            <button className="mr-2 text-red-500 hover:text-red-700"  onClick={() => deleteTodo(todo._id)}>
              <FaTrash />
            </button>
            <button className="text-blue-500 hover:text-blue-700" onClick={() => updateTodo(todo._id)}>
              <FaEdit />
            </button>
          </div>
        </li>
				))}
			</ul>
		</div>
  );
};

export default TodoList;
