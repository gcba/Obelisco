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
    <h4 className="mb-0">Solicitud de informes varios</h4>
    <small>Boleta N° 2549-48758798</small>
    <hr />
    <small className="text-success">$250,00</small>
    <h4 className="mb-0">Ecoparque</h4>
    <small>Boleta N° 2549-48758798</small>
  </div>
);

export const CollapseInformation = (): JSX.Element => (
  <div className="accordion-wrapper">
    <div className="accordion" id="accordionExample">
      <Collapse identifier="collapseOne" content={<CollapseContent />}>
        <span className="collapse-label">Total a pagar</span>
        <h3 className="collapse-title">$450,00</h3>
      </Collapse>
    </div>
  </div>
);

CollapseInformation.story = { name: 'Selección con información' };

export const CollapseIcon = (): JSX.Element => (
  <div id="accordion">
    <div className="accordion-wrapper">
      <div className="accordion" id="accordionExample">
        <Collapse
          description="Esta es la descripción que se encuentra dentro de un colapsable. Esta es la descripción que se encuentra dentro de un colapsable."
          identifier="collapseOne">
          <i className="bx bx-sm align-top mr-1 bxs-user-circle"></i> Título
        </Collapse>
      </div>
    </div>
  </div>
);

CollapseIcon.story = { name: 'Selección con ícono' };

export const CollapsableLabelIcon = (): JSX.Element => (
  <div id="accordion">
    <div className="accordion-wrapper">
      <div className="accordion" id="accordionExample">
        <Collapse
          description="Esta es la descripción que se encuentra dentro de un colapsable. Esta es la descripción que se encuentra dentro de un colapsable."
          identifier="collapseOne">
          <i className="bx bx-sm align-top mr-1 bxs-user-circle"></i>
          <span className="collapse-label">Label</span>
          <h3 className="collapse-title">Título</h3>
          <span className="collapse-subtitle">Descripción</span>
        </Collapse>
      </div>
    </div>
  </div>
);

CollapsableLabelIcon.story = { name: 'Selección con label y descripción' };

const CollapseForm = (): JSX.Element => (
  <form className="card-body">
    <label className="card-details" htmlFor="visa">
      <i className="bx bxl-visa"></i>
      <div className="card-details-content">
        <h4>Visa Débito ****1234</h4>
        <small>Heraldo Paez</small>
      </div>
      <input type="radio" className="form-radio" name="credit_card" id="visa" />
    </label>
    <hr />
    <label className="card-details" htmlFor="master">
      <i className="bx bxl-mastercard"></i>
      <div className="card-details-content">
        <h4>MasterCard Crédito ****5678</h4>
        <small>Heraldo Paez</small>
      </div>
      <input type="radio" className="form-radio" name="credit_card" id="master" />
    </label>
    <hr />
    <label className="card-details" htmlFor="new_card">
      <span className="material-icons-round">info</span>
      <div className="card-details-content">
        <h4>Nueva tarjeta de crédito</h4>
      </div>
      <input type="radio" className="form-radio" name="credit_card" id="new_card" />
    </label>
  </form>
);

export const CollapseList = (): JSX.Element => (
  <div className="accordion-wrapper">
    <div className="accordion" id="accordionListExample">
      <Collapse identifier="collapseOne" content={<CollapseForm />}>
        <h3 className="collapse-title">Tarjeta de crédito / débito </h3>
        <span className="collapse-subtitle">VISA, MasterCard, AMEX, CABAL, Maestro</span>
      </Collapse>
    </div>
  </div>
);

CollapseList.story = { name: 'Colapsable lista' };
