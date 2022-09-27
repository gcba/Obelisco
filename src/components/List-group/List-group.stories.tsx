// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';

import { AccesIcon } from './AccesIcon.stories';
import { AccessList } from './AccessList.stories';
import { AccessListCategory } from './AccessListCategory.stories';
import './List-group.stories.scss';
import { AccessListDescriptive } from './ListAccessDescriptive.stories';
import { SmallAccessDescription } from './SmallAccessDescription.stories';

// Configuración del general del componente
export default {
  title: 'Componentes|Accesos',
  decorators: [withA11y]
};

export const AccesoConIcono = (): JSX.Element => <AccesIcon />;

export const AccesoChicoConDescripcion = (): JSX.Element => <SmallAccessDescription />;

export const ListaDeAccesos = (): JSX.Element => <AccessList />;

export const ListaDeAccesosConCategoria = (): JSX.Element => <AccessListCategory />;

export const ListaDeAccesosDescriptivo = (): JSX.Element => <AccessListDescriptive />;
