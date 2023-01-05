// Base
import React from 'react';
import './Button.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';
import { withXD } from 'storybook-addon-xd-designs';

// Components
import { buttonTypes, sizes } from '../utils';
import { Button } from '.';

// Config
export default {
  title: 'Componentes|Botón',
  component: Button,
  decorators: [withA11y, withXD],
  parameters: {
    design: {
      artboardUrl:
        'https://xd.adobe.com/view/0623a13b-8fc0-407c-6a4d-c1c24dc2c5fa-7012/screen/d1dd8e3f-6a3b-4a7b-a59e-ba883ca7c684/-TOMOS-BOTONES'
    }
  }
};

export const Colores = (): JSX.Element => {
  return (
    <div className="btn-wrapper">
      {buttonTypes.map((type) => (
        <Button key={type} type={type}>
          {type}
        </Button>
      ))}
      <a className="btn btn-primary" href="#" target="_blank">
        enlace
      </a>
    </div>
  );
};

export const ConFoco = (): JSX.Element => {
  return (
    <div className="btn-wrapper">
      {buttonTypes.map((type) => (
        <Button key={type} type={type} className="focus">
          {type}
        </Button>
      ))}
      <a className="btn btn-primary focus" href="#" target="_blank">
        enlace
      </a>
    </div>
  );
};

export const Activos = (): JSX.Element => {
  return (
    <div className="btn-wrapper">
      {buttonTypes.map((type) => (
        <Button key={type} type={type} className="active">
          {type}
        </Button>
      ))}
      <a className="btn btn-primary active" href="#" target="_blank">
        enlace
      </a>
    </div>
  );
};

export const Tamanos = (): JSX.Element => {
  return (
    <div className="btn-wrapper">
      {sizes.map((size) => (
        <Button key={size} type="secondary" size={size}>
          {size}
        </Button>
      ))}
      <a className="btn btn-secondary" href="#" target="_blank">
        enlace
      </a>
    </div>
  );
};
Tamanos.story = { name: 'Tamaños' };

export const Deshabilitados = (): JSX.Element => {
  return (
    <div className="btn-wrapper">
      {sizes.map((size) => (
        <Button key={size} type="secondary" disabled={true} size={size}>
          {size}
        </Button>
      ))}
    </div>
  );
};

export const Expandible = (): JSX.Element => {
  return (
    <div className="btn-block-wrapper">
      <Button type="secondary" block={true}>
        Expandible
      </Button>
    </div>
  );
};

export const ConBordes = (): JSX.Element => {
  return (
    <div className="btn-wrapper">
      {buttonTypes.map((type) => (
        <Button key={type} type={type} outline={true}>
          {type}
        </Button>
      ))}
      <a className="btn btn-outline-primary" href="#" target="_blank">
        enlace
      </a>
    </div>
  );
};

export const ConIconos = (): JSX.Element => {
  return (
    <>
      <div className="btn-wrapper">
        <button type="button" className="btn btn-primary btn-sm">
          <i className="bx bxs-car btn-icon"></i>
          Botón
        </button>
        <button type="button" className="btn btn-primary">
          <i className="bx bxs-car btn-icon"></i>
          Botón
        </button>
        <button type="button" className="btn btn-primary btn-lg">
          <i className="bx bxs-car btn-icon"></i>
          Botón
        </button>
      </div>
      <div className="btn-wrapper">
        <button type="button" className="btn btn-success btn-sm">
          <i className="bx bxs-check-shield btn-icon"></i>
          Botón
        </button>
        <button type="button" className="btn btn-success">
          <i className="bx bxs-check-shield btn-icon"></i>
          Botón
        </button>
        <button type="button" className="btn btn-success btn-lg">
          <i className="bx bxs-check-shield btn-icon"></i>
          Botón
        </button>
      </div>
      <div className="btn-wrapper">
        <button type="button" className="btn btn-danger btn-sm">
          <i className="bx bx-log-out btn-icon"></i>
          Botón
        </button>
        <button type="button" className="btn btn-danger">
          <i className="bx bx-log-out btn-icon"></i>
          Botón
        </button>
        <button type="button" className="btn btn-danger btn-lg">
          <i className="bx bx-log-out btn-icon"></i>
          Botón
        </button>
      </div>
      <div className="btn-wrapper">
        <button type="button" className="btn btn-secondary btn-sm">
          <i className="bx bx-message-dots btn-icon"></i>
          Botón
        </button>
        <button type="button" className="btn btn-secondary">
          <i className="bx bx-message-dots btn-icon"></i>
          Botón
        </button>
        <button type="button" className="btn btn-secondary btn-lg">
          <i className="bx bx-message-dots btn-icon"></i>
          Botón
        </button>
      </div>
      <div className="btn-wrapper">
        <button type="button" className="btn btn-link btn-sm">
          <i className="bx bxs-shield-x btn-icon"></i>
          Botón
        </button>
        <button type="button" className="btn btn-link">
          <i className="bx bxs-shield-x btn-icon"></i>
          Botón
        </button>
        <button type="button" className="btn btn-link btn-lg">
          <i className="bx bxs-shield-x btn-icon"></i>
          Botón
        </button>
      </div>
    </>
  );
};

export const EnCaja = (): JSX.Element => {
  return (
    <>
      <div className="btn-wrapper-container">
        <div className="btn-container">
          <div className="card">
            <button type="button" className="btn btn-primary btn-block btn-sm">
              Botón
            </button>
          </div>
        </div>
        <div className="btn-container">
          <div className="card">
            <button type="button" className="btn btn-primary btn-block">
              Botón
            </button>
          </div>
        </div>
        <div className="btn-container">
          <div className="card">
            <button type="button" className="btn btn-primary btn-block btn-lg">
              Botón
            </button>
          </div>
        </div>
        <div className="btn-container">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Iniciá el trámite y completá todos los pasos</h4>
              <p className="card-text">Si tenés un trámite iniciado podés continuarlo desde acá.</p>
            </div>
            <button type="button" className="btn btn-primary btn-block">
              Iniciar trámite
            </button>
          </div>
        </div>
        <div className="btn-container">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Iniciá el trámite y completá todos los pasos</h4>
            </div>
            <button type="button" className="btn btn-primary btn-block">
              Iniciar trámite
            </button>
          </div>
        </div>
        <div className="btn-container">
          <div className="card bg-light">
            <div className="card-body">
              <h4 className="card-title">Iniciá el trámite y completá todos los pasos</h4>
              <p className="card-text">Si tenés un trámite iniciado podés continuarlo desde acá.</p>
            </div>
            <button type="button" className="btn btn-primary btn-block">
              Iniciar trámite
            </button>
          </div>
        </div>
        <div className="btn-container">
          <div className="card card-simple">
            <div className="card-body">
              <h4 className="card-title">Iniciá el trámite y completá todos los pasos</h4>
              <p className="card-text">Si tenés un trámite iniciado podés continuarlo desde acá.</p>
            </div>
            <button type="button" className="btn btn-primary btn-block">
              Iniciar trámite
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
