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
      <div className="form-group">
        <label>Seleccioná una opción *</label>
        <span className="form-text">Texto de asistencia</span>
      </div>
      <div className="custom-control custom-radio">
        <input
          className="custom-control-input"
          type="radio"
          name="profession"
          id="profession-designer"
          value="designer"
          defaultChecked={true}
        />
        <label className="custom-control-label" htmlFor="profession-designer">
          Diseñador
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
          Desarrollador
        </label>
      </div>
      <div className="custom-control custom-radio">
        <input
          className="custom-control-input"
          type="radio"
          name="profession"
          id="profession-content"
          value="content"
        />
        <label className="custom-control-label" htmlFor="profession-content">
          Redactor de contenidos
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
