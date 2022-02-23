import React from 'react';

import { withA11y } from '@storybook/addon-a11y';
import { FormSimpleComponent } from './Form-simple/FormSimple.stories';
import { FormCardValidationComponent } from './Form-card-validation/FormCardValidationComponent.stories';
import { FormCardValidationWithBackground } from './Form-card-validation/FormCardValidationWithBackground.stories';
import { FormSearchComponent } from './Form-search/FormSearch.stories';
import { FormSelectorComponent } from './Form-selector/FormSelector.stories';
import { FormDateComponent } from './Form-date/FormDate.stories';
import { FormTextAreaComponent } from './Form-text-area/FormTextArea.stories';
import { FormRadioButtonComponent } from './Form-radio-button/FormRadioButton.stories';
import { FormCheckboxComponent } from './Form-checkbox/FormCheckbox.stories';
import { FormRadioButtonGroupComponent } from './Form-radio-button/FormRadioButtonGroup.stories';
import { FormCheckboxGroupComponent } from './Form-checkbox/FormCheckboxGroup.stories';
import { FormSelectorNumericComponent } from './Form-selector/FormSelectorNumeric.stories';
import { CustomFormMobile } from './CustomFormMobile.stories';

//config
export default {
  title: 'Componentes|Customize Form',
  decorators: [withA11y]
};

export const FormSimple = (): JSX.Element => {
  return (
    <div>
      <h2>Controles de Formulario</h2>
      <h2 className="mt-5">Campo simple</h2>

      <div className="row">
        <FormSimpleComponent />
      </div>
    </div>
  );
};

export const FormCardValidation = (): JSX.Element => {
  return (
    <div>
      <h2 className="mb-5">Controles de Formulario</h2>

      <FormCardValidationComponent />

      <div className="mt-5">
        <FormCardValidationWithBackground />
      </div>
    </div>
  );
};

export const FormSearch = (): JSX.Element => {
  return (
    <div>
      <h2>Buscador</h2>

      <div className="mt-5">
        <FormSearchComponent />
      </div>
    </div>
  );
};

export const FormSelector = (): JSX.Element => {
  return (
    <div>
      <h2>Selector</h2>
      <div className="mt-5">
        <FormSelectorComponent />
      </div>
    </div>
  );
};

export const FormDate = (): JSX.Element => {
  return (
    <div>
      <h2>Fechas</h2>
      <div className="mt-5">
        <FormDateComponent />
      </div>
    </div>
  );
};

export const FormTextArea = (): JSX.Element => {
  return (
    <div>
      <h2>Área de texto</h2>
      <div className="mt-5">
        <FormTextAreaComponent />
      </div>
    </div>
  );
};

export const FormRadioButton = (): JSX.Element => {
  return (
    <div>
      <h2>Radio Button</h2>
      <div className="mt-5">
        <FormRadioButtonComponent />
      </div>
    </div>
  );
};

export const FormCheckbox = (): JSX.Element => {
  return (
    <div>
      <h2>Checkbox</h2>
      <div className="mt-5">
        <FormCheckboxComponent />
      </div>
    </div>
  );
};

export const FormRadioButtonGroup = (): JSX.Element => {
  return (
    <div>
      <h2>Radio Button - Grupo</h2>
      <div className="mt-5">
        <FormRadioButtonGroupComponent />
      </div>
    </div>
  );
};

export const FormCheckBoxGroup = (): JSX.Element => {
  return (
    <div>
      <h2>Checkbox - Grupo</h2>
      <div className="mt-5">
        <FormCheckboxGroupComponent />
      </div>
    </div>
  );
};

export const FormSelectorNumeric = (): JSX.Element => {
  return (
    <div>
      <h2>Selector numérico</h2>
      <div className="mt-5">
        <FormSelectorNumericComponent />
      </div>
    </div>
  );
};

export const FormMobile = (): JSX.Element => {
  return (
    <div>
      <h2>Selector numérico</h2>
      <div className="mt-5">
        <CustomFormMobile />
      </div>
    </div>
  );
};
