// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Configuración general del componente
export default {
  title: 'Formulario|Radio',
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
      <div className="custom-control custom-radio">
        <input
          className="custom-control-input is-invalid"
          type="radio"
          name="profession"
          id="validation-content"
          value="content"
        />
        <label className="custom-control-label" htmlFor="validation-content">
          Validación
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

export const BotonRadio = (): JSX.Element => {
  return (
    <>
      <div className="storybook__container-btn" data-toggle="buttons">
        <label className="btn btn-chip btn-sm">
          <input type="radio" name="options1" id="option1" className="btn-check"></input>
          Botón
        </label>
        <label className="btn btn-chip btn-sm active">
          <input type="radio" name="options2" id="option2" className="btn-check" checked></input>
          Botón
        </label>
        <label className="btn btn-chip btn-sm disabled ">
          <input type="radio" name="options3" id="option3" className="btn-check"></input>
          Botón
        </label>
      </div>
    </>
  );
};

BotonRadio.story = {
  name: 'Botón de selección única'
};
