// Base
import React from 'react';
import './Nav.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { NavHorizontal } from '.';

// Configuración del general del componente
export default {
  title: 'Componentes|Navegación/Horizontal',
  component: NavHorizontal,
  decorators: [withA11y]
};

const simpleItems = [
  { name: 'Link', id: '1' },
  { name: 'Active', id: '2' },
  { name: 'Link', id: '3' },
  { name: 'Disabled', id: '4', disabled: true }
];

export const Simple = (): JSX.Element => (
  <div>
    <NavHorizontal items={simpleItems} selected="2" />
  </div>
);

export const SimpleConIcono = (): JSX.Element => (
  <div>
    <NavHorizontal items={simpleItems} selected="2" hasIcon={true} />
  </div>
);

const simpleItemsSizes = [
  { name: 'Link', id: '1', hasBordered: true },
  { name: 'Link', id: '2', hasBordered: true, isSize: true }
];

export const Tamanos = (): JSX.Element => (
  <div>
    <NavHorizontal items={simpleItemsSizes} />
  </div>
);

Tamanos.story = { name: 'Tamaños' };

const simpleItemsBorder = [
  { name: 'Link', id: '1', hasBordered: true },
  { name: 'Active', id: '2', hasBordered: true },
  { name: 'Link', id: '3', hasBordered: true },
  { name: 'Disabled', id: '4', disabled: true, hasBordered: true }
];

export const SimpleConBorde = (): JSX.Element => (
  <div>
    <NavHorizontal items={simpleItemsBorder} selected="2" hasBordered={true} />
  </div>
);

const simpleItemsBorderIcon = [
  { name: 'Link', id: '1', hasBordered: true, hasIcon: true },
  { name: 'Active', id: '2', hasBordered: true },
  { name: 'Link', id: '3', hasBordered: true },
  { name: 'Disabled', id: '4', disabled: true, hasBordered: true }
];

export const SimpleConBordeEIcono = (): JSX.Element => (
  <div>
    <NavHorizontal items={simpleItemsBorderIcon} selected="2" hasBordered={true} hasIcon={true} />
  </div>
);

SimpleConBordeEIcono.story = { name: 'Simple Con Borde e Icono' };

// const doubleLevel = [
//   { name: 'Categorías', id: '0' },
//   {
//     name: 'Locales y comercios',
//     id: '1',
//     children: [
//       { name: 'Local Indumentaria y calzado. (Actividades comerciales de venta).', id: '1.1' },
//       { name: 'Locales gastronómicos: “para llevar/takeaway”', id: '1.2' },
//       { name: 'Locales de óptica', id: '1.3' },
//       { name: 'Comercial minorista (excluyendo indumentaria y calzado)', id: '1.4' }
//     ]
//   },
//   { name: 'Actividades jurídicas', id: '2' },
//   { name: 'Otras actividades', id: '3' }
// ];

// const tripleLevel = [
//   { name: 'Categorías', id: '0' },
//   {
//     name: 'Locales y comercios',
//     id: '1',
//     children: [
//       { name: 'Local Indumentaria y calzado. (Actividades comerciales de venta).', id: '1.1' },
//       {
//         name: 'Locales gastronómicos: “para llevar/takeaway”',
//         id: '1.2',
//         children: [
//           { name: 'Con local a la calle', id: '1.2.1' },
//           { name: 'Food trucks', id: '1.2.2' }
//         ]
//       },
//       { name: 'Locales de óptica', id: '1.3' },
//       { name: 'Comercial minorista (excluyendo indumentaria y calzado)', id: '1.4' }
//     ]
//   },
//   { name: 'Actividades jurídicas', id: '2' },
//   { name: 'Otras actividades', id: '3' }
// ];

// export const Con2Niveles = (): JSX.Element => (
//   <div>
//     <NavHorizontal items={doubleLevel} navSize="large" selected="1.2" />
//   </div>
// );

// export const Con2NivelesConIcono = (): JSX.Element => (
//   <div>
//     <NavHorizontal items={doubleLevel} navSize="large" selected="1.2" hasIcon={true} />
//   </div>
// );

// export const Con3Niveles = (): JSX.Element => (
//   <div>
//     <NavHorizontal items={tripleLevel} navSize="large" selected="1.2.2" />
//   </div>
// );

// export const Con3NivelesConIcono = (): JSX.Element => (
//   <div>
//     <NavHorizontal items={tripleLevel} navSize="large" selected="1.2.2" hasIcon={true} />
//   </div>
// );

// export const Responsive = (): JSX.Element => (
//   <div>
//     <nav>
//       <a className="nav-link nav-mobile-trigger collapsed" data-toggle="collapse" href="#sidebar-nav">
//         Acerca de Obelisco
//       </a>
//       <div className="nav-responsive collapse" id="sidebar-nav">
//         <NavHorizontal items={tripleLevel} navSize="large" selected="1.2.2" />
//       </div>
//     </nav>
//   </div>
// );
