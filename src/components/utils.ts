export type Type = 'primary' | 'success' | 'danger';
export const types: Type[] = ['primary', 'success', 'danger'];

export type ButtonType = Type | 'secondary' | 'link';
// export const buttonTypes: ButtonType[] = [...types, 'secondary', 'link'];

export type ButtonTypeWithName = { type: Type | 'secondary' | 'link'; name: string };
export const buttonTypes: Array<ButtonTypeWithName> = [
  { type: 'primary', name: 'Primario' },
  { type: 'secondary', name: 'Secundario' },
  { type: 'success', name: 'Éxito' },
  { type: 'danger', name: 'Error' },
  { type: 'link', name: 'Link' }
];

export type AlertType = Type | 'info';
export const alertTypes: AlertType[] = ['primary', 'success', 'info', 'danger'];

export type Size = 'default' | 'small' | 'large';
export const sizes: Size[] = ['small', 'default', 'large'];

export interface SizesTypes {
  size: Size;
  name: string;
}
export const sizesButton: SizesTypes[] = [
  {
    size: 'small',
    name: 'Chico'
  },
  {
    size: 'default',
    name: 'Mediano'
  },
  {
    size: 'large',
    name: 'Grande'
  }
];

export const sizeToClass = (size: Size | 'default'): string => {
  switch (size) {
    case 'default':
      return '';
    case 'large':
      return 'lg';
    case 'small':
      return 'sm';
  }
};
