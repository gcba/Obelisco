// Base
import React from 'react';
import './Typography.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';
import { Typography } from '.';

// Configuración general del componente
export default {
  title: 'Estilos|Tipografía/Cuerpo',
  decorators: [withA11y]
};

export const CuerpoXl = (): JSX.Element => {
  return (
    <>
      {/* Cuerpo XL */}
      <p className="headline-lg font-weight-bold">Cuerpo XL</p>
      <div className="responsive-scroll" tabIndex={0}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="tb-text">
                HTML
              </th>
              <th scope="col" className="tb-text">
                Estilos
              </th>
              <th scope="col" className="tb-text">
                Ejemplos
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{/* "<p></p>" */}</td>
              <td> Open Sans | 20px | 28px </td>
              <td>
                <Typography as="p" className="text-xl ">
                  Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <p>&lt;p class=&quot;font-weight-semibold&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Open Sans | 20px | 28px | semibold</td>
              <td>
                <Typography as="p" className="text-xl font-weight-semibold">
                  Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <p>&lt;p class=&quot;font-weight-bold&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Open Sans | 20px | 28px | bold </td>
              <td>
                <Typography as="p" className="text-xl font-weight-bold">
                  Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <p>&lt;p class=&quot;font-italic&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Open Sans | 20px | 28px | italic </td>
              <td>
                <Typography as="p" className="text-xl font-italic">
                  Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <p>&lt;p class=&quot;underline-1&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Open Sans | 20px | 28px | underline </td>
              <td>
                <Typography as="p" className="text-xl underline-1">
                  Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
                </Typography>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Cuerpo XL */}

      <hr />
      {/* Cuerpo L */}
      <p className="headline-lg font-weight-bold">Cuerpo L</p>
      <div className="responsive-scroll" tabIndex={0}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="tb-text">
                HTML
              </th>
              <th scope="col" className="tb-text">
                Estilos
              </th>
              <th scope="col" className="tb-text">
                Ejemplos
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{/* "<p></p>" */}</td>
              <td> Open Sans | 18px | 28px </td>
              <td>
                <Typography as="p" className="text-lg ">
                  Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <p>&lt;p class=&quot;font-weight-semibold&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Open Sans | 18px | 28px | semibold</td>
              <td>
                <Typography as="p" className="text-lg font-weight-semibold">
                  Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <p>&lt;p class=&quot;font-weight-bold&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Open Sans | 18px | 28px | bold </td>
              <td>
                <Typography as="p" className="text-lg font-weight-bold">
                  Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <p>&lt;p class=&quot;font-italic&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Open Sans | 18px | 28px | italic </td>
              <td>
                <Typography as="p" className="text-lg font-italic">
                  Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <p>&lt;p class=&quot;underline-1&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Open Sans | 18px | 28px | underline </td>
              <td>
                <Typography as="p" className="text-lg underline-1">
                  Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
                </Typography>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Cuerpo L */}

      <hr />
      {/* Cuerpo M */}
      <p className="headline-lg font-weight-bold">Cuerpo M</p>
      <div className="responsive-scroll" tabIndex={0}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="tb-text">
                HTML
              </th>
              <th scope="col" className="tb-text">
                Estilos
              </th>
              <th scope="col" className="tb-text">
                Ejemplos
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{/* "<p></p>" */}</td>
              <td> Open Sans | 16px | 24px </td>
              <td>
                <Typography as="p" className="text-md ">
                  Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <p>&lt;p class=&quot;font-weight-semibold&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Open Sans | 16px | 24px | semibold</td>
              <td>
                <Typography as="p" className="text-md font-weight-semibold">
                  Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <p>&lt;p class=&quot;font-weight-bold&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Open Sans | 16px | 24px | bold </td>
              <td>
                <Typography as="p" className="text-md font-weight-bold">
                  Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <p>&lt;p class=&quot;font-italic&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Open Sans | 16px | 24px | italic </td>
              <td>
                <Typography as="p" className="text-md font-italic">
                  Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <p>&lt;p class=&quot;underline-1&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Open Sans | 16px | 24px | underline </td>
              <td>
                <Typography as="p" className="text-md underline-1">
                  Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
                </Typography>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Cuerpo M */}

      <hr />
      {/* Cuerpo S */}
      <p className="headline-lg font-weight-bold">Cuerpo S</p>
      <div className="responsive-scroll" tabIndex={0}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="tb-text">
                HTML
              </th>
              <th scope="col" className="tb-text">
                Estilos
              </th>
              <th scope="col" className="tb-text">
                Ejemplos
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{/* "<p></p>" */}</td>
              <td> Open Sans | 14px | 20px </td>
              <td>
                <Typography as="p" className="text-sm ">
                  Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <p>&lt;p class=&quot;font-weight-semibold&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Open Sans | 14px | 20px | semibold</td>
              <td>
                <Typography as="p" className="text-sm font-weight-semibold">
                  Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <p>&lt;p class=&quot;font-weight-bold&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Open Sans | 14px | 20px | bold </td>
              <td>
                <Typography as="p" className="text-sm font-weight-bold">
                  Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <p>&lt;p class=&quot;font-italic&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Open Sans | 14px | 20px | italic </td>
              <td>
                <Typography as="p" className="text-sm font-italic">
                  Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <p>&lt;p class=&quot;underline-1&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Open Sans | 14px | 20px | underline </td>
              <td>
                <Typography as="p" className="text-sm underline-1">
                  Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
                </Typography>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Cuerpo S */}

      <hr />
      {/* Cuerpo XS */}
      <p className="headline-lg font-weight-bold">Cuerpo XS</p>
      <div className="responsive-scroll" tabIndex={0}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="tb-text">
                HTML
              </th>
              <th scope="col" className="tb-text">
                Estilos
              </th>
              <th scope="col" className="tb-text">
                Ejemplos
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{/* "<p></p>" */}</td>
              <td> Open Sans | 12px | 16px </td>
              <td>
                <Typography as="p" className="text-xs">
                  Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <p>&lt;p class=&quot;font-weight-semibold&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Open Sans | 12px | 16px | semibold</td>
              <td>
                <Typography as="p" className="text-xs font-weight-semibold">
                  Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <p>&lt;p class=&quot;font-weight-bold&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Open Sans | 12px | 16px | bold </td>
              <td>
                <Typography as="p" className="text-xs font-weight-bold">
                  Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <p>&lt;p class=&quot;font-italic&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Open Sans | 12px | 16px | italic </td>
              <td>
                <Typography as="p" className="text-xs font-italic">
                  Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <p>&lt;p class=&quot;underline-1&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Open Sans | 12px | 16px | underline </td>
              <td>
                <Typography as="p" className="text-xs underline-1">
                  Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
                </Typography>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Cuerpo XS */}
    </>
  );
};

