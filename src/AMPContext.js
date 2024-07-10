// src/components/AMPContext.js
import React, { createContext, useContext } from 'react';
import AMPImageWrapper from './AMPImageWrapper';

const AMPContext = createContext(false);

export const useAMPContext = () => useContext(AMPContext);

const AMPProvider = ({ children }) => {
  const isAMP = true; // Set based on your application logic

  return (
    <AMPContext.Provider value={isAMP}>
      {children}
    </AMPContext.Provider>
  );
};

export default AMPProvider;
