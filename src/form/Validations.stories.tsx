// Base
import React from 'react';
import './Form.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Configuración general del componente
export default {
  title: 'Formulario|Validación',
  decorators: [withA11y]
};

export const Valido = (): JSX.Element => {
  return (
    <div className="storybook__container-form">
      <div className="form-group">
        <label htmlFor="name-input">Nombre</label>
        <input type="text" className="form-control is-valid" id="name-input" name="name" value="Camila" required />
        <div className="valid-feedback">El nombre es válido.</div>
        <div className="invalid-feedback">Necesitamos tu nombre.</div>
      </div>
    </div>
  );
};

Valido.story = { name: 'Válido' };

export const Invalido = (): JSX.Element => {
  return (
    <div className="storybook__container-form">
      <div className="form-group">
        <label htmlFor="name-input">Nombre</label>
        <input type="text" className="form-control is-invalid" id="name-input" name="name" required />
        <div className="valid-feedback">El nombre es válido.</div>
        <div className="invalid-feedback">Necesitamos tu nombre.</div>
      </div>
    </div>
  );
};

Invalido.story = { name: 'Inválido' };
