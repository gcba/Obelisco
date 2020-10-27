// Base
import React from 'react';
import './Progress.stories.scss';

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
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <ul className="stepper stepper-horizontal">
            <li className="completed">
              <a href="#!">
                <span className="circle">1</span>
                <p className="label">Primer paso</p>
                <p className="sublabel">Opcional</p>
              </a>
            </li>
            <li className="active">
              <a href="#!">
                <span className="circle">2</span>
                <p className="label">Segundo paso</p>
                <p className="sublabel">Opcional</p>
              </a>
            </li>
            <li className="incomplete">
              <a href="#!">
                <span className="circle">3</span>
                <p className="label">Tercer paso</p>
                <p className="sublabel">Opcional</p>
              </a>
            </li>
            <li className="incomplete">
              <a href="#!">
                <span className="circle">4</span>
                <p className="label">Cuarto paso</p>
                <p className="sublabel">Opcional</p>
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
          <ul className="stepper stepper-horizontal p-0">
            <li className="completed">
              <a href="#">
                <span className="label text-left">Paso actual</span>
                <span className="sublabel text-muted">Paso siguiente: Lorem ipsum</span>
                <span className="step active"></span>
                <span className="step"></span>
                <span className="step"></span>
                <span className="step"></span>
                <span className="step"></span>
                <span className="label text-left">Paso 1 de 3</span>
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
    <div className="container">
      <div className="card content">
        <div className="card-title">
          <h3>Paso a paso</h3>
        </div>
        <div className="text-left card-header">
          <ul className="stepper stepper-horizontal p-0">
            <li className="completed">
              <div>
                <h4 className="step-title">Paso actual</h4>
                <span className="step-next text-muted">Paso siguiente: Lorem ipsum</span>
                <div className="steps">
                  <span className="step-active"></span>
                  <span className="step"></span>
                  <span className="step"></span>
                  <span className="step"></span>
                  <span className="step"></span>
                </div>
                <p className="step-text">Paso 1 de 5</p>
              </div>
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
