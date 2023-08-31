// Base
import React from 'react';
import './Alert.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { Alert, ListLinks } from '.';
import { alertHighlight, alertLink, alertTypes } from './index';

// Configuración general del componente
export default {
  title: 'Componentes|Alerta',
  decorators: [withA11y]
};

export const Simple = (): JSX.Element => {
  return (
    <div className="storybook__container-alert">
      <Alert arrayAlerts={alertTypes} />
    </div>
  );
};

export const SimpleClose = (): JSX.Element => {
  return (
    <div className="storybook__container-alert">
      <Alert arrayAlerts={alertTypes} isDismissible />
    </div>
  );
};

SimpleClose.story = {
  name: 'Con cierre'
};

export const SimpleHighlight = (): JSX.Element => {
  return (
    <div className="storybook__container-alert">
      <Alert arrayAlerts={alertHighlight} />
    </div>
  );
};

SimpleHighlight.story = {
  name: 'Con destacado'
};

export const SimpleHiperlink = (): JSX.Element => {
  return (
    <div className="storybook__container-alert">
      <Alert arrayAlerts={alertLink} />
    </div>
  );
};

SimpleHiperlink.story = {
  name: 'Con hipervínculo'
};

export const ListLinksExample = (): JSX.Element => {
  return (
    <div className="storybook__container-alert">
      <ListLinks
        type="danger"
        text="<strong>Este es un destacado de una alerta de error.</strong> Esta es la descripción de una alerta de error que continua al texto destacado."
        textLink="Ancla al error"
        isListLinks
      />
    </div>
  );
};

ListLinksExample.story = { name: 'Con lista de enlaces' };

export const List = (): JSX.Element => {
  return (
    <div className="storybook__container-alert">
      <ListLinks
        type="info"
        text="<strong>Este es un destacado de una alerta de información.</strong> Esta es la descripción de una alerta de información que continua al texto destacado."
        textLink="Texto descriptivo"
        isListLinks={false}
      />
    </div>
  );
};

List.story = { name: 'Con lista descriptiva' };
