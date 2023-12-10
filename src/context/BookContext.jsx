import React, { createContext, useContext, useState } from "react";

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [libros, setLibros] = useState([]);
  const [loading, setLoading] = useState(false);

  const updateLibros = (newLibros) => {
    setLibros(newLibros);
  };

  const updateLoading = (newLoading) => {
    setLoading(newLoading);
  };

  
  const contextValue = {
    libros,
    loading,
    updateLibros,
    updateLoading,
 
  };

  return (
    <BookContext.Provider value={contextValue}>
      {children}
    </BookContext.Provider>
  );
};

export const useBookContext = () => {
  return useContext(BookContext);
};