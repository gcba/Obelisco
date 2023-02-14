// Base
import React from 'react';
import './StatusMessage.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { StatusMessage } from '.';

// Configuración general del componente
export default {
  title: 'Componentes|Mensajes de estado',
  decorators: [withA11y]
};

const LIST_SUCCCESS = [
  'Éste es un ítem dentro de una lista que puede contener un <a href="#">enlace</a>.',
  'Los ítems pueden contener o no enlaces. Este es un ejemplo para un detalle que no lleva enlace.',
  'Éste es otro ítem dentro de una lista.'
];

const LIST = [
  'Contar con Clave Ciudad de <a href="#">AGIP</a>',
  'Cargar en el Sistema de Tramitación a Distancia (TAD) la siguiente documentación obligatoria:',
  'Anexo II Formulario de Presentación de Programa de Capacitación'
];

export const StatusSuccess = (): JSX.Element => (
  <div className="status-container">
    <StatusMessage
      title="Esto es un título de un mensaje de éxito"
      type="success"
      text="Esto es un párrafo que acompaña y sirve para indicar que el usuario realizó una acción correctamente, como cuando realiza una tarea con éxito."
      list={LIST_SUCCCESS}
    />
  </div>
);

StatusSuccess.story = {
  name: 'Éxito'
};

export const StatusWarning = (): JSX.Element => (
  <div className="status-container">
    <StatusMessage
      title="Esto es un título de un mensaje de advertencia"
      type="primary"
      text="Esto es un párrafo que advierte y sirve para indicarle al usuario que preste atención a determinada información o acción que debe realizar."
      list={LIST}
      isTwoButtons={true}
    />
  </div>
);

StatusWarning.story = {
  name: 'Advertencia'
};

export const StatusInfo = (): JSX.Element => (
  <div className="status-container">
    <StatusMessage
      title="Esto es un título de un mensaje de información"
      type="info"
      text={[
        'Este es un párrafo que brinda información necesaria con la finalidad de guiar y ayudar a las personas usuarias a finalizar un proceso o iniciar uno nuevo.',
        'Este es un párrafo que brinda información necesaria con la finalidad de guiar y ayudar a las personas usuarias a finalizar un proceso o iniciar uno nuevo.'
      ]}
    />
  </div>
);

StatusInfo.story = {
  name: 'Información'
};

export const StatusDanger = (): JSX.Element => (
  <div className="status-container">
    <StatusMessage
      title="Esto es un título de un mensaje de peligro"
      type="danger"
      text="Este párrafo sirve para comunicar que algo salió mal y explica cómo puede ser solucionado. Muestra errores sobre algo que se realizó."
      list={LIST}
      isTwoButtons={true}
    />
  </div>
);

StatusDanger.story = {
  name: 'Error'
};

export const StatusInstitutional = (): JSX.Element => (
  <div className="status-container-institutional">
    <StatusMessage
      title="Este es un mensaje institucional del Gobierno de la Ciudad de Buenos Aires"
      type="institutional"
      text="En el cuerpo de este componente pueden ir enlaces o botones: <a href='#'>https://ejemplo.buenosaires.gob.ar</a>"
    />
  </div>
);

StatusInstitutional.story = {
  name: 'Institucional'
};
