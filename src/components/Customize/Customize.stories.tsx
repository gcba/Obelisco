import React from 'react';
import './Customize.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';
import { ButtonLG } from './Button-lg/CustomizeButtonLG.stories';
import { ButtonMedium } from './Button-medium/CustomizeButtonMedium.stories';
import { ButtonSmall } from './Button-small/CustomizeButtonSmall.stories';
import { JustificationButton } from './Justification-button/JustificationButton.stories';

// Config
export default {
  title: 'Componentes|Customize Button',
  decorators: [withA11y]
};

export const BigButton = (): JSX.Element => {
  return (
    <div className="container">
      <div className="">
        <h2>Botones grandes</h2>

        <ButtonLG />
      </div>
    </div>
  );
};
export const MediumButton = (): JSX.Element => {
  return (
    <div className="container">
      <div className="">
        <h2>Botones medianos - Predeterminados</h2>
        <ButtonMedium />
      </div>
    </div>
  );
};
export const SmallButton = (): JSX.Element => {
  return (
    <div className="container">
      <div className="">
        <h2>Botones pequeños</h2>
        <ButtonSmall />
      </div>
    </div>
  );
};
export const Justification = (): JSX.Element => {
  return (
    <div className="container">
      <div className="">
        <h2>Justificacion</h2>
        <JustificationButton />
      </div>
    </div>
  );
};
