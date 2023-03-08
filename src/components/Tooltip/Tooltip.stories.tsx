// Base
import React from 'react';
import './Tooltip.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Configuración general del componente
export default {
  title: 'Componentes|Tooltip',
  decorators: [withA11y]
};

export const Tooltip = (): JSX.Element => {
  return (
    <div className="tooltip-container">
      <div className="tooltip-row">
        <span data-tooltip="Esta es la descripción de un tooltip" data-flow="top-right">
          <button type="button" className="btn btn-link btn-icon">
            <span className="material-icons-round">turn_right</span>
          </button>
        </span>
        <span data-tooltip="Esta es la descripción de un tooltip" data-flow="top">
          <button type="button" className="btn btn-link btn-icon">
            <span className="material-icons-round">arrow_upward</span>
          </button>
        </span>
        <span data-tooltip="Esta es la descripción de un tooltip" data-flow="top-left">
          <button type="button" className="btn btn-link btn-icon">
            <span className="material-icons-round">turn_left</span>
          </button>
        </span>
      </div>

      <div className="tooltip-row">
        <div className="tooltip-column left">
          <span data-tooltip="Esta es la descripción de un tooltip" data-flow="right-bottom">
            <button type="button" className="btn btn-link btn-icon">
              <span className="material-icons-round">south_east</span>
            </button>
          </span>
          <span data-tooltip="Esta es la descripción de un tooltip" data-flow="right">
            <button type="button" className="btn btn-link btn-icon">
              <span className="material-icons-round">arrow_forward</span>
            </button>
          </span>
          <span data-tooltip="Esta es la descripción de un tooltip" data-flow="right-top">
            <button type="button" className="btn btn-link btn-icon">
              <span className="material-icons-round">north_east</span>
            </button>
          </span>
        </div>
        <div className="tooltip-column right">
          <span data-tooltip="Esta es la descripción de un tooltip" data-flow="left-bottom">
            <button type="button" className="btn btn-link btn-icon">
              <span className="material-icons-round">south_west</span>
            </button>
          </span>
          <span data-tooltip="Esta es la descripción de un tooltip" data-flow="left">
            <button type="button" className="btn btn-link btn-icon">
              <span className="material-icons-round">keyboard_backspace</span>
            </button>
          </span>
          <span data-tooltip="Esta es la descripción de un tooltip" data-flow="left-top">
            <button type="button" className="btn btn-link btn-icon">
              <span className="material-icons-round">north_west</span>
            </button>
          </span>
        </div>
      </div>

      <div className="tooltip-row">
        <span data-tooltip="Esta es la descripción de un tooltip" data-flow="bottom-right">
          <button type="button" className="btn btn-link btn-icon">
            <span className="material-icons-round">subdirectory_arrow_right</span>
          </button>
        </span>
        <span data-tooltip="Esta es la descripción de un tooltip" data-flow="bottom">
          <button type="button" className="btn btn-link btn-icon">
            <span className="material-icons-round">arrow_downward</span>
          </button>
        </span>
        <span data-tooltip="Esta es la descripción de un tooltip" data-flow="bottom-left">
          <button type="button" className="btn btn-link btn-icon">
            <span className="material-icons-round">subdirectory_arrow_left</span>
          </button>
        </span>
      </div>

      <br />
      <br />

      <div className="tooltip-row">
        <span className="icon-box bg-light" data-tooltip="Esta es la descripción de un tooltip" data-flow="top-right">
          <span className="material-icons-round">help</span>
        </span>
        <span className="icon-box bg-light" data-tooltip="Esta es la descripción de un tooltip" data-flow="top">
          <span className="material-icons-round">help</span>
        </span>
        <span className="icon-box bg-light" data-tooltip="Esta es la descripción de un tooltip" data-flow="top-left">
          <span className="material-icons-round">help</span>
        </span>
      </div>

      <div className="tooltip-row">
        <div className="tooltip-column left">
          <span
            className="icon-box bg-light"
            data-tooltip="Esta es la descripción de un tooltip"
            data-flow="right-bottom">
            <span className="material-icons-round">help</span>
          </span>
          <span className="icon-box bg-light" data-tooltip="Esta es la descripción de un tooltip" data-flow="right">
            <span className="material-icons-round">help</span>
          </span>
          <span className="icon-box bg-light" data-tooltip="Esta es la descripción de un tooltip" data-flow="right-top">
            <span className="material-icons-round">help</span>
          </span>
        </div>
        <div className="tooltip-column right">
          <span
            className="icon-box bg-light"
            data-tooltip="Esta es la descripción de un tooltip"
            data-flow="left-bottom">
            <span className="material-icons-round">help</span>
          </span>
          <span className="icon-box bg-light" data-tooltip="Esta es la descripción de un tooltip" data-flow="left">
            <span className="material-icons-round">help</span>
          </span>
          <span className="icon-box bg-light" data-tooltip="Esta es la descripción de un tooltip" data-flow="left-top">
            <span className="material-icons-round">help</span>
          </span>
        </div>
      </div>

      <div className="tooltip-row">
        <span
          className="icon-box bg-light"
          data-tooltip="Esta es la descripción de un tooltip"
          data-flow="bottom-right">
          <span className="material-icons-round">help</span>
        </span>
        <span className="icon-box bg-light" data-tooltip="Esta es la descripción de un tooltip" data-flow="bottom">
          <span className="material-icons-round">help</span>
        </span>
        <span className="icon-box bg-light" data-tooltip="Esta es la descripción de un tooltip" data-flow="bottom-left">
          <span className="material-icons-round">help</span>
        </span>
      </div>
    </div>
  );
};

Tooltip.story = {
  name: 'Tooltip'
};
