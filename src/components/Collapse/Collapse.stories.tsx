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

const COLLAPSE_DESCRIPTION =
  'Esta es la descripción que se encuentra dentro de un colapsable. Recomendamos no utilizar demasiado texto, para generar una lectura óptima.';

export const CollapseUniqueSelection = (): JSX.Element => {
  return (
    <div className="storybook__container-accordion">
      <div className="accordion" id="accordionExample">
        <Collapse
          description={COLLAPSE_DESCRIPTION}
          identifier="collapseOne"
          isOnlySelect={true}
          dataParent="#accordionExample">
          Título
        </Collapse>
        <Collapse
          description={COLLAPSE_DESCRIPTION}
          identifier="collapseTwo"
          isOnlySelect={true}
          dataParent="#accordionExample">
          Título
        </Collapse>
        <Collapse
          description={COLLAPSE_DESCRIPTION}
          identifier="collapseThree"
          isOnlySelect={true}
          dataParent="#accordionExample">
          Título
        </Collapse>
      </div>

      <br />

      <div className="accordion accordion-white" id="accordionExampleTwo">
        <Collapse
          description={COLLAPSE_DESCRIPTION}
          identifier="collapseFour"
          isOnlySelect={true}
          dataParent="#accordionExampleTwo">
          Título
        </Collapse>
        <Collapse
          description={COLLAPSE_DESCRIPTION}
          identifier="collapseFive"
          isOnlySelect={true}
          dataParent="#accordionExampleTwo">
          Título
        </Collapse>
        <Collapse
          description={COLLAPSE_DESCRIPTION}
          identifier="collapseSix"
          isOnlySelect={true}
          dataParent="#accordionExampleTwo">
          Título
        </Collapse>
      </div>
    </div>
  );
};

CollapseUniqueSelection.story = { name: 'Selección única' };

export const CollapseMultipleSelection = (): JSX.Element => {
  return (
    <div className="storybook__container-accordion">
      <div className="accordion">
        <Collapse description={COLLAPSE_DESCRIPTION} identifier="collapseOne">
          Título
        </Collapse>
        <Collapse description={COLLAPSE_DESCRIPTION} identifier="collapseTwo">
          Título
        </Collapse>
        <Collapse description={COLLAPSE_DESCRIPTION} identifier="collapseThree">
          Título
        </Collapse>
      </div>

      <br />

      <div className="accordion accordion-white">
        <Collapse description={COLLAPSE_DESCRIPTION} identifier="collapseOneWhite">
          Título
        </Collapse>
        <Collapse description={COLLAPSE_DESCRIPTION} identifier="collapseTwoWhite">
          Título
        </Collapse>
        <Collapse description={COLLAPSE_DESCRIPTION} identifier="collapseThreeWhite">
          Título
        </Collapse>
      </div>
    </div>
  );
};

CollapseMultipleSelection.story = { name: 'Selección múltiple' };

const CollapseContent = (): JSX.Element => (
  <div className="card-body">
    <small className="text-success">$200,00</small>
    <span>Solicitud de informes varios</span>
    <small>Boleta N° 2549-48758798</small>
    <hr />
    <small className="text-success">$250,00</small>
    <span>Ecoparque</span>
    <small>Boleta N° 2549-48758798</small>
  </div>
);

export const CollapseInformation = (): JSX.Element => {
  return (
    <div className="storybook__container-accordion">
      <div className="accordion">
        <Collapse identifier="collapseOne" content={<CollapseContent />}>
          <span className="collapse-label">Total a pagar</span>
          <span className="collapse-title">$450,00</span>
        </Collapse>
      </div>

      <br />

      <div className="accordion accordion-white">
        <Collapse identifier="collapseOneWhite" content={<CollapseContent />}>
          <span className="collapse-label">Total a pagar</span>
          <span className="collapse-title">$450,00</span>
        </Collapse>
      </div>
    </div>
  );
};

CollapseInformation.story = { name: 'Con información' };

export const CollapseIcon = (): JSX.Element => {
  return (
    <div className="storybook__container-accordion">
      <div className="accordion">
        <Collapse description={COLLAPSE_DESCRIPTION} identifier="collapseOne">
          <i className="bx bxs-user-circle"></i>
          <span className="collapse-title">Título</span>
        </Collapse>
      </div>

      <br />

      <div className="accordion accordion-white">
        <Collapse description={COLLAPSE_DESCRIPTION} identifier="collapseOneWhite">
          <i className="bx bxs-user-circle"></i>
          <span className="collapse-title">Título</span>
        </Collapse>
      </div>
    </div>
  );
};

CollapseIcon.story = { name: 'Con ícono' };

export const CollapsableLabelIcon = (): JSX.Element => {
  return (
    <div className="storybook__container-accordion">
      <div className="accordion">
        <Collapse description={COLLAPSE_DESCRIPTION} identifier="collapseOne">
          <i className="bx bxs-user-circle"></i>
          <span className="collapse-label">Volanta</span>
          <span className="collapse-title">Título</span>
          <span className="collapse-subtitle">Descripción</span>
        </Collapse>
      </div>

      <br />

      <div className="accordion accordion-white">
        <Collapse description={COLLAPSE_DESCRIPTION} identifier="collapseOneWhite">
          <i className="bx bxs-user-circle"></i>
          <span className="collapse-label">Volanta</span>
          <span className="collapse-title">Título</span>
          <span className="collapse-subtitle">Descripción</span>
        </Collapse>
      </div>
    </div>
  );
};

CollapsableLabelIcon.story = { name: 'Con volanta y descripción' };

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
      <i className="bx bxl-visa"></i>
      <div className="card-details-content">
        <span>Visa Débito ****1234</span>
        <small>Heraldo Paez</small>
      </div>
      <input type="radio" className="form-radio" name="credit_card" id="visa_white" />
    </label>
    <hr />
    <label className="card-details" htmlFor="master_white">
      <i className="bx bxl-mastercard"></i>
      <div className="card-details-content">
        <span>MasterCard Crédito ****5678</span>
        <small>Heraldo Paez</small>
      </div>
      <input type="radio" className="form-radio" name="credit_card" id="master_white" />
    </label>
  </form>
);

export const CollapseList = (): JSX.Element => {
  return (
    <div className="storybook__container-accordion">
      <div className="accordion">
        <Collapse identifier="collapseOne" content={<CollapseForm />}>
          <span className="collapse-title">Tarjeta de crédito / débito </span>
          <span className="collapse-subtitle">VISA, MasterCard, AMEX, CABAL, Maestro</span>
        </Collapse>
      </div>

      <br />

      <div className="accordion accordion-white">
        <Collapse identifier="collapseOneWhite" content={<CollapseFormWhite />}>
          <span className="collapse-title">Tarjeta de crédito / débito </span>
          <span className="collapse-subtitle">VISA, MasterCard, AMEX, CABAL, Maestro</span>
        </Collapse>
      </div>
    </div>
  );
};

CollapseList.story = { name: 'Con lista seleccionable' };
