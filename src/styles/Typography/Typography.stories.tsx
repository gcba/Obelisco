// Base
import React from 'react';
import './Typography.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';
import { Typography, Blockquote, UnorderedList, ListItem, OrderedList } from '.';

// Configuración general del componente
export default {
  title: 'Estilos|Tipografía',
  decorators: [withA11y]
};

export const Headings = (): JSX.Element => {
  return (
    <>
      {/* h1 */}
      <p className="headline-lg font-weight-bold">Encabezado h1</p>
      <div className="responsive-scroll" tabIndex={0}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="tb-text">
                HTML
              </th>
              <th scope="col" className="tb-text">
                Fuente | Tamaño | Interlineado
              </th>
              <th scope="col" className="tb-text">
                Ejemplos
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{'<h1 class="font-weight-bold"></h1>'}</td>
              <td>Nunito | 40px | 48px | bold </td>
              <td>
                <Typography className="storybook__margin-typography " as="h1">
                  Encabezado h1 bold
                </Typography>
              </td>
            </tr>
            <tr>
              <td>{'<h1 class="font-weight-semibold"></h1>'}</td>
              <td>Nunito | 40px | 48px | semibold</td>
              <td>
                <Typography className="storybook__margin-typography " as="h1" weight="font-weight-semibold">
                  Encabezado h1 semibold
                </Typography>
              </td>
            </tr>
            <tr>
              <td>{'<h1 class="font-weight-normal"></h1>'}</td>
              <td>Nunito | 40px | 48px | normal </td>
              <td>
                <Typography className="storybook__margin-typography " as="h1" weight="font-weight-normal">
                  Encabezado h1 normal
                </Typography>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* h1 */}

      {/* h2 */}
      <hr className="mt-5" />
      <p className="headline-lg font-weight-bold">Encabezado h2</p>

      <div className="responsive-scroll" tabIndex={0}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="tb-text">
                HTML
              </th>
              <th scope="col" className="tb-text">
                Fuente | Tamaño | Interlineado
              </th>
              <th scope="col" className="tb-text">
                Ejemplos
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{'<h2 class="font-weight-bold"></h2>'}</td>
              <td>Nunito | 36px | 40px | bold </td>
              <td>
                <Typography className="storybook__margin-typography " as="h2" weight="font-weight-bold">
                  Encabezado h2 bold
                </Typography>
              </td>
            </tr>
            <tr>
              <td>{'<h2 class="font-weight-semibold"></h2>'}</td>
              <td>Nunito | 36px | 40px | semibold</td>
              <td>
                <Typography className="storybook__margin-typography " as="h2">
                  Encabezado h2 semibold
                </Typography>
              </td>
            </tr>
            <tr>
              <td>{'<h2 class="font-weight-normal"></h2>'}</td>
              <td>Nunito | 36px | 40px | normal </td>
              <td>
                <Typography className="storybook__margin-typography " as="h2" weight="font-weight-normal">
                  Encabezado h2 normal
                </Typography>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* h2 */}

      {/* h3 */}
      <hr className="mt-5" />
      <p className="headline-lg font-weight-bold">Encabezado h3</p>

      <div className="responsive-scroll" tabIndex={0}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="tb-text">
                HTML
              </th>
              <th scope="col" className="tb-text">
                Fuente | Tamaño | Interlineado
              </th>
              <th scope="col" className="tb-text">
                Ejemplos
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{'<h3 class="font-weight-bold"></h3>'}</td>
              <td>Nunito | 32px | 44px | bold </td>
              <td>
                <Typography className="storybook__margin-typography " as="h3" weight="font-weight-bold">
                  Encabezado h3 bold
                </Typography>
              </td>
            </tr>
            <tr>
              <td>{'<h3 class="font-weight-semibold"></h3>'}</td>
              <td>Nunito | 32px | 44px | semibold</td>
              <td>
                <Typography className="storybook__margin-typography " as="h3">
                  Encabezado h3 semibold
                </Typography>
              </td>
            </tr>
            <tr>
              <td>{'<h3 class="font-weight-normal"></h3>'}</td>
              <td>Nunito | 32px | 44px | normal </td>
              <td>
                <Typography className="storybook__margin-typography " as="h3" weight="font-weight-normal">
                  Encabezado h3 normal
                </Typography>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* h3 */}

      {/* h4 */}
      <hr className="mt-5" />
      <p className="headline-lg font-weight-bold">Encabezado h4</p>

      <div className="responsive-scroll" tabIndex={0}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="tb-text">
                HTML
              </th>
              <th scope="col" className="tb-text">
                Fuente | Tamaño | Interlineado
              </th>
              <th scope="col" className="tb-text">
                Ejemplos
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{'<h4 class="font-weight-bold"></h4>'}</td>
              <td>Nunito | 28px | 36px | bold </td>
              <td>
                <Typography className="storybook__margin-typography " as="h4" weight="font-weight-bold">
                  Encabezado h4 bold
                </Typography>
              </td>
            </tr>
            <tr>
              <td>{'<h4 class="font-weight-semibold"></h4>'}</td>
              <td>Nunito | 28px | 36px | semibold</td>
              <td>
                <Typography className="storybook__margin-typography font-weight-semibold" as="h4">
                  Encabezado h4 semibold
                </Typography>
              </td>
            </tr>
            <tr>
              <td>{'<h4 class="font-weight-normal"></h4>'}</td>
              <td>Nunito | 28px | 36px | normal </td>
              <td>
                <Typography className="storybook__margin-typography " as="h4" weight="font-weight-normal">
                  Encabezado h4 normal
                </Typography>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* h4 */}

      {/* h5 */}
      <hr className="mt-5" />
      <p className="headline-lg font-weight-bold">Encabezado h5</p>

      <div className="responsive-scroll" tabIndex={0}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="tb-text">
                Clase
              </th>
              <th scope="col" className="tb-text">
                Fuente | Tamaño | Interlineado
              </th>
              <th scope="col" className="tb-text">
                Ejemplos
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{'<h5 class="font-weight-bold"></h5>'}</td>
              <td>Nunito | 24px | 32px | bold</td>
              <td>
                <Typography className="storybook__margin-typography " as="h5">
                  Encabezado h5 bold
                </Typography>
              </td>
            </tr>
            <tr>
              <td>{'<h5 class="font-weight-semibold"></h5>'}</td>
              <td>Nunito | 24px | 32px | semibold</td>
              <td>
                <Typography className="storybook__margin-typography " as="h5" weight="font-weight-semibold">
                  Encabezado h5 semibold
                </Typography>
              </td>
            </tr>
            <tr>
              <td>{'<h5 class="font-weight-normal"></h5>'}</td>
              <td>Nunito | 24px | 32px | normal </td>
              <td>
                <Typography className="storybook__margin-typography " as="h5" weight="font-weight-normal">
                  Encabezado h5 normal
                </Typography>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* h5 */}

      {/* h6 */}
      <hr className="mt-5" />
      <p className="headline-lg font-weight-bold">Encabezado h6</p>

      <div className="responsive-scroll" tabIndex={0}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="tb-text">
                Clase
              </th>
              <th scope="col" className="tb-text">
                Fuente | Tamaño | Interlineado
              </th>
              <th scope="col" className="tb-text">
                Ejemplos
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{'<h6 class="font-weight-bold"></h6>'}</td>
              <td>Nunito | 20px | 28px | bold</td>
              <td>
                <Typography className="storybook__margin-typography " as="h6" weight="font-weight-bold">
                  Encabezado h6 bold
                </Typography>
              </td>
            </tr>
            <tr>
              <td>{'<h6 class="font-weight-semibold"></h6>'}</td>
              <td>Nunito | 20px | 28px | semibold</td>
              <td>
                <Typography className="storybook__margin-typography " as="h6" weight="font-weight-semibold">
                  Encabezado h6 semibold
                </Typography>
              </td>
            </tr>
            <tr>
              <td>{'<h6 class="font-weight-normal"></h6>'}</td>
              <td>Nunito | 20px | 28px | normal </td>
              <td>
                <Typography className="storybook__margin-typography " as="h6" weight="font-weight-normal">
                  Encabezado h6 normal
                </Typography>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* h6 */}

      {/* 
      <Typography className="storybook__margin-typography "  as="h1">h1: Familia tipográfica: Nunito | Tamaño: 40px | Interlineado: 48px.</Typography>
      <Typography className="storybook__margin-typography "  as="h1">Este es un texto de encabezado</Typography>
      <Typography className="storybook__margin-typography "  as="h1" weight="font-weight-semibold">
        Este es un texto de encabezado
      </Typography>
      <Typography className="storybook__margin-typography "  as="h1" weight="font-weight-normal">
        Este es un texto de encabezado
      </Typography>
      
      <Typography className="storybook__margin-typography "  as="h2">h2: Familia tipográfica: Nunito | Tamaño: 36px | Interlineado: 44px.</Typography>
      <Typography className="storybook__margin-typography "  as="h2" weight="font-weight-bold">
        Este es un texto de encabezado
      </Typography>
      <Typography className="storybook__margin-typography "  as="h2">Este es un texto de encabezado</Typography>
      <Typography className="storybook__margin-typography "  as="h2" weight="font-weight-normal">
        Este es un texto de encabezado
      </Typography>

      <hr className="mt-5" />

      <Typography className="storybook__margin-typography "  as="h3">h3: Familia tipográfica: Nunito | Tamaño: 32px | Interlineado: 44px.</Typography>
      <Typography className="storybook__margin-typography "  as="h3" weight="font-weight-bold">
        Este es un texto de encabezado
      </Typography>
      <Typography className="storybook__margin-typography "  as="h3">Este es un texto de encabezado</Typography>
      <Typography className="storybook__margin-typography "  as="h3" weight="font-weight-normal">
        Este es un texto de encabezado
      </Typography>

      <hr className="mt-5" />

      <Typography className="storybook__margin-typography "  as="h4">h4: Familia tipográfica: Nunito | Tamaño: 28px | Interlineado: 36px.</Typography>
      <Typography className="storybook__margin-typography "  as="h4" weight="font-weight-bold">
        Este es un texto de encabezado
      </Typography>
      <Typography className="storybook__margin-typography "  as="h4">Este es un texto de encabezado</Typography>
      <Typography className="storybook__margin-typography "  as="h4" weight="font-weight-normal">
        Este es un texto de encabezado
      </Typography>

      <hr className="mt-5" />

      <Typography className="storybook__margin-typography "  as="h5">h5: Familia tipográfica: Nunito | Tamaño: 24px | Interlineado: 32px.</Typography>
      <Typography className="storybook__margin-typography "  as="h5">Este es un texto de encabezado</Typography>
      <Typography className="storybook__margin-typography "  as="h5" weight="font-weight-semibold">
        Este es un texto de encabezado
      </Typography>
      <Typography className="storybook__margin-typography "  as="h5" weight="font-weight-normal">
        Este es un texto de encabezado
      </Typography>

      <hr className="mt-5" />

      <Typography className="storybook__margin-typography "  as="h6">h6: Familia tipográfica: Nunito | Tamaño: 20px | Interlineado: 28px.</Typography>
      <Typography className="storybook__margin-typography "  as="h6" weight="font-weight-bold">
        Este es un texto de encabezado
      </Typography>
      <Typography className="storybook__margin-typography "  as="h6">Este es un texto de encabezado</Typography>
      <Typography className="storybook__margin-typography "  as="h6" weight="font-weight-normal">
        Este es un texto de encabezado
      </Typography> */}
    </>
  );
};

