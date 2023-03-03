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
        <button
          type="button"
          className="btn btn-link"
          data-tooltip="Esta es la descripción de un tooltip"
          data-flow="top-left">
          TOP-LEFT
        </button>
        <button
          type="button"
          className="btn btn-link"
          data-tooltip="Esta es la descripción de un tooltip"
          data-flow="top">
          TOP
        </button>
        <button
          type="button"
          className="btn btn-link"
          data-tooltip="Esta es la descripción de un tooltip"
          data-flow="top-right">
          TOP-RIGHT
        </button>
      </div>

      <div className="tooltip-row">
        <button
          type="button"
          className="btn btn-link"
          data-tooltip="Esta es la descripción de un tooltip"
          data-flow="bottom-left">
          BOTTOM-LEFT
        </button>
        <button
          type="button"
          className="btn btn-link"
          data-tooltip="Esta es la descripción de un tooltip"
          data-flow="bottom">
          BOTTOM
        </button>
        <button
          type="button"
          className="btn btn-link"
          data-tooltip="Esta es la descripción de un tooltip"
          data-flow="bottom-right">
          BOTTOM-RIGHT
        </button>
      </div>

      <div className="tooltip-row">
        <button
          type="button"
          className="btn btn-link"
          data-tooltip="Esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip"
          data-flow="left-top">
          LEFT-TOP
        </button>
        <button
          type="button"
          className="btn btn-link"
          data-tooltip="Esta es la descripción de un tooltip"
          data-flow="left">
          LEFT
        </button>
        <button
          type="button"
          className="btn btn-link"
          data-tooltip="Esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip"
          data-flow="left-bottom">
          LEFT-BOTTOM
        </button>
      </div>

      <div className="tooltip-row">
        <button
          type="button"
          className="btn btn-link"
          data-tooltip="Esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip"
          data-flow="right-top">
          RIGHT-TOP
        </button>
        <button
          type="button"
          className="btn btn-link"
          data-tooltip="Esta es la descripción de un tooltip"
          data-flow="right">
          RIGHT
        </button>
        <button
          type="button"
          className="btn btn-link"
          data-tooltip="Esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip"
          data-flow="right-bottom">
          RIGHT-BOTTOM
        </button>
      </div>

      <br />
      <br />
      <br />

      <div className="tooltip-row">
        <a href="" data-tooltip="Esta es la descripción de un tooltip" data-flow="top-left">
          TOP-LEFT
        </a>
        <a href="" data-tooltip="Esta es la descripción de un tooltip" data-flow="top">
          TOP
        </a>
        <a href="" data-tooltip="Esta es la descripción de un tooltip" data-flow="top-right">
          TOP-RIGHT
        </a>
      </div>

      <div className="tooltip-row">
        <a href="" data-tooltip="Esta es la descripción de un tooltip" data-flow="bottom-left">
          BOTTOM-LEFT
        </a>
        <a href="" data-tooltip="Esta es la descripción de un tooltip" data-flow="bottom">
          BOTTOM
        </a>
        <a href="" data-tooltip="Esta es la descripción de un tooltip" data-flow="bottom-right">
          BOTTOM-RIGHT
        </a>
      </div>

      <div className="tooltip-row">
        <a
          href=""
          data-tooltip="Esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip"
          data-flow="left-top">
          LEFT-TOP
        </a>
        <a href="" data-tooltip="Esta es la descripción de un tooltip" data-flow="left">
          LEFT
        </a>
        <a
          href=""
          data-tooltip="Esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip"
          data-flow="left-bottom">
          LEFT-BOTTOM
        </a>
      </div>

      <div className="tooltip-row">
        <a
          href=""
          data-tooltip="Esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip"
          data-flow="right-top">
          RIGHT-TOP
        </a>
        <a href="" data-tooltip="Esta es la descripción de un tooltip" data-flow="right">
          RIGHT
        </a>
        <a
          href=""
          data-tooltip="Esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip"
          data-flow="right-bottom">
          RIGHT-BOTTOM
        </a>
      </div>

      <br />
      <br />
      <br />

      <div className="tooltip-row">
        <div className="icon-box bg-light" data-tooltip="Esta es la descripción de un tooltip" data-flow="top-left">
          <span className="material-icons-round">info</span>
        </div>
        <div className="icon-box bg-light" data-tooltip="Esta es la descripción de un tooltip" data-flow="top">
          <span className="material-icons-round">info</span>
        </div>
        <div className="icon-box bg-light" data-tooltip="Esta es la descripción de un tooltip" data-flow="top-right">
          <span className="material-icons-round">info</span>
        </div>
      </div>

      <div className="tooltip-row">
        <div className="icon-box bg-light" data-tooltip="Esta es la descripción de un tooltip" data-flow="bottom-left">
          <span className="material-icons-round">info</span>
        </div>
        <div className="icon-box bg-light" data-tooltip="Esta es la descripción de un tooltip" data-flow="bottom">
          <span className="material-icons-round">info</span>
        </div>
        <div className="icon-box bg-light" data-tooltip="Esta es la descripción de un tooltip" data-flow="bottom-right">
          <span className="material-icons-round">info</span>
        </div>
      </div>

      <div className="tooltip-row">
        <div
          className="icon-box bg-light"
          data-tooltip="Esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip"
          data-flow="left-top">
          <span className="material-icons-round">info</span>
        </div>
        <div className="icon-box bg-light" data-tooltip="Esta es la descripción de un tooltip" data-flow="left">
          <span className="material-icons-round">info</span>
        </div>
        <div
          className="icon-box bg-light"
          data-tooltip="Esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip"
          data-flow="left-bottom">
          <span className="material-icons-round">info</span>
        </div>
      </div>

      <div className="tooltip-row">
        <div
          className="icon-box bg-light"
          data-tooltip="Esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip"
          data-flow="right-top">
          <span className="material-icons-round">info</span>
        </div>
        <div className="icon-box bg-light" data-tooltip="Esta es la descripción de un tooltip" data-flow="right">
          <span className="material-icons-round">info</span>
        </div>
        <div
          className="icon-box bg-light"
          data-tooltip="Esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip"
          data-flow="right-bottom">
          <span className="material-icons-round">info</span>
        </div>
      </div>

      <br />
      <br />
      <br />

      <div className="tooltip-row">
        <div className="icon-box" data-tooltip="Esta es la descripción de un tooltip" data-flow="top-left">
          <i className="bx bxs-cart"></i>
        </div>
        <div className="icon-box" data-tooltip="Esta es la descripción de un tooltip" data-flow="top">
          <i className="bx bxs-cart"></i>
        </div>
        <div className="icon-box" data-tooltip="Esta es la descripción de un tooltip" data-flow="top-right">
          <i className="bx bxs-cart"></i>
        </div>
      </div>

      <div className="tooltip-row">
        <div className="icon-box" data-tooltip="Esta es la descripción de un tooltip" data-flow="bottom-left">
          <i className="bx bxs-cart"></i>
        </div>
        <div className="icon-box" data-tooltip="Esta es la descripción de un tooltip" data-flow="bottom">
          <i className="bx bxs-cart"></i>
        </div>
        <div className="icon-box" data-tooltip="Esta es la descripción de un tooltip" data-flow="bottom-right">
          <i className="bx bxs-cart"></i>
        </div>
      </div>

      <div className="tooltip-row">
        <div
          className="icon-box"
          data-tooltip="Esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip"
          data-flow="left-top">
          <i className="bx bxs-cart"></i>
        </div>
        <div className="icon-box" data-tooltip="Esta es la descripción de un tooltip" data-flow="left">
          <i className="bx bxs-cart"></i>
        </div>
        <div
          className="icon-box"
          data-tooltip="Esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip"
          data-flow="left-bottom">
          <i className="bx bxs-cart"></i>
        </div>
      </div>

      <div className="tooltip-row">
        <div
          className="icon-box"
          data-tooltip="Esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip"
          data-flow="right-top">
          <i className="bx bxs-cart"></i>
        </div>
        <div className="icon-box" data-tooltip="Esta es la descripción de un tooltip" data-flow="right">
          <i className="bx bxs-cart"></i>
        </div>
        <div
          className="icon-box"
          data-tooltip="Esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip"
          data-flow="right-bottom">
          <i className="bx bxs-cart"></i>
        </div>
      </div>
    </div>
  );
};

Tooltip.story = {
  name: 'Tooltip'
};
