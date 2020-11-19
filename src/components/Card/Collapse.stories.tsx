// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Configuración del general del componente
export default {
  title: 'Componentes|Acordión',
  decorators: [withA11y]
};

export const VariosElementos = (): JSX.Element => (
  <div className="accordion-wrapper">
    <div className="accordion" id="accordionExample">
      <div className="card">
        <button className="card-header collapsed card-link" data-toggle="collapse" data-target="#collapseOne">
          Colapsable
        </button>
        <div id="collapseOne" className="collapse" data-parent="#accordion">
          <div className="card-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget erat porta, tempor est sed, pharetra
            quam. Aliquam ullamcorper mi non faucibus malesuada. Fusce viverra sit amet ligula tempus consectetur.
            Phasellus fringilla diam et nunc dignissim, at condimentum nulla tincidunt. Mauris consectetur a nibh a
            ultrices.
          </div>
        </div>
      </div>
      <div className="card">
        <button className="card-header collapsed card-link" data-toggle="collapse" data-target="#collapseTwo">
          Colapsable
        </button>
        <div id="collapseTwo" className="collapse" data-parent="#accordion">
          <div className="card-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget erat porta, tempor est sed, pharetra
            quam. Aliquam ullamcorper mi non faucibus malesuada. Fusce viverra sit amet ligula tempus consectetur.
            Phasellus fringilla diam et nunc dignissim, at condimentum nulla tincidunt. Mauris consectetur a nibh a
            ultrices.
          </div>
        </div>
      </div>
      <div className="card">
        <button className="card-header collapsed card-link" data-toggle="collapse" data-target="#collapseThree">
          Colapsable
        </button>
        <div id="collapseThree" className="collapse" data-parent="#accordion">
          <div className="card-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget erat porta, tempor est sed, pharetra
            quam. Aliquam ullamcorper mi non faucibus malesuada. Fusce viverra sit amet ligula tempus consectetur.
            Phasellus fringilla diam et nunc dignissim, at condimentum nulla tincidunt. Mauris consectetur a nibh a
            ultrices.
          </div>
        </div>
      </div>
    </div>
  </div>
);
