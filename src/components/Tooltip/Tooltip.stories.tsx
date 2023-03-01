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
        data-tooltip="Esta es la descripción de un tooltip"
        data-flow="right">
        RIGHT
      </button>
      <br />
      <br />
      <br />
      <p>
        Lorem{' '}
        <a href="" data-tooltip="Esta es la descripción de un tooltip" data-flow="top">
          LINK
        </a>{' '}
        ipsum dolor, sit amet consectetur adipisicing elit. Debitis molestiae suscipit laudantium nisi
        corruptipraesentium perspiciatis obcaecati consectetur, est illum dolorum aperiam sint deleniti molestias fugit
        esse excepturi. Laboriosam, sint.
      </p>
    </div>
  );
};

Tooltip.story = {
  name: 'Tooltip'
};
