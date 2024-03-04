// Base
import React from 'react';
import './Table.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { Table } from '.';
// import { TableCellContet } from '.';

// Configuración general del componente
export default {
  title: 'Organismos|Tablas',
  component: Table,
  decorators: [withA11y]
};

/** 
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

ConBordes.story = {
  name: 'Con bordes'
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

AlineaciónHorizontal.story = {
  name: 'Alineación horizontal'
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

AlineaciónVertical.story = {
  name: 'Alineación vertical'
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

TodoJunto.story = {
  name: 'Todo junto'
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
      Esto es un párrafo,
      <br />
      esto es otro párrafo.
    </p>
  </>
);

const rightAligned = (content: TableCellContet) => {
  return {
    content,
    props: { className: 'text-right' }
  };
};

export const Responsive = (): JSX.Element => {
  return (
    <div className="storybook__container-table-responsive">
      <div className="responsive-scroll" tabIndex={0}>
        <Table
          head={['#', 'Nombre', 'Apellido', 'Dirección', 'Ciudad', 'Comuna', 'Provincia']}
          body={[
            ['1', 'Juan', 'Alberto', 'Av. Santa Fe 1234', 'CABA', '1', 'Buenos Aires'],
            ['2', 'María', 'Julia', 'Av. Santa Fe 1234', 'CABA', '1', 'Buenos Aires'],
            ['3', 'Esther', 'Fermin', 'Av. Santa Fe 1234', 'CABA', '1', 'Buenos Aires']
          ]}
          bordered={true}
        />
      </div>
    </div>
  );
};
*/

