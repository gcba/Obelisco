// Base
import React from 'react';
import './Banner.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { Banner, BUTTON_ALERT, BUTTONS_ALERT, useTextResponsive } from '.';

// Configuración general del componente
export default {
  title: 'Componentes|Banner',
  decorators: [withA11y]
};

export const BannerTypes = (): JSX.Element => {
  return (
    <div className="storybook__container-banner">
      <Banner />
      <Banner isDark={true} />
    </div>
  );
};
BannerTypes.story = { name: 'Tipos' };

export const BannerButton = (): JSX.Element => {
  return (
    <div className="storybook__container-banner">
      <Banner iconBanner="departure_board" buttons={BUTTON_ALERT} responsiveText={useTextResponsive()} />
      <Banner iconBanner="departure_board" buttons={BUTTON_ALERT} responsiveText={useTextResponsive()} isDark={true} />
    </div>
  );
};
BannerButton.story = { name: 'Con botón' };

export const BannerButtons = (): JSX.Element => {
  return (
    <div className="storybook__container-banner">
      <Banner iconBanner="cookie" buttons={BUTTONS_ALERT} responsiveText={useTextResponsive()} />
      <Banner iconBanner="cookie" buttons={BUTTONS_ALERT} responsiveText={useTextResponsive()} isDark={true} />
    </div>
  );
};
BannerButtons.story = { name: 'Con botones' };
