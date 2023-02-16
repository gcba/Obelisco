// Base
import React from 'react';
import './List-group.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { AccessList } from './AccessList.stories';
import { AccessListCategory } from './AccessListCategory.stories';
import { AccessListDescriptive } from './ListAccessDescriptive.stories';

// Configuración general del componente
export default {
  title: 'Componentes|Accesos/Lista de accesos',
  decorators: [withA11y]
};

export const ListaDeAccesos = (): JSX.Element => <AccessList />;

ListaDeAccesos.story = {
  name: 'Lista de accesos'
};

export const ListaDeAccesosConCategoria = (): JSX.Element => <AccessListCategory />;

ListaDeAccesosConCategoria.story = {
  name: 'Lista de accesos con categoría'
};

export const ListaDeAccesosDescriptivo = (): JSX.Element => <AccessListDescriptive />;

ListaDeAccesosDescriptivo.story = {
  name: 'Lista de accesos descriptivo'
};
