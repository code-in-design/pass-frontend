import React, { createContext, useContext } from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';

const ScoreFormContext = createContext<UseFormReturn | null>(null);

export const ScoreFormProvider: React.FC<any> = ({ children }) => {
  const formMethods = useForm();

  return <ScoreFormContext.Provider value={formMethods}>{children}</ScoreFormContext.Provider>;
};

export const useScoreFormContext = () => {
  const context = useContext(ScoreFormContext);
  if (!context) {
    throw new Error('useScoreFormContext must be used within a ScoreFormProvider');
  }
  const unRequiredFields = ['inquiry1OptionalSubject', 'inquiry2OptionalSubject', 'mathDropout'] as any;
  return { ...context, unRequiredFields };
};
