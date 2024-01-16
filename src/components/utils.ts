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

export type AlertType = { type: Type | 'info'; text: string };

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

export type DataDirection =
  | 'top-right'
  | 'top'
  | 'top-left'
  | 'right-bottom'
  | 'right'
  | 'right-top'
  | 'left-bottom'
  | 'left'
  | 'left-top'
  | 'bottom-right'
  | 'bottom'
  | 'bottom-left';

export interface Direction {
  direction: DataDirection;
  icon: string;
  position: string;
}

export const directionTop: Direction[] = [
  { direction: 'top-right', icon: 'turn_right', position: 'arriba-derecha' },
  { direction: 'top', icon: 'arrow_upward', position: 'arriba' },
  { direction: 'top-left', icon: 'turn_left', position: 'arriba-izquierda' }
];

export const directionLeft: Direction[] = [
  { direction: 'right-bottom', icon: 'south_east', position: 'derecha-abajo' },
  { direction: 'right', icon: 'arrow_forward', position: 'derecha' },
  { direction: 'right-top', icon: 'north_east', position: 'derecha-arriba' }
];

export const directionRight: Direction[] = [
  { direction: 'left-bottom', icon: 'south_west', position: 'izquierda-abajo' },
  { direction: 'left', icon: 'keyboard_backspace', position: 'izquierda' },
  { direction: 'left-top', icon: 'north_west', position: 'izquierda-arriba' }
];

export const directionBottom: Direction[] = [
  { direction: 'bottom-right', icon: 'subdirectory_arrow_right', position: 'abajo-derecha' },
  { direction: 'bottom', icon: 'arrow_downward', position: 'abajo' },
  { direction: 'bottom-left', icon: 'subdirectory_arrow_left', position: 'abajo-izquierda' }
];

export type SpinnerType = Type | 'secondary' | 'info' | 'light' | 'dark';
export const spinnerTypes: SpinnerType[] = ['primary', 'secondary', 'success', 'danger', 'info', 'light', 'dark'];

export interface ButtonTypeWithSpinner {
  type: Type | 'secondary' | 'link';
  spinner: SpinnerType;
}

export const buttonSpinnerTypes: Array<ButtonTypeWithSpinner> = [
  { type: 'primary', spinner: 'dark' },
  { type: 'secondary', spinner: 'light' },
  { type: 'success', spinner: 'light' },
  { type: 'danger', spinner: 'light' },
  { type: 'link', spinner: 'info' }
];

export const buttonOutlineSpinnerTypes: Array<ButtonTypeWithSpinner> = [
  { type: 'primary', spinner: 'dark' },
  { type: 'secondary', spinner: 'secondary' },
  { type: 'success', spinner: 'success' },
  { type: 'danger', spinner: 'danger' },
  { type: 'link', spinner: 'info' }
];

export type panelBgColor = 'light' | 'white';

export type HighlightedPanelType = 'banner' | 'grouping' | 'lateral';
