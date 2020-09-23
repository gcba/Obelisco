// Base
import React from "react";

// Addons
import { withA11y } from "@storybook/addon-a11y";

// Configuración del general del componente
export default {
  // Usar | para separar entre secciones y / para generar carpetas
  title: "Componentes|Collapse",
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

export const Simple = (): JSX.Element => (
  <div className="card">
    <button
      className="card-header collapsed card-link"
      data-toggle="collapse"
      data-target="#collapseOne"
    >
      Colapsable
      <span className="glyphicon glyphicon-plus  btn-plus"></span>
    </button>
    <div id="collapseOne" className="collapse" data-parent="#accordion">
      <div className="card-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget erat
        porta, tempor est sed, pharetra quam. Aliquam ullamcorper mi non
        faucibus malesuada. Fusce viverra sit amet ligula tempus consectetur.
        Phasellus fringilla diam et nunc dignissim, at condimentum nulla
        tincidunt. Mauris consectetur a nibh a ultrices.
      </div>
    </div>
  </div>
);
