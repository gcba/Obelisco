// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Configuración general del componente
export default {
  title: 'Formulario|Checkbox',
  decorators: [withA11y]
};

export const CasillaMultiple = (): JSX.Element => {
  const [value, setValue] = React.useState<boolean>(true);
  return (
    <>
      <div className="form-group">
        <label>Seleccioná una o varias opciones *</label>
        <span className="form-text">Texto de asistencia</span>
      </div>
      <div className="custom-control custom-checkbox">
        <input
          className="custom-control-input"
          type="checkbox"
          id="skills-copywrite-input"
          name="skills"
          value="copywrite"
          checked={value}
          onChange={(event) => setValue(event.target.checked)}
        />
        <label className="custom-control-label" htmlFor="skills-copywrite-input">
          Redacción
        </label>
      </div>
      <div className="custom-control custom-checkbox">
        <input className="custom-control-input" type="checkbox" id="skills-design-input" name="skills" value="design" />
        <label className="custom-control-label" htmlFor="skills-design-input">
          Diseño
        </label>
      </div>
      <div className="custom-control custom-checkbox">
        <input
          className="custom-control-input"
          type="checkbox"
          id="skills-development-input"
          name="skills"
          value="development"
        />
        <label className="custom-control-label" htmlFor="skills-development-input">
          Desarrollo
        </label>
      </div>
      <div className="custom-control custom-checkbox">
        <input
          className="custom-control-input is-invalid"
          type="checkbox"
          id="skills-validation-input"
          name="skills"
          value="development"
        />
        <label className="custom-control-label" htmlFor="skills-validation-input">
          Validacion
        </label>
      </div>
    </>
  );
};

CasillaMultiple.story = {
  name: 'Casilla múltiple'
};

export const CasillaMultipleSinTexto = (): JSX.Element => {
  return (
    <>
      <div className="custom-control custom-checkbox">
        <input className="custom-control-input" type="checkbox" id="no-text-input" name="skills" value="no-text" />
        <label
          className="custom-control-label no-text"
          htmlFor="no-text-input"
          aria-label="Casilla múltiple sin texto"></label>
      </div>
    </>
  );
};

CasillaMultipleSinTexto.story = {
  name: 'Sin texto'
};

export const TerminosYCondiciones = (): JSX.Element => {
  return (
    <div className="custom-control custom-checkbox">
      <input
        className="custom-control-input"
        type="checkbox"
        id="skills-copywrite-input"
        name="skills"
        value="copywrite"
      />
      <label className="custom-control-label" htmlFor="skills-copywrite-input">
        Acepto los <a href="#">términos y condiciones</a>
      </label>
    </div>
  );
};

TerminosYCondiciones.story = {
  name: 'Términos y condiciones'
};

export const Deshabilitado = (): JSX.Element => {
  return (
    <div className="custom-control custom-checkbox">
      <input
        className="custom-control-input"
        type="checkbox"
        id="skills-copywrite-input"
        name="skills"
        value="copywrite"
        disabled
      />
      <label className="custom-control-label" htmlFor="skills-copywrite-input">
        Deshabilitado
      </label>
    </div>
  );
};

export const BotonCheck = (): JSX.Element => {
  return (
    <div className="storybook__container-btn">
      <input type="checkbox" className="btn-check" id="btn-check" autoComplete="off" />
      <label className="btn btn-chip btn-sm" htmlFor="btn-check">
        Botón
      </label>

      <input type="checkbox" className="btn-check" id="btn-check2" autoComplete="off" />
      <label className="btn btn-chip btn-sm" htmlFor="btn-check2">
        Botón
      </label>

      <input type="checkbox" className="btn-check" id="btn-check3" autoComplete="off" disabled />
      <label className="btn btn-chip btn-sm disabled" htmlFor="btn-check3">
        Botón
      </label>
    </div>
  );
};

BotonCheck.story = { name: 'Botón de selección mútiple' };
