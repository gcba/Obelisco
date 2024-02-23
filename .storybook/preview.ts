import { addDecorator, addParameters } from '@storybook/react';
import { withHTML } from '@whitespace/storybook-addon-html/react';
// import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";
import '../src/scss/obelisco.scss';
import './preview.scss';

addDecorator(withHTML);
// .storybook/preview.js

const headers = [
  'comenzar-inicio--instalacion',
  'componentes-accesos',
  'componentes-accesos-lista-ancho-completo',
  'componentes-accesos-lista-ancho-por-acceso',
  'componentes-alerta',
  'componentes-audio',
  'componentes-banner',
  'componentes-barra-de-desplazamiento',
  'componentes-barra-de-progreso',
  'componentes-bloque-de-trámite',
  'componentes-botones--button-types',
  'componentes-botones-estados',
  'componentes-botones',
  'componentes-colapsable',
  'componentes-desplegables-de-navegación',
  'componentes-desplegables-de-selección',
  'componentes-destacado-banner',
  'componentes-destacado-conjunto',
  'componentes-destacado-lateral',
  'componentes-enlace',
  'componentes-etiqueta',
  'componentes-galería',
  'componentes-galería-grillas',
  'componentes-listas-lista-de-pasos',
  'componentes-listas-lista-de-enlaces',
  'componentes-listas-lista-informativa',
  'componentes-mapa',
  'componentes-mensajes-de-estado',
  'componentes-migas-de-pan',
  'componentes-modal',
  'componentes-navegación-y-pestañas-navegación-horizontal',
  'componentes-navegación-y-pestañas-navegación-vertical',
  'componentes-navegación-y-pestañas-pestañas-simple',
  'componentes-navegación-y-pestañas-pestañas-con-contenedor',
  'componentes-opciones',
  'componentes-paginado-numerado',
  'componentes-paginado',
  'componentes-panel',
  'componentes-panel-grande-horizontal',
  'componentes-panel-grande-vertical',
  'componentes-panel-chico-horizontal',
  'componentes-panel-chico-vertical',
  'componentes-pasos-de-un-formulario',
  'componentes-spinner',
  'componentes-switch',
  'componentes-tarjetas-horizontal',
  'componentes-tarjetas-vertical',
  'componentes-tarjetas-disposición',
  'componentes-tooltip--tooltip',
  'estilos-grilla',
  'estilos-tipografía',
  'formulario-archivo',
  'formulario-buscador',
  'formulario-checkbox',
  'formulario-con-fondo',
  'formulario-lista-de-selección',
  'formulario-radio',
  'formulario-texto',
  'formulario-validación',
  'plantillas-plantilla',
  'organismos-accesos',
  'organismos-footer-pie-de-página',
  'organismos-header-encabezado-con-buscador',
  'organismos-header-encabezado-sin-buscador',
  'organismos-header-encabezado-mobile',
  'organismos-listas',
  'organismos-tablas',
  'organismos-tablas-con-acciones',
  'versión-releases'
];

addParameters({
  options: {
    storySort: (a: Array<any>, b: Array<any>) => {
      const aHeader = a[0];
      const bHeader = b[0];

      if (aHeader !== bHeader) {
        const aHeaderIndex = headers.findIndex((h) => h === aHeader.split('--')[0] || h === aHeader);
        const bHeaderIndex = headers.findIndex((h) => h === bHeader.split('--')[0] || h === bHeader);
        return aHeaderIndex - bHeaderIndex;
      }
    },
    showPanel: true
  }
});

// addParameters({
//   docs: {
//     container: DocsContainer,
//     page: DocsPage,
//   },
// });