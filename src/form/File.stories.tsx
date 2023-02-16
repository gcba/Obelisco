// Base
import React from 'react';
import './Form.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Configuración general del componente
export default {
  title: 'Formulario|Archivo',
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

SubirUnArchivo.story = {
  name: 'Subir un archivo'
};
