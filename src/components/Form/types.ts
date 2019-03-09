export interface InputConfig {
  isError: boolean;
  value: string;
  placeholder: string;
}

export interface FormConfig {
  inputs: Array<InputConfig>;
}
