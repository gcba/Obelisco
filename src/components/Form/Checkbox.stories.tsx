// Base
import React from "react";

// Addons
import { withA11y } from "@storybook/addon-a11y";

// Components

// Config
export default {
  title: "Componentes|Formulario/Checkbox",
  decorators: [withA11y]
};

export const CasillaMultiple = (): JSX.Element => {
  return (
    <>
      <div className="custom-control custom-checkbox">
          <input
            className="custom-control-input"
            type="checkbox"
            id="skills-copywrite-input"
            name="skills"
            value="copywrite"
          />
          <label className="custom-control-label" htmlFor="skills-copywrite-input"> Redacción </label>
      </div>
      <div className="custom-control custom-checkbox">
          <input
            className="custom-control-input"
            type="checkbox"
            id="skills-design-input"
            name="skills"
            value="design"
          />
          <label className="custom-control-label" htmlFor="skills-design-input"> Diseño </label>
      </div>
      <div className="custom-control custom-checkbox">
          <input
            className="custom-control-input"
            type="checkbox"
            id="skills-development-input"
            name="skills"
            value="development"
          />
          <label className="custom-control-label" htmlFor="skills-development-input"> Desarrollo </label>
      </div>
    </>
  );
};
CasillaMultiple.story = {
  name: "Casilla múltiple"
};

export const TerminosYCondiciones = (): JSX.Element => {
  return (
    <>
      <div className="custom-control custom-checkbox">
          <input
            className="custom-control-input"
            type="checkbox"
            id="skills-copywrite-input"
            name="skills"
            value="copywrite"
          />
          <label className="custom-control-label" htmlFor="skills-copywrite-input"> Acepto los <a href="#">términos y condiciones</a> </label>
      </div>
    </>
  );
};
TerminosYCondiciones.story = {
  name: "Términos y condiciones"
};
