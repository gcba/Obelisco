import React from 'react';
import { withA11Y } from '@storybook/addon-a11y';
import './CustomizeTags.scss';

//config
export default {
  title: 'Componentes|Customize Tags',
  decorators: [withA11Y]
};

export const CustomizeTags = (): JSX.Element => {
  const TAGS = [{ style: 'dark' }, { style: 'danger' }, { style: 'success' }, { style: 'info' }, { style: 'primary' }];
  return (
    <div>
      <h2>Etiquetas</h2>

      <div className="content-tags mt-5">
        <div>
          <h4>Default</h4>
          {TAGS.map(({ style }, index) => (
            <div className="mt-5" key={index}>
              <span className={`badge badge-${style}`}>Etiqueta</span>
            </div>
          ))}
        </div>
        <div>
          <h4>Hover</h4>
          {TAGS.map(({ style }, index) => (
            <div className="mt-5" key={index}>
              <a className={`badge badge-${style} active`}>Etiqueta</a>
            </div>
          ))}
        </div>
        <div>
          <h4>Focus</h4>
          {TAGS.map(({ style }, index) => (
            <div className="mt-5" key={index}>
              <a className={`badge badge-${style} focus`}>Etiqueta</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
