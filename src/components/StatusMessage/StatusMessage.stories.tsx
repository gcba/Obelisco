// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';
import { StatusMessage } from '.';
import './status.stories.scss';

// Configuración del general del componente
export default {
  title: 'Componentes | Mensajes de estado',
  decorators: [withA11y]
};

const LIST = ['Un texto simple para una lista', 'Un texto simple para una lista', 'Un texto simple para una lista'];

const LOREM_TEXT =
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi voluptas vero id voluptate ab quis aperiam est obcaecati, nulla, provident illo perspiciatis ipsum excepturi quidem.';

export const StatusSuccess = (): JSX.Element => (
  <div className="status-container">
    <StatusMessage title="Esto es un título de una acción exitosa" type="success" text={LOREM_TEXT} list={LIST} />
  </div>
);

StatusSuccess.story = {
  name: 'Éxito'
};

export const StatusWarning = (): JSX.Element => (
  <div className="status-container">
    <StatusMessage title="Esto es un título de una acción importante" type="primary" text={LOREM_TEXT} list={LIST} />
  </div>
);

StatusWarning.story = {
  name: 'Advertencia'
};

export const StatusInfo = (): JSX.Element => (
  <div className="status-container">
    <StatusMessage title="Esto es un título para información" type="info" text={LOREM_TEXT} list={LIST} />
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
      text={LOREM_TEXT}
      list={LIST}
    />
  </div>
);

StatusDanger.story = {
  name: 'Error'
};
