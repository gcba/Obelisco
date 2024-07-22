// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';
import { Collapse } from '.';

// Configuración general del componente
export default {
  title: 'Componentes|Colapsable/Contenido',
  decorators: [withA11y]
};

const COLLAPSE_DESCRIPTION =
  'Esta es la descripción que se encuentra dentro de un colapsable. Recomendamos no utilizar demasiado texto, para generar una lectura óptima.';

const CollapseContent = (): JSX.Element => (
  <div className="card-body">
    <span>Item de lista</span>
    <small>Descripción</small>
    <hr />
    <span>Item de lista</span>
    <small>Descripción</small>
    <hr />
    <span>Item de lista</span>
    <small>Descripción</small>
  </div>
);

const CollapseForm = (): JSX.Element => (
  <form className="card-body">
    <label className="card-details" htmlFor="visa">
      <i className="bx bxl-visa"></i>
      <div className="card-details-content">
        <span>Visa Débito ****1234</span>
        <small>Heraldo Paez</small>
      </div>
      <input type="radio" className="form-radio" name="credit_card" id="visa" />
    </label>
    <hr />
    <label className="card-details" htmlFor="master">
      <i className="bx bxl-mastercard"></i>
      <div className="card-details-content">
        <span>MasterCard Crédito ****5678</span>
        <small>Heraldo Paez</small>
      </div>
      <input type="radio" className="form-radio" name="credit_card" id="master" />
    </label>
  </form>
);

const CollapseFormWhite = (): JSX.Element => (
  <form className="card-body">
    <label className="card-details" htmlFor="visa_white">
      <img src="collapse/icon-visa.svg" alt="Ícono de Visa" className="collapse-img-icon" />
      <div className="card-details-content">
        <span>Visa Débito ****1234</span>
        <small>Heraldo Paez</small>
      </div>
      <input type="radio" className="form-radio" name="credit_card" id="visa_white" />
    </label>
    <hr />
    <label className="card-details" htmlFor="master_white">
      <img src="collapse/icon-mastercard.svg" alt="Ícono de Mastercard" className="collapse-img-icon" />
      <div className="card-details-content">
        <span>MasterCard Crédito ****5678</span>
        <small>Heraldo Paez</small>
      </div>
      <input type="radio" className="form-radio" name="credit_card" id="master_white" />
    </label>
  </form>
);

export const CollapseText = (): JSX.Element => {
  return (
    <div className="storybook__container-accordion">
      <div className="accordion">
        <Collapse description={COLLAPSE_DESCRIPTION} identifier="collapseOne" isOnlySelect={true}>
          <span className="collapse-title">¿Cómo pago mi trámite?</span>
          <span className="collapse-subtitle">Conocé los medios de pago aceptados por el GCBA.</span>
        </Collapse>
      </div>

      <br />

      <div className="accordion accordion-white">
        <Collapse description={COLLAPSE_DESCRIPTION} identifier="collapseFour" isOnlySelect={true}>
          <span className="collapse-title">¿Cómo pago mi trámite?</span>
          <span className="collapse-subtitle">Conocé los medios de pago aceptados por el GCBA.</span>
        </Collapse>
      </div>
    </div>
  );
};
CollapseText.story = { name: 'Con texto' };

export const CollapseList = (): JSX.Element => {
  return (
    <div className="storybook__container-accordion">
      <div className="accordion">
        <Collapse identifier="collapseOne" content={<CollapseContent />}>
          <span className="collapse-label">Volanta</span>
          <span className="collapse-title">Título</span>
        </Collapse>
      </div>

      <br />

      <div className="accordion accordion-white">
        <Collapse identifier="collapseOneWhite" content={<CollapseContent />}>
          <span className="collapse-label">Volanta</span>
          <span className="collapse-title">Título</span>
        </Collapse>
      </div>
    </div>
  );
};

CollapseList.story = { name: 'Con lista' };

export const CollapseListForm = (): JSX.Element => {
  return (
    <div className="storybook__container-accordion">
      <div className="accordion">
        <Collapse identifier="collapseOne" content={<CollapseForm />}>
          <span className="collapse-label">Forma de pago</span>
          <span className="collapse-title">Tarjeta de crédito / débito </span>
          <span className="collapse-subtitle">VISA, MasterCard, AMEX, CABAL, Maestro</span>
        </Collapse>
      </div>

      <br />

      <div className="accordion accordion-white">
        <Collapse identifier="collapseOneWhite" content={<CollapseFormWhite />}>
          <span className="collapse-label">Forma de pago</span>
          <span className="collapse-title">Tarjeta de crédito / débito </span>
          <span className="collapse-subtitle">VISA, MasterCard, AMEX, CABAL, Maestro</span>
        </Collapse>
      </div>
    </div>
  );
};
CollapseListForm.story = { name: 'Con lista seleccionable' };
