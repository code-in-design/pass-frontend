import React, { createContext, useContext } from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';

const NaesinScoreContext = createContext<UseFormReturn | null>(null);

export const NaesinScoreProvider: React.FC<any> = ({ children }) => {
  const formMethods = useForm();

  return <NaesinScoreContext.Provider value={formMethods}>{children}</NaesinScoreContext.Provider>;
};

export const useNaesinScoreContext = () => {
  const context = useContext(NaesinScoreContext);
  if (!context) {
    throw new Error('useNaesinScoreContext must be used within a NaesinScoreProvider');
  }
  return { ...context };
};
