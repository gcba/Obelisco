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
  {
    name: 'Pestaña 1',
    id: '1',
    iconTabs: '<span class="material-icons-round" aria-hidden="true">home</span>',
    content: 'Contenido Pestaña  1'
  },
  {
    name: 'Pestaña 2',
    id: '2',
    iconTabs: '<span class="material-icons-round" aria-hidden="true">home</span>',
    content: 'Contenido Pestaña  2'
  },
  {
    name: 'Pestaña 3',
    id: '3',
    iconTabs: '<span class="material-icons-round" aria-hidden="true">home</span>',
    content: 'Contenido Pestaña  3'
  },
  {
    name: 'Pestaña 4',
    id: '4',
    disabled: true,
    iconTabs: '<span class="material-icons-round" aria-hidden="true">home</span>',
    content: 'Contenido Pestaña  4'
  }
];

const sizeLgItems: TabsItem[] = [
  {
    name: 'Pestaña grande 1',
    id: '5',
    iconTabs: '<span class="material-icons-round" aria-hidden="true">home</span>',
    type: 'large',
    content: 'Contenido Pestaña 1'
  },
  {
    name: 'Pestaña grande 2',
    id: '6',
    iconTabs: '<span class="material-icons-round" aria-hidden="true">home</span>',
    type: 'large',
    content: 'Contenido Pestaña 2'
  },
  {
    name: 'Pestaña grande 3',
    id: '7',
    iconTabs: '<span class="material-icons-round" aria-hidden="true">home</span>',
    type: 'large',
    content: 'Contenido Pestaña 3'
  }
];

const sizeItems: TabsItem[] = [
  {
    name: 'Pestaña mediana 1',
    id: '8',
    iconTabs: '<span class="material-icons-round" aria-hidden="true">home</span>',
    type: 'default',
    content: 'Contenido Pestaña 1'
  },
  {
    name: 'Pestaña mediana 2',
    id: '9',
    iconTabs: '<span class="material-icons-round" aria-hidden="true">home</span>',
    type: 'default',
    content: 'Contenido Pestaña 2'
  },
  {
    name: 'Pestaña mediana 3',
    id: '10',
    iconTabs: '<span class="material-icons-round" aria-hidden="true">home</span>',
    type: 'default',
    content: 'Contenido Pestaña 3'
  }
];

const sizeSmItems: TabsItem[] = [
  {
    name: 'Pestaña chica 1',
    id: '11',
    iconTabs: '<span class="material-icons-round" aria-hidden="true">home</span>',
    type: 'small',
    content: 'Contenido Pestaña 1'
  },
  {
    name: 'Pestaña chica 2',
    id: '12',
    iconTabs: '<span class="material-icons-round" aria-hidden="true">home</span>',
    type: 'small',
    content: 'Contenido Pestaña 2'
  },
  {
    name: 'Pestaña chica 3',
    id: '13',
    iconTabs: '<span class="material-icons-round" aria-hidden="true">home</span>',
    type: 'small',
    content: 'Contenido Pestaña 3'
  }
];

const sliderItems: TabsItem[] = [
  {
    name: 'Pestaña 1',
    id: '14',
    iconTabs: '<span class="material-icons-round" aria-hidden="true">home</span>',
    content: 'Contenido Pestaña  1'
  },
  {
    name: 'Pestaña 2',
    id: '15',
    iconTabs: '<span class="material-icons-round" aria-hidden="true">home</span>',
    content: 'Contenido Pestaña  2'
  },
  {
    name: 'Pestaña 3',
    id: '16',
    iconTabs: '<span class="material-icons-round" aria-hidden="true">home</span>',
    content: 'Contenido Pestaña  3'
  },
  {
    name: 'Pestaña 4',
    id: '17',
    iconTabs: '<span class="material-icons-round" aria-hidden="true">home</span>',
    content: 'Contenido Pestaña  4'
  },
  {
    name: 'Pestaña 5',
    id: '18',
    iconTabs: '<span class="material-icons-round" aria-hidden="true">home</span>',
    content: 'Contenido Pestaña  5'
  },
  {
    name: 'Pestaña 6',
    id: '19',
    iconTabs: '<span class="material-icons-round" aria-hidden="true">home</span>',
    content: 'Contenido Pestaña  6'
  },
  {
    name: 'Pestaña 7',
    id: '20',
    iconTabs: '<span class="material-icons-round" aria-hidden="true">home</span>',
    content: 'Contenido Pestaña  7'
  },
  {
    name: 'Pestaña 8',
    id: '21',
    iconTabs: '<span class="material-icons-round" aria-hidden="true">home</span>',
    content: 'Contenido Pestaña  8'
  },
  {
    name: 'Pestaña 9',
    id: '22',
    iconTabs: '<span class="material-icons-round" aria-hidden="true">home</span>',
    content: 'Contenido Pestaña  9'
  },
  {
    name: 'Pestaña 10',
    id: '23',
    disabled: true,
    iconTabs: '<span class="material-icons-round" aria-hidden="true">home</span>',
    content: 'Contenido Pestaña  10'
  }
];

export const Simple = (): JSX.Element => {
  return (
    <>
      <NavTabsSlider
        items={simpleItems}
        selected="3"
        hasIcon={false}
        classUl="nav nav-pills tabs"
        isWithButton={false}
        idPrefix="simple"
        label="Navegación por pestañas"
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
        classUl="nav nav-pills tabs fixedWidth"
        isWithButton={false}
        idPrefix="width"
        label="Navegación por pestañas"
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
        items={sizeLgItems}
        selected="5"
        hasIcon={false}
        classUl="nav nav-pills tabs"
        isWithButton={false}
        idPrefix="sizeLg"
        label="Navegación por pestañas - Tamaño grande"
      />

      <br />

      <NavTabsSlider
        items={sizeItems}
        selected="8"
        hasIcon={false}
        classUl="nav nav-pills tabs"
        isWithButton={false}
        idPrefix="sizeMd"
        label="Navegación por pestañas - Tamaño mediano"
      />

      <br />

      <NavTabsSlider
        items={sizeSmItems}
        selected="11"
        hasIcon={false}
        classUl="nav nav-pills tabs"
        isWithButton={false}
        idPrefix="sizeSm"
        label="Navegación por pestañas - Tamaño chico"
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
        classUl="nav nav-pills tabs"
        isWithButton={false}
        idPrefix="icon"
        label="Navegación por pestañas"
      />
    </>
  );
};

SimpleIcon.story = {
  name: 'Con ícono'
};

export const SliderTab = (): JSX.Element => {
  return (
    <div className="storybook__container-tabs">
      <NavTabsSlider
        items={sliderItems}
        selected="14"
        hasIcon={true}
        classUl="nav nav-pills tabs"
        idPrefix="slider"
        label="Navegación por pestañas"
      />
    </div>
  );
};

SliderTab.story = {
  name: 'Desplazable'
};
