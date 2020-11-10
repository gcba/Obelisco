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

export const Desktop = (): JSX.Element => {
  return (
    <div className="stepper-wrapper-desktop">
      <div className="stepper">
        <ul className="stepper-desktop">
          <li className="completed">
            <a href="#!">
              <div className="step-circle">1</div>
              <p className="step-label">Primer paso</p>
              <p className="step-sublabel">Opcional</p>
            </a>
          </li>
          <li className="active">
            <div className="step-circle">2</div>
            <p className="step-label">Segundo paso</p>
            <p className="step-sublabel">Opcional</p>
          </li>
          <li>
            <div className="step-circle">3</div>
            <p className="step-label">Tercer paso</p>
            <p className="step-sublabel">Opcional</p>
          </li>
          <li>
            <div className="step-circle">4</div>
            <p className="step-label">Cuarto paso</p>
            <p className="step-sublabel">Opcional</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export const Mobile = (): JSX.Element => {
  return (
    <div className="stepper-wrapper-mobile">
      <div className="stepper">
        <div className="stepper-mobile">
          <p className="step-title">Nombre del paso</p>
          <p className="step-next">Paso siguiente: Nombre del paso 2</p>
          <div className="steps">
            <div className="step active"></div>
            <div className="step"></div>
            <div className="step"></div>
            <div className="step"></div>
            <div className="step"></div>
          </div>
          <span className="step-text">Paso 1 de 5</span>
        </div>
      </div>
    </div>
  );
};

export const DesktopYMobile = (): JSX.Element => {
  return (
    <div className="stepper-wrapper-desktop">
      <div className="stepper">
        <div className="row d-none d-md-flex">
          <div className="col">
            <ul className="stepper-desktop">
              <li className="completed">
                <a href="#!">
                  <div className="step-circle">1</div>
                  <p className="step-label">Primer paso</p>
                  <p className="step-sublabel">Opcional</p>
                </a>
              </li>
              <li className="completed">
                <a href="#!">
                  <div className="step-circle">2</div>
                  <p className="step-label">Segundo paso</p>
                  <p className="step-sublabel">Opcional</p>
                </a>
              </li>
              <li className="completed">
                <a href="#!">
                  <div className="step-circle">3</div>
                  <p className="step-label">Tercer paso</p>
                  <p className="step-sublabel">Opcional</p>
                </a>
              </li>
              <li className="active">
                <div className="step-circle">4</div>
                <p className="step-label">Cuarto paso</p>
                <p className="step-sublabel">Opcional</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="stepper-mobile d-md-none">
          <p className="step-title">Cuarto paso</p>
          <p className="step-next">Último paso</p>
          <div className="steps">
            <div className="step active"></div>
            <div className="step active"></div>
            <div className="step active"></div>
            <div className="step active"></div>
          </div>
          <span className="step-text">Paso 4 de 4</span>
        </div>
      </div>
    </div>
  );
};
