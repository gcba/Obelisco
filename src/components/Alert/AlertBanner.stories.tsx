// Base
import React from 'react';
import './Alert.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { AlertFullWidthComponent, BUTTONS_ALERT, BUTTON_ALERT } from '.';

// Configuración general del componente
export default {
  title: 'Componentes|Alerta/Banner',
  decorators: [withA11y]
};

export const AlertFullWidthTypes = (): JSX.Element => {
  return (
    <div className="storybook__container-alert-full-width">
      <AlertFullWidthComponent iconAlert="bx bxs-info-circle" />
      <AlertFullWidthComponent iconAlert="cookie" isDark={true} />
    </div>
  );
};
AlertFullWidthTypes.story = { name: 'Tipos' };

export const AlertFullWidthNoIcon = (): JSX.Element => {
  return (
    <div className="storybook__container-alert-full-width">
      <AlertFullWidthComponent />
      <AlertFullWidthComponent isDark={true} />
    </div>
  );
};
AlertFullWidthNoIcon.story = { name: 'Sin ícono' };

export const AlertFullWidthLink = (): JSX.Element => {
  return (
    <div className="storybook__container-alert-full-width">
      <AlertFullWidthComponent iconAlert="info" isLink={true} />
      <AlertFullWidthComponent iconAlert="cookie" isLink={true} isDark={true} />
    </div>
  );
};
AlertFullWidthLink.story = { name: 'Con enlace' };

export const AlertFullWidthButton = (): JSX.Element => {
  return (
    <div className="storybook__container-alert-full-width">
      <AlertFullWidthComponent iconAlert="info" buttons={BUTTON_ALERT} />
      <AlertFullWidthComponent iconAlert="cookie" buttons={BUTTON_ALERT} isDark={true} />
    </div>
  );
};
AlertFullWidthButton.story = { name: 'Con botón' };

export const AlertFullWidthButtons = (): JSX.Element => {
  return (
    <div className="storybook__container-alert-full-width">
      <AlertFullWidthComponent iconAlert="info" buttons={BUTTONS_ALERT} />
      <AlertFullWidthComponent iconAlert="cookie" buttons={BUTTONS_ALERT} isDark={true} />
    </div>
  );
};
AlertFullWidthButtons.story = { name: 'Con botones' };
