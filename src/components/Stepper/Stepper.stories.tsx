// Base
import React from 'react';
import './Stepper.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components

// Config
export default {
  title: 'Componentes|Barra de Progreso',
  decorators: [withA11y]
};

export const DesktopStepper = (): JSX.Element => {
  return (
    <div className="stepper-container d-none d-md-block">
      <div className="row">
        <div className="col-md-12">
          <ul className="stepper">
            <li className="completed">
              <a href="#!">
                <span className="stepper-circle">1</span>
                <p className="stepper-label">Primer paso</p>
                <p className="stepper-sublabel">Opcional</p>
              </a>
            </li>
            <li className="active">
              <a href="#!">
                <span className="stepper-circle">2</span>
                <p className="stepper-label">Segundo paso</p>
                <p className="stepper-sublabel">Opcional</p>
              </a>
            </li>
            <li>
              <a href="#!">
                <span className="stepper-circle">3</span>
                <p className="stepper-label">Tercer paso</p>
                <p className="stepper-sublabel">Opcional</p>
              </a>
            </li>
            <li>
              <a href="#!">
                <span className="stepper-circle">4</span>
                <p className="stepper-label">Cuarto paso</p>
                <p className="stepper-sublabel">Opcional</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

/*
export const MobileStepper = (): JSX.Element => {
  return (
    <div className="container">
      <div className="card content">
        <div className="text-left card-header">
          <ul className="stepper p-0">
            <li className="completed">
              <a href="#">
                <span className="stepper-label text-left">Paso actual</span>
                <span className="stepper-sublabel text-muted">Paso siguiente: Lorem ipsum</span>
                <span className="step active"></span>
                <span className="step"></span>
                <span className="step"></span>
                <span className="step"></span>
                <span className="step"></span>
                <span className="stepper-label text-left">Paso 1 de 3</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="card-body"></div>
        <div className="card-footer text-muted text-right">
          <button className="btn btn-secondary">Anterior</button>
          <button className="btn btn-primary">Siguiente</button>
        </div>
      </div>
    </div>
  );
};
*/

export const MobileStepper = (): JSX.Element => {
  return (
    <div className="stepper-container">
      <div className="stepper-content">
        <div className="text-left stepper-card-header">
          <ul className="stepper mb-0">
            <li className="completed">              
                <p className="step-title">Nombre del paso</p>
                <p className="step-next text-muted">Paso siguiente: Nombre del paso 2</p>
                <div className="steps">
                  <span className="step-active"></span>
                  <span className="step"></span>
                  <span className="step"></span>
                  <span className="step"></span>
                  <span className="step"></span>
                </div>
                <p className="step-text">Paso 1 de 5</p>              
            </li>
          </ul>
        </div>
        <div className="stepper-card-body"></div>
      </div>
    </div>
  );
};