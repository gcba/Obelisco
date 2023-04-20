// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Configuración general del componente
export default {
  title: 'Componentes|Colapsable',
  decorators: [withA11y]
};

export const UniqueSelection = (): JSX.Element => (
  <div id="accordion">
    <div className="accordion-wrapper">
      <div className="accordion" id="accordionExample">
        <div className="card">
          <button className="card-header collapsed card-link" data-toggle="collapse" data-target="#collapseOne">
            Título
          </button>
          <div id="collapseOne" className="collapse" data-parent="#accordion">
            <div className="card-body">
              Esta es la descripción que se encuentra dentro de un colapsable. Esta es la descripción que se encuentra
              dentro de un colapsable.
            </div>
          </div>
        </div>
        <div className="card">
          <button className="card-header collapsed card-link" data-toggle="collapse" data-target="#collapseTwo">
            Título
          </button>
          <div id="collapseTwo" className="collapse" data-parent="#accordion">
            <div className="card-body">
              Esta es la descripción que se encuentra dentro de un colapsable. Esta es la descripción que se encuentra
              dentro de un colapsable.
            </div>
          </div>
        </div>
        <div className="card">
          <button className="card-header collapsed card-link" data-toggle="collapse" data-target="#collapseThree">
            Título
          </button>
          <div id="collapseThree" className="collapse" data-parent="#accordion">
            <div className="card-body">
              Esta es la descripción que se encuentra dentro de un colapsable. Esta es la descripción que se encuentra
              dentro de un colapsable.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

UniqueSelection.story = { name: 'Selección única' };

export const MultipleSelection = (): JSX.Element => (
  <div className="accordion-wrapper">
    <div className="accordion" id="accordionExample">
      <div className="card">
        <button className="card-header collapsed card-link" data-toggle="collapse" data-target="#collapseFour">
          Título
        </button>
        <div id="collapseFour" className="collapse" data-parent="#accordion">
          <div className="card-body">
            Esta es la descripción que se encuentra dentro de un colapsable. Esta es la descripción que se encuentra
            dentro de un colapsable.
          </div>
        </div>
      </div>
      <div className="card">
        <button className="card-header collapsed card-link" data-toggle="collapse" data-target="#collapseFive">
          Título
        </button>
        <div id="collapseFive" className="collapse" data-parent="#accordion">
          <div className="card-body">
            Esta es la descripción que se encuentra dentro de un colapsable. Esta es la descripción que se encuentra
            dentro de un colapsable.
          </div>
        </div>
      </div>
      <div className="card">
        <button className="card-header collapsed card-link" data-toggle="collapse" data-target="#collapseSix">
          Título
        </button>
        <div id="collapseSix" className="collapse" data-parent="#accordion">
          <div className="card-body">
            Esta es la descripción que se encuentra dentro de un colapsable. Esta es la descripción que se encuentra
            dentro de un colapsable.
          </div>
        </div>
      </div>
    </div>
  </div>
);

MultipleSelection.story = { name: 'Selección múltiple' };

export const SelectionInformation = (): JSX.Element => (
  <div className="accordion-wrapper">
    <div className="accordion" id="accordionExample">
      <div className="card">
        <button
          className="card-header collapsed card-link card-info"
          data-toggle="collapse"
          data-target="#collapseFive">
          <span className="collpase-title">Total: </span> <br />
          <span className="collpase-subtitle">$ 450,00</span>
        </button>
        <div id="collapseFive" className="collapse" data-parent="#accordion">
          <div className="card-body">
            <small className="text-success">$200,00</small>
            <h4 className="mb-0">Solicitud de informes varios</h4>
            <small>Boleta N° 2549-48758798</small>
            <hr />
            <small className="text-success">$250,00</small>
            <h4 className="mb-0">Ecoparque</h4>
            <small>Boleta N° 2549-48758798</small>
          </div>
        </div>
      </div>
    </div>
  </div>
);

SelectionInformation.story = { name: 'Selección con información' };

export const SelectionIcon = (): JSX.Element => (
  <div id="accordion">
    <div className="accordion-wrapper">
      <div className="accordion" id="accordionExample">
        <div className="card">
          <button
            type="button"
            className="card-header collapsed card-link"
            data-toggle="collapse"
            data-target="#collapseEight">
            <i className="bx bx-sm align-top mr-1 bxs-user-circle"></i>
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

SelectionIcon.story = { name: 'Selección con ícono' };

export const CollapseList = (): JSX.Element => (
  <div className="" style={{ width: '750px' }}>
    <div className="accordion" id="accordionListExample">
      <div className="card">
        <button
          type="button"
          className="card-header collapsed card-link card-info"
          data-toggle="collapse"
          data-target="#collapseEight">
          <span className="collpase-title">Tarjeta de crédito / débito </span>
          <br />
          <span className="collpase-subtitle">VISA, MasterCard, AMEX, CABAL, Maestro</span>
        </button>
        <div id="collapseEight" className="collapse" data-parent="#accordion">
          <form className="card-body">
            <div className="card-details">
              <i className="bx bxl-visa"></i>
              <div className="card-details-content">
                <h4>Visa Débito ****1234</h4>
                <small>Heraldo Paez</small>
              </div>
              <input type="radio" className="form-radio" name="credit_card" id="visa" />
            </div>
            <hr />
            <div className="card-details">
              <i className="bx bxl-mastercard"></i>
              <div className="card-details-content">
                <h4>MasterCard Crédito ****5678</h4>
                <small>Heraldo Paez</small>
              </div>
              <input type="radio" className="form-radio" name="credit_card" id="master" />
            </div>
            <hr />
            <div className="card-details">
              <span className="material-icons-round">info</span>
              <div className="card-details-content">
                <h4>Nueva tarjeta de crédito</h4>
              </div>
              <input type="radio" className="form-radio" name="credit_card" id="new_card" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);

CollapseList.story = { name: 'Colapsable lista' };
