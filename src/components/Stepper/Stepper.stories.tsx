// Base
import React from 'react';
import './Stepper.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components

// Config
export default {
  title: 'Componentes|Pasos de un formulario',
  decorators: [withA11y]
};

export const MultiplesPasos = (): JSX.Element => {
  return (
    <div className="stepper-wrapper">
      <div className="stepper">
        <p className="step-title">Nombre del paso</p>
        <p className="step-next">Paso siguiente: Nombre del paso 3</p>
        <div className="steps">
          <div className="step active"></div>
          <div className="step active"></div>
          <div className="step"></div>
          <div className="step"></div>
          <div className="step"></div>
        </div>
        <span className="step-text">Paso 2 de 5</span>
      </div>
    </div>
  );
};
