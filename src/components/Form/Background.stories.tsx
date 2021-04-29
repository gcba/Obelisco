// Base
import React from 'react';
import './Form.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components

// Config
export default {
  title: 'Componentes|Formulario/Con fondo',
  decorators: [withA11y]
};

export const Texto = (): JSX.Element => {
  return (
    <div className="form-wrapper bg-light p-4">
      <div className="form-group">
        <label htmlFor="name-input">Nombre</label>
        <input type="text" className="form-control" id="name-input" name="name" placeholder="Ejemplo: Camila" />
      </div>
    </div>
  );
};

export const ListaDeSeleccion = (): JSX.Element => {
  return (
    <div className="form-wrapper bg-light p-4">
      <div className="form-group">
        <label htmlFor="lista-de-seleccion">Example select</label>
        <select className="custom-select" id="lista-de-seleccion">
          <option>1</option>
          <option>2</option>
        </select>
      </div>
    </div>
  );
};
ListaDeSeleccion.story = { name: 'Lista de selección' };

export const BloqueDeTexto = (): JSX.Element => {
  return (
    <div className="form-wrapper bg-light p-4">
      <div className="form-group">
        <label htmlFor="text-area">Bloque de texto</label>
        <textarea className="form-control" id="text-area" rows={3}></textarea>
      </div>
    </div>
  );
};

export const CasillaDeSeleccion = (): JSX.Element => {
  return (
    <div className="form-wrapper bg-light p-4">
      <div className="custom-control custom-checkbox">
        <input
          className="custom-control-input"
          type="checkbox"
          id="terms-and-conditions"
          name="terms-and-conditions"
          value="true"
        />
        <label className="custom-control-label" htmlFor="terms-and-conditions">
          Acepto los <a href="#">términos y condiciones</a>
        </label>
      </div>
    </div>
  );
};
