// Base
import React from 'react';
import './List-group.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { AccessDescriptionComponent, AccessBorderComponent, AccessIconComponent, AccessTypes } from '.';

// Configuración general del componente
export default {
  title: 'Componentes|Accesos',
  decorators: [withA11y]
};

export const AccessBorder = (): JSX.Element => (
  <div className="list-group-container">
    <div className="list-group">
      {AccessTypes.map((item, index) => (
        <AccessBorderComponent key={index} type={item.type} />
      ))}
    </div>
  </div>
);

AccessBorder.story = {
  name: 'Accesos con borde'
};

export const AccessDescription = (): JSX.Element => (
  <div className="list-group-container">
    <div className="list-group">
      {AccessTypes.map((item, index) => (
        <AccessDescriptionComponent key={index} type={item.type} />
      ))}
    </div>
  </div>
);

AccessDescription.story = {
  name: 'Accesos con descripción'
};

export const AccessIcon = (): JSX.Element => (
  <div className="list-group-container">
    <div className="list-group">
      {AccessTypes.map((item, index) => (
        <AccessIconComponent key={index} type={item.type} />
      ))}
    </div>
  </div>
);

AccessIcon.story = {
  name: 'Accesos con ícono'
};

export const AccessSizes = (): JSX.Element => (
  <div className="list-group-container-sizes">
    <div className="list-group">
      <a href="#" className="list-group-item">
        <span className="access-title">Acceso grande</span>
      </a>
      <a href="#" className="list-group-item item-sm">
        <span className="access-title">Acceso chico</span>
      </a>
    </div>
  </div>
);

AccessSizes.story = {
  name: 'Tamaños de accesos'
};
