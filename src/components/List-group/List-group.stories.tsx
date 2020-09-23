// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Configuración del general del componente
export default {
  // Usar | para separar entre secciones y / para generar carpetas
  title: 'Componentes|List',
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
  <div className="list-group">
    <a href="#" className="list-group-item list-group-item-action">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">Titulo</h5>
      </div>
      <p className="mb-1">
        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
      </p>
    </a>
    <a href="#" className="list-group-item list-group-item-action">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">Titulo</h5>
      </div>
      <p className="mb-1">
        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
      </p>
    </a>
    <a href="#" className="list-group-item list-group-item-action">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">Titulo</h5>
      </div>
      <p className="mb-1">
        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
      </p>
    </a>
  </div>
);

export const DefaultImage = (): JSX.Element => (
  <div className="list-group image">
    <a href="#" className="list-group-item list-group-item-action d-flex">
      <div className="col-2">
        <img className="img-list" src="https://pbs.twimg.com/profile_images/1153697462546292736/O5jipnTv.jpg" />
      </div>
      <div className="col-10 justify-content-between">
        <h5 className="mb-1">Titulo</h5>
        <p className="mb-1">
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit
          non mi porta gravida at eget metus.
        </p>
      </div>
    </a>
    <a href="#" className="list-group-item list-group-item-action d-flex">
      <div className="col-2">
        <img className="img-list" src="https://pbs.twimg.com/profile_images/1153697462546292736/O5jipnTv.jpg" />
      </div>
      <div className="col-10 justify-content-between">
        <h5 className="mb-1">Titulo</h5>
        <p className="mb-1">
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit
          non mi porta gravida at eget metus.
        </p>
      </div>
    </a>
    <a href="#" className="list-group-item list-group-item-action d-flex">
      <div className="col-2">
        <img className="img-list" src="https://pbs.twimg.com/profile_images/1153697462546292736/O5jipnTv.jpg" />
      </div>
      <div className="col-10 justify-content-between">
        <h5 className="mb-1">Titulo</h5>
        <p className="mb-1">
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit
          non mi porta gravida at eget metus.
        </p>
      </div>
    </a>
  </div>
);

export const TittleList = (): JSX.Element => (
  <div className="list-group tittle-list">
    <h5 className="mb-1 list-group-item">Nuevo protocolo de apertura para pymes y comercios</h5>
    <a href="#" className="list-group-item list-group-item-action" data-toggle="collapse" data-target="#collapseOne">
      Locales y comercios
    </a>
    <div id="collapseOne" className="collapse" data-parent="#accordion">
      <a href="#" className="list-group-item list-group-item-action">
        Local indumentaria y calzado. (Actividades comerciales de venta)
      </a>
      <a href="#" className="list-group-item list-group-item-action">
        Locales gastronómicos: "para llevar/takeaway"
      </a>
      <a href="#" className="list-group-item list-group-item-action">
        Locales de óptica
      </a>
      <a href="#" className="list-group-item list-group-item-action">
        Comercial minorista (excluyendo indumentaria y calzado)
      </a>
      <a href="#" className="list-group-item list-group-item-action">
        Comercial minorista (excluyendo indumentaria y calzado)
      </a>
    </div>

    <a href="#" className="list-group-item list-group-item-action">
      Actividades juridicas
    </a>
    <a href="#" className="list-group-item list-group-item-action">
      Otras Actividades
    </a>
    <a href="#" className="list-group-item list-group-item-action">
      Automotores, motocicletas y bicicletas
    </a>
  </div>
);

export const SubList = (): JSX.Element => (
  <div className="list-group sub-list">
    <h5 className="mb-1 list-group-item">Nuevo protocolo de apertura para pymes y comercios</h5>
    <h6 className="mb-1 list-group-item">Locales y comercios</h6>
    <a href="#" className="list-group-item list-group-item-action">
      Local indumentaria y calzado. (Actividades comerciales de venta)
    </a>
    <a href="#" className="list-group-item list-group-item-action">
      Locales gastronómicos: "para llevar/takeaway"
    </a>
    <a href="#" className="list-group-item list-group-item-action">
      Locales de óptica
    </a>
    <a href="#" className="list-group-item list-group-item-action">
      Comercial minorista (excluyendo indumentaria y calzado)
    </a>
    <a href="#" className="list-group-item list-group-item-action">
      Comercial minorista (excluyendo indumentaria y calzado)
    </a>
  </div>
);
