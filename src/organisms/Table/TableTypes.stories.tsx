// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { Table } from '.';

// Configuración general del componente
export default {
  title: 'Organismos|Tablas/Tipo de celda',
  component: Table,
  decorators: [withA11y]
};

export const OnlyText = (): JSX.Element => {
  return (
    <div className="storybook__container-table-responsive">
      <div className="responsive-scroll" tabIndex={0}>
        <table className="table">
          <thead>
            <tr>
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
              <td>Texto predeterminado</td>
              <td>Texto predeterminado</td>
              <td>Texto predeterminado</td>
            </tr>
            <tr>
              <td>Texto predeterminado</td>
              <td>Texto predeterminado</td>
              <td>Texto predeterminado</td>
            </tr>
            <tr>
              <td>Texto predeterminado</td>
              <td>Texto predeterminado</td>
              <td>Texto predeterminado</td>
            </tr>
            <tr>
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

OnlyText.story = {
  name: 'De Texto'
};

export const TextAndNumber = (): JSX.Element => {
  return (
    <div className="storybook__container-table-responsive">
      <div className="responsive-scroll" tabIndex={0}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="tb-text">
                Texto
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
                Este un texto de prueba para registrar el alto máximo de la celda y la cantidad de caracteres
                permitidos.
              </td>
              <td className="text-right">$100,00</td>
              <td>Texto predeterminado</td>
              <td>Texto predeterminado</td>
              <td>Texto predeterminado</td>
            </tr>
            <tr>
              <td>Texto predeterminado</td>
              <td className="text-right">$100,00</td>
              <td>Texto predeterminado</td>
              <td>Texto predeterminado</td>
              <td>Texto predeterminado</td>
            </tr>
            <tr>
              <td>Texto predeterminado</td>
              <td className="text-right">$100,00</td>
              <td>Texto predeterminado</td>
              <td>Texto predeterminado</td>
              <td>Texto predeterminado</td>
            </tr>
            <tr>
              <td>Texto predeterminado</td>
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

TextAndNumber.story = {
  name: 'De número'
};

export const TextAndLink = (): JSX.Element => {
  return (
    <div className="storybook__container-table-responsive">
      <div className="responsive-scroll" tabIndex={0}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="tb-text">
                Texto
              </th>
              <th scope="col" className="tb-text">
                Texto
              </th>
              <th scope="col" className="tb-link">
                Enlace
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
                Este un texto de prueba para registrar el alto máximo de la celda y la cantidad de caracteres
                permitidos.
              </td>
              <td>Texto predeterminado</td>
              <td>
                <a href="#" target="_blank" rel="noreferrer">
                  Enlace predeterminado
                </a>
              </td>
              <td>Texto predeterminado</td>
              <td>Texto predeterminado</td>
            </tr>
            <tr>
              <td>Texto predeterminado</td>
              <td>Texto predeterminado</td>
              <td>
                <a href="#" target="_blank" rel="noreferrer">
                  Enlace predeterminado
                </a>
              </td>
              <td>Texto predeterminado</td>
              <td>Texto predeterminado</td>
            </tr>
            <tr>
              <td>Texto predeterminado</td>
              <td>Texto predeterminado</td>
              <td>
                <a href="#" target="_blank" rel="noreferrer">
                  Enlace predeterminado
                </a>
              </td>
              <td>Texto predeterminado</td>
              <td>Texto predeterminado</td>
            </tr>
            <tr>
              <td>Texto predeterminado</td>
              <td>Texto predeterminado</td>
              <td>
                <a href="#" target="_blank" rel="noreferrer">
                  Enlace predeterminado
                </a>
              </td>
              <td>Texto predeterminado</td>
              <td>Texto predeterminado</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

TextAndLink.story = {
  name: 'De enlace'
};

export const TextAndTag = (): JSX.Element => {
  return (
    <div className="storybook__container-table-responsive">
      <div className="responsive-scroll" tabIndex={0}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="tb-text">
                Texto
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
              <th scope="col" className="tb-tag">
                Etiqueta
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Este un texto de prueba para registrar el alto máximo de la celda y la cantidad de caracteres
                permitidos.
              </td>
              <td>Texto predeterminado</td>
              <td>Texto predeterminado</td>
              <td>Texto predeterminado</td>
              <td>
                <span className="badge badge-secondary">Etiqueta 1</span>
              </td>
            </tr>
            <tr>
              <td>Texto predeterminado</td>
              <td>Texto predeterminado</td>
              <td>Texto predeterminado</td>
              <td>Texto predeterminado</td>
              <td>
                <span className="badge badge-secondary">Etiqueta 1</span>
              </td>
            </tr>
            <tr>
              <td>Texto predeterminado</td>
              <td>Texto predeterminado</td>
              <td>Texto predeterminado</td>
              <td>Texto predeterminado</td>
              <td>
                <span className="badge badge-secondary">Etiqueta 1</span>
              </td>
            </tr>
            <tr>
              <td>Texto predeterminado</td>
              <td>Texto predeterminado</td>
              <td>Texto predeterminado</td>
              <td>Texto predeterminado</td>
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

TextAndTag.story = {
  name: 'De etiqueta'
};

export const TextAndButton = (): JSX.Element => {
  return (
    <div className="storybook__container-table-responsive">
      <div className="responsive-scroll" tabIndex={0}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="tb-text">
                Texto
              </th>
              <th scope="col" className="tb-text">
                Texto
              </th>
              <th scope="col" className="tb-button">
                Botón
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
                Este un texto de prueba para registrar el alto máximo de la celda y la cantidad de caracteres
                permitidos.
              </td>
              <td>Texto predeterminado</td>
              <td>
                <button type="button" className="btn btn-primary btn-icon">
                  <i className="bx bxs-info-circle"></i>
                  botón
                </button>
              </td>
              <td>Texto predeterminado</td>
              <td>Texto predeterminado</td>
            </tr>
            <tr>
              <td>Texto predeterminado</td>
              <td>Texto predeterminado</td>
              <td>
                <button type="button" className="btn btn-primary btn-icon">
                  <i className="bx bxs-info-circle"></i>
                  botón
                </button>
              </td>
              <td>Texto predeterminado</td>
              <td>Texto predeterminado</td>
            </tr>
            <tr>
              <td>Texto predeterminado</td>
              <td>Texto predeterminado</td>
              <td>
                <button type="button" className="btn btn-primary btn-icon">
                  <i className="bx bxs-info-circle"></i>
                  botón
                </button>
              </td>
              <td>Texto predeterminado</td>
              <td>Texto predeterminado</td>
            </tr>
            <tr>
              <td>Texto predeterminado</td>
              <td>Texto predeterminado</td>
              <td>
                <button type="button" className="btn btn-primary btn-icon">
                  <i className="bx bxs-info-circle"></i>
                  botón
                </button>
              </td>
              <td>Texto predeterminado</td>
              <td>Texto predeterminado</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

TextAndButton.story = {
  name: 'De botón'
};

export const TextAndButtonIcon = (): JSX.Element => {
  return (
    <div className="storybook__container-table-responsive">
      <div className="responsive-scroll" tabIndex={0}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="tb-text">
                Texto
              </th>
              <th scope="col" className="tb-text">
                Texto
              </th>
              <th scope="col" className="tb-text">
                Texto
              </th>
              <th scope="col" className="tb-button">
                Botón de ícono
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Este un texto de prueba para registrar el alto máximo de la celda y la cantidad de caracteres
                permitidos.
              </td>
              <td>Texto predeterminado</td>
              <td>Texto predeterminado</td>
              <td>
                <div className="actions-table">
                  <button className="btn button-actions-table">
                    <span className="material-icons-round">edit</span>
                  </button>
                  <button className="btn button-actions-table">
                    <span className="material-icons-round">visibility</span>
                  </button>
                  <button className="btn button-actions-table">
                    <span className="material-icons-round">file_download</span>
                  </button>
                  <button className="btn button-actions-table">
                    <span className="material-icons-round">delete</span>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Texto predeterminado</td>
              <td>Texto predeterminado</td>
              <td>Texto predeterminado</td>
              <td>
                <div className="actions-table">
                  <button className="btn button-actions-table">
                    <span className="material-icons-round">edit</span>
                  </button>
                  <button className="btn button-actions-table">
                    <span className="material-icons-round">visibility</span>
                  </button>
                  <button className="btn button-actions-table">
                    <span className="material-icons-round">file_download</span>
                  </button>
                  <button className="btn button-actions-table">
                    <span className="material-icons-round">delete</span>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Texto predeterminado</td>
              <td>Texto predeterminado</td>
              <td>Texto predeterminado</td>
              <td>
                <div className="actions-table">
                  <button className="btn button-actions-table">
                    <span className="material-icons-round">edit</span>
                  </button>
                  <button className="btn button-actions-table">
                    <span className="material-icons-round">visibility</span>
                  </button>
                  <button className="btn button-actions-table">
                    <span className="material-icons-round">file_download</span>
                  </button>
                  <button className="btn button-actions-table">
                    <span className="material-icons-round">delete</span>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Texto predeterminado</td>
              <td>Texto predeterminado</td>
              <td>Texto predeterminado</td>
              <td>
                <div className="actions-table">
                  <button className="btn button-actions-table">
                    <span className="material-icons-round">edit</span>
                  </button>
                  <button className="btn button-actions-table">
                    <span className="material-icons-round">visibility</span>
                  </button>
                  <button className="btn button-actions-table">
                    <span className="material-icons-round">file_download</span>
                  </button>
                  <button className="btn button-actions-table">
                    <span className="material-icons-round">delete</span>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

TextAndButtonIcon.story = {
  name: 'De botón de ícono'
};
