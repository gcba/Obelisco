import React from 'react';
import { withA11Y } from '@storybook/addon-a11y';

//config
export default {
  title: 'Componentes|Customize Options',
  decorators: [withA11Y]
};

export const CustomizeOptions = (): JSX.Element => {
  return (
    <div>
      <h2>Options</h2>
    </div>
  );
};
