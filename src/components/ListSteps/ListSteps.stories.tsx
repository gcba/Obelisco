// Base
import React from 'react';
import './ListSteps.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { ListSteps, LISTSTEPS_CONTENT, LISTSTEPS_CONTENT_LARGE } from '.';

// Configuración general del componente
export default {
  title: 'Componentes|Listas/Lista de pasos',
  decorators: [withA11y]
};

export const ListStepsSizes = (): JSX.Element => (
  <div className="storybook__container-list-steps">
    <ListSteps content={LISTSTEPS_CONTENT_LARGE} size="large" />
    <ListSteps content={LISTSTEPS_CONTENT} />
    <ListSteps content={LISTSTEPS_CONTENT} size="small" />
  </div>
);
ListStepsSizes.story = { name: 'Tamaños' };

export const ListStepsBorder = (): JSX.Element => (
  <div className="storybook__container-list-steps">
    <ListSteps content={LISTSTEPS_CONTENT} size="large" isLight={true} />
    <ListSteps content={LISTSTEPS_CONTENT} isLight={true} />
    <ListSteps content={LISTSTEPS_CONTENT} size="small" isLight={true} />
  </div>
);
ListStepsBorder.story = { name: 'Con borde' };

export const ListStepsNumbers = (): JSX.Element => (
  <div className="storybook__container-list-steps">
    <ListSteps content={LISTSTEPS_CONTENT} isNumbered={true} />
    <ListSteps content={LISTSTEPS_CONTENT} isNumbered={true} isLight={true} />
  </div>
);
ListStepsNumbers.story = { name: 'Con número' };

//A futuro, tal vez se incluya la version de Pasos completados
/* export const ListStepsComplete = (): JSX.Element => (
  <div className="storybook__container-list-steps">
    <ListSteps content={LISTSTEPS_CONTENT_LIGHT_ITEMS} isNumbered={true} />
  </div>
);
ListStepsComplete.story = { name: 'Con pasos completados' }; */
