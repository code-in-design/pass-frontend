import React, { createContext, useContext } from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';

const ScoreContext = createContext<UseFormReturn | null>(null);

export const NaesinScoreProvider: React.FC<any> = ({ children }) => {
  const formMethods = useForm();

  return <ScoreContext.Provider value={formMethods}>{children}</ScoreContext.Provider>;
};

export const useScoreContext = () => {
  const context = useContext(ScoreContext);
  if (!context) {
    throw new Error('useScoreContext must be used within a NaesinScoreProvider');
  }
  return { ...context };
};
