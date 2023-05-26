import { FieldValues, UseFormRegister } from 'react-hook-form';

interface DataProps {
  content: string;
}

interface OptionsProps {
  value: string;
  label: string;
}

export class VersionsModel {
  data: Array<DataProps>;
  options: Array<OptionsProps>;
  register: UseFormRegister<FieldValues>;
  constructor(data: [], options: [], register: any) {
    this.data = data;
    this.options = options;
    this.register = register;
  }
}
