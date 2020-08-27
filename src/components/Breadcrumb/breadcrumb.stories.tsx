// Base
import React from "react";

// Addons
import { withA11y } from "@storybook/addon-a11y";

// Configuración del general del componente
export default {
  // Usar | para separar entre secciones y / para generar carpetas
  title: "Componentes|Breadcrumb",
  // Vinculamos el componente de react que estamos usando. Si no existe ninguno eliminar el campo.

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

export const Breadcrumb = (): JSX.Element => (
  <div>
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item active bread-first" aria-current="page">
          Home
        </li>
      </ol>
    </nav>

    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item bread-first">
          <a href="#">Home</a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Library
        </li>
      </ol>
    </nav>

    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item bread-first">
          <a href="#">Home</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#">Library</a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Data
        </li>
      </ol>
    </nav>
  </div>
);
