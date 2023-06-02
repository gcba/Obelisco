// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Configuración general del componente
export default {
  title: 'Componentes|Switch',
  decorators: [withA11y]
};

export const Switch = (): JSX.Element => {
  return (
    <>
      <label className="switch">
        <input type="checkbox" id="switch"></input>
        <span className="slider"></span>
      </label>
      <label htmlFor="switch" className="switch-label">
        Label
      </label>
      <br />
      <br />
      <label className="switch switch-dark">
        <input type="checkbox" id="switch-dark"></input>
        <span className="slider"></span>
      </label>
      <label htmlFor="switch-dark" className="switch-label">
        Label
      </label>
      <br />
      <br />
      <label className="switch">
        <input type="checkbox" id="switch-disable" disabled></input>
        <span className="slider"></span>
      </label>
      <label htmlFor="switch-disable" className="switch-label">
        Label
      </label>
      <br />
      <br />
      <label className="switch switch-sm">
        <input type="checkbox" id="switch-sm"></input>
        <span className="slider"></span>
      </label>
      <br />
      <br />
      <label className="switch switch-dark switch-sm">
        <input type="checkbox" id="switch-dark-sm"></input>
        <span className="slider"></span>
      </label>
      <br />
      <br />
      <label className="switch switch-sm">
        <input type="checkbox" id="switch-sm" disabled></input>
        <span className="slider"></span>
      </label>
    </>
  );
};
