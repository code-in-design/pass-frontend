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

  constructor(data: [], options: []) {
    this.data = data;
    this.options = options;
  }
}
