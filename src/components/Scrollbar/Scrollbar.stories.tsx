// Base
import React from 'react';
import './Scrollbar.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { Scrollbar } from '.';

// Configuración general del componente
export default {
  title: 'Componentes|Barra de desplazamiento',
  component: Scrollbar,
  decorators: [withA11y]
};

export const HorizontalScrollbarComponent = (): JSX.Element => {
  return (
    <div className="storybook__container-scrollbar">
      <Scrollbar>
        <div className="horizontal-example">
          <h1>Esto es un título de ejemplo</h1>
          <p className="lead">
            Esto es un párrafo de ejemplo para probar el funcionamiento de la barra de desplazamiento. No tiene ningún
            fin específico, solo sirve de muestra. El ancho del texto es para probar el desplazamiento horizontal,
            mientras que la lista de cuerpos de contenido consecutivos es para probar el desplazamiento vertical.
          </p>

          <br />
          <hr />
          <br />

          <h2>Esto es un título de ejemplo</h2>

          <p>
            Esto es un párrafo de ejemplo para probar el funcionamiento de la barra de desplazamiento. No tiene ningún
            fin específico, solo sirve de muestra. El ancho del texto es para probar el desplazamiento horizontal,
            mientras que la lista de cuerpos de contenido consecutivos es para probar el desplazamiento vertical.
          </p>
        </div>
      </Scrollbar>
    </div>
  );
};

HorizontalScrollbarComponent.story = {
  name: 'Horizontal'
};

export const VerticalScrollbarComponent = (): JSX.Element => {
  return (
    <div className="storybook__container-scrollbar">
      <Scrollbar>
        <div className="vertical-example">
          <h1>Esto es un título de ejemplo</h1>
          <p className="lead">
            Esto es un párrafo de ejemplo para probar el funcionamiento de la barra de desplazamiento. No tiene ningún
            fin específico, solo sirve de muestra. El ancho del texto es para probar el desplazamiento horizontal,
            mientras que la lista de cuerpos de contenido consecutivos es para probar el desplazamiento vertical.
          </p>

          <br />
          <hr />
          <br />

          <p>
            Esto es un párrafo de ejemplo para probar el funcionamiento de la barra de desplazamiento. No tiene ningún
            fin específico, solo sirve de muestra. El ancho del texto es para probar el desplazamiento horizontal,
            mientras que la lista de cuerpos de contenido consecutivos es para probar el desplazamiento vertical.
          </p>

          <br />
          <hr />
          <br />

          <h2>Esto es un título de ejemplo</h2>

          <p>
            Esto es un párrafo de ejemplo para probar el funcionamiento de la barra de desplazamiento. No tiene ningún
            fin específico, solo sirve de muestra. El ancho del texto es para probar el desplazamiento horizontal,
            mientras que la lista de cuerpos de contenido consecutivos es para probar el desplazamiento vertical.
          </p>

          <br />
          <hr />
          <br />

          <h2>Esto es un título de ejemplo</h2>

          <p>
            Esto es un párrafo de ejemplo para probar el funcionamiento de la barra de desplazamiento. No tiene ningún
            fin específico, solo sirve de muestra. El ancho del texto es para probar el desplazamiento horizontal,
            mientras que la lista de cuerpos de contenido consecutivos es para probar el desplazamiento vertical.
          </p>
        </div>
      </Scrollbar>
    </div>
  );
};

VerticalScrollbarComponent.story = {
  name: 'Vertical'
};
