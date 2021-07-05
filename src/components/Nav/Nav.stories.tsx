// Base
import React from 'react';
import './Nav.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { Nav } from '.';

// Configuración del general del componente
export default {
  title: 'Componentes|Navegación',
  component: Nav,
  decorators: [withA11y]
};

const simpleItems = [
  { name: 'Link', id: '1' },
  { name: 'Active', id: '2' },
  { name: 'Link', id: '3' },
  { name: 'Disabled', id: '4', disabled: true }
];

export const Simple = (): JSX.Element => (
  <div className="nav-container">
    <Nav items={simpleItems} selected="2" />
  </div>
);

const multiLevel = [
  { name: 'Categorías', id: '0' },
  {
    name: 'Locales y comercios',
    id: '1',
    children: [
      { name: 'Local Indumentaria y calzado. (Actividades comerciales de venta).', id: '1.1' },
      {
        name: 'Locales gastronómicos: “para llevar/takeaway”',
        id: '1.2',
        children: [
          { name: 'Con local a la calle', id: '1.2.1' },
          { name: 'Food trucks', id: '1.2.2' }
        ]
      },
      { name: 'Locales de óptica', id: '1.3' },
      { name: 'Comercial minorista (excluyendo indumentaria y calzado)', id: '1.4' }
    ]
  },
  { name: 'Actividades jurídicas', id: '2' },
  { name: 'Otras actividades', id: '3' }
];

export const Con2Niveles = (): JSX.Element => (
  <div className="nav-container">
    <Nav items={multiLevel} navSize="large" selected="1.2.2" />
  </div>
);

export const Responsive = (): JSX.Element => (
  <div className="nav-container">
    <nav>
      <a className="nav-link nav-mobile-trigger collapsed" data-toggle="collapse" href="#sidebar-nav">
        Acerca de Obelisco
      </a>
      <div className="nav-responsive collapse" id="sidebar-nav">
        <Nav items={multiLevel} navSize="large" selected="1.2.2" />
      </div>
    </nav>
  </div>
);
