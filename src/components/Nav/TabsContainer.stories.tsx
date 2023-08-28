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
  {
    name: 'Pestaña 1',
    id: '1',
    iconTabs: '<span class="material-icons-round">home</span>',
    content: 'Contenido de la Pestaña 1'
  },
  {
    name: 'Pestaña 2',
    id: '2',
    iconTabs: '<span class="material-icons-round">home</span>',
    content: 'Contenido de la Pestaña 2'
  },
  {
    name: 'Pestaña 3',
    id: '3',
    iconTabs: '<span class="material-icons-round">home</span>',
    content: 'Contenido de la Pestaña 3'
  },
  {
    name: 'Pestaña 4',
    id: '4',
    disabled: true,
    iconTabs: '<span class="material-icons-round">home</span>',
    content: 'Contenido de la Pestaña 4'
  }
];

const sizeLgItems: TabsItem[] = [
  {
    name: 'Pestaña grande',
    id: '5',
    iconTabs: '<span class="material-icons-round">home</span>',
    type: 'large',
    content: 'contenido 1'
  },
  {
    name: 'Pestaña grande',
    id: '6',
    iconTabs: '<span class="material-icons-round">home</span>',
    type: 'large',
    content: 'contenido 2'
  },
  {
    name: 'Pestaña grande',
    id: '7',
    iconTabs: '<span class="material-icons-round">home</span>',
    type: 'large',
    content: 'contenido 3'
  }
];

const sizeItems: TabsItem[] = [
  {
    name: 'Pestaña mediana',
    id: '8',
    iconTabs: '<span class="material-icons-round">home</span>',
    type: 'default',
    content: 'contenito 1'
  },
  {
    name: 'Pestaña mediana',
    id: '9',
    iconTabs: '<span class="material-icons-round">home</span>',
    type: 'default',
    content: 'contenido 2'
  },
  {
    name: 'Pestaña mediana',
    id: '10',
    iconTabs: '<span class="material-icons-round">home</span>',
    type: 'default',
    content: 'contenido 3'
  }
];

const sizeSmItems: TabsItem[] = [
  {
    name: 'Pestaña chica',
    id: '11',
    iconTabs: '<span class="material-icons-round">home</span>',
    type: 'small',
    content: 'contenido 1'
  },
  {
    name: 'Pestaña chica',
    id: '12',
    iconTabs: '<span class="material-icons-round">home</span>',
    type: 'small',
    content: 'contenido 2'
  },
  {
    name: 'Pestaña chica',
    id: '13',
    iconTabs: '<span class="material-icons-round">home</span>',
    type: 'small',
    content: 'contenido 3'
  }
];

const sliderItems: TabsItem[] = [
  {
    name: 'Pestaña 1',
    id: '14',
    iconTabs: '<span class="material-icons-round">home</span>',
    content: 'Contenido de la Pestaña 1'
  },
  {
    name: 'Pestaña 2',
    id: '15',
    iconTabs: '<span class="material-icons-round">home</span>',
    content: 'Contenido de la Pestaña 2'
  },
  {
    name: 'Pestaña 3',
    id: '16',
    iconTabs: '<span class="material-icons-round">home</span>',
    content: 'Contenido de la Pestaña 3'
  },
  {
    name: 'Pestaña 4',
    id: '17',
    iconTabs: '<span class="material-icons-round">home</span>',
    content: 'Contenido de la Pestaña 4'
  },
  {
    name: 'Pestaña 5',
    id: '18',
    iconTabs: '<span class="material-icons-round">home</span>',
    content: 'Contenido de la Pestaña 5'
  },
  {
    name: 'Pestaña 6',
    id: '19',
    iconTabs: '<span class="material-icons-round">home</span>',
    content: 'Contenido de la Pestaña 6'
  },
  {
    name: 'Pestaña 7',
    id: '20',
    iconTabs: '<span class="material-icons-round">home</span>',
    content: 'Contenido de la Pestaña 7'
  },
  {
    name: 'Pestaña 8',
    id: '21',
    iconTabs: '<span class="material-icons-round">home</span>',
    content: 'Contenido de la Pestaña 8'
  },
  {
    name: 'Pestaña 9',
    id: '22',
    iconTabs: '<span class="material-icons-round">home</span>',
    content: 'Contenido de la Pestaña 9'
  },
  {
    name: 'Pestaña 10',
    id: '23',
    disabled: true,
    iconTabs: '<span class="material-icons-round">home</span>',
    content: 'Contenido de la Pestaña 10'
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
    <div className="storybook__container-bg">
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
    <div className="storybook__container-tabs">
      <NavTabsSlider items={sliderItems} selected="1" hasIcon={true} classUl="nav nav-pills tabs nav-box" />
    </div>
  );
};

ContainerSliderTabs.story = {
  name: 'Desplazable'
};

export const ContainerSliderTabBg = (): JSX.Element => {
  return (
    <div className="storybook__container-bg">
      <NavTabsSlider items={sliderItems} selected="1" hasIcon={true} classUl="nav nav-pills tabs nav-box-bg" />
    </div>
  );
};

ContainerSliderTabBg.story = {
  name: 'Desplazable con fondo'
};
