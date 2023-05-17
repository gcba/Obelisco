// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Config
export default {
  title: 'Componentes|Panel',
  decorators: [withA11y]
};

export const InformationBlock = (): JSX.Element => {
  return (
    <div className="container">
      <div className="card panel-contact unbordered">
        <img src="cards/contacto.svg" alt="" />
        <div className="panel-body">
          <h4>“Muy feliz de haber terminado el curso de Publicidad en redes”</h4>
          <p>Daniela Moncayo</p>
          <p>Publicidad en Redes Avanzado</p>
        </div>
      </div>
      <br />
      <br />
      <div className="card panel-contact unbordered">
        <div className="panel-body">
          <h4>Contacto</h4>
          <p>
            Teléfono: <a href="tel:5030-9400">5030-9400</a>
          </p>
          <p>
            Mail: <a href="mailto:jlgiusti@buenosaires.gob.ar">jlgiusti@buenosaires.gob.ar</a>
          </p>
        </div>
      </div>
    </div>
  );
};

InformationBlock.story = { name: 'Bloque de información' };
