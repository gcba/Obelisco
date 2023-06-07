// Base
import React from 'react';
import './Switch.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { SwitchContainer } from '.';

// Configuración general del componente
export default {
  title: 'Componentes|Switch',
  decorators: [withA11y]
};

export const Switch = (): JSX.Element => {
  return (
    <>
      <SwitchContainer label="Apagado" id="switch-1" />
      <SwitchContainer label="Prendido" id="switch-2" isChecked />
      <br />
      <br />
      <SwitchContainer label="Apagado" id="switch-dark-1" isDark />
      <SwitchContainer label="Prendido" id="switch-dark-2" isDark isChecked />
      <br />
      <br />
      <SwitchContainer label="Apagado / Deshabilitado" id="switch-disable-1" isDisabled />
      <SwitchContainer label="Prendido / Deshabilitado" id="switch-disable-2" isDisabled isChecked />
      <br />
      <br />
      <SwitchContainer id="switch-sm-1" isSmall />
      <SwitchContainer id="switch-sm-2" isSmall isChecked />
      <br />
      <br />
      <SwitchContainer id="switch-dark-sm-1" isSmall isDark />
      <SwitchContainer id="switch-dark-sm-2" isSmall isDark isChecked />
      <br />
      <br />
      <SwitchContainer id="switch-sm-disable-1" isSmall isDisabled />
      <SwitchContainer id="switch-sm-disable-2" isSmall isDisabled isChecked />
    </>
  );
};
