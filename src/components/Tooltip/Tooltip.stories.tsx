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
      <p className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
        <span className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="top-right">
          <a href=""> ENLACE </a>
        </span>{' '}
        Porro consequuntur molestias cum quaerat, omnis impedit exercitationem praesentium, quod placeat minima nobis
        ullam{' '}
        <span className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="top-left">
          <a href=""> ENLACE </a>
        </span>{' '}
        pariatur voluptas iure accusamus? Debitis quasi hic.
      </p>

      <div className="tooltip-row center">
        <span className="tooltip" data-tooltip="Ayuda" data-flow="top-left">
          <button type="button" className="btn btn-success">
            TOP-LEFT
          </button>
        </span>
        <span className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="top">
          <button type="button" className="btn btn-success">
            TOP
          </button>
        </span>
        <span className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="top-right">
          <button type="button" className="btn btn-success">
            TOP-RIGHT
          </button>
        </span>
      </div>

      <div className="tooltip-row left">
        <span
          className="tooltip"
          data-tooltip="Esta es la descripción de un tooltip, Esta es la descripción de un tooltip, Esta es la descripción de un tooltip"
          data-flow="left-bottom">
          <button type="button" className="btn btn-success">
            LEFT-BOTTOM
          </button>
        </span>
        <span className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="left">
          <button type="button" className="btn btn-success">
            LEFT
          </button>
        </span>
        <span
          className="tooltip"
          data-tooltip="Esta es la descripción de un tooltip, Esta es la descripción de un tooltip, Esta es la descripción de un tooltip"
          data-flow="left-top">
          <button type="button" className="btn btn-success">
            LEFT-TOP
          </button>
        </span>
      </div>

      <div className="tooltip-row right">
        <span
          className="tooltip"
          data-tooltip="Esta es la descripción de un tooltip, Esta es la descripción de un tooltip, Esta es la descripción de un tooltip"
          data-flow="right-bottom">
          <button type="button" className="btn btn-success">
            RIGHT-BOTTOM
          </button>
        </span>
        <span className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="right">
          <button type="button" className="btn btn-success">
            RIGHT
          </button>
        </span>
        <span
          className="tooltip"
          data-tooltip="Esta es la descripción de un tooltip, Esta es la descripción de un tooltip, Esta es la descripción de un tooltip"
          data-flow="right-top">
          <button type="button" className="btn btn-success">
            RIGHT-TOP
          </button>
        </span>
      </div>

      <div className="tooltip-row center">
        <span className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="bottom-left">
          <button type="button" className="btn btn-success">
            BOTTOM-LEFT
          </button>
        </span>
        <span className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="bottom">
          <button type="button" className="btn btn-success">
            BOTTOM
          </button>
        </span>
        <span className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="bottom-right">
          <button type="button" className="btn btn-success">
            BOTTOM-RIGHT
          </button>
        </span>
      </div>

      <hr />

      <div className="tooltip-row center">
        <span className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="top-left">
          <a href="">ENLACE</a>
        </span>
        <span className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="top">
          <a href="">ENLACE</a>
        </span>
        <span className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="top-right">
          <a href="">ENLACE</a>
        </span>
      </div>

      <div className="tooltip-row left">
        <span
          className="tooltip"
          data-tooltip="Esta es la descripción de un tooltip, Esta es la descripción de un tooltip, Esta es la descripción de un tooltip"
          data-flow="left-bottom">
          <a href="">ENLACE</a>
        </span>
        <span className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="left">
          <a href="">ENLACE</a>
        </span>
        <span
          className="tooltip"
          data-tooltip="Esta es la descripción de un tooltip, Esta es la descripción de un tooltip, Esta es la descripción de un tooltip"
          data-flow="left-top">
          <a href="">ENLACE</a>
        </span>
      </div>

      <div className="tooltip-row right">
        <span
          className="tooltip"
          data-tooltip="Esta es la descripción de un tooltip, Esta es la descripción de un tooltip, Esta es la descripción de un tooltip"
          data-flow="right-bottom">
          <a href="">ENLACE</a>
        </span>
        <span className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="right">
          <a href="">ENLACE</a>
        </span>
        <span
          className="tooltip"
          data-tooltip="Esta es la descripción de un tooltip, Esta es la descripción de un tooltip, Esta es la descripción de un tooltip"
          data-flow="right-top">
          <a href="">ENLACE</a>
        </span>
      </div>

      <div className="tooltip-row center">
        <span className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="bottom-left">
          <a href="">ENLACE</a>
        </span>
        <span className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="bottom">
          <a href="">ENLACE</a>
        </span>
        <span className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="bottom-right">
          <a href="">ENLACE</a>
        </span>
      </div>

      <hr />

      <div className="tooltip-row center">
        <span className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="top-left">
          <i className="bx bx-check"></i>
        </span>
        <span className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="top">
          <i className="bx bx-check"></i>
        </span>
        <span className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="top-right">
          <i className="bx bx-check"></i>
        </span>
      </div>

      <div className="tooltip-row left">
        <span
          className="tooltip"
          data-tooltip="Esta es la descripción de un tooltip, Esta es la descripción de un tooltip, Esta es la descripción de un tooltip"
          data-flow="left-bottom">
          <i className="bx bx-check"></i>
        </span>
        <span className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="left">
          <i className="bx bx-check"></i>
        </span>
        <span
          className="tooltip"
          data-tooltip="Esta es la descripción de un tooltip, Esta es la descripción de un tooltip, Esta es la descripción de un tooltip"
          data-flow="left-top">
          <i className="bx bx-check"></i>
        </span>
      </div>

      <div className="tooltip-row right">
        <span
          className="tooltip"
          data-tooltip="Esta es la descripción de un tooltip, Esta es la descripción de un tooltip, Esta es la descripción de un tooltip"
          data-flow="right-bottom">
          <i className="bx bx-check"></i>
        </span>
        <span className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="right">
          <i className="bx bx-check"></i>
        </span>
        <span
          className="tooltip"
          data-tooltip="Esta es la descripción de un tooltip, Esta es la descripción de un tooltip, Esta es la descripción de un tooltip"
          data-flow="right-top">
          <i className="bx bx-check"></i>
        </span>
      </div>

      <div className="tooltip-row center">
        <span className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="bottom-left">
          <i className="bx bx-check"></i>
        </span>
        <span className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="bottom">
          <i className="bx bx-check"></i>
        </span>
        <span className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="bottom-right">
          <i className="bx bx-check"></i>
        </span>
      </div>

      <hr />

      <div className="tooltip-row center">
        <span className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="top-left">
          <span className="material-icons-round">bolt</span>
        </span>
        <span className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="top">
          <span className="material-icons-round">bolt</span>
        </span>
        <span className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="top-right">
          <span className="material-icons-round">bolt</span>
        </span>
      </div>

      <div className="tooltip-row left">
        <span
          className="tooltip"
          data-tooltip="Esta es la descripción de un tooltip, Esta es la descripción de un tooltip, Esta es la descripción de un tooltip"
          data-flow="left-bottom">
          <span className="material-icons-round">bolt</span>
        </span>
        <span className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="left">
          <span className="material-icons-round">bolt</span>
        </span>
        <span
          className="tooltip"
          data-tooltip="Esta es la descripción de un tooltip, Esta es la descripción de un tooltip, Esta es la descripción de un tooltip"
          data-flow="left-top">
          <span className="material-icons-round">bolt</span>
        </span>
      </div>

      <div className="tooltip-row right">
        <span
          className="tooltip"
          data-tooltip="Esta es la descripción de un tooltip, Esta es la descripción de un tooltip, Esta es la descripción de un tooltip"
          data-flow="right-bottom">
          <span className="material-icons-round">bolt</span>
        </span>
        <span className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="right">
          <span className="material-icons-round">bolt</span>
        </span>
        <span
          className="tooltip"
          data-tooltip="Esta es la descripción de un tooltip, Esta es la descripción de un tooltip, Esta es la descripción de un tooltip"
          data-flow="right-top">
          <span className="material-icons-round">bolt</span>
        </span>
      </div>

      <div className="tooltip-row center">
        <span className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="bottom-left">
          <span className="material-icons-round">bolt</span>
        </span>
        <span className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="bottom">
          <span className="material-icons-round">bolt</span>
        </span>
        <span className="tooltip" data-tooltip="Esta es la descripción de un tooltip" data-flow="bottom-right">
          <span className="material-icons-round">bolt</span>
        </span>
      </div>

      <hr />

      <div className="tooltip-row center">
        <div
          className="tooltip icon-box bg-light"
          data-tooltip="Esta es la descripción de un tooltip"
          data-flow="top-left">
          <span className="material-icons-round">help</span>
        </div>
        <div className="tooltip icon-box bg-light" data-tooltip="Esta es la descripción de un tooltip" data-flow="top">
          <span className="material-icons-round">help</span>
        </div>
        <div
          className="tooltip icon-box bg-light"
          data-tooltip="Esta es la descripción de un tooltip"
          data-flow="top-right">
          <span className="material-icons-round">help</span>
        </div>
      </div>

      <div className="tooltip-row left">
        <div
          className="tooltip icon-box bg-light"
          data-tooltip="Esta es la descripción de un tooltip, Esta es la descripción de un tooltip, Esta es la descripción de un tooltip"
          data-flow="left-bottom">
          <span className="material-icons-round">help</span>
        </div>
        <div className="tooltip icon-box bg-light" data-tooltip="Esta es la descripción de un tooltip" data-flow="left">
          <span className="material-icons-round">help</span>
        </div>
        <div
          className="tooltip icon-box bg-light"
          data-tooltip="Esta es la descripción de un tooltip, Esta es la descripción de un tooltip, Esta es la descripción de un tooltip"
          data-flow="left-top">
          <span className="material-icons-round">help</span>
        </div>
      </div>

      <div className="tooltip-row right">
        <div
          className="tooltip icon-box bg-light"
          data-tooltip="Esta es la descripción de un tooltip, Esta es la descripción de un tooltip, Esta es la descripción de un tooltip"
          data-flow="right-bottom">
          <span className="material-icons-round">help</span>
        </div>
        <div
          className="tooltip icon-box bg-light"
          data-tooltip="Esta es la descripción de un tooltip"
          data-flow="right">
          <span className="material-icons-round">help</span>
        </div>
        <div
          className="tooltip icon-box bg-light"
          data-tooltip="Esta es la descripción de un tooltip, Esta es la descripción de un tooltip, Esta es la descripción de un tooltip"
          data-flow="right-top">
          <span className="material-icons-round">help</span>
        </div>
      </div>

      <div className="tooltip-row center">
        <span
          className="tooltip icon-box bg-light"
          data-tooltip="Esta es la descripción de un tooltip"
          data-flow="bottom-left">
          <span className="material-icons-round">help</span>
        </span>
        <div
          className="tooltip icon-box bg-light"
          data-tooltip="Esta es la descripción de un tooltip"
          data-flow="bottom">
          <span className="material-icons-round">help</span>
        </div>
        <div
          className="tooltip icon-box bg-light"
          data-tooltip="Esta es la descripción de un tooltip"
          data-flow="bottom-right">
          <span className="material-icons-round">help</span>
        </div>
      </div>
    </div>
  );
};

Tooltip.story = {
  name: 'Tooltip'
};
