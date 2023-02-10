// Base
import React from 'react';
import './List.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Config
export default {
  title: 'Componentes|Listas',
  decorators: [withA11y]
};

export const PasosDeTramite = (): JSX.Element => {
  return (
    <>
      <div className="lists-wrapper">
        <ul className="list-steps">
          <li className="list-steps-item">
            <h5>Esta es la información destacada de la lista</h5>
            <p>Esta es la descripción informativa de una lista </p>
          </li>

          <li className="list-steps-item">
            <h5>Esta es la información destacada de la lista</h5>
            <p>Esta es la descripción informativa de una lista </p>
          </li>

          <li className="list-steps-item">
            <h5>Esta es la información destacada de la lista</h5>
            <p>Esta es la descripción informativa de una lista </p>
          </li>
        </ul>
      </div>
      <div className="lists-wrapper">
        <ul className="list-steps list-steps-information">
          <li className="list-steps-item">
            <h5>Esta es la información destacada de la lista</h5>
            <p>Esta es la descripción informativa de una lista </p>
          </li>

          <li className="list-steps-item">
            <h5>Esta es la información destacada de la lista</h5>
            <p>Esta es la descripción informativa de una lista </p>
          </li>

          <li className="list-steps-item">
            <h5>Esta es la información destacada de la lista</h5>
            <p>Esta es la descripción informativa de una lista </p>
          </li>
        </ul>
      </div>
      <div className="lists-wrapper">
        <ul className="list-steps list-steps-success">
          <li className="list-steps-item">
            <h5>Esta es la información destacada de la lista</h5>
            <p>Esta es la descripción informativa de una lista </p>
          </li>

          <li className="list-steps-item">
            <h5>Esta es la información destacada de la lista</h5>
            <p>Esta es la descripción informativa de una lista </p>
          </li>

          <li className="list-steps-item">
            <h5>Esta es la información destacada de la lista</h5>
            <p>Esta es la descripción informativa de una lista </p>
          </li>
        </ul>
      </div>
    </>
  );
};
PasosDeTramite.story = { name: 'Pasos de trámite' };

export const PasosDeTramiteConAccesos = (): JSX.Element => {
  return (
    <>
      <div className="lists-wrapper">
        <div className="list-steps-list-group ">
          <a href="#" className="list-group-item">
            <span className="access-title">
              <span className="material-icons-round access-title-icon text-success">check_circle</span>
              Operación terminada con éxito.
            </span>
          </a>
          <a href="#" className="list-group-item">
            <span className="access-title">
              <span className="material-icons-round access-title-icon text-info">pending</span>
              Operación en progreso
            </span>
          </a>
          <a href="#" className="list-group-item disabled">
            <span className="access-title">
              <span className="material-icons-round access-title-icon">watch_later</span>
              Operación deshabilitada
            </span>
          </a>
        </div>
      </div>
    </>
  );
};
PasosDeTramiteConAccesos.story = { name: 'Pasos de trámite con accesos' };
