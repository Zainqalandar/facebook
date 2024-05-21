'use client'
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [isupdated, setIsUpdated] = useState(0)
  const [todo, setTodo] = useState(null)



  return (
    <AppContext.Provider value={{isupdated, setIsUpdated, setTodo, todo}} >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
