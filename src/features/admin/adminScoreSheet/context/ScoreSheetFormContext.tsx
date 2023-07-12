import { ReactNode, createContext } from 'react';
import { UseFormReturn, useForm } from 'react-hook-form';

interface Props {
  children: ReactNode;
}

export const ScoreSheetFormContext = createContext<UseFormReturn | null>(null);

const ScoreSheetFormProvider = (props: Props) => {
  const formMethods = useForm();

  return <ScoreSheetFormContext.Provider value={formMethods}>{props.children}</ScoreSheetFormContext.Provider>;
};

export default ScoreSheetFormProvider;
