import { withA11y } from '@storybook/addon-a11y';
import React from 'react';

//config
export default {
  title: 'Componentes|Customize Alert',
  decorators: [withA11y]
};

export const CustomAlert = (): JSX.Element => {
  const ALERT = [
    { name: 'Éxito', style: 'success' },
    { name: 'Información', style: 'info' },
    { name: 'Advertencia', style: 'primary' }
  ];
  return (
    <div>
      <h2>Error</h2>
      <h4>Estado predeterminado</h4>
      <div className="alert-wrapper">
        <div className="alert alert-danger" role="alert">
          <p>
            <strong>Este es un destacado de una alerta de error. </strong>
            Esta es la descripción de una alerta de éxito que continua al texto destacado.
          </p>
        </div>
      </div>

      <h4>Titulo + Anclas</h4>
      <div className="alert-wrapper">
        <div className="alert alert-danger" role="alert">
          <strong>Este es un destacado de una alerta de error. </strong>
          <ol>
            <li>
              <a href="javascript:void(0)">Ancla al error 1</a>
            </li>
            <li>
              <a href="javascript:void(0)">Ancla al error 2</a>
            </li>
            <li>
              <a href="javascript:void(0)">Ancla al error 3</a>
            </li>
          </ol>
        </div>
      </div>

      {ALERT.map(({ name, style }, index) => (
        <div className="mt-5" key={index}>
          <h2>{name}</h2>
          <h4>Estado predeterminado</h4>
          <div className="alert-wrapper">
            <div className={`alert alert-${style}`} role="alert">
              <p>
                <strong>Este es un destacado de una alerta de error. </strong>
                Esta es la descripción de una alerta de éxito que continua al texto destacado.
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const CustomAlertMobile = (): JSX.Element => {
  const ALERT = [
    { name: 'Éxito', style: 'success' },
    { name: 'Información', style: 'info' },
    { name: 'Advertencia', style: 'primary' }
  ];
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <h2>Error</h2>
          <h4>Estado predeterminado</h4>
          <div className="alert-wrapper">
            <div className="alert alert-danger" role="alert">
              <p>
                <strong>Este es un destacado de una alerta de error. </strong>
                Esta es la descripción de una alerta de éxito que continua al texto destacado.
              </p>
            </div>
          </div>

          <h4>Titulo + Anclas</h4>
          <div className="alert-wrapper">
            <div className="alert alert-danger" role="alert">
              <strong>Este es un destacado de una alerta de error. </strong>
              <ol>
                <li>
                  <a href="javascript:void(0)">Ancla al error 1</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Ancla al error 2</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Ancla al error 3</a>
                </li>
              </ol>
            </div>
          </div>

          {ALERT.map(({ name, style }, index) => (
            <div className="mt-5" key={index}>
              <h2>{name}</h2>
              <h4>Estado predeterminado</h4>
              <div className="alert-wrapper">
                <div className={`alert alert-${style}`} role="alert">
                  <p>
                    <strong>Este es un destacado de una alerta de error. </strong>
                    Esta es la descripción de una alerta de éxito que continua al texto destacado.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
