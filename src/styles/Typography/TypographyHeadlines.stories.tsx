// Base
import React from 'react';
import './Typography.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';
import { Typography } from '.';

// Configuración general del componente
export default {
  title: 'Estilos|Tipografía/Titulares',
  decorators: [withA11y]
};

export const Tag = (): JSX.Element => {
  return (
    <>
      {/* Titulares L */}
      <p className="headline-lgg font-weight-bold">Titulares L</p>
      <div className="responsive-scroll" tabIndex={0}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="tb-text">
                HTML
              </th>
              <th scope="col" className="tb-text">
                Familia Tipografica | Tamaño | Interlineado
              </th>
              <th scope="col" className="tb-text">
                Ejemplos
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>&lt;p class=&quot;headline-lg&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Nunito | 20px | 24px </td>
              <td>
                <Typography as="p" className="headline-lg ">
                  Esto es un texto de titulares
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <p>&lt;p class=&quot;headline-lg font-weight-semibold&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Nunito | 18px | 28px | semibold</td>
              <td>
                <Typography as="p" className="headline-lg font-weight-semibold">
                  Esto es un texto de titulares
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <p>&lt;p class=&quot;headline-lg font-weight-bold&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Nunito | 18px | 28px | bold </td>
              <td>
                <Typography as="p" className="headline-lg font-weight-bold">
                  Esto es un texto de titulares
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <p>&lt;p class=&quot;headline-lg font-italic&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Open Sans | 18px | 28px | italic </td>
              <td>
                <Typography as="p" className="headline-lg font-italic">
                  Esto es un texto de titulares
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <p>&lt;p class=&quot;headline-lg underline-1&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Open Sans | 18px | 28px | underline </td>
              <td>
                <Typography as="p" className="headline-lg underline-1">
                  Esto es un texto de titulares
                </Typography>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Titulares L */}

      <hr />
      {/* Titulares M */}
      <p className="headline-lgg font-weight-bold">Titulares M</p>
      <div className="responsive-scroll" tabIndex={0}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="tb-text">
                HTML
              </th>
              <th scope="col" className="tb-text">
                Familia Tipografica | Tamaño | Interlineado
              </th>
              <th scope="col" className="tb-text">
                Ejemplos
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>&lt;p class=&quot;headline-md&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Nunito | 18px | 24px </td>
              <td>
                <Typography as="p" className="headline-md ">
                  Esto es un texto de titulares
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <p>&lt;p class=&quot;headline-md font-weight-semibold&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Nunito | 18px | 24px | semibold</td>
              <td>
                <Typography as="p" className="headline-md font-weight-semibold">
                  Esto es un texto de titulares
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <p>&lt;p class=&quot;headline-md font-weight-bold&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Nunito | 18px | 24px | bold </td>
              <td>
                <Typography as="p" className="headline-md font-weight-bold">
                  Esto es un texto de titulares
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <p>&lt;p class=&quot;headline-md font-italic&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Nunito | 18px | 24px | italic </td>
              <td>
                <Typography as="p" className="headline-md font-italic">
                  Esto es un texto de titulares
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <p>&lt;p class=&quot;headline-md underline-1&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Nunito | 18px | 24px | underline </td>
              <td>
                <Typography as="p" className="headline-md underline-1">
                  Esto es un texto de titulares
                </Typography>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Titulares M */}

      <hr />
      {/* Titulares S */}
      <p className="headline-lgg font-weight-bold">Titulares S</p>
      <div className="responsive-scroll" tabIndex={0}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="tb-text">
                HTML
              </th>
              <th scope="col" className="tb-text">
                Familia Tipografica | Tamaño | Interlineado
              </th>
              <th scope="col" className="tb-text">
                Ejemplos
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>&lt;p class=&quot;text-sm&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Nunito | 16px | 20px </td>
              <td>
                <Typography as="p" className="text-sm ">
                  Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <p>&lt;p class=&quot;text-sm font-weight-semibold&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Nunito | 16px | 20px | semibold</td>
              <td>
                <Typography as="p" className="text-sm font-weight-semibold">
                  Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <p>&lt;p class=&quot;text-sm font-weight-bold&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Nunito | 16px | 20px | bold </td>
              <td>
                <Typography as="p" className="text-sm font-weight-bold">
                  Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <p>&lt;p class=&quot;text-sm font-italic&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Nunito | 16px | 20px | italic </td>
              <td>
                <Typography as="p" className="text-sm font-italic">
                  Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <p>&lt;p class=&quot;text-sm underline-1&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Nunito | 16px | 20px | underline </td>
              <td>
                <Typography as="p" className="text-sm underline-1">
                  Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
                </Typography>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Titulares S */}
    </>
  );
};

Tag.story = { name: 'Titulares' };
