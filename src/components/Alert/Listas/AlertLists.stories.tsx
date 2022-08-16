// Base
import React from 'react';
import '../Alert.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Config
export default {
  title: 'Componentes|Alerta/Listas',
  decorators: [withA11y]
};

export const List = (): JSX.Element => {
  return (
    <div className="alert-wrapper">
      <div className="alert alert-danger fade show" role="alert">
        <p>
          <strong>Este es un destacado de una alerta (opcional). </strong>
        </p>
        <ol>
          <li>
            <span>Un texto simple para un enlace en una lista de alerta</span>
          </li>

          <li>
            <span>Un texto simple para un enlace en una lista de alerta</span>
          </li>

          <li>
            <span>Un texto simple para un enlace en una lista de alerta</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

List.story = { name: 'Sin enlaces' };

export const ListLinks = (): JSX.Element => {
  return (
    <div className="alert-wrapper">
      <div className="alert alert-danger fade show" role="alert">
        <p>
          <strong>Este es un destacado de una alerta (opcional). </strong>
        </p>
        <ol className="list-links">
          <li>
            <a href="#">Un texto simple para un enlace en una lista de alerta</a>
          </li>

          <li>
            <a href="#">Un texto simple para un enlace en una lista de alerta</a>
          </li>

          <li>
            <a href="#">Un texto simple para un enlace en una lista de alerta</a>
          </li>
        </ol>
      </div>
    </div>
  );
};

ListLinks.story = { name: 'Con enlaces' };
