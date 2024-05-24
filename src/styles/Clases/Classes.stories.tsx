// Base
import React from 'react';
import './Classes.stories.scss';
import { Typography } from '../Typography/index';

// Configuración general del componente
export default {
  title: 'Estilos|Clases',
  parameters: { options: { showPanel: false } }
};

export const SizesAndSpacing = (): JSX.Element => {
  return (
    <>
      <p className="headline-lg font-weight-bold">Tamaños y Espaciados</p>
      <div className="responsive-scroll" tabIndex={0}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="tb-text">
                CLASES
              </th>
              <th scope="col" className="tb-text">
                Propiedad que aplica
              </th>
              <th scope="col" className="tb-text">
                Ejemplos
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>{'.mt-0'}</p>
              </td>
              <td> {'margin-top: 0;'} </td>
              <td>
                <Typography as="p" className="mb-0 text-xl ">
                  Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <p>&lt;p class=&quot;text-xl font-weight-semibold&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Open Sans | 20px | 28px | semibold</td>
              <td>
                <Typography as="p" className="mb-0 text-xl font-weight-semibold">
                  Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <p>&lt;p class=&quot;text-xl font-weight-bold&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Open Sans | 20px | 28px | bold </td>
              <td>
                <Typography as="p" className="mb-0 text-xl font-weight-bold">
                  Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <p>&lt;p class=&quot;text-xl font-italic&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Open Sans | 20px | 28px | italic </td>
              <td>
                <Typography as="p" className="mb-0 text-xl font-italic">
                  Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <p>&lt;p class=&quot;text-xl underline-1&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Open Sans | 20px | 28px | underline </td>
              <td>
                <Typography as="p" className="mb-0 text-xl underline-1">
                  Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
                </Typography>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
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
