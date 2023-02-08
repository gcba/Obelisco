// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Config
export default {
  title: 'Componentes|Listas',
  decorators: [withA11y]
};

export const ListHeader = (): JSX.Element => {
  return (
    <div className="container">
      <div className="list-header">
        <div className="list-body">
          <i className="bx bxs-file"></i>
          <div className="list-text">
            <h3>Titulo</h3>
            <small>Label</small>
          </div>
        </div>
        <div className="list-actions">
          <button type="button" className="btn btn-secondary btn-sm">
            Botón
          </button>
          <button type="button" className="btn btn-link btn-sm">
            Botón
          </button>
        </div>
      </div>
      <br />
      <br />
      <div className="list-header">
        <div className="list-body">
          <div className="list-text">
            <h3>Titulo</h3>
            <small>Label</small>
          </div>
        </div>
        <div className="list-actions">
          <button type="button" className="btn btn-secondary btn-sm">
            Agregar a tu calendario
          </button>
          <button type="button" className="btn btn-link btn-sm">
            Editar
          </button>
        </div>
      </div>
      <br />
      <br />
      <div className="list-header">
        <div className="list-body">
          <i className="bx bxs-file"></i>
          <div className="list-text">
            <h3>Titulo</h3>
            <small>Label</small>
          </div>
        </div>
        <div className="list-actions list-icon">
          <i className="bx bxs-file"></i>
        </div>
      </div>
    </div>
  );
};

ListHeader.story = { name: 'Encabezado' };
