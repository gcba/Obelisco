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

// export type AlertType = Type | 'info';
export const alertTypes = [
  { type: 'primary', text: 'Esta es la descripción de una alerta de advertencia.' },
  { type: 'danger', text: 'Esta es la descripción de una alerta de advertencia.' },
  { type: 'info', text: 'Esta es la descripción de una alerta de información.' },
  { type: 'success', text: 'Esta es la descripción de una alerta de éxito.' }
];

export const alertHighlight = [
  {
    type: 'info',
    text: '<strong>Este es un destacado de una alerta de información.</strong> Esta es la descripción de una alerta de información que continua al texto destacado.'
  },
  {
    type: 'primary',
    text: '<strong>Este es un destacado de una alerta de advertencia.</strong> Esta es la descripción de una alerta de advertencia que continua al texto destacado.'
  },
  {
    type: 'success',
    text: '<strong>Este es un destacado de una alerta de éxito.</strong> Esta es la descripción de una alerta de éxito que continua al texto destacado.'
  },
  {
    type: 'danger',
    text: '<strong>Este es un destacado de una alerta de error.</strong> Esta es la descripción de una alerta de error que continua al texto destacado.'
  }
];

export const alertLink = [
  {
    type: 'info',
    text: '<strong>Este es un destacado de una alerta de información.</strong> Esta es la descripción de una alerta de información que continua al texto destacado, incluso con <a href="#">enlace</a>.'
  },
  {
    type: 'primary',
    text: '<strong>Este es un destacado de una alerta de advertencia.</strong> Esta es la descripción de una alerta de advertencia que continua al texto destacado, incluso con <a href="#">enlace</a>.'
  },
  {
    type: 'success',
    text: '<strong>Este es un destacado de una alerta de éxito.</strong> Esta es la descripción de una alerta de éxito que continua al texto destacado, incluso con <a href="#">enlace</a>.'
  },
  {
    type: 'danger',
    text: '<strong>Este es un destacado de una alerta de error.</strong> Esta es la descripción de una alerta de error que continua al texto destacado, incluso con <a href="#">enlace</a>.'
  }
];

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
