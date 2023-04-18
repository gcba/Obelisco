// Base
import React from 'react';
import './List-group.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import {
  AccessDescriptionComponent,
  AccessBorderComponent,
  AccessIconComponent,
  AccessTypes,
  AccessListVertical,
  AccessListHorizontal,
  AccessSizesComponent,
  AccessSizes
} from '.';

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
  name: 'Con borde'
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
  name: 'Con descripción'
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
  name: 'Con ícono'
};

export const AccessSizesStory = (): JSX.Element => (
  <div className="list-group-container-sizes">
    <div className="list-group">
      {AccessSizes.map((item, index) => (
        <AccessSizesComponent key={index} type={item.type} name={item.name} />
      ))}
    </div>
  </div>
);

AccessSizesStory.story = {
  name: 'Tamaños'
};

export const Horizontal = (): JSX.Element => <AccessListHorizontal />;

export const Vertical = (): JSX.Element => (
  <div className="list-group-container">
    <AccessListVertical />
  </div>
);
