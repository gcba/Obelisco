// Base
import React from 'react';
import './List-group.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { AccessSizesComponent } from './index';

// Configuración general del componente
export default {
  title: 'Componentes|Accesos/Lista ancho completo',
  decorators: [withA11y]
};

const type = 'item-sm';
const name = '';

export const CuatroColumnas = (): JSX.Element => {
  return (
    <div className="container">
      <div className="access-deck  max-cards-4">
        <AccessSizesComponent type={type} name={name} />
        <AccessSizesComponent type={type} name={name} />
        <AccessSizesComponent type={type} name={name} />
        <AccessSizesComponent type={type} name={name} />
        <AccessSizesComponent type={type} name={name} />
      </div>
    </div>
  );
};

export const TresColumnas = (): JSX.Element => {
  return (
    <div className="container">
      <div className="access-deck  max-cards-3">
        <AccessSizesComponent type={type} name={name} />
        <AccessSizesComponent type={type} name={name} />
        <AccessSizesComponent type={type} name={name} />
        <AccessSizesComponent type={type} name={name} />
        <AccessSizesComponent type={type} name={name} />
      </div>
    </div>
  );
};

export const DosColumnas = (): JSX.Element => {
  return (
    <div className="access-deck  max-cards-2">
      <AccessSizesComponent type={type} name={name} />
      <AccessSizesComponent type={type} name={name} />
      <AccessSizesComponent type={type} name={name} />
      <AccessSizesComponent type={type} name={name} />
      <AccessSizesComponent type={type} name={name} />
    </div>
  );
};

export const UnaColumna = (): JSX.Element => {
  return (
    <div className="container">
      <div className="access-deck  max-cards-1">
        <AccessSizesComponent type={type} name={name} />
        <AccessSizesComponent type={type} name={name} />
        <AccessSizesComponent type={type} name={name} />
        <AccessSizesComponent type={type} name={name} />
        <AccessSizesComponent type={type} name={name} />
      </div>
    </div>
  );
};
