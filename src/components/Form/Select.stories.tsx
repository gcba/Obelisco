// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components

// Config
export default {
  title: 'Componentes|Formulario/Lista de selección',
  decorators: [withA11y]
};

export const ListaDeSeleccion = (): JSX.Element => {
  return (
    <div className="form-wrapper">
      <div className="form-group">
        <label htmlFor="lista-de-seleccion">Nombre del selector *</label>
        <select className="custom-select" id="lista-de-seleccion">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
    </div>
  );
};
ListaDeSeleccion.story = { name: 'Lista de selección' };

export const Deshabilitado = (): JSX.Element => {
  return (
    <div className="form-wrapper">
      <div className="form-group">
        <label htmlFor="lista-de-seleccion">Nombre del selector *</label>
        <select className="custom-select" id="lista-de-seleccion" disabled>
          <option>1</option>
          <option>2</option>
        </select>
      </div>
    </div>
  );
};

export const Validación = (): JSX.Element => {
  return (
    <div className="form-wrapper">
      <div className="form-group">
        <label htmlFor="lista-de-seleccion">Nombre del selector *</label>
        <select className="custom-select is-valid" id="lista-de-seleccion">
          <option>1</option>
          <option>2</option>
        </select>
        <div className="valid-feedback">La selección es válida.</div>
        <div className="invalid-feedback">Necesitamos que selecciones una opción.</div>
      </div>
    </div>
  );
};
