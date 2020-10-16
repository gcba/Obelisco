// Base
import React from 'react';
import './Progress.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components

// Config
export default {
  title: 'Componentes|Barra de Progreso',
  decorators: [withA11y]
};

export const Stepper = (): JSX.Element => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <ul className="stepper stepper-horizontal">
            <li className="completed">
              <a href="#!">
                <span className="circle">1</span>                 
                <span className="label">Primer paso</span>             
              </a>             
            </li>
            <li className="completed">
              <a href="#!">
                <span className="circle">2</span>
                <span className="label">Segundo paso</span>
              </a>
            </li>
            <li className="active">
              <a href="#!">
                <span className="circle">3</span>
                <span className="label">Tercer paso</span>
              </a>
            </li>
            <li className="active">
              <a href="#!">
                <span className="circle">4</span>
                <span className="label">Cuarto paso</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
