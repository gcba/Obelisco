// Base
import React from 'react';
import './ProcessSteps.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Configuración general del componente
export default {
  title: 'Componentes|Pasos de trámite',
  decorators: [withA11y]
};

export const ListStepsSizes = (): JSX.Element => (
  <div className="storybook__wrapper-list-step">
    <ul className="list-steps list-steps-lg">
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
    </ul>
    <ul className="list-steps">
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
    </ul>
    <ul className="list-steps list-steps-sm">
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
    </ul>
  </div>
);
ListStepsSizes.story = { name: 'Tamaños' };

export const ListStepsLight = (): JSX.Element => (
  <div className="storybook__wrapper-list-step">
    <ul className="list-steps list-steps-lg list-steps-light">
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
    </ul>
    <ul className="list-steps list-steps-light">
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
    </ul>
    <ul className="list-steps list-steps-sm list-steps-light">
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
    </ul>
  </div>
);
ListStepsLight.story = { name: 'Sin relleno' };

export const ListStepsNumbers = (): JSX.Element => (
  <div className="storybook__wrapper-list-step">
    <ul className="list-steps list-steps-numbers">
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
    </ul>
    <ul className="list-steps list-steps-numbers list-steps-light">
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
    </ul>
  </div>
);
ListStepsNumbers.story = { name: 'Con números' };

export const ListStepsComplete = (): JSX.Element => (
  <div className="storybook__wrapper-list-step">
    <ul className="list-steps list-steps-numbers">
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
      <li className="list-steps-item list-steps-item-light">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
      <li className="list-steps-item list-steps-item-light">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
      <li className="list-steps-item list-steps-item-light">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
    </ul>
  </div>
);
ListStepsComplete.story = { name: 'Con pasos completados' };
/* 
export const PasosGrandes = (): JSX.Element => (
  <>
    <ul className="list-steps list-steps-lg">
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
    </ul>
    <ul className="list-steps list-steps-lg list-steps-light">
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
    </ul>
    <ul className="list-steps list-steps-lg list-steps-numbers">
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
    </ul>
    <ul className="list-steps list-steps-lg list-steps-light list-steps-numbers">
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
    </ul>
  </>
);

export const Pasos = (): JSX.Element => (
  <>
    <ul className="list-steps">
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
    </ul>
    <ul className="list-steps list-steps-light">
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
    </ul>
    <ul className="list-steps list-steps-numbers">
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
    </ul>
    <ul className="list-steps list-steps-light list-steps-numbers">
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
    </ul>
  </>
);

export const PasosChicos = (): JSX.Element => (
  <>
    <ul className="list-steps list-steps-sm">
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
    </ul>
    <ul className="list-steps list-steps-sm list-steps-light">
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
    </ul>
    <ul className="list-steps list-steps-sm list-steps-numbers">
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
    </ul>
    <ul className="list-steps list-steps-sm list-steps-light list-steps-numbers">
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
      <li className="list-steps-item">
        <h4>Esta es la información destacada de la lista</h4>
        <p>Esta es la descripción informativa de una lista</p>
      </li>
    </ul>
  </>
); */
