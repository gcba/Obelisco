import React from 'react';
import { withA11y } from '@storybook/addon-a11y';

// Components
import { Nav, NavItem } from '.';
import {
  NavHorizontalSliderBg,
  NavHorizontalSliderBox,
  NavTabsContainer,
  NavTabsContainerBg,
  NavTabsWidthContainer
} from './tabs';

// Configuración general del componente
export default {
  component: Nav,
  title: 'Componentes|Navegación y pestañas/Pestañas con contenedor',
  decorators: [withA11y]
};

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

export const ContainerTabs = (): JSX.Element => {
  return <NavTabsContainer items={simpleItems} selected="1" hasIcon={false} />;
};
ContainerTabs.story = {
  name: 'Ancho variable'
};

export const SimpleAncho = (): JSX.Element => {
  return (
    <>
      <NavTabsWidthContainer items={ItemsFullWidth} selected="1" hasIcon={true} />
    </>
  );
};

SimpleAncho.story = {
  name: 'Ancho fijo'
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

export const SliderTabs = (): JSX.Element => {
  return (
    <>
      <NavHorizontalSliderBox items={sliderItems} selected="1" hasIcon={true} />
    </>
  );
};
SliderTabs.story = {
  name: 'Desplazable'
};

export const SliderTabBg = (): JSX.Element => {
  return (
    <div className="wrapper-bg">
      <NavHorizontalSliderBg items={sliderItems} selected="1" hasIcon={true} />
    </div>
  );
};
SliderTabBg.story = {
  name: 'Desplazable con fondo'
};
