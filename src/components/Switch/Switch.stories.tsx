// Base
import React from 'react';
import './Switch.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { SwitchContainer, SwitchContainer2 } from '.';

// Configuración general del componente
export default {
  title: 'Componentes|Switch',
  decorators: [withA11y]
};

export const Switch = (): JSX.Element => {
  return (
    <>
      <div className="storybook__container-switch">
        <SwitchContainer label="Apagado" id="switch-1" />
        <SwitchContainer label="Prendido" id="switch-2" isChecked />
      </div>
      <div className="storybook__container-switch">
        <SwitchContainer label="Apagado" id="switch-dark-1" isDark />
        <SwitchContainer label="Prendido" id="switch-dark-2" isDark isChecked />
      </div>
    </>
  );
};
Switch.story = {
  name: 'Tipos'
};

export const SwitchWithoutLabel = (): JSX.Element => {
  return (
    <>
      <div className="storybook__container-switch">
        <SwitchContainer id="switch-1" isLabelHidden />
        <SwitchContainer id="switch-2" isLabelHidden isChecked />
      </div>
      <div className="storybook__container-switch">
        <SwitchContainer id="switch-label-hidden-1" isLabelHidden isDark />
        <SwitchContainer id="switch-label-hidden-2" isLabelHidden isDark isChecked />
      </div>
    </>
  );
};
SwitchWithoutLabel.story = {
  name: 'Sin label'
};

export const SwitchSizes = (): JSX.Element => {
  return (
    <>
      <div className="storybook__container-switch">
        <SwitchContainer label="Apagado" id="switch-1" />
        <SwitchContainer label="Prendido" id="switch-2" isChecked />
      </div>
      <div className="storybook__container-switch">
        <SwitchContainer label="Apagado" id="switch-small-1" isSmall isLabelHidden />
        <SwitchContainer label="Prendido" id="switch-small-2" isSmall isLabelHidden isChecked />
      </div>
    </>
  );
};
SwitchSizes.story = {
  name: 'Tamaños'
};
export const SwitchDisabled = (): JSX.Element => {
  return (
    <>
      <div className="storybook__container-switch">
        <SwitchContainer label="Apagado / Deshabilitado" id="switch-1" isDisabled />
        <SwitchContainer label="Prendido / Deshabilitado" id="switch-2" isDisabled isChecked />
      </div>
      <div className="storybook__container-switch">
        <SwitchContainer label="Apagado / Deshabilitado" id="switch-disabled-1" isDisabled isLabelHidden />
        <SwitchContainer label="Prendido / Deshabilitado" id="switch-disabled-2" isDisabled isLabelHidden isChecked />
      </div>
    </>
  );
};
SwitchDisabled.story = {
  name: 'Deshabilitado'
};
