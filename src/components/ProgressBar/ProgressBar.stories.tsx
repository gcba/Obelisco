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
    <p>componente info con version desactualizada</p>
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
    <p>componente actual con nueva version</p>
    <div className="storybook__container-progression">
      <ProgressBar type="primary" width={25}></ProgressBar>
    </div>
    <div className="storybook__container-progression">
      <ProgressBar type="primary" width={50}></ProgressBar>
    </div>
    <div className="storybook__container-progression">
      <ProgressBar type="primary" width={100}></ProgressBar>
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
    <p>componente info con version desactualizada</p>
    <div className="storybook__container-progression">
      <ProgressBar type="info" width={50} description="Descripción"></ProgressBar>
    </div>
    <div className="storybook__container-progression">
      <ProgressBar type="info" width={100} description="Descripción"></ProgressBar>
    </div>
    <br />
    <p>componente info con nueva version</p>
    <div className="storybook__container-progression">
      <ProgressBar type="primary" width={50} description="Descripción"></ProgressBar>
    </div>
    <div className="storybook__container-progression">
      <ProgressBar type="primary" width={100} description="Descripción"></ProgressBar>
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
