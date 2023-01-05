// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';
import { StatusMessage } from '.';

// Configuración del general del componente
export default {
  title: 'Componentes | Mensajes de estado',
  decorators: [withA11y]
};

const LIST = [
  'Contar con Clave Ciudad de <a href="#">AGIP</a>',
  'Cargar en el Sistema de Tramitación a Distancia (TAD) la siguiente documentación obligatoria:',
  'Anexo II Formulario de Presentación de Programa de Capacitación'
];

export const StatusSuccess = (): JSX.Element => (
  <div className="status-container">
    <StatusMessage
      title="Esto es un título de una acción exitosa"
      type="success"
      text="Esto es un párrafo que acompaña que sirve para indicar que el usuario realizó una acción correctamente, como cuando realiza una tarea con éxito."
      list={LIST}
    />
  </div>
);

StatusSuccess.story = {
  name: 'Éxito'
};

export const StatusWarning = (): JSX.Element => (
  <div className="status-container">
    <StatusMessage
      title="Esto es un título de una acción importante"
      type="primary"
      text="Esta variante se utiliza para informar sobre una situación que debe abordarse pronto. Sirve para que la persona
      usuaria preste atención a cierta información o acción que realizó o está por realizar."
      list={LIST}
    />
  </div>
);

StatusWarning.story = {
  name: 'Advertencia'
};

export const StatusInfo = (): JSX.Element => (
  <div className="status-container">
    <StatusMessage
      title="Esto es un título para información"
      type="info"
      text="Sirve para mostrar información destacada pero adicional, es decir que notifican al usuario sobre un cambio, para
    darles consejos o brindar información específica sobre la sección en la que se encuentran."
      list={LIST}
    />
  </div>
);

StatusInfo.story = {
  name: 'Información'
};

export const StatusDanger = (): JSX.Element => (
  <div className="status-container">
    <StatusMessage
      title="Esto es un título para un error o acción peligrosa"
      type="danger"
      text="Se usan para mostrar un error de validación, falla del sistema, o para transmitir algo que debe reconocerse o
        abordarse de inmediato para continuar con su navegación."
      list={LIST}
    />
  </div>
);

StatusDanger.story = {
  name: 'Error'
};
