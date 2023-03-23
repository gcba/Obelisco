import React from 'react';
import { withA11y } from '@storybook/addon-a11y';

// Components
import { Nav } from '.';
import { NavTabsSlider, TabsItem } from './tabs';

// Configuración general del componente
export default {
  component: Nav,
  title: 'Componentes|Navegación y pestañas/Pestañas simple',
  decorators: [withA11y]
};
const simpleItems: TabsItem[] = [
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

const sizeItems: TabsItem[] = [
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

const sliderItems: TabsItem[] = [
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
      <NavTabsSlider
        items={simpleItems}
        selected="1"
        hasIcon={false}
        classUl="nav nav-pills flex-row tabs pb-1"
        isWithButton={false}
      />
    </>
  );
};
Simple.story = {
  name: 'Ancho variable'
};

export const SimpleWidth = (): JSX.Element => {
  return (
    <>
      <NavTabsSlider
        items={simpleItems}
        selected="1"
        hasIcon={false}
        classUl="nav nav-pills flex-row tabs fixedWidth pb-1"
        isWithButton={false}
      />
    </>
  );
};

SimpleWidth.story = {
  name: 'Ancho fijo'
};

export const SimpleSizes = (): JSX.Element => {
  return (
    <>
      <NavTabsSlider
        items={sizeItems}
        selected="1"
        hasIcon={false}
        classUl="nav nav-pills flex-row tabs pb-1"
        isWithButton={false}
      />
    </>
  );
};

SimpleSizes.story = {
  name: 'Tamaños'
};

export const SimpleIcon = (): JSX.Element => {
  return (
    <>
      <NavTabsSlider
        items={simpleItems}
        selected="1"
        hasIcon={true}
        classUl="nav nav-pills flex-row tabs pb-1"
        isWithButton={false}
      />
    </>
  );
};

SimpleIcon.story = {
  name: 'Con icono'
};

export const SliderTab = (): JSX.Element => {
  return (
    <>
      <NavTabsSlider items={sliderItems} selected="1" hasIcon={true} classUl="nav nav-pills flex-row tabs pb-1" />
    </>
  );
};

SliderTab.story = {
  name: 'Desplazable'
};