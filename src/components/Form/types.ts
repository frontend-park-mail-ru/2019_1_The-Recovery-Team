export interface InputConfig {
  isError: boolean;
  value: string;
  placeholder: string;
  name: string;
  touched: boolean;
  label: string;
}

export interface FormConfig {
  inputs: Array<InputConfig>;
}
