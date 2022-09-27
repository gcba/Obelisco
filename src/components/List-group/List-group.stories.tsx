// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';

<<<<<<< HEAD
=======
import './List-group.stories.scss';
>>>>>>> e24971ec4cb64596dba64ac20d83f72f57cd6ce9
import { AccesIcon } from './AccesIcon.stories';
import { AccessList } from './AccessList.stories';
import { AccessListCategory } from './AccessListCategory.stories';
import { BigAccess } from './BigAccess.stories';
import './List-group.stories.scss';
import { AccessListDescriptive } from './ListAccessDescriptive.stories';
import { SmallAccess } from './SmallAcces.stories';
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
