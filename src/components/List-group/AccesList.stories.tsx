// Base
import React from 'react';
import './List-group.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { AccessDeck } from './index';

// Configuración general del componente
export default {
  title: 'Componentes|Accesos/Lista ancho completo',
  decorators: [withA11y]
};

export const CuatroColumnas = (): JSX.Element => {
  return (
    <div className="container">
      <div className="access-deck  max-cards-4">
        <AccessDeck />
        <AccessDeck />
        <AccessDeck />
        <AccessDeck />
        <AccessDeck />
      </div>
    </div>
  );
};

export const TresColumnas = (): JSX.Element => {
  return (
    <div className="container">
      <div className="access-deck  max-cards-3">
        <AccessDeck />
        <AccessDeck />
        <AccessDeck />
        <AccessDeck />
        <AccessDeck />
      </div>
    </div>
  );
};

export const DosColumnas = (): JSX.Element => {
  return (
    <div className="access-deck  max-cards-2">
      <AccessDeck />
      <AccessDeck />
      <AccessDeck />
      <AccessDeck />
      <AccessDeck />
    </div>
  );
};

export const UnaColumna = (): JSX.Element => {
  return (
    <div className="container">
      <div className="access-deck  max-cards-1">
        <AccessDeck />
        <AccessDeck />
        <AccessDeck />
        <AccessDeck />
        <AccessDeck />
      </div>
    </div>
  );
};