Headings.story = {
  name: 'Títulos',
  parameters: {
    options: {
      showAddonPanel: false
    }
  }
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
                Fuente | Tamaño | Interlineado
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
                <Typography as="p" className="storybook__margin-typography  headline-lg ">
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
                <Typography as="p" className="storybook__margin-typography  headline-lg font-weight-semibold">
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
                <Typography as="p" className="storybook__margin-typography  headline-lg font-weight-bold">
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
                <Typography as="p" className="storybook__margin-typography  headline-lg font-italic">
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
                <Typography as="p" className="storybook__margin-typography  headline-lg underline-1">
                  Esto es un texto de titulares
                </Typography>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Titulares L */}

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
                Fuente | Tamaño | Interlineado
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
                <Typography as="p" className="storybook__margin-typography  headline-md ">
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
                <Typography as="p" className="storybook__margin-typography  headline-md font-weight-semibold">
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
                <Typography as="p" className="storybook__margin-typography  headline-md font-weight-bold">
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
                <Typography as="p" className="storybook__margin-typography  headline-md font-italic">
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
                <Typography as="p" className="storybook__margin-typography  headline-md underline-1">
                  Esto es un texto de titulares
                </Typography>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Titulares M */}

      <hr className="mt-5" />
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
                Fuente | Tamaño | Interlineado
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
                <Typography as="p" className="storybook__margin-typography  headline-sm ">
                  Esto es un texto de titulares
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <p>&lt;p class=&quot;headline-sm font-weight-semibold&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Nunito | 16px | 20px | semibold</td>
              <td>
                <Typography as="p" className="storybook__margin-typography  headline-sm font-weight-semibold">
                  Esto es un texto de titulares
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <p>&lt;p class=&quot;headline-sm font-weight-bold&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Nunito | 16px | 20px | bold </td>
              <td>
                <Typography as="p" className="storybook__margin-typography  headline-sm font-weight-bold">
                  Esto es un texto de titulares
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <p>&lt;p class=&quot;headline-sm font-italic&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Nunito | 16px | 20px | italic </td>
              <td>
                <Typography as="p" className="storybook__margin-typography  headline-sm font-italic">
                  Esto es un texto de titulares
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <p>&lt;p class=&quot;headline-sm underline-1&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Nunito | 16px | 20px | underline </td>
              <td>
                <Typography as="p" className="storybook__margin-typography  headline-sm underline-1">
                  Esto es un texto de titulares
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

