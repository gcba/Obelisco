import React from 'react';
import { withA11Y } from '@storybook/addon-a11y';
import { DropDownSizes } from './DropDownSizes/DropDownSizes.stories';
import { DropDownStatesComponent } from './DropdownState/DropdownState.stories';
import { DropDownMobileComponent } from './DropDownMobile/DropDownMobile.stories';

//config
export default {
  title: 'Componentes|Customize DropDown',
  decorators: [withA11Y]
};

export const CustomizeDropDown = (): JSX.Element => {
  return (
    <div>
      <h2>Tamaños y morfología</h2>
      <DropDownSizes />
    </div>
  );
};

export const DropDownStates = (): JSX.Element => {
  return (
    <div>
      <h2>Estados</h2>
      <DropDownStatesComponent />
    </div>
  );
};

export const DropDownMobile = (): JSX.Element => {
  return (
    <div>
      <h2>Mobile</h2>
      <DropDownMobileComponent />
    </div>
  );
};
