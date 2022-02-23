import React from 'react';
import { withA11Y } from '@storybook/addon-a11y';
import { CustomizeCompleteFooter } from './Customize-complete-footer/CustomizeCompleteFooter.stories';
import { CustomizeFooterPhonesComponent } from './Customize-footer-phones/CustomizeFooterPhonesComponent.stories';
import { CustomizeRedesComponent } from './Customize-footer-redes/CustomizeFooterRedesComponent.stories';

//config
export default {
  title: 'Componentes|Customize Footer',
  decorators: [withA11Y]
};

export const CustomizeFooter = (): JSX.Element => {
  return (
    <div>
      <CustomizeCompleteFooter />
    </div>
  );
};

export const CustomizeFooterPhones = (): JSX.Element => {
  return (
    <div>
      <CustomizeFooterPhonesComponent />
    </div>
  );
};

export const CustomizeFooterRedes = (): JSX.Element => {
  return (
    <div>
      <CustomizeRedesComponent />
    </div>
  );
};
