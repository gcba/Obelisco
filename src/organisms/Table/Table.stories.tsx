// Base
import React from 'react';
import './Table.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { Table } from '.';

// Configuración general del componente
export default {
  title: 'Organismos|Tablas',
  component: Table,
  decorators: [withA11y]
};

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
  const [value, setValue] = React.useState<boolean>(true);
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
                    checked={value}
                    onChange={(event) => setValue(event.target.checked)}
                  />
                  <label
                    className="custom-control-label no-text"
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
                    className="custom-control-label no-text"
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
                    className="custom-control-label no-text"
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
                    className="custom-control-label no-text"
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
