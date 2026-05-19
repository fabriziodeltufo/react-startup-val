import React, { createContext, useContext, useState } from 'react';

// Creazione del Context
const GlobalContext = createContext(undefined);

// Provider del Context
export function GlobalProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [idea, setIdea] = useState('');

  return (
    <GlobalContext.Provider value={{ isLoading, setIsLoading, idea, setIdea }}>
      {children}
    </GlobalContext.Provider>
  );
}

// Hook custom per consumare il Context
export function useGlobal() {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error('useGlobal deve essere usato all\'interno di un GlobalProvider');
  }
  return context;
}
