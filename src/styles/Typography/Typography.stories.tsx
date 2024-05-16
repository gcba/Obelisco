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

// export const Headings = (): JSX.Element => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     function handleResize() {
//       setIsMobile(window.innerWidth < 592);
//     }
//     window.addEventListener('resize', handleResize);
//     handleResize();
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//     <>
//       <h1>H1 - Nunito Bold 37px</h1>
//       <h2>H2 - Nunito Semibold 28px</h2>
//       <h3>H3 - Nunito Semibold 21px</h3>
//       <h4>H4 - Nunito {isMobile ? 'Semibold' : 'Bold'} 19px</h4>
//       <h5>H5 - Nunito Semibold 17px</h5>
//       <h6>H6 - Open Sans Bold 16px</h6>

//       <hr />

//       <Typography as="h1" weight="font-weight-bold">
//         H1 - Nunito Bold 40px
//       </Typography>
//       <Typography as="h2">H2 - Nunito Semibold 36px</Typography>
//       <Typography as="h3">H3 - Nunito Semibold 32px</Typography>
//       <Typography as="h4">H4 - Nunito 28px</Typography>
//       <Typography as="h5">H5 - Nunito Semibold 24px</Typography>
//       <Typography as="h6">H6 - Open Sans Bold ?</Typography>
//     </>
//   );
// };

// Headings.story = { name: 'Títulos' };

