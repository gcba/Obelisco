import React from 'react';
import { withA11y } from '@storybook/addon-a11y';

// Components
import { Nav, NavItem } from '.';
import { NavTabsSliderBg, NavTabsSliderBox, NavTabsContainer, NavTabsContainerBg, NavTabsWidthContainer } from './tabs';

// Configuración general del componente
export default {
  component: Nav,
  title: 'Componentes|Navegación y pestañas/Pestañas con contenedor',
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

const sizeItems: NavItem[] = [
  { name: 'Pestaña activa', id: '1', iconTabs: '<span class="material-icons-round">home</span>', type: 'large' },
  {
    name: 'Pestaña predeterminada',
    id: '2',
    iconTabs: '<span class="material-icons-round">home</span>',
    type: 'default'
  },
  {
    name: 'Pestaña predeterminada',
    id: '3',
    iconTabs: '<span class="material-icons-round">home</span>',
    type: 'small'
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

export const ContainerTabs = (): JSX.Element => {
  return <NavTabsContainer items={simpleItems} selected="1" hasIcon={false} />;
};

ContainerTabs.story = {
  name: 'Ancho variable'
};

export const ContainerTabWidth = (): JSX.Element => {
  return (
    <>
      <NavTabsWidthContainer items={ItemsFullWidth} selected="1" hasIcon={true} />
    </>
  );
};

ContainerTabWidth.story = {
  name: 'Ancho fijo'
};

export const ContainerSizeTabs = (): JSX.Element => {
  return <NavTabsContainer items={sizeItems} selected="1" hasIcon={false} />;
};

ContainerSizeTabs.story = {
  name: 'Tamaños'
};

export const ContainerTabsBg = (): JSX.Element => {
  return (
    <div className="wrapper-bg">
      <NavTabsContainerBg items={simpleItems} selected="1" hasIcon={false} />
    </div>
  );
};

ContainerTabsBg.story = {
  name: 'Con fondo'
};

export const ContainerTabsIcon = (): JSX.Element => {
  return <NavTabsContainer items={simpleItems} selected="1" hasIcon={true} />;
};

ContainerTabsIcon.story = {
  name: 'Con icono'
};

export const ContainerSliderTabs = (): JSX.Element => {
  return (
    <>
      <NavTabsSliderBox items={sliderItems} selected="1" hasIcon={true} />
    </>
  );
};

ContainerSliderTabs.story = {
  name: 'Desplazable'
};

export const ContainerSliderTabBg = (): JSX.Element => {
  return (
    <div className="wrapper-bg">
      <NavTabsSliderBg items={sliderItems} selected="1" hasIcon={true} />
    </div>
  );
};

ContainerSliderTabBg.story = {
  name: 'Desplazable con fondo'
};