CuerpoXl.story = { name: 'Cuerpo XL' };

export const CuerpoL = (): JSX.Element => {
  return (
    <div className="col-12 col-md-6">
      <Typography as="p" className="text-lg">
        Cuerpo L: Familia tipográfica: Open Sans | Tamaño: 18px | Interlineado: 28px.
      </Typography>

      <Typography as="p" className="text-lg">
        Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
      </Typography>

      <Typography as="p" className="text-lg" weight="font-weight-semibold">
        Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
      </Typography>

      <Typography as="p" className="text-lg" weight="font-weight-bold">
        Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
      </Typography>

      <Typography as="p" className="text-lg font-italic">
        Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
      </Typography>

      <Typography as="p" className="text-lg underline-1">
        Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
      </Typography>
    </div>
  );
};
//este es el nuevo
CuerpoL.story = { name: 'Cuerpo L' };

export const CuerpoM = (): JSX.Element => {
  return (
    <div className="col-12 col-md-6">
      <Typography as="p" className="text-md">
        Cuerpo M: Familia tipográfica: Open Sans | Tamaño: 16px | Interlineado: 24px.
      </Typography>

      <Typography as="p" className="text-md">
        Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
      </Typography>

      <Typography as="p" className="text-md" weight="font-weight-semibold">
        Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
      </Typography>

      <Typography as="p" className="text-md" weight="font-weight-bold">
        Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
      </Typography>

      <Typography as="p" className="text-md font-italic">
        Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
      </Typography>

      <Typography as="p" className="text-md underline-1">
        Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
      </Typography>
    </div>
  );
};
//asignarle los estilos a la p y a la clase text-md ya que es el texto por defecto
CuerpoM.story = {
  name: 'Cuerpo M'
};

export const CuerpoS = (): JSX.Element => {
  return (
    <div className="col-12 col-md-6">
      <Typography as="p" className="text-sm">
        Cuerpo S: Familia tipográfica: Open Sans | Tamaño: 14px | Interlineado: 20px.
      </Typography>

      <Typography as="p" className="text-sm">
        Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
      </Typography>

      <Typography as="p" className="text-sm" weight="font-weight-semibold">
        Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
      </Typography>

      <Typography as="p" className="text-sm" weight="font-weight-bold">
        Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
      </Typography>

      <Typography as="p" className="text-sm font-italic">
        Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
      </Typography>

      <Typography as="p" className="text-sm underline-1">
        Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
      </Typography>
    </div>
  );
}; // el ejemplo de la clase small, no se mostraria ya que se da a lugar la nueva clase text-sm
CuerpoS.story = {
  name: 'Cuerpo S'
};

export const CuerpoXs = (): JSX.Element => {
  return (
    <div className="col-12 col-md-6">
      <Typography as="p" className="text-xs">
        Cuerpo XS: Familia tipográfica: Open Sans | Tamaño: 12px | Interlineado: 16px.
      </Typography>

      <Typography as="p" className="text-xs">
        Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
      </Typography>

      <Typography as="p" className="text-xs" weight="font-weight-semibold">
        Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
      </Typography>

      <Typography as="p" className="text-xs" weight="font-weight-bold">
        Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
      </Typography>

      <Typography as="p" className="text-xs font-italic">
        Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
      </Typography>

      <Typography as="p" className="text-xs underline-1">
        Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
      </Typography>
    </div>
  );
};
CuerpoXs.story = {
  name: 'Cuerpo XS'
};
