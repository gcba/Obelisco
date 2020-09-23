// Base
import React from 'react';
import './Form.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components

// Config
export default {
  title: 'Componentes|Formulario/Archivo',
  decorators: [withA11y]
};

export const SubirUnArchivo = (): JSX.Element => {
  return (
    <div className="form-wrapper">
      <div className="form-group">
        <label htmlFor="file-input">Adjuntar un archivo de ejemplo</label>
        <input type="file" className="form-control-file" id="file-input" />
      </div>
    </div>
  );
};
