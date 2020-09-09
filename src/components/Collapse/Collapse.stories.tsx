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

export const Default = (): JSX.Element => (
  <div className="accordion" id="accordionExample">
    <div className="card">
      <div className="card-header" id="headingOne">
        <h2 className="mb-0">
          <button
            className="btn btn-link btn-block text-left"
            type="button"
            data-toggle="collapse"
            data-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Collapsible Group Item #1
          </button>
        </h2>
      </div>

      <div
        id="collapseOne"
        className="collapse show"
        aria-labelledby="headingOne"
        data-parent="#accordionExample"
      >
        <div className="card-body">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
          skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
          Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
          single-origin coffee nulla assumenda shoreditch et. Nihil anim
          keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
          sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
          you probably haven't heard of them accusamus labore sustainable VHS.
        </div>
      </div>
    </div>
    <div className="card">
      <div className="card-header" id="headingTwo">
        <h2 className="mb-0">
          <button
            className="btn btn-link btn-block text-left collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Collapsible Group Item #2
          </button>
        </h2>
      </div>
      <div
        id="collapseTwo"
        className="collapse"
        aria-labelledby="headingTwo"
        data-parent="#accordionExample"
      >
        <div className="card-body">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
          skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
          Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
          single-origin coffee nulla assumenda shoreditch et. Nihil anim
          keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
          sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
          you probably haven't heard of them accusamus labore sustainable VHS.
        </div>
      </div>
    </div>
    <div className="card">
      <div className="card-header" id="headingThree">
        <h2 className="mb-0">
          <button
            className="btn btn-link btn-block text-left collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Collapsible Group Item #3
          </button>
        </h2>
      </div>
      <div
        id="collapseThree"
        className="collapse"
        aria-labelledby="headingThree"
        data-parent="#accordionExample"
      >
        <div className="card-body">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
          skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
          Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
          single-origin coffee nulla assumenda shoreditch et. Nihil anim
          keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
          sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
          you probably haven't heard of them accusamus labore sustainable VHS.
        </div>
      </div>
    </div>
  </div>
);
