'use client'
import React, { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [isupdated, setIsUpdated] = useState(0)
  const [todo, setTodo] = useState(null)
  const [crudItems, setCrudItems] = useState(() => {
    const localData = localStorage.getItem('crudItems')
    return localData ? JSON.parse(localData) : [{id: 1, message: 'Hello World'}, {id: 2, message: 'Hello Cat'}]
  })

  const setItems = (item) => {
    setCrudItems(prevItem => [...prevItem, item ])
  }

  const deleteItem = (id) => {
    setCrudItems(prevItem => prevItem.filter(item => item.id !== id))
  }

  useEffect(() => {
    localStorage.setItem('crudItems', JSON.stringify(crudItems))
  }, [crudItems])

  return (
    <AppContext.Provider value={{crudItems, setItems, deleteItem, isupdated, setIsUpdated, setTodo, todo}} >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
