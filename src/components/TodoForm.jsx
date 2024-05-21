"use client";
// TodoForm.js
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useAppContext } from '@/Context/AppContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TodoForm = ({ onSubmit }) => {
  const { setIsUpdated, todo, setTodo } = useAppContext();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const notify = (e) => toast(e);



  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:3002/api/crud/todo', {title, description})
      setTitle('');
      setDescription('');
      notify('Todo created successfully')
      setIsUpdated(prev => prev + 1)
      
    } catch (error) {

        console.log('error', error)
        notify(error)
    }
  }

  const updateTodo = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/crud/updatetodo', {id: todo._id, title, description})
      setTitle('');
      setDescription('');
      notify('Todo updated successfully')
      setTodo(null)
      setIsUpdated(prev => prev + 1)
    } catch (error) {
      console.log('error', error)
      notify(error)
    }
  }

  useEffect(() => {
    if(todo){
      setTitle(todo.title)
      setDescription(todo.description)
    }
    
  }, [todo])
  

  return (
		<>
			<form
				onSubmit={todo ? updateTodo : handleSubmit}
				className="max-w-md mx-auto mt-8"
			>
				<div className="mb-4">
					<label htmlFor="title" className="block mb-2 font-bold">
						Title
					</label>
					<input
						type="text"
						id="title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						className="w-full px-3 py-2 border border-gray-300 rounded"
						placeholder="Enter title"
					/>
				</div>
				<div className="mb-4">
					<label
						htmlFor="description"
						className="block mb-2 font-bold"
					>
						Description
					</label>
					<textarea
						id="description"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						className="w-full px-3 py-2 border border-gray-300 rounded"
						placeholder="Enter description"
						rows="4"
					/>
				</div>
				<button
					type="submit"
					className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
				>
					{todo ? 'Update Todo' : 'Add Todo'}
				</button>
			</form>
			<ToastContainer position="top-center" />
		</>
  );
};

export default TodoForm;
