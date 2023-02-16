// Base
import React from 'react';
import './Nav.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { NavHorizontal, NavItem } from '.';

// Configuración general del componente
export default {
  title: 'Componentes|Navegación/Horizontal',
  component: NavHorizontal,
  decorators: [withA11y]
};

const simpleItems = [
  { name: 'Link', id: '1' },
  { name: 'Activo', id: '2' },
  { name: 'Link', id: '3' },
  { name: 'Deshabilitado', id: '4', disabled: true }
];

export const Simple = (): JSX.Element => <NavHorizontal items={simpleItems} selected="2" />;

export const SimpleConIcono = (): JSX.Element => <NavHorizontal items={simpleItems} selected="2" hasIcon={true} />;

SimpleConIcono.story = {
  name: 'Simple con ícono'
};

const simpleItemsSizes: NavItem[] = [
  { name: 'Link', id: '1', hasBordered: true, type: 'large' },
  { name: 'Link', id: '2', hasBordered: true, type: 'default' },
  { name: 'Link', id: '3', hasBordered: true, type: 'small' }
];

export const Tamanos = (): JSX.Element => <NavHorizontal items={simpleItemsSizes} />;

Tamanos.story = { name: 'Tamaños' };

const simpleItemsBorder = [
  { name: 'Link', id: '1', hasBordered: true },
  { name: 'Activo', id: '2', hasBordered: true },
  { name: 'Link', id: '3', hasBordered: true },
  { name: 'Deshabilitado', id: '4', disabled: true, hasBordered: true }
];

export const SimpleConBorde = (): JSX.Element => <NavHorizontal items={simpleItemsBorder} selected="2" />;

SimpleConBorde.story = {
  name: 'Simple con borde'
};

const simpleItemsBorderIcon = [
  { name: 'Link', id: '1', hasBordered: true, hasIcon: true },
  { name: 'Activo', id: '2', hasBordered: true },
  { name: 'Link', id: '3', hasBordered: true },
  { name: 'Deshabilitado', id: '4', disabled: true, hasBordered: true }
];

export const SimpleConBordeEIcono = (): JSX.Element => (
  <NavHorizontal items={simpleItemsBorderIcon} selected="2" hasIcon={true} />
);

SimpleConBordeEIcono.story = { name: 'Simple con borde e ícono' };
