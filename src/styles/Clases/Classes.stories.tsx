// Base
import React from 'react';
import './Classes.stories.scss';

// Configuración general del componente
export default {
  title: 'Estilos|Clases',
  parameters: { options: { showPanel: false } }
};

export const SizesAndSpacing = (): JSX.Element => {
  return (
    <>
      {/* Tamaños y Espaciados - Margin*/}
      <p className="headline-lg font-weight-bold">Tamaños y Espaciados</p>
      <p className="headline-lg font-weight-semibold">Margin</p>
      <div className="responsive-scroll" tabIndex={0}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="tb-text">
                margin-top
              </th>
              <th scope="col" className="tb-text">
                margin-right
              </th>
              <th scope="col" className="tb-text">
                margin-bottom
              </th>
              <th scope="col" className="tb-text">
                margin-left
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p className="storybook__margin-typography mt-0">{'.mt-0'}</p>
              </td>
              <td>
                <p className="storybook__margin-typography mr-0">{'.mr-0'}</p>
              </td>
              <td>
                <p className="storybook__margin-typography mb-0">{'.mb-0'}</p>
              </td>
              <td>
                <p className="storybook__margin-typography ml-0">{'.ml-0'}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="storybook__margin-typography mt-1">{'.mt-1'}</p>
              </td>
              <td>
                <p className="storybook__margin-typography mr-1">{'.mr-1'}</p>
              </td>
              <td>
                <p className="storybook__margin-typography mb-1">{'.mb-1'}</p>
              </td>
              <td>
                <p className="storybook__margin-typography ml-1">{'.ml-1'}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="storybook__margin-typography mt-2">{'.mt-2'}</p>
              </td>
              <td>
                <p className="storybook__margin-typography mr-2">{'.mr-2'}</p>
              </td>
              <td>
                <p className="storybook__margin-typography mb-2">{'.mb-2'}</p>
              </td>
              <td>
                <p className="storybook__margin-typography ml-2">{'.ml-2'}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="storybook__margin-typography mt-3">{'.mt-3'}</p>
              </td>
              <td>
                <p className="storybook__margin-typography mr-3">{'.mr-3'}</p>
              </td>
              <td>
                <p className="storybook__margin-typography mb-3">{'.mb-3'}</p>
              </td>
              <td>
                <p className="storybook__margin-typography ml-3">{'.ml-3'}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="storybook__margin-typography mt-4">{'.mt-4'}</p>
              </td>
              <td>
                <p className="storybook__margin-typography mr-4">{'.mr-4'}</p>
              </td>
              <td>
                <p className="storybook__margin-typography mb-4">{'.mb-4'}</p>
              </td>
              <td>
                <p className="storybook__margin-typography ml-4">{'.ml-4'}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="storybook__margin-typography mt-5">{'.mt-5'}</p>
              </td>
              <td>
                <p className="storybook__margin-typography mr-5">{'.mr-5'}</p>
              </td>
              <td>
                <p className="storybook__margin-typography mb-5">{'.mb-5'}</p>
              </td>
              <td>
                <p className="storybook__margin-typography ml-5">{'.ml-5'}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="storybook__margin-typography mt-6">{'.mt-6'}</p>
              </td>
              <td>
                <p className="storybook__margin-typography mr-6">{'.mr-6'}</p>
              </td>
              <td>
                <p className="storybook__margin-typography mb-6">{'.mb-6'}</p>
              </td>
              <td>
                <p className="storybook__margin-typography ml-6">{'.ml-6'}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="storybook__margin-typography mt-7">{'.mt-7'}</p>
              </td>
              <td>
                <p className="storybook__margin-typography mr-7">{'.mr-7'}</p>
              </td>
              <td>
                <p className="storybook__margin-typography mb-7">{'.mb-7'}</p>
              </td>
              <td>
                <p className="storybook__margin-typography ml-7">{'.ml-7'}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="storybook__margin-typography mt-8">{'.mt-8'}</p>
              </td>
              <td>
                <p className="storybook__margin-typography mr-8">{'.mr-8'}</p>
              </td>
              <td>
                <p className="storybook__margin-typography mb-8">{'.mb-8'}</p>
              </td>
              <td>
                <p className="storybook__margin-typography ml-8">{'.ml-8'}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Tamaños y Espaciados - Margin*/}

      {/* Tamaños y Espaciados - Padding*/}
      <p className="headline-lg font-weight-semibold mt-3">Padding</p>
      <div className="responsive-scroll" tabIndex={0}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="tb-text">
                padding-top
              </th>
              <th scope="col" className="tb-text">
                padding-right
              </th>
              <th scope="col" className="tb-text">
                padding-bottom
              </th>
              <th scope="col" className="tb-text">
                padding-left
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p className="storybook__margin-typography pt-0">{'.pt-0'}</p>
              </td>
              <td>
                <p className="storybook__margin-typography pr-0">{'.pr-0'}</p>
              </td>
              <td>
                <p className="storybook__margin-typography pb-0">{'.pb-0'}</p>
              </td>
              <td>
                <p className="storybook__margin-typography pl-0">{'.pl-0'}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="storybook__margin-typography pt-1">{'.pt-1'}</p>
              </td>
              <td>
                <p className="storybook__margin-typography pr-1">{'.pr-1'}</p>
              </td>
              <td>
                <p className="storybook__margin-typography pb-1">{'.pb-1'}</p>
              </td>
              <td>
                <p className="storybook__margin-typography pl-1">{'.pl-1'}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="storybook__margin-typography pt-2">{'.pt-2'}</p>
              </td>
              <td>
                <p className="storybook__margin-typography pr-2">{'.pr-2'}</p>
              </td>
              <td>
                <p className="storybook__margin-typography pb-2">{'.pb-2'}</p>
              </td>
              <td>
                <p className="storybook__margin-typography pl-2">{'.pl-2'}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="storybook__margin-typography pt-3">{'.pt-3'}</p>
              </td>
              <td>
                <p className="storybook__margin-typography pr-3">{'.pr-3'}</p>
              </td>
              <td>
                <p className="storybook__margin-typography pb-3">{'.pb-3'}</p>
              </td>
              <td>
                <p className="storybook__margin-typography pl-3">{'.pl-3'}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="storybook__margin-typography pt-4">{'.pt-4'}</p>
              </td>
              <td>
                <p className="storybook__margin-typography pr-4">{'.pr-4'}</p>
              </td>
              <td>
                <p className="storybook__margin-typography pb-4">{'.pb-4'}</p>
              </td>
              <td>
                <p className="storybook__margin-typography pl-4">{'.pl-4'}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="storybook__margin-typography pt-5">{'.pt-5'}</p>
              </td>
              <td>
                <p className="storybook__margin-typography pr-5">{'.pr-5'}</p>
              </td>
              <td>
                <p className="storybook__margin-typography pb-5">{'.pb-5'}</p>
              </td>
              <td>
                <p className="storybook__margin-typography pl-5">{'.pl-5'}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="storybook__margin-typography pt-6">{'.pt-6'}</p>
              </td>
              <td>
                <p className="storybook__margin-typography pr-6">{'.pr-6'}</p>
              </td>
              <td>
                <p className="storybook__margin-typography pb-6">{'.pb-6'}</p>
              </td>
              <td>
                <p className="storybook__margin-typography pl-6">{'.pl-6'}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="storybook__margin-typography pt-7">{'.pt-7'}</p>
              </td>
              <td>
                <p className="storybook__margin-typography pr-7">{'.pr-7'}</p>
              </td>
              <td>
                <p className="storybook__margin-typography pb-7">{'.pb-7'}</p>
              </td>
              <td>
                <p className="storybook__margin-typography pl-7">{'.pl-7'}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="storybook__margin-typography pt-8">{'.pt-8'}</p>
              </td>
              <td>
                <p className="storybook__margin-typography pr-8">{'.pr-8'}</p>
              </td>
              <td>
                <p className="storybook__margin-typography pb-8">{'.pb-8'}</p>
              </td>
              <td>
                <p className="storybook__margin-typography pl-8">{'.pl-8'}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Tamaños y Espaciados - Padding*/}
    </>
  );
};

SizesAndSpacing.story = { name: 'Tamaños y Espaciados' };

export const Columns = (): JSX.Element => {
  return <></>;
};

Columns.story = { name: 'Columnas' };

export const AlignAndOrder = (): JSX.Element => {
  return <></>;
};

AlignAndOrder.story = { name: 'Align y Order' };

export const Border = (): JSX.Element => {
  return <></>;
};

Border.story = { name: 'Bordes' };