export const HeadingsW = (): JSX.Element => {
  return (
    <>
      <p className="headline-lg font-weight-bold">Encabezado h1</p>
      <div className="responsive-scroll" tabIndex={0}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="tb-text">
                Clase
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
              <td></td>
              <td>Nunito | 40px | 48px </td>
              <td>
                <Typography as="h1">Encabezado h1</Typography>
              </td>
            </tr>
            <tr>
              <td>font-weight-semibold</td>
              <td>Nunito | 40px | 48px | semibold</td>
              <td>
                <Typography as="h1" weight="font-weight-semibold">
                  Encabezado h1 semibold
                </Typography>
              </td>
            </tr>
            <tr>
              <td>font-weight-normal</td>
              <td>Nunito | 40px | 48px | normal </td>
              <td>
                <Typography as="h1" weight="font-weight-normal">
                  Encabezado h1 normal
                </Typography>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />
      <p className="headline-lg font-weight-bold">Encabezado h2</p>

      <div className="responsive-scroll" tabIndex={0}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="tb-text">
                Clase
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
              <td>font-weight-bold</td>
              <td>Nunito | 36px | 40px | bold </td>
              <td>
                <Typography as="h2" weight="font-weight-bold">
                  Encabezado h2 bold
                </Typography>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>Nunito | 36px | 40px </td>
              <td>
                <Typography as="h2">Encabezado h2</Typography>
              </td>
            </tr>
            <tr>
              <td>font-weight-normal</td>
              <td>Nunito | 36px | 40px | normal </td>
              <td>
                <Typography as="h2" weight="font-weight-normal">
                  Encabezado h2 normal
                </Typography>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />
      <p className="headline-lg font-weight-bold">Encabezado h3</p>

      <div className="responsive-scroll" tabIndex={0}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="tb-text">
                Clase
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
              <td>font-weight-bold</td>
              <td>Nunito | 32px | 44px | bold </td>
              <td>
                <Typography as="h3" weight="font-weight-bold">
                  Encabezado h3 bold
                </Typography>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>Nunito | 32px | 44px </td>
              <td>
                <Typography as="h3">Encabezado h3</Typography>
              </td>
            </tr>
            <tr>
              <td>font-weight-normal</td>
              <td>Nunito | 32px | 44px | normal </td>
              <td>
                <Typography as="h3" weight="font-weight-normal">
                  Encabezado h3 normal
                </Typography>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />
      <p className="headline-lg font-weight-bold">Encabezado h4</p>

      <div className="responsive-scroll" tabIndex={0}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="tb-text">
                Clase
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
              <td>font-weight-bold</td>
              <td>Nunito | 28px | 36px | bold </td>
              <td>
                <Typography as="h4" weight="font-weight-bold">
                  Encabezado h4 bold
                </Typography>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>Nunito | 28px | 36px </td>
              <td>
                <Typography as="h4">Encabezado h4</Typography>
              </td>
            </tr>
            <tr>
              <td>font-weight-normal</td>
              <td>Nunito | 28px | 36px | normal </td>
              <td>
                <Typography as="h4" weight="font-weight-normal">
                  Encabezado h4 normal
                </Typography>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />
      <p className="headline-lg font-weight-bold">Encabezado h5</p>

      <div className="responsive-scroll" tabIndex={0}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="tb-text">
                Clase
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
              <td></td>
              <td>Nunito | 24px | 32px </td>
              <td>
                <Typography as="h5">Encabezado h5</Typography>
              </td>
            </tr>
            <tr>
              <td>font-weight-semibold</td>
              <td>Nunito | 24px | 32px | semibold</td>
              <td>
                <Typography as="h5" weight="font-weight-semibold">
                  Encabezado h5 semibold
                </Typography>
              </td>
            </tr>
            <tr>
              <td>font-weight-normal</td>
              <td>Nunito | 24px | 32px | normal </td>
              <td>
                <Typography as="h5" weight="font-weight-normal">
                  Encabezado h5 normal
                </Typography>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />
      <p className="headline-lg font-weight-bold">Encabezado h6</p>

      <div className="responsive-scroll" tabIndex={0}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="tb-text">
                Clase
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
              <td>font-weight-bold</td>
              <td>Nunito | 20px | 28px | bold</td>
              <td>
                <Typography as="h6" weight="font-weight-bold">
                  Encabezado h6 bold
                </Typography>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>Nunito | 20px | 28px </td>
              <td>
                <Typography as="h6">Encabezado h6</Typography>
              </td>
            </tr>
            <tr>
              <td>font-weight-normal</td>
              <td>Nunito | 20px | 28px | normal </td>
              <td>
                <Typography as="h6" weight="font-weight-normal">
                  Encabezado h6 normal
                </Typography>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 
      <Typography as="h1">h1: Familia tipográfica: Nunito | Tamaño: 40px | Interlineado: 48px.</Typography>
      <Typography as="h1">Este es un texto de encabezado</Typography>
      <Typography as="h1" weight="font-weight-semibold">
        Este es un texto de encabezado
      </Typography>
      <Typography as="h1" weight="font-weight-normal">
        Este es un texto de encabezado
      </Typography>
      
      <Typography as="h2">h2: Familia tipográfica: Nunito | Tamaño: 36px | Interlineado: 44px.</Typography>
      <Typography as="h2" weight="font-weight-bold">
        Este es un texto de encabezado
      </Typography>
      <Typography as="h2">Este es un texto de encabezado</Typography>
      <Typography as="h2" weight="font-weight-normal">
        Este es un texto de encabezado
      </Typography>

      <hr />

      <Typography as="h3">h3: Familia tipográfica: Nunito | Tamaño: 32px | Interlineado: 44px.</Typography>
      <Typography as="h3" weight="font-weight-bold">
        Este es un texto de encabezado
      </Typography>
      <Typography as="h3">Este es un texto de encabezado</Typography>
      <Typography as="h3" weight="font-weight-normal">
        Este es un texto de encabezado
      </Typography>

      <hr />

      <Typography as="h4">h4: Familia tipográfica: Nunito | Tamaño: 28px | Interlineado: 36px.</Typography>
      <Typography as="h4" weight="font-weight-bold">
        Este es un texto de encabezado
      </Typography>
      <Typography as="h4">Este es un texto de encabezado</Typography>
      <Typography as="h4" weight="font-weight-normal">
        Este es un texto de encabezado
      </Typography>

      <hr />

      <Typography as="h5">h5: Familia tipográfica: Nunito | Tamaño: 24px | Interlineado: 32px.</Typography>
      <Typography as="h5">Este es un texto de encabezado</Typography>
      <Typography as="h5" weight="font-weight-semibold">
        Este es un texto de encabezado
      </Typography>
      <Typography as="h5" weight="font-weight-normal">
        Este es un texto de encabezado
      </Typography>

      <hr />

      <Typography as="h6">h6: Familia tipográfica: Nunito | Tamaño: 20px | Interlineado: 28px.</Typography>
      <Typography as="h6" weight="font-weight-bold">
        Este es un texto de encabezado
      </Typography>
      <Typography as="h6">Este es un texto de encabezado</Typography>
      <Typography as="h6" weight="font-weight-normal">
        Este es un texto de encabezado
      </Typography> */}
    </>
  );
};

