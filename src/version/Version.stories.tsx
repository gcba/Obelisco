// Base
import React from 'react';
import './version.scss';

// Addons
import { linkTo } from '@storybook/addon-links';

// Config
export default {
  title: 'Version|1·34·2'
};

export const Info = (): JSX.Element => (
  <div>
    <h2>Nuevos Componentes</h2>
    <ul className="version-ul">
      <li onClick={linkTo('Componentes|Formulario/Checkbox', 'Botón Checkbox')}>
        <strong>Chip-button: </strong>Componente nuevo
      </li>
      <li onClick={linkTo('Componentes|Audio', 'Audio')}>
        <strong>Audio:</strong> Componente nuevo
      </li>
      <li onClick={linkTo('Componentes | Barra de progreso', 'Con pasos')}>
        <strong>Progress-bar:</strong> Componente nuevo.
      </li>
    </ul>

    <h2>Cambios en Componentes</h2>
    <ul className="version-ul">
      <li onClick={linkTo('Componentes|Enlace', 'Default')}>
        <strong>Enlace:</strong>
        <ol>
          <li>Se actualizaron los estilos en focus (css)</li>
          <li>Se agregó rel=&quot;noreferrer&quot; en html por cuestiones de seguridad (html)</li>
          <li>Se agregó la variante de descarga (nuevo - html/css)</li>
        </ol>
      </li>
      <li onClick={linkTo('Componentes|Header', 'No logueado')}>
        <strong>Header:</strong>
        <ol>
          <li>Se actualizaron estilos (nav/css)</li>
          <li>Se agregaron componentes en la maqueta (html)</li>
          <li>Se mejoró el responsive</li>
          <li>Se resolvieron ajustes de accesibilidad.</li>
        </ol>
      </li>
      <li onClick={linkTo('Componentes|Footer', 'Completo')}>
        <strong>Footer:</strong>
        <ol>
          <li>Se agregaron las clase “phone-items” y “redes-item”</li>
          <li>Se agregó un hr para separar los contenidos con la clase “divider”</li>
          <li>Se mejoró el responsive.</li>
        </ol>
      </li>
      <li onClick={linkTo('Componentes|Barra de estado', 'Colapsado')}>
        <strong>Barra de estado:</strong> Antes llamado barra de progreso
      </li>
      <li onClick={linkTo('Componentes|Navegación/Vertical', 'Simple')}>
        <strong>Nav General:</strong>
        <ol>
          <li>Se ajustaron los lineamientos de cada tamaño</li>
          <li>se removió el aumento de texto cuando se hacía click en cada elemento de navegación</li>
          <li>se agregó un fondo blanco por default.</li>
        </ol>
      </li>
      <li onClick={linkTo('Componentes|Navegación/Horizontal', 'Simple')}>
        <strong>Navegación horizontal:</strong>
        <ol>
          <li>Se borró la navegación de 2 o más niveles (html)</li>
          <li>Se modificaron estilos (css) Responsive (se agrega aria-label / html)</li>
        </ol>
      </li>
      <li onClick={linkTo('Componentes|Accesos', 'Accesos')}>
        <strong>Accesos:</strong> Se agrego una clase “logout-sm” para que se utilice en conjunto con el componente de
        header (html)
      </li>
      <li onClick={linkTo('Componentes|Botón', 'Colores')}>
        <strong>Botones:</strong>
        <ol>
          <li>Se borraron ejemplos del storybook</li>
          <li>Se ajustaron lineamientos de cada tamaño</li>
          <li>Se eliminó el subrayado cuando se utilizan las clases en la etiqueta &lt;a&gt;</li>
        </ol>
      </li>
      <li onClick={linkTo('Componentes|Alerta', 'Texto')}>
        <strong>Alerta: </strong>Se borraron ejemplos del storybook
      </li>
      <li onClick={linkTo('Componentes|Desplegables', 'DesplegableConIcono')}>
        <strong>Desplegables: </strong>
        <ol>
          <li>Se hizo una refactorización del código sass</li>
          <li>se agregó un texto en blanco (el por default de HTML) para mejorar la accesibilidad en “solo icono”.</li>
        </ol>
      </li>
      <li onClick={linkTo('Componentes|Formulario/Con fondo', 'Texto')}>
        <strong>Form:</strong>
        <ol>
          <li>
            <u>Buscador:</u> Se agregó un input con un tamaño de 40px para que se utilice en el header.
            <ul>
              <li>se agregaron 2 iconos, el “search” y el “reset”.</li>
              <li>Se sacó el label del componente.</li>
            </ul>
          </li>
        </ol>
      </li>
      <li onClick={linkTo('Componentes|Opciones', 'Opciones Grande')}>
        <strong>Opciones:</strong>
        <ol>
          <li>Se agregó un fondo blanco por default.</li>
          <li>Se hizo una refactorización del código sass.</li>
        </ol>
      </li>
      <li>
        <strong>
          <span onClick={linkTo('Componentes|Paginación', 'Paginación')}>Paginación</span>,
          <span onClick={linkTo('Componentes|Tablas', 'Normal')}>Tabla</span>:
        </strong>
        Ajustes de accesibilidad. (etiquetas html)
      </li>
      <li onClick={linkTo('Componentes|Modal', 'Genérico')}>
        <strong>Modal:</strong> Se removió el borde. (css)
      </li>
    </ul>
  </div>
);