export const NoBorder = (): JSX.Element => {
  return (
    <div className="storybook__container-table-responsive">
      <div className="responsive-scroll" tabIndex={0}>
        <table className="table table-borderless">
          <thead>
            <tr>
              <th scope="col" className="tb-number">
                Número
              </th>
              <th scope="col" className="tb-text">
                Texto
              </th>
              <th scope="col" className="tb-link">
                Enlace
              </th>
              <th scope="col" className="tb-button">
                Botón
              </th>
              <th scope="col" className="tb-check">
                Checkbox
              </th>
              <th scope="col" className="tb-tag">
                Etiqueta
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-right">1</td>
              <td>Juan</td>
              <td>
                <a href="#" target="_blank" rel="noreferrer">
                  Enlace predeterminado
                </a>
              </td>
              <td>
                <button type="button" className="btn btn-primary btn-icon">
                  <i className="bx bxs-info-circle"></i>
                  botón
                </button>
              </td>
              <td>
                <div className="custom-control custom-checkbox">
                  <input
                    className="custom-control-input"
                    type="checkbox"
                    id="skills-copywrite-input"
                    name="skills"
                    value="copywrite"
                    checked
                  />
                  <label className="custom-control-label" htmlFor="skills-copywrite-input">
                    Redacción
                  </label>
                </div>
              </td>
              <td>
                <span className="badge badge-secondary">Etiqueta 1</span>
              </td>
            </tr>
            <tr>
              <td className="text-right">2</td>
              <td>María</td>
              <td>
                <a href="#" target="_blank" rel="noreferrer">
                  Enlace predeterminado
                </a>
              </td>
              <td>
                <button type="button" className="btn btn-primary btn-icon">
                  <i className="bx bxs-info-circle"></i>
                  botón
                </button>
              </td>
              <td>
                <div className="custom-control custom-checkbox">
                  <input
                    className="custom-control-input"
                    type="checkbox"
                    id="skills-design-input"
                    name="skills"
                    value="design"
                  />
                  <label className="custom-control-label" htmlFor="skills-design-input">
                    Diseño
                  </label>
                </div>
              </td>
              <td>
                <span className="badge badge-secondary">Etiqueta 1</span>
              </td>
            </tr>
            <tr>
              <td className="text-right">3</td>
              <td>Esther</td>
              <td>
                <a href="#" target="_blank" rel="noreferrer">
                  Enlace predeterminado
                </a>
              </td>
              <td>
                <button type="button" className="btn btn-primary btn-icon">
                  <i className="bx bxs-info-circle"></i>
                  botón
                </button>
              </td>
              <td>
                <div className="custom-control custom-checkbox">
                  <input
                    className="custom-control-input"
                    type="checkbox"
                    id="skills-development-input"
                    name="skills"
                    value="development"
                  />
                  <label className="custom-control-label" htmlFor="skills-development-input">
                    Desarrollo
                  </label>
                </div>
              </td>
              <td>
                <span className="badge badge-secondary">Etiqueta 1</span>
              </td>
            </tr>
            <tr>
              <td className="text-right">4</td>
              <td>José</td>
              <td>
                <a href="#" target="_blank" rel="noreferrer">
                  Enlace predeterminado
                </a>
              </td>
              <td>
                <button type="button" className="btn btn-primary btn-icon">
                  <i className="bx bxs-info-circle"></i>
                  botón
                </button>
              </td>
              <td>
                <div className="custom-control custom-checkbox">
                  <input
                    className="custom-control-input"
                    type="checkbox"
                    id="skills-validation-input"
                    name="skills"
                    value="development"
                  />
                  <label className="custom-control-label" htmlFor="skills-validation-input">
                    Validacion
                  </label>
                </div>
              </td>
              <td>
                <span className="badge badge-secondary">Etiqueta 1</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

NoBorder.story = {
  name: 'Sin separadores'
};

export const NormalTable = (): JSX.Element => {
  return (
    <div className="storybook__container-table-responsive">
      <div className="responsive-scroll" tabIndex={0}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="tb-number">
                Número
              </th>
              <th scope="col" className="tb-text">
                Texto
              </th>
              <th scope="col" className="tb-link">
                Enlace
              </th>
              <th scope="col" className="tb-button">
                Botón
              </th>
              <th scope="col" className="tb-check">
                Checkbox
              </th>
              <th scope="col" className="tb-tag">
                Etiqueta
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-right">1</td>
              <td>Juan</td>
              <td>
                <a href="#" target="_blank" rel="noreferrer">
                  Enlace predeterminado
                </a>
              </td>
              <td>
                <button type="button" className="btn btn-primary btn-icon">
                  <i className="bx bxs-info-circle"></i>
                  botón
                </button>
              </td>
              <td>
                <div className="custom-control custom-checkbox">
                  <input
                    className="custom-control-input"
                    type="checkbox"
                    id="skills-copywrite-input"
                    name="skills"
                    value="copywrite"
                    checked
                  />
                  <label className="custom-control-label" htmlFor="skills-copywrite-input">
                    Redacción
                  </label>
                </div>
              </td>
              <td>
                <span className="badge badge-secondary">Etiqueta 1</span>
              </td>
            </tr>
            <tr>
              <td className="text-right">2</td>
              <td>María</td>
              <td>
                <a href="#" target="_blank" rel="noreferrer">
                  Enlace predeterminado
                </a>
              </td>
              <td>
                <button type="button" className="btn btn-primary btn-icon">
                  <i className="bx bxs-info-circle"></i>
                  botón
                </button>
              </td>
              <td>
                <div className="custom-control custom-checkbox">
                  <input
                    className="custom-control-input"
                    type="checkbox"
                    id="skills-design-input"
                    name="skills"
                    value="design"
                  />
                  <label className="custom-control-label" htmlFor="skills-design-input">
                    Diseño
                  </label>
                </div>
              </td>
              <td>
                <span className="badge badge-secondary">Etiqueta 1</span>
              </td>
            </tr>
            <tr>
              <td className="text-right">3</td>
              <td>Esther</td>
              <td>
                <a href="#" target="_blank" rel="noreferrer">
                  Enlace predeterminado
                </a>
              </td>
              <td>
                <button type="button" className="btn btn-primary btn-icon">
                  <i className="bx bxs-info-circle"></i>
                  botón
                </button>
              </td>
              <td>
                <div className="custom-control custom-checkbox">
                  <input
                    className="custom-control-input"
                    type="checkbox"
                    id="skills-development-input"
                    name="skills"
                    value="development"
                  />
                  <label className="custom-control-label" htmlFor="skills-development-input">
                    Desarrollo
                  </label>
                </div>
              </td>
              <td>
                <span className="badge badge-secondary">Etiqueta 1</span>
              </td>
            </tr>
            <tr>
              <td className="text-right">4</td>
              <td>José</td>
              <td>
                <a href="#" target="_blank" rel="noreferrer">
                  Enlace predeterminado
                </a>
              </td>
              <td>
                <button type="button" className="btn btn-primary btn-icon">
                  <i className="bx bxs-info-circle"></i>
                  botón
                </button>
              </td>
              <td>
                <div className="custom-control custom-checkbox">
                  <input
                    className="custom-control-input"
                    type="checkbox"
                    id="skills-validation-input"
                    name="skills"
                    value="development"
                  />
                  <label className="custom-control-label" htmlFor="skills-validation-input">
                    Validacion
                  </label>
                </div>
              </td>
              <td>
                <span className="badge badge-secondary">Etiqueta 1</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

NormalTable.story = {
  name: 'Con separadores'
};

export const StripedTable = (): JSX.Element => {
  return (
    <div className="storybook__container-table-responsive">
      <div className="responsive-scroll" tabIndex={0}>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col" className="tb-number">
                Número
              </th>
              <th scope="col" className="tb-text">
                Texto
              </th>
              <th scope="col" className="tb-link">
                Enlace
              </th>
              <th scope="col" className="tb-button">
                Botón
              </th>
              <th scope="col" className="tb-check">
                Checkbox
              </th>
              <th scope="col" className="tb-tag">
                Etiqueta
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-right">1</td>
              <td>Juan</td>
              <td>
                <a href="#" target="_blank" rel="noreferrer">
                  Enlace predeterminado
                </a>
              </td>
              <td>
                <button type="button" className="btn btn-primary btn-icon">
                  <i className="bx bxs-info-circle"></i>
                  botón
                </button>
              </td>
              <td>
                <div className="custom-control custom-checkbox">
                  <input
                    className="custom-control-input"
                    type="checkbox"
                    id="skills-copywrite-input"
                    name="skills"
                    value="copywrite"
                    checked
                  />
                  <label className="custom-control-label" htmlFor="skills-copywrite-input">
                    Redacción
                  </label>
                </div>
              </td>
              <td>
                <span className="badge badge-secondary">Etiqueta 1</span>
              </td>
            </tr>
            <tr>
              <td className="text-right">2</td>
              <td>María</td>
              <td>
                <a href="#" target="_blank" rel="noreferrer">
                  Enlace predeterminado
                </a>
              </td>
              <td>
                <button type="button" className="btn btn-primary btn-icon">
                  <i className="bx bxs-info-circle"></i>
                  botón
                </button>
              </td>
              <td>
                <div className="custom-control custom-checkbox">
                  <input
                    className="custom-control-input"
                    type="checkbox"
                    id="skills-design-input"
                    name="skills"
                    value="design"
                  />
                  <label className="custom-control-label" htmlFor="skills-design-input">
                    Diseño
                  </label>
                </div>
              </td>
              <td>
                <span className="badge badge-secondary">Etiqueta 1</span>
              </td>
            </tr>
            <tr>
              <td className="text-right">3</td>
              <td>Esther</td>
              <td>
                <a href="#" target="_blank" rel="noreferrer">
                  Enlace predeterminado
                </a>
              </td>
              <td>
                <button type="button" className="btn btn-primary btn-icon">
                  <i className="bx bxs-info-circle"></i>
                  botón
                </button>
              </td>
              <td>
                <div className="custom-control custom-checkbox">
                  <input
                    className="custom-control-input"
                    type="checkbox"
                    id="skills-development-input"
                    name="skills"
                    value="development"
                  />
                  <label className="custom-control-label" htmlFor="skills-development-input">
                    Desarrollo
                  </label>
                </div>
              </td>
              <td>
                <span className="badge badge-secondary">Etiqueta 1</span>
              </td>
            </tr>
            <tr>
              <td className="text-right">4</td>
              <td>José</td>
              <td>
                <a href="#" target="_blank" rel="noreferrer">
                  Enlace predeterminado
                </a>
              </td>
              <td>
                <button type="button" className="btn btn-primary btn-icon">
                  <i className="bx bxs-info-circle"></i>
                  botón
                </button>
              </td>
              <td>
                <div className="custom-control custom-checkbox">
                  <input
                    className="custom-control-input"
                    type="checkbox"
                    id="skills-validation-input"
                    name="skills"
                    value="development"
                  />
                  <label className="custom-control-label" htmlFor="skills-validation-input">
                    Validacion
                  </label>
                </div>
              </td>
              <td>
                <span className="badge badge-secondary">Etiqueta 1</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

StripedTable.story = {
  name: 'Con patrón cebra'
};

export const CheckboxAndText = (): JSX.Element => {
  return (
    <div className="storybook__container-table-responsive">
      <div className="responsive-scroll" tabIndex={0}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="tb-check">
                Checkbox
              </th>
              <th scope="col" className="tb-number">
                Número
              </th>
              <th scope="col" className="tb-text">
                Texto
              </th>
              <th scope="col" className="tb-text">
                Texto
              </th>
              <th scope="col" className="tb-text">
                Texto
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="custom-control custom-checkbox">
                  <input
                    className="custom-control-input"
                    type="checkbox"
                    id="skills-copywrite-input"
                    name="skills"
                    value="copywrite"
                    checked
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="skills-copywrite-input"
                    aria-label="Descripción para usuarios de lectores de pantalla"></label>
                </div>
              </td>
              <td className="text-right">$100,00</td>
              <td>Texto predeterminado</td>
              <td>Texto predeterminado</td>
              <td>Texto predeterminado</td>
            </tr>
            <tr>
              <td>
                <div className="custom-control custom-checkbox">
                  <input
                    className="custom-control-input"
                    type="checkbox"
                    id="skills-design-input"
                    name="skills"
                    value="design"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="skills-design-input"
                    aria-label="Descripción para usuarios de lectores de pantalla"></label>
                </div>
              </td>
              <td className="text-right">$100,00</td>
              <td>Texto predeterminado</td>
              <td>Texto predeterminado</td>
              <td>Texto predeterminado</td>
            </tr>
            <tr>
              <td>
                <div className="custom-control custom-checkbox">
                  <input
                    className="custom-control-input"
                    type="checkbox"
                    id="skills-development-input"
                    name="skills"
                    value="development"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="skills-development-input"
                    aria-label="Descripción para usuarios de lectores de pantalla"></label>
                </div>
              </td>
              <td className="text-right">$100,00</td>
              <td>Texto predeterminado</td>
              <td>Texto predeterminado</td>
              <td>Texto predeterminado</td>
            </tr>
            <tr>
              <td>
                <div className="custom-control custom-checkbox">
                  <input
                    className="custom-control-input"
                    type="checkbox"
                    id="skills-validation-input"
                    name="skills"
                    value="development"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="skills-validation-input"
                    aria-label="Descripción para usuarios de lectores de pantalla"></label>
                </div>
              </td>
              <td className="text-right">$100,00</td>
              <td>Texto predeterminado</td>
              <td>Texto predeterminado</td>
              <td>Texto predeterminado</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

CheckboxAndText.story = {
  name: 'Con checkbox'
};
