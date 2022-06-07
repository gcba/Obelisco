// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components

// Config
export default {
  title: 'Componentes|Formulario/Checkbox',
  decorators: [withA11y]
};

export const CasillaMultiple = (): JSX.Element => {
  const [value, setValue] = React.useState<boolean>(true);
  return (
    <>
      <div className="form-group">
        <label>Seleccioná una o varias opciónes *</label>
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
    </>
  );
};
CasillaMultiple.story = {
  name: 'Casilla múltiple'
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

export const TextoLargo = (): JSX.Element => {
  return (
    <div className="form-wrapper">
      <div className="custom-control custom-checkbox">
        <input
          className="custom-control-input"
          type="checkbox"
          id="skills-copywrite-input"
          name="skills"
          value="copywrite"
        />
        <label className="custom-control-label" htmlFor="skills-copywrite-input">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit consequatur veritatis tenetur.
        </label>
      </div>
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
    <div className="btn-wrapper">
      <input type="checkbox" className="btn-check" id="btn-check" autoComplete="off" />
      <label className="btn btn-chip btn-sm" htmlFor="btn-check">Checkbox button</label>

      <input type="checkbox" className="btn-check" id="btn-check2" autoComplete="off" />
      <label className="btn btn-chip btn-sm" htmlFor="btn-check2">Checkbox button</label>

      <input type="checkbox" className="btn-check" id="btn-check3" autoComplete="off" disabled />
      <label className="btn btn-chip btn-sm disabled" htmlFor="btn-check3">Checkbox button</label>
    </div>
  );
};
BotonCheck.story = { name: 'Botón Checkbox' };
