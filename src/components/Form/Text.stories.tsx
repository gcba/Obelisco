// Base
import React from 'react';
import './Form.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components

// Config
export default {
  title: 'Componentes|Formulario/Texto',
  decorators: [withA11y]
};

export const Texto = (): JSX.Element => {
  return (
    <div className="form-wrapper">
      <div className="form-group">
        <label htmlFor="name-input">Nombre *</label>
        <input type="text" className="form-control" id="name-input" name="name" placeholder="Ejemplo: Camila" />
      </div>
    </div>
  );
};

export const Numero = (): JSX.Element => {
  return (
    <div className="form-wrapper">
      <div className="form-group">
        <label htmlFor="number-input">Campo numérico *</label>
        <input type="number" className="form-control" id="number-input" name="number" value="30" />
      </div>
    </div>
  );
};
Numero.story = { name: 'Número' };

export const CorreoElectronico = (): JSX.Element => {
  return (
    <div className="form-wrapper">
      <div className="form-group">
        <label htmlFor="email-input">Correo electrónico</label>
        <span id="email-help" className="form-text">
          Nunca lo vamos a compartir con nadie.
        </span>
        <input
          type="email"
          className="form-control"
          id="email-input"
          name="email"
          aria-describedby="email-help"
          placeholder="nombre@ejemplo.com"
        />
      </div>
    </div>
  );
};
CorreoElectronico.story = { name: 'Correo electrónico' };

export const Fecha = (): JSX.Element => {
  return (
    <div className="form-wrapper">
      <div className="form-group">
        <label htmlFor="date-input">Fecha</label>
        <span id="date-help" className="form-text">
          Ingrese una fecha posterior a hoy.
        </span>
        <input type="date" className="form-control" id="date-input" name="date" aria-describedby="date-help" />
      </div>
    </div>
  );
};

export const BloqueDeTexto = (): JSX.Element => {
  return (
    <div className="form-wrapper">
      <div className="form-group">
        <label htmlFor="text-area">Bloque de texto</label>
        <textarea className="form-control" id="text-area" rows={3}></textarea>
      </div>
    </div>
  );
};
BloqueDeTexto.story = { name: 'Bloque de texto' };

export const Deshabilitado = (): JSX.Element => {
  return (
    <div className="form-wrapper">
      <div className="form-group disabled">
        <label htmlFor="name-input">Nombre</label>
        <input type="text" className="form-control" id="name-input" name="name" value="Camila" disabled />
      </div>
    </div>
  );
};
