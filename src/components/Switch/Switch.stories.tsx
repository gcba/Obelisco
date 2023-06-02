// Base
import React from 'react';
import './Switch.stories.scss';

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
        <input type="checkbox" id="switch-1"></input>
        <span className="slider"></span>
      </label>
      <label htmlFor="switch-1" className="switch-label">
        Label
      </label>
      <label className="switch">
        <input type="checkbox" id="switch-2" checked></input>
        <span className="slider"></span>
      </label>
      <label htmlFor="switch-2" className="switch-label">
        Label
      </label>
      <br />
      <br />
      <label className="switch switch-dark">
        <input type="checkbox" id="switch-dark-1"></input>
        <span className="slider"></span>
      </label>
      <label htmlFor="switch-dark-1" className="switch-label">
        Label
      </label>
      <label className="switch switch-dark">
        <input type="checkbox" id="switch-dark-2" checked></input>
        <span className="slider"></span>
      </label>
      <label htmlFor="switch-dark-2" className="switch-label">
        Label
      </label>
      <br />
      <br />
      <label className="switch">
        <input type="checkbox" id="switch-disable-1" disabled></input>
        <span className="slider"></span>
      </label>
      <label htmlFor="switch-disable-1" className="switch-label disabled">
        Label
      </label>
      <label className="switch">
        <input type="checkbox" id="switch-disable-2" disabled checked></input>
        <span className="slider"></span>
      </label>
      <label htmlFor="switch-disable-2" className="switch-label disabled">
        Label
      </label>
      <br />
      <br />
      <label className="switch switch-sm">
        <input type="checkbox"></input>
        <span className="slider"></span>
      </label>
      <label className="switch switch-sm">
        <input type="checkbox" checked></input>
        <span className="slider"></span>
      </label>
      <br />
      <br />
      <label className="switch switch-dark switch-sm">
        <input type="checkbox"></input>
        <span className="slider"></span>
      </label>
      <label className="switch switch-dark switch-sm">
        <input type="checkbox" checked></input>
        <span className="slider"></span>
      </label>
      <br />
      <br />
      <label className="switch switch-sm">
        <input type="checkbox" disabled></input>
        <span className="slider"></span>
      </label>
      <label className="switch switch-sm">
        <input type="checkbox" disabled checked></input>
        <span className="slider"></span>
      </label>
    </>
  );
};
