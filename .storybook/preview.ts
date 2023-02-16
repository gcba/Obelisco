import { addDecorator, addParameters } from '@storybook/react';
import { withHTML } from '@whitespace/storybook-addon-html/react';
// import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";
import './preview.scss';
import '../src/scss/obelisco.scss';

addDecorator(withHTML);
// .storybook/preview.js

const headers = [
  'Comenzar|Inicio',
  'Componentes|Accesos/Horizontal',
  'Componentes|Accesos/Lista de accesos',
  'Componentes|Accesos/Vertical',
  'Componentes|Alerta',
  'Componentes|Alerta/Listas',
  'Componentes|Audio',
  'Componentes|Barra de progreso',
  'Componentes|Botones',
  'Componentes|Botones/En caja',
  'Componentes|Colapsable',
  'Componentes|Desplegables',
  'Componentes|Enlace',
  'Componentes|Enlace/Lista',
  'Componentes|Etiqueta',
  'Componentes|Galería',
  'Componentes|Galería/Grillas',
  'Componentes|Mensajes de estado',
  'Componentes|Migas de pan',
  'Componentes|Modal',
  'Componentes|Navegación/Horizontal',
  'Componentes|Navegación/Vertical',
  'Componentes|Opciones',
  'Componentes|Paginación',
  'Componentes|Panel',
  'Componentes|Panel/Panel horizontal/Con imagen',
  'Componentes|Panel/Panel horizontal/Con video',
  'Componentes|Panel/Panel vertical/Con imagen',
  'Componentes|Panel/Panel vertical/Con video',
  'Componentes|Pasos de trámite',
  'Componentes|Pasos de un formulario',
  'Componentes|Spinner',
  'Componentes|Tarjetas/Tipos',
  'Componentes|Tarjetas/Lista ancho completo',
  'Componentes|Tarjetas/Lista ancho por tarjeta',
  'Estilos|Grilla',
  'Estilos|Tipografía',
  'Formulario|Archivo',
  'Formulario|Buscador',
  'Formulario|Checkbox',
  'Formulario|Con fondo',
  'Formulario|Lista de selección',
  'Formulario|Radio',
  'Formulario|Texto',
  'Formulario|Validación',
  'Plantillas|Plantilla',
  'Organismos|Footer (pie de página)',
  'Organismos|Header (encabezado)/Con buscador',
  'Organismos|Header (encabezado)/Sin buscador',
  'Organismos|Header (encabezado)/Mobile',
  'Organismos|Tablas',
  'Organismos|Tablas/Con acciones',
  'Versión|Releases'
];

addParameters({
  options: {
    storySort: (a: Array<any>, b: Array<any>) => {
      const aHeader = a[1].kind;
      const bHeader = b[1].kind;
    
      if (aHeader !== bHeader) {
        const aHeaderIndex = headers.findIndex((h) => h === aHeader);
        const bHeaderIndex = headers.findIndex((h) => h === bHeader);
        return aHeaderIndex - bHeaderIndex;
      }
    
      return 0;
    }
  }
});

// addParameters({
//   docs: {
//     container: DocsContainer,
//     page: DocsPage,
//   },
// });
