// Base
import React from 'react';
import './ListInformative.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Config
export default {
  title: 'Componentes|Listas/Lista informativa',
  decorators: [withA11y]
};

export const ListInformativeBullet = (): JSX.Element => {
  return (
    <div className="storybook__container-list-informative">
      <div className="list-informative">
        <h3 className="list-informative-subtitle">Este es el subtítulo de una lista general</h3>
        <ul className="list-informative-bullet">
          <li>Este es el contenido de un ítem de una lista general.</li>
          <li>Este es el contenido de un ítem de una lista general.</li>
          <li>Este es el contenido de un ítem de una lista general.</li>
          <li>Este es el contenido de un ítem de una lista general.</li>
          <li>Este es el contenido de un ítem de una lista general.</li>
          <li>Este es el contenido de un ítem de una lista general.</li>
          <li>Este es el contenido de un ítem de una lista general.</li>
        </ul>
      </div>
    </div>
  );
};
ListInformativeBullet.story = { name: 'Con viñeta' };

export const ListInformativeCheck = (): JSX.Element => {
  return (
    <div className="storybook__container-list-informative">
      <div className="list-informative">
        <h3 className="list-informative-subtitle">Este es el subtítulo de una lista de requisitos</h3>
        <ul className="list-informative-check">
          <li>Este es el contenido de un ítem de una lista de requisitos.</li>
          <li>Este es el contenido de un ítem de una lista de requisitos.</li>
          <li>Este es el contenido de un ítem de una lista de requisitos.</li>
          <li>Este es el contenido de un ítem de una lista de requisitos.</li>
          <li>Este es el contenido de un ítem de una lista de requisitos.</li>
          <li>Este es el contenido de un ítem de una lista de requisitos.</li>
          <li>Este es el contenido de un ítem de una lista de requisitos.</li>
        </ul>
      </div>
    </div>
  );
};
ListInformativeCheck.story = { name: 'Con check' };

/* export const ListaInformativa = (): JSX.Element => {
  return (
    <>
      <div className=".storybook__wrapper-list-informative">
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
}; */
