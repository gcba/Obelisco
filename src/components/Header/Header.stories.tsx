// Base
import React from 'react';
import './Header.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { iconTypes } from '../utils';

// Config
export default {
  title: 'Componentes|Header',
  decorators: [withA11y]
};

export const Header = (): JSX.Element => {
  return (
    <header>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-6 col-sm-12 col-xs-12 text-center">
            <a href="http://buenosaires.local" className="inline-block">
              <img src="header/Recurso 5@4x.png"></img>
            </a>
          </div>
          <div className="col-md-4 col-sm-12 col-xs-12 d-flex justify-content-center">
            {iconTypes.map(type => (
              <div className="form-wrapper">
                <div className="form-group">
                  <input type="search" className={`form-control form-${type}`} id="name-input" name="name" placeholder="Buscar..." />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

{/* <div className="col-md-2 col-sm-12 col-xs-12 d-flex justify-content-center p-2">
            <span>Mi perfil</span>
            <span className="icon-user"></span>
          </div> */}
