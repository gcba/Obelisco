export interface ButtonType {
  default: Button[];
  hover: Button[];
  focus: Button[];
  disabled: Button[];
  outline: Button[];
}

export interface Button {
  name: string;
  class?: string;
}
