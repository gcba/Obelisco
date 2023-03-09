import React from 'react';
import { withA11y } from '@storybook/addon-a11y';

// Components
import { Nav, NavItem } from '.';
import { NavHorizontalSlider, NavTabs, NavTabsWidth } from './tabs';

// Configuración general del componente
export default {
  component: Nav,
  title: 'Componentes|Navegación y pestañas/Pestañas simple',
  decorators: [withA11y]
};
const simpleItems: NavItem[] = [
  { name: 'Pestaña activa', id: '1', iconTabs: '<span class="material-icons-round">home</span>' },
  { name: 'Pestaña predeterminada', id: '2', iconTabs: '<span class="material-icons-round">home</span>' },
  { name: 'Pestaña predeterminada', id: '3', iconTabs: '<span class="material-icons-round">home</span>' },
  {
    name: 'Pestaña predeterminada',
    id: '4',
    disabled: true,
    iconTabs: '<span class="material-icons-round">home</span>'
  }
];

const ItemsFullWidth: NavItem[] = [
  { name: 'Pestaña activa', id: '1', iconTabs: '<span class="material-icons-round">home</span>' },
  { name: 'Pestaña predeterminada', id: '2', iconTabs: '<span class="material-icons-round">home</span>' },
  { name: 'Pestaña predeterminada', id: '3', iconTabs: '<span class="material-icons-round">home</span>' },
  {
    name: 'Pestaña predeterminada',
    id: '4',
    disabled: true,
    iconTabs: '<span class="material-icons-round">home</span>'
  }
];

const sliderItems: NavItem[] = [
  { name: 'Pestaña activa', id: '1', iconTabs: '<span class="material-icons-round">home</span>' },
  { name: 'Pestaña predeterminada', id: '2', iconTabs: '<span class="material-icons-round">home</span>' },
  { name: 'Pestaña predeterminada', id: '3', iconTabs: '<span class="material-icons-round">home</span>' },
  { name: 'Pestaña predeterminada', id: '4', iconTabs: '<span class="material-icons-round">home</span>' },
  { name: 'Pestaña predeterminada', id: '5', iconTabs: '<span class="material-icons-round">home</span>' },
  { name: 'Pestaña predeterminada', id: '6', iconTabs: '<span class="material-icons-round">home</span>' },
  { name: 'Pestaña predeterminada', id: '7', iconTabs: '<span class="material-icons-round">home</span>' },
  { name: 'Pestaña predeterminada', id: '8', iconTabs: '<span class="material-icons-round">home</span>' },
  { name: 'Pestaña predeterminada', id: '9', iconTabs: '<span class="material-icons-round">home</span>' },
  {
    name: 'Pestaña deshabilitada',
    id: '10',
    disabled: true,
    iconTabs: '<span class="material-icons-round">home</span>'
  }
];
export const Simple = (): JSX.Element => {
  return (
    <>
      <NavTabs items={simpleItems} selected="1" hasIcon={false} />
    </>
  );
};
Simple.story = {
  name: 'Ancho variable'
};

export const SimpleAncho = (): JSX.Element => {
  return (
    <>
      <NavTabsWidth items={ItemsFullWidth} selected="1" hasIcon={false} />
    </>
  );
};

SimpleAncho.story = {
  name: 'Ancho fijo'
};

export const SimpleIcon = (): JSX.Element => {
  return (
    <>
      <NavTabs items={simpleItems} selected="1" hasIcon={true} />
    </>
  );
};
SimpleIcon.story = {
  name: 'Con icono'
};

export const SliderTab = (): JSX.Element => {
  return (
    <>
      <NavHorizontalSlider items={sliderItems} selected="1" hasIcon={true} />
    </>
  );
};
SliderTab.story = {
  name: 'Desplazable'
};
