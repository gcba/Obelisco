// Base
import React from 'react';
import './Button.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { buttonTypes, sizes, sizesButton } from '../utils';
import { Button } from '.';

// Configuración general del componente
export default {
  title: 'Componentes|Botones',
  component: Button,
  decorators: [withA11y]
};

export const Colores = (): JSX.Element => {
  return (
    <div className="btn-wrapper">
      {buttonTypes.map((item) => (
        <Button key={item.type} type={item.type}>
          {item.name}
        </Button>
      ))}
      <a className="btn btn-primary" href="#" target="_blank">
        Enlace
      </a>
    </div>
  );
};

export const ConFoco = (): JSX.Element => {
  return (
    <div className="btn-wrapper">
      {buttonTypes.map((item) => (
        <Button key={item.type} type={item.type} className="focus">
          {item.name}
        </Button>
      ))}
      <a className="btn btn-primary focus" href="#" target="_blank">
        Enlace
      </a>
    </div>
  );
};

ConFoco.story = {
  name: 'Con foco'
};

export const Activos = (): JSX.Element => {
  return (
    <div className="btn-wrapper">
      {buttonTypes.map((item) => (
        <Button key={item.type} type={item.type} className="active">
          {item.name}
        </Button>
      ))}
      <a className="btn btn-primary active" href="#" target="_blank">
        Enlace
      </a>
    </div>
  );
};

export const Tamanos = (): JSX.Element => {
  return (
    <div className="btn-wrapper">
      {sizesButton.map((item) => (
        <Button key={item.size} type="secondary" size={item.size}>
          {item.name}
        </Button>
      ))}
      <a className="btn btn-secondary" href="#" target="_blank">
        Enlace
      </a>
    </div>
  );
};

Tamanos.story = { name: 'Tamaños' };

export const Deshabilitados = (): JSX.Element => {
  return (
    <div className="btn-wrapper">
      {sizesButton.map((item) => (
        <Button key={item.size} type="secondary" disabled={true} size={item.size}>
          {item.name}
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
      {buttonTypes.map((item) => (
        <Button key={item.type} type={item.type} outline={true}>
          {item.name}
        </Button>
      ))}
      <a className="btn btn-outline-primary" href="#" target="_blank">
        Enlace
      </a>
    </div>
  );
};

ConBordes.story = {
  name: 'Con bordes'
};

export const ConIconos = (): JSX.Element => {
  return (
    <>
      <div className="btn-wrapper">
        {sizes.map((size) => (
          <Button key={size} type="primary" size={size} iconBx="bxs-car">
            Botón
          </Button>
        ))}
        {sizes.map((size) => (
          <Button key={size} type="primary" outline={true} size={size} iconMaterial="drive_eta">
            Botón
          </Button>
        ))}
      </div>
    </>
  );
};

ConIconos.story = {
  name: 'Con íconos'
};

export const ButtonWithSpinner = (): JSX.Element => (
  <>
    <div className="btn-wrapper">
      <button className="btn btn-link btn-icon btn-sm">
        Botón
        <div className="spinner-border spinner-border-sm text-info" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </button>
      <button className="btn btn-link btn-icon">
        Botón
        <div className="spinner-border spinner-border-sm text-info" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </button>
      <button className="btn btn-link btn-icon btn-lg">
        Botón
        <div className="spinner-border spinner-border-sm text-info" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </button>
    </div>
    <div className="btn-wrapper">
      <button className="btn btn-outline-link btn-icon btn-sm">
        Botón
        <div className="spinner-border spinner-border-sm text-info" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </button>
      <button className="btn btn-outline-link btn-icon">
        Botón
        <div className="spinner-border spinner-border-sm text-info" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </button>
      <button className="btn btn-outline-link btn-icon btn-lg">
        Botón
        <div className="spinner-border spinner-border-sm text-info" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </button>
    </div>
    <div className="btn-wrapper">
      <button className="btn btn-outline-primary btn-icon">
        Botón
        <div className="spinner-border spinner-border-sm text-secondary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </button>
      <button className="btn btn-outline-secondary btn-icon">
        Botón
        <div className="spinner-border spinner-border-sm text-secondary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </button>
      <button className="btn btn-outline-success btn-icon">
        Botón
        <div className="spinner-border spinner-border-sm text-success" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </button>
      <button className="btn btn-outline-danger btn-icon">
        Botón
        <div className="spinner-border spinner-border-sm text-danger" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </button>
    </div>
    <div className="btn-wrapper">
      <button className="btn btn-primary btn-icon">
        Botón
        <div className="spinner-border spinner-border-sm text-secondary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </button>
      <button className="btn btn-secondary btn-icon">
        Botón
        <div className="spinner-border spinner-border-sm text-secondary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </button>
      <button className="btn btn-success btn-icon">
        Botón
        <div className="spinner-border spinner-border-sm text-success" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </button>
      <button className="btn btn-danger btn-icon">
        Botón
        <div className="spinner-border spinner-border-sm text-danger" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </button>
    </div>
  </>
);
ButtonWithSpinner.story = {
  name: 'Con spinner'
};
