'use client'
import React, { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [isupdated, setIsUpdated] = useState(0)
  const [todo, setTodo] = useState(null)



  return (
    <AppContext.Provider value={{ setItems, deleteItem, isupdated, setIsUpdated, setTodo, todo}} >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
