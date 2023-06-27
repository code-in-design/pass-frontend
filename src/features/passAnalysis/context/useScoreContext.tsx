import React, { createContext, useContext } from 'react';
import { useForm, UseFormReturn, FieldValues } from 'react-hook-form';

interface ScoreContextProps extends UseFormReturn<FieldValues> {}

const ScoreContext = createContext<ScoreContextProps | null>(null);

export const ScoreProvider: React.FC<any> = ({ children }) => {
  const formMethods = useForm();

  const contextValue: ScoreContextProps = {
    ...formMethods,
  };

  return <ScoreContext.Provider value={contextValue}>{children}</ScoreContext.Provider>;
};

export const useScoreContext = () => {
  const context = useContext(ScoreContext);
  if (!context) {
    throw new Error('useScoreContext must be used within a NaesinScoreProvider');
  }
  return { ...context };
};
