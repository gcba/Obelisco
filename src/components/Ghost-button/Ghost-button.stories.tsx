// Base
import React from 'react';
import './Ghost-button.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components

// Config
export default {
  title: 'Componentes|Ghost',
  decorators: [withA11y]
};



export const Colores = (): JSX.Element => {
  return (
    <div>
      <button type="button" className="btn btn-ghost-primary">Botón</button>
      <button type="button" className="btn btn-ghost-secondary">Botón</button>
      <button type="button" className="btn btn-ghost-success">Éxito</button>
      <button type="button" className="btn btn-ghost-danger">Peligro</button>
      <button type="button" className="btn btn-ghost-link">Botón</button>
    </div>
  );
};
