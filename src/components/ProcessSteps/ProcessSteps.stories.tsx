// Base
import React from 'react';
import './ProcessSteps.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { ListSteps, LISTSTEPS_CONTENT, LISTSTEPS_CONTENT_LARGE, LISTSTEPS_CONTENT_LIGHT_ITEMS } from '.';

// Configuración general del componente
export default {
  title: 'Componentes|Pasos de trámite',
  decorators: [withA11y]
};

export const ListStepsSizes = (): JSX.Element => (
  <div className="storybook__wrapper-list-step">
    <ListSteps content={LISTSTEPS_CONTENT_LARGE} size="large" />
    <ListSteps content={LISTSTEPS_CONTENT} />
    <ListSteps content={LISTSTEPS_CONTENT} size="small" />
  </div>
);
ListStepsSizes.story = { name: 'Tamaños' };

export const ListStepsLight = (): JSX.Element => (
  <div className="storybook__wrapper-list-step">
    <ListSteps content={LISTSTEPS_CONTENT} size="large" isLight={true} />
    <ListSteps content={LISTSTEPS_CONTENT} isLight={true} />
    <ListSteps content={LISTSTEPS_CONTENT} size="small" isLight={true} />
  </div>
);
ListStepsLight.story = { name: 'Sin relleno' };

export const ListStepsNumbers = (): JSX.Element => (
  <div className="storybook__wrapper-list-step">
    <ListSteps content={LISTSTEPS_CONTENT} isNumbered={true} />
    <ListSteps content={LISTSTEPS_CONTENT} isNumbered={true} isLight={true} />
  </div>
);
ListStepsNumbers.story = { name: 'Con números' };

export const ListStepsComplete = (): JSX.Element => (
  <div className="storybook__wrapper-list-step">
    <ListSteps content={LISTSTEPS_CONTENT_LIGHT_ITEMS} isNumbered={true} />
  </div>
);
ListStepsComplete.story = { name: 'Con pasos completados' };

/* export const PasosGrandes = (): JSX.Element => (
  <div className="storybook__wrapper-list-step">
    <ListSteps content={LISTSTEPS_CONTENT} size="large" />
    <ListSteps content={LISTSTEPS_CONTENT} size="large" isLight={true} />
    <ListSteps content={LISTSTEPS_CONTENT} size="large" isNumbered={true} />
    <ListSteps content={LISTSTEPS_CONTENT} size="large" isNumbered={true} isLight={true} />
  </div>
);

export const Pasos = (): JSX.Element => (
  <div className="storybook__wrapper-list-step">
    <ListSteps content={LISTSTEPS_CONTENT} />
    <ListSteps content={LISTSTEPS_CONTENT} isLight={true} />
    <ListSteps content={LISTSTEPS_CONTENT} isNumbered={true} />
    <ListSteps content={LISTSTEPS_CONTENT} isNumbered={true} isLight={true} />
  </div>
);

export const PasosChicos = (): JSX.Element => (
  <div className="storybook__wrapper-list-step">
    <ListSteps content={LISTSTEPS_CONTENT} size="small" />
    <ListSteps content={LISTSTEPS_CONTENT} size="small" isLight={true} />
    <ListSteps content={LISTSTEPS_CONTENT} size="small" isNumbered={true} />
    <ListSteps content={LISTSTEPS_CONTENT} size="small" isNumbered={true} isLight={true} />
  </div>
); */
