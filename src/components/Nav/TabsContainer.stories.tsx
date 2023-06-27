import React from 'react';
import { withA11y } from '@storybook/addon-a11y';

// Components
import { Nav } from '.';
import { NavTabsSlider, TabsItem } from './tabs';

// Configuración general del componente
export default {
  component: Nav,
  title: 'Componentes|Navegación y pestañas/Pestañas con contenedor',
  decorators: [withA11y]
};

const simpleItems: TabsItem[] = [
  { name: 'Pestaña 1', id: '1', iconTabs: '<span class="material-icons-round">home</span>' },
  { name: 'Pestaña 2', id: '2', iconTabs: '<span class="material-icons-round">home</span>' },
  { name: 'Pestaña 3', id: '3', iconTabs: '<span class="material-icons-round">home</span>' },
  {
    name: 'Pestaña 4',
    id: '4',
    disabled: true,
    iconTabs: '<span class="material-icons-round">home</span>'
  }
];

const sizeLgItems: TabsItem[] = [
  {
    name: 'Pestaña grande',
    id: '1',
    iconTabs: '<span class="material-icons-round">home</span>',
    type: 'large'
  },
  { name: 'Pestaña grande', id: '2', iconTabs: '<span class="material-icons-round">home</span>', type: 'large' },
  {
    name: 'Pestaña grande',
    id: '3',
    iconTabs: '<span class="material-icons-round">home</span>',
    type: 'large'
  }
];
const sizeItems: TabsItem[] = [
  {
    name: 'Pestaña mediana',
    id: '1',
    iconTabs: '<span class="material-icons-round">home</span>',
    type: 'default'
  },
  { name: 'Pestaña mediana', id: '2', iconTabs: '<span class="material-icons-round">home</span>', type: 'default' },
  {
    name: 'Pestaña mediana',
    id: '3',
    iconTabs: '<span class="material-icons-round">home</span>',
    type: 'default'
  }
];
const sizeSmItems: TabsItem[] = [
  {
    name: 'Pestaña chica',
    id: '1',
    iconTabs: '<span class="material-icons-round">home</span>',
    type: 'small'
  },
  { name: 'Pestaña chica', id: '2', iconTabs: '<span class="material-icons-round">home</span>', type: 'small' },
  {
    name: 'Pestaña chica',
    id: '3',
    iconTabs: '<span class="material-icons-round">home</span>',
    type: 'small'
  }
];

const sliderItems: TabsItem[] = [
  { name: 'Pestaña 1', id: '1', iconTabs: '<span class="material-icons-round">home</span>' },
  { name: 'Pestaña 2', id: '2', iconTabs: '<span class="material-icons-round">home</span>' },
  { name: 'Pestaña 3', id: '3', iconTabs: '<span class="material-icons-round">home</span>' },
  { name: 'Pestaña 4', id: '4', iconTabs: '<span class="material-icons-round">home</span>' },
  { name: 'Pestaña 5', id: '5', iconTabs: '<span class="material-icons-round">home</span>' },
  { name: 'Pestaña 6', id: '6', iconTabs: '<span class="material-icons-round">home</span>' },
  { name: 'Pestaña 7', id: '7', iconTabs: '<span class="material-icons-round">home</span>' },
  { name: 'Pestaña 8', id: '8', iconTabs: '<span class="material-icons-round">home</span>' },
  { name: 'Pestaña 9', id: '9', iconTabs: '<span class="material-icons-round">home</span>' },
  {
    name: 'Pestaña 10',
    id: '10',
    disabled: true,
    iconTabs: '<span class="material-icons-round">home</span>'
  }
];

export const ContainerTabs = (): JSX.Element => {
  return (
    <NavTabsSlider
      items={simpleItems}
      selected="1"
      hasIcon={false}
      classUl="nav nav-pills tabs nav-box"
      isWithButton={false}
    />
  );
};

ContainerTabs.story = {
  name: 'Ancho variable'
};

export const ContainerTabWidth = (): JSX.Element => {
  return (
    <>
      <NavTabsSlider
        items={simpleItems}
        selected="1"
        hasIcon={false}
        classUl="nav nav-pills tabs nav-box fixedWidth"
        isWithButton={false}
      />
    </>
  );
};

ContainerTabWidth.story = {
  name: 'Ancho fijo'
};

export const ContainerSizeTabs = (): JSX.Element => {
  return (
    <>
      <NavTabsSlider
        items={sizeLgItems}
        selected="1"
        hasIcon={false}
        classUl="nav nav-pills tabs nav-box"
        isWithButton={false}
      />

      <br />

      <NavTabsSlider
        items={sizeItems}
        selected="1"
        hasIcon={false}
        classUl="nav nav-pills tabs nav-box"
        isWithButton={false}
      />

      <br />

      <NavTabsSlider
        items={sizeSmItems}
        selected="1"
        hasIcon={false}
        classUl="nav nav-pills tabs nav-box"
        isWithButton={false}
      />
    </>
  );
};

ContainerSizeTabs.story = {
  name: 'Tamaños'
};

export const ContainerTabsBg = (): JSX.Element => {
  return (
    <div className="wrapper-bg">
      <NavTabsSlider
        items={simpleItems}
        selected="1"
        hasIcon={false}
        classUl="nav nav-pills tabs nav-box-bg"
        isWithButton={false}
      />
    </div>
  );
};

ContainerTabsBg.story = {
  name: 'Con fondo'
};

export const ContainerTabsIcon = (): JSX.Element => {
  return (
    <NavTabsSlider
      items={simpleItems}
      selected="1"
      hasIcon={true}
      classUl="nav nav-pills tabs nav-box"
      isWithButton={false}
    />
  );
};

ContainerTabsIcon.story = {
  name: 'Con ícono'
};

export const ContainerSliderTabs = (): JSX.Element => {
  return (
    <div className="wrapper-tabs">
      <NavTabsSlider items={sliderItems} selected="1" hasIcon={true} classUl="nav nav-pills tabs nav-box" />
    </div>
  );
};

ContainerSliderTabs.story = {
  name: 'Desplazable'
};

export const ContainerSliderTabBg = (): JSX.Element => {
  return (
    <div className="wrapper-bg">
      <NavTabsSlider items={sliderItems} selected="1" hasIcon={true} classUl="nav nav-pills tabs nav-box-bg" />
    </div>
  );
};

ContainerSliderTabBg.story = {
  name: 'Desplazable con fondo'
};
