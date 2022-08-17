// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';

import './List-group.stories.scss';
import { AccesIcon } from './AccesIcon.stories';
import { AccessList } from './AccessList.stories';
import { SmallAccessDescription } from './SmallAccessDescription.stories';
import { AccessListCategory } from './AccessListCategory.stories';
import { AccessListDescriptive } from './ListAccessDescriptive.stories';

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
