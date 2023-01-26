import { addDecorator, addParameters } from '@storybook/react';
import { withHTML } from '@whitespace/storybook-addon-html/react';
// import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";
import './preview.scss';
import '../src/scss/obelisco.scss';
import anysort from 'anysort';

addDecorator(withHTML);

// .storybook/preview.js

addParameters({
  options: {
    storySort: (previous: Array<any>, next: Array<any>) => {
      return anysort(previous[1].kind, next[1].kind,  [
        'Comenzar|*',
        'Componentes|Accesos',
        'Componentes|Alerta',
        'Componentes|Audio',
        'Componentes|Barra de progreso',
        'Componentes|Botón',
        'Componentes|Cargando',
        'Componentes|Colapsable',
        'Componentes|Desplegables',
        'Componentes|Enlace',
        'Componentes|Etiqueta',
        'Componentes|Galería',
        'Componentes|Mensajes de estado',
        'Componentes|Migas de pan',
        'Componentes|Modal',
        'Componentes|Navegación/Horizontal',
        'Componentes|Opciones',
        'Componentes|Paginación',
        'Componentes|Panel',
        'Componentes|Pasos de un formulario',
        'Componentes|Tarjetas',
        'Estilos|*',
        'Formulario|*',
        'Plantilla|*',
        'Organismos|Encabezado/Con buscador',
        'Organismos|*',
        'Versión|*'
      ]);
    }
  }
});

// addParameters({
//   docs: {
//     container: DocsContainer,
//     page: DocsPage,
//   },
// });