Tag.story = {
  name: 'Titulares',
  parameters: {
    options: {
      showAddonPanel: false
    }
  }
};

export const Text = (): JSX.Element => {
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
                Fuente | Tamaño | Interlineado
              </th>
              <th scope="col" className="tb-text">
                Ejemplos
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>&lt;p class=&quot;text-xl&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Open Sans | 20px | 28px </td>
              <td>
                <Typography as="p" className="storybook__margin-typography  text-xl ">
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
                <Typography as="p" className="storybook__margin-typography  text-xl font-weight-semibold">
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
                <Typography as="p" className="storybook__margin-typography  text-xl font-weight-bold">
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
                <Typography as="p" className="storybook__margin-typography  text-xl font-italic">
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
                <Typography as="p" className="storybook__margin-typography  text-xl underline-1">
                  Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
                </Typography>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Cuerpo XL */}

      <hr className="mt-5" />
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
                Fuente | Tamaño | Interlineado
              </th>
              <th scope="col" className="tb-text">
                Ejemplos
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>&lt;p class=&quot;text-lg&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Open Sans | 18px | 28px </td>
              <td>
                <Typography as="p" className="storybook__margin-typography  text-lg ">
                  Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <p>&lt;p class=&quot;text-lg font-weight-semibold&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Open Sans | 18px | 28px | semibold</td>
              <td>
                <Typography as="p" className="storybook__margin-typography  text-lg font-weight-semibold">
                  Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <p>&lt;p class=&quot;text-lg font-weight-bold&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Open Sans | 18px | 28px | bold </td>
              <td>
                <Typography as="p" className="storybook__margin-typography  text-lg font-weight-bold">
                  Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <p>&lt;p class=&quot;text-lg font-italic&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Open Sans | 18px | 28px | italic </td>
              <td>
                <Typography as="p" className="storybook__margin-typography  text-lg font-italic">
                  Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <p>&lt;p class=&quot;text-lg underline-1&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Open Sans | 18px | 28px | underline </td>
              <td>
                <Typography as="p" className="storybook__margin-typography  text-lg underline-1">
                  Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
                </Typography>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Cuerpo L */}

      <hr className="mt-5" />
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
                Fuente | Tamaño | Interlineado
              </th>
              <th scope="col" className="tb-text">
                Ejemplos
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>&lt;p class=&quot;text-md&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Open Sans | 16px | 24px </td>
              <td>
                <Typography as="p" className="storybook__margin-typography  text-md ">
                  Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <p>&lt;p class=&quot;text-md font-weight-semibold&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Open Sans | 16px | 24px | semibold</td>
              <td>
                <Typography as="p" className="storybook__margin-typography  text-md font-weight-semibold">
                  Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <p>&lt;p class=&quot;text-md font-weight-bold&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Open Sans | 16px | 24px | bold </td>
              <td>
                <Typography as="p" className="storybook__margin-typography  text-md font-weight-bold">
                  Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <p>&lt;p class=&quot;text-md font-italic&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Open Sans | 16px | 24px | italic </td>
              <td>
                <Typography as="p" className="storybook__margin-typography  text-md font-italic">
                  Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <p>&lt;p class=&quot;text-md underline-1&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Open Sans | 16px | 24px | underline </td>
              <td>
                <Typography as="p" className="storybook__margin-typography  text-md underline-1">
                  Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
                </Typography>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Cuerpo M */}

      <hr className="mt-5" />
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
                Fuente | Tamaño | Interlineado
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
              <td> Open Sans | 14px | 20px </td>
              <td>
                <Typography as="p" className="storybook__margin-typography  text-sm ">
                  Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <p>&lt;p class=&quot;text-sm font-weight-semibold&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Open Sans | 14px | 20px | semibold</td>
              <td>
                <Typography as="p" className="storybook__margin-typography  text-sm font-weight-semibold">
                  Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <p>&lt;p class=&quot;text-sm font-weight-bold&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Open Sans | 14px | 20px | bold </td>
              <td>
                <Typography as="p" className="storybook__margin-typography  text-sm font-weight-bold">
                  Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <p>&lt;p class=&quot;text-sm font-italic&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Open Sans | 14px | 20px | italic </td>
              <td>
                <Typography as="p" className="storybook__margin-typography  text-sm font-italic">
                  Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <p>&lt;p class=&quot;text-sm underline-1&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Open Sans | 14px | 20px | underline </td>
              <td>
                <Typography as="p" className="storybook__margin-typography  text-sm underline-1">
                  Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
                </Typography>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Cuerpo S */}

      <hr className="mt-5" />
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
                Fuente | Tamaño | Interlineado
              </th>
              <th scope="col" className="tb-text">
                Ejemplos
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>&lt;p class=&quot;text-xs&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Open Sans | 12px | 16px </td>
              <td>
                <Typography as="p" className="storybook__margin-typography  text-xs ">
                  Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <p>&lt;p class=&quot;text-xs font-weight-semibold&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Open Sans | 12px | 16px | semibold</td>
              <td>
                <Typography as="p" className="storybook__margin-typography  text-xs font-weight-semibold">
                  Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <p>&lt;p class=&quot;text-xs font-weight-bold&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Open Sans | 12px | 16px | bold </td>
              <td>
                <Typography as="p" className="storybook__margin-typography  text-xs font-weight-bold">
                  Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <p>&lt;p class=&quot;text-xs font-italic&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Open Sans | 12px | 16px | italic </td>
              <td>
                <Typography as="p" className="storybook__margin-typography  text-xs font-italic">
                  Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <p>&lt;p class=&quot;text-xs underline-1&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Open Sans | 12px | 16px | underline </td>
              <td>
                <Typography as="p" className="storybook__margin-typography  text-xs underline-1">
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

