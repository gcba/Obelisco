// Base
import React from "react";

// Addons
import { withA11y } from "@storybook/addon-a11y";

// Components
import { Example } from ".";

// Configuración del general del componente
export default {
  // Usar | para separar entre secciones y / para generar carpetas
  title: "Componentes|Ejemplo",
  // Vinculamos el componente de react que estamos usando. Si no existe ninguno eliminar el campo.
  component: Example,
  // Agregamos todos los plugins que usemos en las historias de este componente.
  decorators: [withA11y]
};

/*
 * Para cada historia vamos a exportar una constrante que devuelva un element JSX con el html.
 * Más información en https://storybook.js.org/docs/basics/writing-stories/
 *
 * No hace falta que las historias usen componentes de react.
 * pueden devolver solamente el html estático necesario
 */

export const EjemploBase = (): JSX.Element => (
  <Example type="example" onClick={() => alert("Clic en ejemplo simple")} />
);

export const EjemploComplejo = (): JSX.Element => (
  <Example
    type="example"
    language="en"
    onClick={() => alert("Clic en ejemplo complejo")}
  />
);

// En cada historia, podemos redefinir el nombre y pasarle propiedades específicas para los plugins.
EjemploComplejo.story = {
  name: "Ejemplo más complejo"
};

// Los componentes

export const EjemploSinReact = (): JSX.Element => (
  <div
    className="component component-es"
    onClick={() => alert("Clic en ejemplo complejo")}
  >
    Componente de ejemplo en html estático
  </div>
);
