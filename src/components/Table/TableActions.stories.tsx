// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { Table } from '.';
import { Button } from '../Button';

// Config
export default {
  title: 'Componentes|Tablas/Con Acciones',
  component: Table,
  decorators: [withA11y]
};

export const ConBotones = (): JSX.Element => {
  return (
    <Table
      head={['#', 'Primero', 'Otro más']}
      body={[
        ['1', 'Juan', ActionButton],
        ['2', 'María', ActionButton],
        ['3', 'Esther', ActionButton],
        ['4', 'José', ActionButton]
      ]}
    />
  );
};

export const ConEnlaces = (): JSX.Element => {
  return (
    <Table
      head={['#', 'Primero', 'Otro más']}
      body={[
        ['1', 'Juan', ActionLinks],
        ['2', 'María', ActionLinks],
        ['3', 'Esther', ActionLinks],
        ['4', 'José', ActionLinks]
      ]}
    />
  );
};

// Utils

const ActionButton: JSX.Element = (
  <Button type="success" size="small">
    Acción
  </Button>
);

const ActionLinks: JSX.Element = (
  <a className="" href="#" target="_blank" rel="noreferrer">
    Enlace
  </a>
);
