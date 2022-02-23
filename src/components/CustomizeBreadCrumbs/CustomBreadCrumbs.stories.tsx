import React from 'react';
import { withA11Y } from '@storybook/addon-a11y';

//config
export default {
  title: 'Componentes|Customize BreadCrumbs',
  decorators: [withA11Y]
};

export const CustomBreadCrumbs = (): JSX.Element => {
  return (
    <div>
      <h2>Pan de miga</h2>

      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Inicio</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Página intermedia</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Textos muy largos hasta 36px Textos muy largos hasta 36px…</a>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export const CustomBreadCrumbsMobile = (): JSX.Element => {
  return (
    <div>
      <h2>Pan de miga</h2>

      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Buenos Aires</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Página anterior</a>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
};
