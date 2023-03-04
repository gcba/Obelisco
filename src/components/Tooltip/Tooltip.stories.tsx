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
        <div className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="top-left">
          <button type="button" className="btn btn-link">
            TOP-LEFT
          </button>
        </div>
        <div className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="top">
          <button type="button" className="btn btn-link">
            TOP
          </button>
        </div>
        <div className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="top-right">
          <button type="button" className="btn btn-link">
            TOP-RIGHT
          </button>
        </div>
      </div>

      <div className="tooltip-row">
        <div className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="bottom-left">
          <button type="button" className="btn btn-link">
            BOTTOM-LEFT
          </button>
        </div>
        <div className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="bottom">
          <button type="button" className="btn btn-link">
            BOTTOM
          </button>
        </div>
        <div className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="bottom-right">
          <button type="button" className="btn btn-link">
            BOTTOM-RIGHT
          </button>
        </div>
      </div>

      <div className="tooltip-row">
        <div className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="left-bottom">
          <button type="button" className="btn btn-link">
            LEFT-BOTTOM
          </button>
        </div>
        <div className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="left">
          <button type="button" className="btn btn-link">
            LEFT
          </button>
        </div>
        <div className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="left-top">
          <button type="button" className="btn btn-link">
            LEFT-TOP
          </button>
        </div>
      </div>

      <div className="tooltip-row">
        <div className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="right-bottom">
          <button type="button" className="btn btn-link">
            RIGHT-BOTTOM
          </button>
        </div>
        <div className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="right">
          <button type="button" className="btn btn-link">
            RIGHT
          </button>
        </div>
        <div className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="right-top">
          <button type="button" className="btn btn-link">
            RIGHT-TOP
          </button>
        </div>
      </div>

      <div className="tooltip-row">
        <div className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="top-left">
          <a href="">TOP-LEFT</a>
        </div>
        <div className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="top">
          <a href="">TOP</a>
        </div>
        <div className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="top-right">
          <a href="">TOP-RIGHT</a>
        </div>
      </div>

      <div className="tooltip-row">
        <div className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="bottom-left">
          <a href="">BOTTOM-LEFT</a>
        </div>
        <div className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="bottom">
          <a href="">BOTTOM</a>
        </div>
        <div className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="bottom-right">
          <a href="">BOTTOM-RIGHT</a>
        </div>
      </div>

      <div className="tooltip-row">
        <div className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="left-bottom">
          <a href="">LEFT-BOTTOM</a>
        </div>
        <div className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="left">
          <a href="">LEFT</a>
        </div>
        <div className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="left-top">
          <a href="">LEFT-TOP</a>
        </div>
      </div>

      <div className="tooltip-row">
        <div className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="right-bottom">
          <a href="">RIGHT-BOTTOM</a>
        </div>
        <div className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="right">
          <a href="">RIGHT</a>
        </div>
        <div className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="right-top">
          <a href="">RIGHT-TOP</a>
        </div>
      </div>

      <div className="tooltip-row">
        <div className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="top-left">
          <i className="bx bxs-info-circle"></i>
        </div>
        <div className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="top">
          <i className="bx bxs-info-circle"></i>
        </div>
        <div className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="top-right">
          <i className="bx bxs-info-circle"></i>
        </div>
      </div>

      <div className="tooltip-row">
        <div className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="bottom-left">
          <i className="bx bxs-info-circle"></i>
        </div>
        <div className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="bottom">
          <i className="bx bxs-info-circle"></i>
        </div>
        <div className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="bottom-right">
          <i className="bx bxs-info-circle"></i>
        </div>
      </div>

      <div className="tooltip-row">
        <div className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="left-bottom">
          <i className="bx bxs-info-circle"></i>
        </div>
        <div className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="left">
          <i className="bx bxs-info-circle"></i>
        </div>
        <div className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="left-top">
          <i className="bx bxs-info-circle"></i>
        </div>
      </div>

      <div className="tooltip-row">
        <div className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="right-bottom">
          <i className="bx bxs-info-circle"></i>
        </div>
        <div className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="right">
          <i className="bx bxs-info-circle"></i>
        </div>
        <div className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="right-top">
          <i className="bx bxs-info-circle"></i>
        </div>
      </div>

      <div className="tooltip-row">
        <div className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="top-left">
          <span className="material-icons-round">info</span>
        </div>
        <div className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="top">
          <span className="material-icons-round">info</span>
        </div>
        <div className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="top-right">
          <span className="material-icons-round">info</span>
        </div>
      </div>

      <div className="tooltip-row">
        <div className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="bottom-left">
          <span className="material-icons-round">info</span>
        </div>
        <div className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="bottom">
          <span className="material-icons-round">info</span>
        </div>
        <div className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="bottom-right">
          <span className="material-icons-round">info</span>
        </div>
      </div>

      <div className="tooltip-row">
        <div className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="left-bottom">
          <span className="material-icons-round">info</span>
        </div>
        <div className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="left">
          <span className="material-icons-round">info</span>
        </div>
        <div className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="left-top">
          <span className="material-icons-round">info</span>
        </div>
      </div>

      <div className="tooltip-row">
        <div className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="right-bottom">
          <span className="material-icons-round">info</span>
        </div>
        <div className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="right">
          <span className="material-icons-round">info</span>
        </div>
        <div className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="right-top">
          <span className="material-icons-round">info</span>
        </div>
      </div>

      <div className="tooltip-row">
        <div
          className="tooltip icon-box bg-light"
          data-tooltip="Esta es la descripción de un tooltip"
          data-flow="top-left">
          <span className="material-icons-round">info</span>
        </div>
        <div className="tooltip icon-box bg-light" data-tooltip="Esta es la descripción de un tooltip" data-flow="top">
          <span className="material-icons-round">info</span>
        </div>
        <div
          className="tooltip icon-box bg-light"
          data-tooltip="Esta es la descripción de un tooltip"
          data-flow="top-right">
          <span className="material-icons-round">info</span>
        </div>
      </div>

      <div className="tooltip-row">
        <div
          className="tooltip icon-box bg-light"
          data-tooltip="Esta es la descripción de un tooltip"
          data-flow="bottom-left">
          <span className="material-icons-round">info</span>
        </div>
        <div
          className="tooltip icon-box bg-light"
          data-tooltip="Esta es la descripción de un tooltip"
          data-flow="bottom">
          <span className="material-icons-round">info</span>
        </div>
        <div
          className="tooltip icon-box bg-light"
          data-tooltip="Esta es la descripción de un tooltip"
          data-flow="bottom-right">
          <span className="material-icons-round">info</span>
        </div>
      </div>

      <div className="tooltip-row">
        <div
          className="tooltip icon-box bg-light"
          data-tooltip="Esta es la descripción de un tooltip"
          data-flow="left-bottom">
          <span className="material-icons-round">info</span>
        </div>
        <div className="tooltip icon-box bg-light" data-tooltip="Esta es la descripción de un tooltip" data-flow="left">
          <span className="material-icons-round">info</span>
        </div>
        <div
          className="tooltip icon-box bg-light"
          data-tooltip="Esta es la descripción de un tooltip"
          data-flow="left-top">
          <span className="material-icons-round">info</span>
        </div>
      </div>

      <div className="tooltip-row">
        <div
          className="tooltip icon-box bg-light"
          data-tooltip="Esta es la descripción de un tooltip"
          data-flow="right-bottom">
          <span className="material-icons-round">info</span>
        </div>
        <div
          className="tooltip icon-box bg-light"
          data-tooltip="Esta es la descripción de un tooltip"
          data-flow="right">
          <span className="material-icons-round">info</span>
        </div>
        <div
          className="tooltip icon-box bg-light"
          data-tooltip="Esta es la descripción de un tooltip"
          data-flow="right-top">
          <span className="material-icons-round">info</span>
        </div>
      </div>
    </div>
  );
};

Tooltip.story = {
  name: 'Tooltip'
};
