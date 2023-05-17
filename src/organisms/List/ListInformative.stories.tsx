// Base
import React from 'react';
import './List.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Config
export default {
  title: 'Organismos|Listas',
  decorators: [withA11y]
};

export const ListaInformativa = (): JSX.Element => {
  return (
    <>
      <div className="lists-wrapper">
        <ul className="list-informative-ul">
          <li>Esta es la información de una línea de la lista</li>
          <li>
            <span className="material-icons-round">done</span>Esta es la información de una línea de la lista
          </li>
          <li>
            <span className="material-icons-round">close</span>Esta es la información de una línea de la lista
          </li>
          <li>Esta es la información de una línea de la lista</li>
          <li>
            <i className="bx bx-check"></i>Esta es la información de una línea de la lista
          </li>
          <li>
            <i className="bx bx-x"></i>Esta es la información de una línea de la lista
          </li>
          <li>Esta es la información de una línea de la lista</li>
        </ul>
        <br />
        <ol className="list-informative-ol">
          <li>Esta es la información de una línea de la lista</li>
          <li>
            <span className="material-icons-round">done</span>Esta es la información de una línea de la lista
          </li>
          <li>
            <span className="material-icons-round">close</span>Esta es la información de una línea de la lista
          </li>
          <li>Esta es la información de una línea de la lista</li>
          <li>
            <i className="bx bx-check"></i>Esta es la información de una línea de la lista
          </li>
          <li>
            <i className="bx bx-x"></i>Esta es la información de una línea de la lista
          </li>
          <li>Esta es la información de una línea de la lista</li>
        </ol>
        <br />
        <ul className="list-informative-ul unstyled">
          <li>Esta es la información de una línea de la lista</li>
          <li>
            <span className="material-icons-round">done</span>Esta es la información de una línea de la lista
          </li>
          <li>
            <span className="material-icons-round">close</span>Esta es la información de una línea de la lista
          </li>
          <li>Esta es la información de una línea de la lista</li>
          <li>
            <i className="bx bx-check"></i>Esta es la información de una línea de la lista
          </li>
          <li>
            <i className="bx bx-x"></i>Esta es la información de una línea de la lista
          </li>
          <li>Esta es la información de una línea de la lista</li>
        </ul>
        <br />
        <ul className="list-informative-ul">
          <li>Esta es la información de una línea de la lista</li>
          <li>
            Esta es la información de una línea de la lista
            <small>Bajada con etiqueta small</small>
          </li>
          <li>Esta es la información de una línea de la lista</li>
          <li>
            Esta es la información de una línea de la lista
            <p>Bajada con etiqueta p</p>
          </li>
          <li>Esta es la información de una línea de la lista</li>
        </ul>
      </div>
    </>
  );
};
