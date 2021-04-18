// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Configuración del general del componente
export default {
  title: 'Componentes|Colapsable',
  decorators: [withA11y]
};

export const SeleccionUnica = (): JSX.Element => (
  <div id="accordion">
    <div className="accordion-wrapper">
      <div className="accordion" id="accordionExample">
        <div className="card">
          <button className="card-header collapsed card-link" data-toggle="collapse" data-target="#collapseOne">
            Colapsable
          </button>
          <div id="collapseOne" className="collapse" data-parent="#accordion">
            <div className="card-body">
              Este es el área descriptiva de un colapsable de selección única. Una vez que se accione sobre el área de
              títulos, se abrirá el componente mostrando el área descriptiva.
            </div>
          </div>
        </div>
        <div className="card">
          <button className="card-header collapsed card-link" data-toggle="collapse" data-target="#collapseTwo">
            Colapsable
          </button>
          <div id="collapseTwo" className="collapse" data-parent="#accordion">
            <div className="card-body">
              Este es el área descriptiva de un colapsable de selección única. Una vez que se accione sobre el área de
              títulos, se abrirá el componente mostrando el área descriptiva.
            </div>
          </div>
        </div>
        <div className="card">
          <button className="card-header collapsed card-link" data-toggle="collapse" data-target="#collapseThree">
            Colapsable
          </button>
          <div id="collapseThree" className="collapse" data-parent="#accordion">
            <div className="card-body">
              Este es el área descriptiva de un colapsable de selección única. Una vez que se accione sobre el área de
              títulos, se abrirá el componente mostrando el área descriptiva.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
SeleccionUnica.story = { name: 'Selección única' };

export const SeleccionMultiple = (): JSX.Element => (
  <div className="accordion-wrapper">
    <div className="accordion" id="accordionExample">
      <div className="card">
        <button className="card-header collapsed card-link" data-toggle="collapse" data-target="#collapseFour">
          Colapsable
        </button>
        <div id="collapseFour" className="collapse" data-parent="#accordion">
          <div className="card-body">
            Este es el área descriptiva de un colapsable de selección única. Una vez que se accione sobre el área de
            títulos, se abrirá el componente mostrando el área descriptiva.
          </div>
        </div>
      </div>
      <div className="card">
        <button className="card-header collapsed card-link" data-toggle="collapse" data-target="#collapseFive">
          Colapsable
        </button>
        <div id="collapseFive" className="collapse" data-parent="#accordion">
          <div className="card-body">
            Este es el área descriptiva de un colapsable de selección única. Una vez que se accione sobre el área de
            títulos, se abrirá el componente mostrando el área descriptiva.
          </div>
        </div>
      </div>
      <div className="card">
        <button className="card-header collapsed card-link" data-toggle="collapse" data-target="#collapseSix">
          Colapsable
        </button>
        <div id="collapseSix" className="collapse" data-parent="#accordion">
          <div className="card-body">
            Este es el área descriptiva de un colapsable de selección única. Una vez que se accione sobre el área de
            títulos, se abrirá el componente mostrando el área descriptiva.
          </div>
        </div>
      </div>
    </div>
  </div>
);
SeleccionMultiple.story = { name: 'Selección múltiple' };
