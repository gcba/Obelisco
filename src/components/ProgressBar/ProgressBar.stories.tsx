// Base
import React from 'react';
import './ProgressBar.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';
import { ProgressBar } from '.';

// Configuración general del componente
export default {
  title: 'Componentes|Barra de progreso',
  decorators: [withA11y]
};

export const simple = (): JSX.Element => (
  <>
    <div className="storybook__container-progression">
      <ProgressBar type="info" width={25}></ProgressBar>
    </div>
    <div className="storybook__container-progression">
      <ProgressBar type="info" width={50}></ProgressBar>
    </div>
    <div className="storybook__container-progression">
      <ProgressBar type="info" width={100}></ProgressBar>
    </div>
    <br />
    <div className="storybook__container-progression">
      <ProgressBar type="success" width={25}></ProgressBar>
    </div>
    <div className="storybook__container-progression">
      <ProgressBar type="success" width={50}></ProgressBar>
    </div>
    <div className="storybook__container-progression">
      <ProgressBar type="success" width={100}></ProgressBar>
    </div>
  </>
);

export const withDescription = (): JSX.Element => (
  <>
    <div className="storybook__container-progression">
      <ProgressBar type="info" width={50} description="Descripción"></ProgressBar>
    </div>
    <div className="storybook__container-progression">
      <ProgressBar type="info" width={100} description="Descripción"></ProgressBar>
    </div>
    <br />
    <div className="storybook__container-progression">
      <ProgressBar type="success" width={50} description="Descripción"></ProgressBar>
    </div>
    <div className="storybook__container-progression">
      <ProgressBar type="success" width={100} description="Descripción"></ProgressBar>
    </div>
  </>
);

withDescription.story = { name: 'Con descripción' };
