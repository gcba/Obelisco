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
    <ProgressBar type="info" width={25}></ProgressBar>
    <ProgressBar type="info" width={50}></ProgressBar>
    <ProgressBar type="info" width={100}></ProgressBar>
  </>
);

simple.story = { name: 'Simple' };

export const WithoutDescription = (): JSX.Element => (
  <>
    <ProgressBar type="success" width={25} description="Descripción"></ProgressBar>
    <ProgressBar type="success" width={50} description="Descripción"></ProgressBar>
    <ProgressBar type="success" width={100} description="Descripción"></ProgressBar>
  </>
);

WithoutDescription.story = { name: 'Con descripción' };
