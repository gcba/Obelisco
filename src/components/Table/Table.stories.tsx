// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { Table, TableCellContet } from '.';

// Config
export default {
  title: 'Componentes|Tablas',
  component: Table,
  decorators: [withA11y]
};

export const Normal = (): JSX.Element => {
  return (
    <Table
      head={['#', 'Encabezado', 'Otro más']}
      body={[
        ['1', 'Juan', 'Alberto'],
        ['2', 'María', 'Julia'],
        ['3', 'Esther', 'Fermin'],
        ['4', 'José', 'Juana']
      ]}
    />
  );
};

export const ConBordes = (): JSX.Element => {
  return (
    <Table
      head={['#', 'Encabezado', 'Otro más']}
      body={[
        ['1', 'Juan', 'Alberto'],
        ['2', 'María', 'Julia'],
        ['3', 'Esther', 'Fermin'],
        ['4', 'José', 'Juana']
      ]}
      bordered={true}
    />
  );
};

export const AlineaciónHorizontal = (): JSX.Element => {
  return (
    <Table
      head={['#', 'Primero', rightAligned('Cantidad')]}
      body={[
        ['1', 'Juan', rightAligned('1.234.567')],
        ['2', 'María', rightAligned('34.567')],
        ['3', 'Esther', rightAligned('82.428,53')],
        ['4', 'José', rightAligned('99.131.413')]
      ]}
      bordered={true}
    />
  );
};

export const AlineaciónVertical = (): JSX.Element => {
  return (
    <Table
      head={['#', 'Primero', rightAligned('Cantidad')]}
      body={[
        [SmallContent, 'Juan', rightAligned('1.234.567')],
        [SmallContent, 'María', rightAligned('34.567')]
      ]}
      className="table-align-bottom"
      bordered={true}
    />
  );
};

export const Intercalada = (): JSX.Element => {
  return (
    <Table
      head={['#', 'Encabezado', 'Otro más']}
      body={[
        ['1', 'Juan', 'Alberto'],
        ['2', 'María', 'Julia'],
        ['3', 'Esther', 'Fermin'],
        ['4', 'José', 'Juana']
      ]}
      striped={true}
    />
  );
};

export const Resaltable = (): JSX.Element => {
  return (
    <Table
      head={['#', 'Encabezado', 'Otro más']}
      body={[
        ['1', 'Juan', 'Alberto'],
        ['2', 'María', 'Julia'],
        ['3', 'Esther', 'Fermin'],
        ['4', 'José', 'Juana']
      ]}
      hoverable={true}
    />
  );
};

export const TodoJunto = (): JSX.Element => {
  return (
    <Table
      head={['#', 'Encabezado', 'Otro más']}
      body={[
        ['1', 'Juan', 'Alberto'],
        ['2', 'María', 'Julia'],
        ['3', 'Esther', 'Fermin'],
        ['4', 'José', 'Juana']
      ]}
      bordered={true}
      striped={true}
      hoverable={true}
    />
  );
};

export const Seleccionable = (): JSX.Element => {
  return (
    <Table
      head={['#', 'Encabezado', 'Otro más']}
      body={[
        ['1', 'Juan', 'Alberto'],
        ['2', 'María', 'Julia'],
        ['3', 'Esther', 'Fermin'],
        ['4', 'José', 'Juana']
      ]}
      selectable={true}
    />
  );
};

const SmallContent: JSX.Element = (
  <>
    <h5>Título</h5>
    <p className="mb-0">
      Lorem ipsum dolor sit amet,
      <br />
      repellendus ad est, laborum eum reiciendis quam.
    </p>
  </>
);

const rightAligned = (content: TableCellContet) => {
  return {
    content,
    props: { className: 'text-right' }
  };
};
