// Base
import React from 'react';
import './Banner.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { Banner, BUTTON_BANNER, BUTTONS_BANNER, TEXT_BANNER_LINK, TextBannerButton, handleTextResponsive } from '.';

// Configuración general del componente
export default {
  title: 'Componentes|Banner',
  decorators: [withA11y]
};

export const BannerTypes = (): JSX.Element => {
  return (
    <div className="storybook__container-banner">
      <Banner textBanner={TEXT_BANNER_LINK} />
      <Banner textBanner={TEXT_BANNER_LINK} isDark={true} />
    </div>
  );
};
BannerTypes.story = { name: 'Tipos' };

export const BannerButton = (): JSX.Element => {
  handleTextResponsive();
  return (
    <div className="storybook__container-banner">
      <Banner
        iconBanner="departure_board"
        buttons={BUTTON_BANNER}
        textBanner={<TextBannerButton textButtonAmount="un solo botón" />}
      />
      <Banner
        iconBanner="departure_board"
        buttons={BUTTON_BANNER}
        textBanner={<TextBannerButton textButtonAmount="un solo botón" />}
        isDark={true}
      />
    </div>
  );
};
BannerButton.story = { name: 'Con botón' };

export const BannerButtons = (): JSX.Element => {
  handleTextResponsive();
  return (
    <div className="storybook__container-banner">
      <Banner
        iconBanner="cookie"
        buttons={BUTTONS_BANNER}
        textBanner={<TextBannerButton textButtonAmount="dos botones" />}
      />
      <Banner
        iconBanner="cookie"
        buttons={BUTTONS_BANNER}
        textBanner={<TextBannerButton textButtonAmount="dos botones" />}
        isDark={true}
      />
    </div>
  );
};
BannerButtons.story = { name: 'Con botones' };