HeadingsW.story = { name: 'Títulos' };

// export const SubTitle = (): JSX.Element => {
//   return (
//     <>
//       <p className="lead">Open Sans Regular 19px</p>

//       <hr />

//       <Typography as="p" className="lead" weight="font-weight-bold">
//         Open Sans Regular 19px
//       </Typography>
//       <Typography as="p" className="lead" weight="font-weight-semibold">
//         Open Sans Regular 19px
//       </Typography>
//       <Typography as="p" className="lead" weight="font-weight-normal">
//         Open Sans Regular 19px
//       </Typography>
//     </>
//   );
// };

// SubTitle.story = { name: 'Subtítulo' };

// export const Texts = (): JSX.Element => {
//   return (
//     <>
//       <p>Open Sans Regular 16px</p>
//       <small>Open Sans Regular 13px</small>

//       <hr></hr>

//       <Typography as="p" weight="font-weight-bold">
//         Open Sans Regular 16px
//       </Typography>
//       <Typography as="p" weight="font-weight-semibold">
//         Open Sans Regular 16px
//       </Typography>
//       <Typography as="p" weight="font-weight-normal">
//         Open Sans Regular 16px
//       </Typography>

//       <hr></hr>

//       <Typography as="small" weight="font-weight-bold">
//         Open Sans Regular 13px
//       </Typography>

//       <br />

//       <Typography as="small" weight="font-weight-semibold">
//         Open Sans Regular 13px
//       </Typography>

//       <br />

//       <Typography as="small" weight="font-weight-normal">
//         Open Sans Regular 13px
//       </Typography>
//     </>
//   );
// };

// Texts.story = { name: 'Párrafo' };

// export const Epigraphs = (): JSX.Element => {
//   return (
//     <>
//       <p className="text-xs">Open Sans Regular 11.7px</p>

//       <hr />

//       <Typography as="p" className="text-xs" weight="font-weight-bold">
//         Open Sans Regular 11.7px
//       </Typography>

//       <Typography as="p" className="text-xs" weight="font-weight-semibold">
//         Open Sans Regular 11.7px
//       </Typography>

//       <Typography as="p" className="text-xs" weight="font-weight-normal">
//         Open Sans Regular 11.7px
//       </Typography>
//     </>
//   );
// };

// Epigraphs.story = {
//   name: 'Epígrafe'
// };

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
                Estilos
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
                <Typography as="p" className="text-xl ">
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
                <Typography as="p" className="text-xl font-weight-semibold">
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
                <Typography as="p" className="text-xl font-weight-bold">
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
                <Typography as="p" className="text-xl font-italic">
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
              <td>
                <p>&lt;p class=&quot;text-lg&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Open Sans | 18px | 28px </td>
              <td>
                <Typography as="p" className="text-lg ">
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
                <Typography as="p" className="text-lg font-weight-semibold">
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
                <Typography as="p" className="text-lg font-weight-bold">
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
                <Typography as="p" className="text-lg font-italic">
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
              <td>
                <p>&lt;p class=&quot;text-md&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Open Sans | 16px | 24px </td>
              <td>
                <Typography as="p" className="text-md ">
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
                <Typography as="p" className="text-md font-weight-semibold">
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
                <Typography as="p" className="text-md font-weight-bold">
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
                <Typography as="p" className="text-md font-italic">
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
              <td>
                <p>&lt;p class=&quot;text-sm&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Open Sans | 14px | 20px </td>
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
              <td> Open Sans | 14px | 20px | semibold</td>
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
              <td> Open Sans | 14px | 20px | bold </td>
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
              <td> Open Sans | 14px | 20px | italic </td>
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
              <td>
                <p>&lt;p class=&quot;text-xs&quot;&gt;&lt;/p&gt;</p>
              </td>
              <td> Open Sans | 12px | 16px </td>
              <td>
                <Typography as="p" className="text-xs ">
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
                <Typography as="p" className="text-xs font-weight-semibold">
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
                <Typography as="p" className="text-xs font-weight-bold">
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
                <Typography as="p" className="text-xs font-italic">
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

Text.story = { name: 'Cuerpos' };

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
