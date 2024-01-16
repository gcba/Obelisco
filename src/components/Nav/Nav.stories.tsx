// Base
import React from 'react';
import './Nav.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { Nav } from '.';

// Configuración general del componente
export default {
  title: 'Componentes|Navegación y pestañas/Navegación vertical',
  component: Nav,
  decorators: [withA11y]
};

const simpleItems = [
  { name: 'Link', id: '1' },
  { name: 'Activo', id: '2' },
  { name: 'Link', id: '3' },
  { name: 'Deshabilitado', id: '4', disabled: true }
];

export const Simple = (): JSX.Element => (
  <div className="storybook__container-nav">
    <Nav items={simpleItems} selected="2" />
  </div>
);

export const SimpleConIcono = (): JSX.Element => (
  <div className="storybook__container-nav">
    <Nav items={simpleItems} selected="2" hasIcon={true} />
  </div>
);

SimpleConIcono.story = {
  name: 'Simple con ícono'
};

const doubleLevel = [
  { name: 'Categorías', id: '0' },
  {
    name: 'Locales y comercios',
    id: '1',
    children: [
      { name: 'Local Indumentaria y calzado. (Actividades comerciales de venta).', id: '1.1' },
      { name: 'Locales gastronómicos: “para llevar/takeaway”', id: '1.2' },
      { name: 'Locales de óptica', id: '1.3' },
      { name: 'Comercial minorista (excluyendo indumentaria y calzado)', id: '1.4' }
    ]
  },
  { name: 'Actividades jurídicas', id: '2' },
  { name: 'Otras actividades', id: '3' }
];

const tripleLevel = [
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
  <div className="storybook__container-nav">
    <Nav items={doubleLevel} navSize="large" selected="1.2" />
  </div>
);

Con2Niveles.story = {
  name: 'Con 2 niveles'
};

export const Con2NivelesConIcono = (): JSX.Element => (
  <div className="storybook__container-nav">
    <Nav items={doubleLevel} navSize="large" selected="1.2" hasIcon={true} />
  </div>
);

Con2NivelesConIcono.story = {
  name: 'Con 2 niveles con ícono'
};

export const Con3Niveles = (): JSX.Element => (
  <div className="storybook__container-nav">
    <Nav items={tripleLevel} navSize="large" selected="1.2.2" />
  </div>
);

Con3Niveles.story = {
  name: 'Con 3 niveles'
};

export const Con3NivelesConIcono = (): JSX.Element => (
  <div className="storybook__container-nav">
    <Nav items={tripleLevel} navSize="large" selected="1.2.2" hasIcon={true} />
  </div>
);

Con3NivelesConIcono.story = {
  name: 'Con 3 niveles con ícono'
};
