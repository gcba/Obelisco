// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';
import { Collapse } from '.';

// Configuración general del componente
export default {
  title: 'Componentes|Colapsable',
  decorators: [withA11y]
};

export const CollapseUniqueSelection = (): JSX.Element => (
  <div id="accordion">
    <div className="accordion-wrapper">
      <div className="accordion" id="accordionExample">
        <Collapse
          description="Esta es la descripción que se encuentra dentro de un colapsable. Esta es la descripción que se encuentra dentro de un colapsable."
          identifier="collapseOne">
          Título
        </Collapse>
        <Collapse
          description="Esta es la descripción que se encuentra dentro de un colapsable. Esta es la descripción que se encuentra dentro de un colapsable."
          identifier="collapseTwo">
          Título
        </Collapse>
        <Collapse
          description="Esta es la descripción que se encuentra dentro de un colapsable. Esta es la descripción que se encuentra dentro de un colapsable."
          identifier="collapseThree">
          Título
        </Collapse>
      </div>
    </div>
  </div>
);

CollapseUniqueSelection.story = { name: 'Selección única' };

export const CollapseMultipleSelection = (): JSX.Element => (
  <div className="accordion-wrapper">
    <div className="accordion" id="accordionExample">
      <Collapse
        description="Esta es la descripción que se encuentra dentro de un colapsable. Esta es la descripción que se encuentra dentro de un colapsable."
        identifier="collapseOne">
        Título
      </Collapse>
      <Collapse
        description="Esta es la descripción que se encuentra dentro de un colapsable. Esta es la descripción que se encuentra dentro de un colapsable."
        identifier="collapseTwo">
        Título
      </Collapse>
      <Collapse
        description="Esta es la descripción que se encuentra dentro de un colapsable. Esta es la descripción que se encuentra dentro de un colapsable."
        identifier="collapseThree">
        Título
      </Collapse>
    </div>
  </div>
);

CollapseMultipleSelection.story = { name: 'Selección múltiple' };

const CollapseContent = (): JSX.Element => (
  <div className="card-body">
    <small className="text-success">$200,00</small>
    <h5 className="mb-0">Solicitud de informes varios</h5>
    <small>Boleta N° 2549-48758798</small>
    <hr />
    <small className="text-success">$250,00</small>
    <h5 className="mb-0">Ecoparque</h5>
    <small>Boleta N° 2549-48758798</small>
  </div>
);

export const CollapseInformation = (): JSX.Element => (
  <div className="accordion-wrapper">
    <div className="accordion" id="accordionExample">
      <Collapse identifier="collapseOne" content={<CollapseContent />}>
        <span className="collapse-label">Total a pagar</span>
        <h4 className="collapse-title">$450,00</h4>
      </Collapse>
    </div>
  </div>
);

CollapseInformation.story = { name: 'Con información' };

export const CollapseIcon = (): JSX.Element => (
  <div id="accordion">
    <div className="accordion-wrapper">
      <div className="accordion" id="accordionExample">
        <Collapse
          description="Esta es la descripción que se encuentra dentro de un colapsable. Esta es la descripción que se encuentra dentro de un colapsable."
          identifier="collapseOne">
          <i className="bx bxs-user-circle"></i> Título
        </Collapse>
      </div>
    </div>
  </div>
);

CollapseIcon.story = { name: 'Con ícono' };

export const CollapsableLabelIcon = (): JSX.Element => (
  <div id="accordion">
    <div className="accordion-wrapper">
      <div className="accordion" id="accordionExample">
        <Collapse
          description="Esta es la descripción que se encuentra dentro de un colapsable. Esta es la descripción que se encuentra dentro de un colapsable."
          identifier="collapseOne">
          <i className="bx bxs-user-circle"></i>
          <span className="collapse-label">Volanta</span>
          <h4 className="collapse-title">Título</h4>
          <span className="collapse-subtitle">Descripción</span>
        </Collapse>
      </div>
    </div>
  </div>
);

CollapsableLabelIcon.story = { name: 'Con volanta y descripción' };

const CollapseForm = (): JSX.Element => (
  <form className="card-body">
    <label className="card-details" htmlFor="visa">
      <i className="bx bxl-visa"></i>
      <div className="card-details-content">
        <h5>Visa Débito ****1234</h5>
        <small>Heraldo Paez</small>
      </div>
      <input type="radio" className="form-radio" name="credit_card" id="visa" />
    </label>
    <hr />
    <label className="card-details" htmlFor="master">
      <i className="bx bxl-mastercard"></i>
      <div className="card-details-content">
        <h5>MasterCard Crédito ****5678</h5>
        <small>Heraldo Paez</small>
      </div>
      <input type="radio" className="form-radio" name="credit_card" id="master" />
    </label>
    <hr />
    <label className="card-details" htmlFor="new_card">
      <span className="material-icons-round">info</span>
      <div className="card-details-content">
        <h5>Nueva tarjeta de crédito</h5>
      </div>
      <input type="radio" className="form-radio" name="credit_card" id="new_card" />
    </label>
  </form>
);

export const CollapseList = (): JSX.Element => (
  <div className="accordion-wrapper">
    <div className="accordion" id="accordionListExample">
      <Collapse identifier="collapseOne" content={<CollapseForm />}>
        <h4 className="collapse-title">Tarjeta de crédito / débito </h4>
        <span className="collapse-subtitle">VISA, MasterCard, AMEX, CABAL, Maestro</span>
      </Collapse>
    </div>
  </div>
);

CollapseList.story = { name: 'Con lista seleccionable' };
