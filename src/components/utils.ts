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
  { type: 'link', name: 'Enlace' }
];

export type AlertType = Type | 'info';
export const alertTypes: AlertType[] = ['primary', 'success', 'info', 'danger'];

export type Size = 'Default' | 'Chico' | 'Grande';
export const sizes: Size[] = ['Chico', 'Default', 'Grande'];

export const sizeToClass = (size: Size | 'Default'): string => {
  switch (size) {
    case 'Default':
      return '';
    case 'Grande':
      return 'lg';
    case 'Chico':
      return 'sm';
  }
};