Text.story = {
  name: 'Cuerpos',
  parameters: {
    options: {
      showAddonPanel: false
    }
  }
};

export const Quote = (): JSX.Element => {
  return (
    <div className="storybook__container-bloquote">
      <Blockquote>
        <Typography as="p">
          Este es un apartado del texto que se quiere destacar por su importancia dentro del contenido de la página.
        </Typography>
      </Blockquote>
      <br />
      <Blockquote>
        <Typography as="p">
          Este es un apartado del texto que se quiere destacar por su importancia dentro del contenido de la página.
        </Typography>
        <Typography as="small">Nombre del autor de la cita</Typography>
      </Blockquote>
    </div>
  );
};
Quote.story = {
  name: 'Citas'
};

export const List = (): JSX.Element => {
  return (
    <>
      <UnorderedList>
        <ListItem>Esto es el texto de una lista</ListItem>
        <ListItem>Esto es el texto de una lista</ListItem>
        <ListItem>Esto es el texto de una lista</ListItem>
      </UnorderedList>
    </>
  );
};
List.story = {
  name: 'Listas'
};

export const OrderList = (): JSX.Element => {
  return (
    <>
      <OrderedList>
        <ListItem>Esto es el texto de una lista ordenada</ListItem>
        <ListItem>Esto es el texto de una lista ordenada</ListItem>
        <ListItem>Esto es el texto de una lista ordenada</ListItem>
      </OrderedList>
    </>
  );
};

OrderList.story = {
  name: 'Lista ordenada'
};

export const Transformations = (): JSX.Element => {
  return (
    <>
      <Typography as="p">
        Nuestro sistema de <Typography as="strong">estándares</Typography> brinda un{' '}
        <Typography as="em">conjunto de herramientas</Typography> y componentes colaborativos
        <br />y <Typography as="small">accesibles</Typography> que define procesos para que los equipos internos y
        externos puedan trabajar
        <br />
        alineadamente. De esta forma, ayudamos a crear <Typography as="mark">servicios</Typography> consistent
        <Typography as="sup">es</Typography> para mejorar
        <br /> la experiencia digit<Typography as="sub">al</Typography> de vecinos y vecina
        <Typography as="kbd">s</Typography>.
      </Typography>
    </>
  );
};
Transformations.story = {
  name: 'Transformaciones'
};
