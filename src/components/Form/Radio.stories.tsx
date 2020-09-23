// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components

// Config
export default {
  title: 'Componentes|Formulario/Radio',
  decorators: [withA11y]
};

export const CasillaUnica = (): JSX.Element => {
  return (
    <>
      <div className="custom-control custom-radio">
        <input
          className="custom-control-input"
          type="radio"
          name="profession"
          id="profession-designer"
          value="designer"
          checked
        />
        <label className="custom-control-label" htmlFor="profession-designer">
          Designer
        </label>
      </div>
      <div className="custom-control custom-radio">
        <input
          className="custom-control-input"
          type="radio"
          name="profession"
          id="profession-developer"
          value="developer"
        />
        <label className="custom-control-label" htmlFor="profession-developer">
          Developer
        </label>
      </div>
    </>
  );
};
CasillaUnica.story = {
  name: 'Casilla única'
};

export const Deshabilitado = (): JSX.Element => {
  return (
    <>
      <div className="custom-control custom-radio">
        <input
          className="custom-control-input"
          type="radio"
          name="profession"
          id="profession-designer"
          value="designer"
          disabled
        />
        <label className="custom-control-label" htmlFor="profession-designer">
          Deshabilitado
        </label>
      </div>
    </>
  );
};
