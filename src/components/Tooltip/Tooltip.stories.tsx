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
      <button
        type="button"
        className="btn btn-link"
        data-tooltip="Esta es la descripción de un tooltip"
        data-flow="top">
        TOP
      </button>
      <br />
      <br />
      <br />
      <button
        type="button"
        className="btn btn-link"
        data-tooltip="Esta es la descripción de un tooltip"
        data-flow="top-left">
        TOP-LEFT
      </button>
      <br />
      <br />
      <br />
      <button
        type="button"
        className="btn btn-link"
        data-tooltip="Esta es la descripción de un tooltip"
        data-flow="top-right">
        TOP-RIGHT
      </button>
      <br />
      <br />
      <br />
      <button
        type="button"
        className="btn btn-link"
        data-tooltip="Esta es la descripción de un tooltip"
        data-flow="bottom">
        BOTTOM
      </button>
      <br />
      <br />
      <br />
      <button
        type="button"
        className="btn btn-link"
        data-tooltip="Esta es la descripción de un tooltip"
        data-flow="bottom-left">
        BOTTOM-LEFT
      </button>
      <br />
      <br />
      <br />
      <button
        type="button"
        className="btn btn-link"
        data-tooltip="Esta es la descripción de un tooltip"
        data-flow="bottom-right">
        BOTTOM-RIGHT
      </button>
      <br />
      <br />
      <br />
      <button
        type="button"
        className="btn btn-link"
        data-tooltip="Esta es la descripción de un tooltip"
        data-flow="left">
        LEFT
      </button>
      <br />
      <br />
      <br />
      <button
        type="button"
        className="btn btn-link"
        data-tooltip="Esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip,Esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltipEsta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip"
        data-flow="left-top">
        LEFT-TOP
      </button>
      <br />
      <br />
      <br />
      <button
        type="button"
        className="btn btn-link"
        data-tooltip="Esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip,Esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltipEsta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip"
        data-flow="left-bottom">
        LEFT-BOTTOM
      </button>
      <br />
      <br />
      <br />
      <button
        type="button"
        className="btn btn-link"
        data-tooltip="Esta es la descripción de un tooltip"
        data-flow="right">
        RIGHT
      </button>
      <br />
      <br />
      <br />
      <button
        type="button"
        className="btn btn-link"
        data-tooltip="Esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip,Esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltipEsta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip"
        data-flow="right-top">
        RIGHT-TOP
      </button>
      <br />
      <br />
      <br />
      <button
        type="button"
        className="btn btn-link"
        data-tooltip="Esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip,Esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltipEsta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip"
        data-flow="right-bottom">
        RIGHT-BOTTOM
      </button>
      <br />
      <br />
      <hr />
      <br />
      <br />
      <a href="" data-tooltip="Esta es la descripción de un tooltip" data-flow="top">
        TOP
      </a>
      <br />
      <br />
      <br />
      <a href="" data-tooltip="Esta es la descripción de un tooltip" data-flow="top-left">
        TOP-LEFT
      </a>
      <br />
      <br />
      <br />
      <a href="" data-tooltip="Esta es la descripción de un tooltip" data-flow="top-right">
        TOP-RIGHT
      </a>
      <br />
      <br />
      <br />
      <a href="" data-tooltip="Esta es la descripción de un tooltip" data-flow="bottom">
        BOTTOM
      </a>
      <br />
      <br />
      <br />
      <a href="" data-tooltip="Esta es la descripción de un tooltip" data-flow="bottom-left">
        BOTTOM-LEFT
      </a>
      <br />
      <br />
      <br />
      <a href="" data-tooltip="Esta es la descripción de un tooltip" data-flow="bottom-right">
        BOTTOM-RIGHT
      </a>
      <br />
      <br />
      <br />
      <a href="" data-tooltip="Esta es la descripción de un tooltip" data-flow="left">
        LEFT
      </a>
      <br />
      <br />
      <br />
      <a
        href=""
        data-tooltip="Esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip,Esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltipEsta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip"
        data-flow="left-top">
        LEFT-TOP
      </a>
      <br />
      <br />
      <br />
      <a
        href=""
        data-tooltip="Esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip,Esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltipEsta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip"
        data-flow="left-bottom">
        LEFT-BOTTOM
      </a>
      <br />
      <br />
      <br />
      <a href="" data-tooltip="Esta es la descripción de un tooltip" data-flow="right">
        RIGHT
      </a>
      <br />
      <br />
      <br />
      <a
        href=""
        data-tooltip="Esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip,Esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltipEsta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip"
        data-flow="right-top">
        RIGHT-TOP
      </a>
      <br />
      <br />
      <br />
      <a
        href=""
        data-tooltip="Esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip,Esta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltipEsta es la descripción de un tooltip, esta es la descripción de un tooltip, esta es la descripción de un tooltip"
        data-flow="right-bottom">
        RIGHT-BOTTOM
      </a>
      <br />
      <br />
      <hr />
      <br />
      <br />
      <div data-tooltip="Esta es la descripción de un tooltip" data-flow="top">
        <span className="material-icons-round">info</span>
      </div>
      <br />
      <br />
      <br />
      <div data-tooltip="Esta es la descripción de un tooltip" data-flow="top">
        <span className="material-icons-round">info</span>
      </div>
      <br />
      <br />
      <br />
      <div data-tooltip="Esta es la descripción de un tooltip" data-flow="top">
        <span className="material-icons-round">info</span>
      </div>
      <br />
      <br />
      <br />
      <div data-tooltip="Esta es la descripción de un tooltip" data-flow="top">
        <span className="material-icons-round">info</span>
      </div>
      <br />
      <br />
      <br />
      <div data-tooltip="Esta es la descripción de un tooltip" data-flow="top">
        <span className="material-icons-round">info</span>
      </div>
      <br />
      <br />
      <br />
      <div data-tooltip="Esta es la descripción de un tooltip" data-flow="top">
        <span className="material-icons-round">info</span>
      </div>
      <br />
      <br />
      <br />
      <div data-tooltip="Esta es la descripción de un tooltip" data-flow="top">
        <span className="material-icons-round">info</span>
      </div>
      <br />
      <br />
      <br />
      <div data-tooltip="Esta es la descripción de un tooltip" data-flow="top">
        <span className="material-icons-round">info</span>
      </div>
      <br />
      <br />
      <br />
      <div data-tooltip="Esta es la descripción de un tooltip" data-flow="top">
        <span className="material-icons-round">info</span>
      </div>
      <br />
      <br />
      <br />
      <div data-tooltip="Esta es la descripción de un tooltip" data-flow="top">
        <span className="material-icons-round">info</span>
      </div>
      <br />
      <br />
      <br />
      <div data-tooltip="Esta es la descripción de un tooltip" data-flow="top">
        <span className="material-icons-round">info</span>
      </div>
      <br />
      <br />
      <br />
      <div data-tooltip="Esta es la descripción de un tooltip" data-flow="top">
        <span className="material-icons-round">info</span>
      </div>
      <br />
      <br />
      <hr />
      <br />
      <br />
      <div data-tooltip="Esta es la descripción de un tooltip" data-flow="top">
        <i className="bx bxs-info-circle"></i>
      </div>
      <br />
      <br />
      <br />
      <div data-tooltip="Esta es la descripción de un tooltip" data-flow="top">
        <i className="bx bxs-info-circle"></i>
      </div>
      <br />
      <br />
      <br />
      <div data-tooltip="Esta es la descripción de un tooltip" data-flow="top">
        <i className="bx bxs-info-circle"></i>
      </div>
      <br />
      <br />
      <br />
      <div data-tooltip="Esta es la descripción de un tooltip" data-flow="top">
        <i className="bx bxs-info-circle"></i>
      </div>
      <br />
      <br />
      <br />
      <div data-tooltip="Esta es la descripción de un tooltip" data-flow="top">
        <i className="bx bxs-info-circle"></i>
      </div>
      <br />
      <br />
      <br />
      <div data-tooltip="Esta es la descripción de un tooltip" data-flow="top">
        <i className="bx bxs-info-circle"></i>
      </div>
      <br />
      <br />
      <br />
      <div data-tooltip="Esta es la descripción de un tooltip" data-flow="top">
        <i className="bx bxs-info-circle"></i>
      </div>
      <br />
      <br />
      <br />
      <div data-tooltip="Esta es la descripción de un tooltip" data-flow="top">
        <i className="bx bxs-info-circle"></i>
      </div>
      <br />
      <br />
      <br />
      <div data-tooltip="Esta es la descripción de un tooltip" data-flow="top">
        <i className="bx bxs-info-circle"></i>
      </div>
      <br />
      <br />
      <br />
      <div data-tooltip="Esta es la descripción de un tooltip" data-flow="top">
        <i className="bx bxs-info-circle"></i>
      </div>
      <br />
      <br />
      <br />
      <div data-tooltip="Esta es la descripción de un tooltip" data-flow="top">
        <i className="bx bxs-info-circle"></i>
      </div>
      <br />
      <br />
      <br />
      <div data-tooltip="Esta es la descripción de un tooltip" data-flow="top">
        <i className="bx bxs-info-circle"></i>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

Tooltip.story = {
  name: 'Tooltip'
};
