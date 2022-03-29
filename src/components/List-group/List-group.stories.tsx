// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';

import './List-group.stories.scss';
import { BigAccess } from './BigAccess.stories';
import { AccesIcon } from './AccesIcon.stories';
import { SmallAccess } from './SmallAcces.stories';
import { AccessList } from './AccessList.stories';
import { SmallAccessDescription } from './SmallAccessDescription.stories';
import { AccessListCategory } from './AccessListCategory.stories';
import { AccessListDescriptive } from './ListAccessDescriptive.stories';

// Configuración del general del componente
export default {
  title: 'Componentes|Accesos',
  decorators: [withA11y]
};

export const Accesos = (): JSX.Element => (
  <div>
    <BigAccess />
  </div>
);

export const AccesoConIcono = (): JSX.Element => {
  return (
    <div>
      <AccesIcon />
    </div>
  );
};

export const AccesoChico = (): JSX.Element => {
  return (
    <div>
      <SmallAccess />
    </div>
  );
};

export const AccesoChicoConDescripcion = (): JSX.Element => {
  return (
    <div>
      <SmallAccessDescription />
    </div>
  );
};

export const ListaDeAccesos = (): JSX.Element => {
  return (
    <div>
      <AccessList />
    </div>
  );
};

export const ListaDeAccesosConCategoria = (): JSX.Element => {
  return (
    <div>
      <AccessListCategory />
    </div>
  );
};

export const ListaDeAccesosDescriptivo = (): JSX.Element => {
  return (
    <div>
      <AccessListDescriptive />
    </div>
  );
};
