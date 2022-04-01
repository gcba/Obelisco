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

export const ConInformacion = (): JSX.Element => (
  <div className="accordion-wrapper">
    <div className="accordion" id="accordionExample">
      <div className="card">
        <button
          className="card-header collapsed card-link card-info"
          data-toggle="collapse"
          data-target="#collapseFive">
          <span className="collpase-title">Total: </span> <br />
          <span className="collpase-subtitle">$ 450</span>
        </button>
        <div id="collapseFive" className="collapse" data-parent="#accordion">
          <div className="card-body">
            <small>BOLETA N° 2564-59879543</small>
            <h4 className="mb-0">Solicitud de informes varios</h4>
            <small>$ 450</small>
            <hr />
            <small>BOLETA N° 2564-59879543</small>
            <h4 className="mb-0">Solicitud de informes varios</h4>
            <small>$ 450</small>
          </div>
        </div>
      </div>
    </div>
  </div>
);
ConInformacion.story = { name: 'Con Información' };

export const ConIcono = (): JSX.Element => (
  <div id="accordion">
    <div className="accordion-wrapper">
      <div className="accordion" id="accordionExample">
        <div className="card">
          <button className="card-header collapsed card-link accordion-card-icon" data-toggle="collapse" data-target="#collapseEight">
            Colapsable
          </button>
          <div id="collapseEight" className="collapse" data-parent="#accordion">
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
