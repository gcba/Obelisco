export type Type = 'primary' | 'secondary' | 'success' | 'danger';
export const types: Type[] = ['primary', 'secondary', 'success', 'danger'];

export type ButtonType = Type | 'link';
export const buttonTypes: ButtonType[] = [...types, 'link'];

export type AlertType = 'primary' | 'success' | 'info' | 'danger';
export const alertTypes: AlertType[] = ['primary', 'success', 'info', 'danger'];

export type Size = 'default' | 'small' | 'large';
export const sizes: Size[] = ['small', 'default', 'large'];

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
