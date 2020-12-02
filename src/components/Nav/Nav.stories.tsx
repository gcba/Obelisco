// Base
import React from 'react';
import './Nav.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Configuración del general del componente
export default {
  title: 'Componentes|Navegación',
  decorators: [withA11y]
};

export const Simple = (): JSX.Element => (
  <nav className="nav-container">
    <ul className="nav flex-column">
      <li className="nav-item">
        <a className="nav-link" href="#">
          Active
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" href="#">
          Link
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Link
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">
          Disabled
        </a>
      </li>
    </ul>
  </nav>
);

export const ConFondo = (): JSX.Element => (
  <nav className="nav-container">
    <ul className="nav nav-pills flex-column">
      <li className="nav-item">
        <a className="nav-link active" href="#">
          Active
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Link
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Link
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">
          Disabled
        </a>
      </li>
    </ul>
  </nav>
);

export const Con2Niveles = (): JSX.Element => (
  <nav className="nav-container">
    <ul className="nav nav-lg flex-column">
      <li className="nav-item">
        <a className="nav-link" href="#">
          Locales y comercios
        </a>
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Local Indumentaria y calzado. (Actividades comerciales de venta).
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Locales gastronómicos: “para llevar/takeaway”
            </a>
            <ul className="nav nav-pills flex-column">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Con local a la calle
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Food trucks
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Locales de óptica.
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Comercial minorista (excluyendo indumentaria y calzado)
            </a>
          </li>
        </ul>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Actividades jurídicas
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Otras actividades
        </a>
      </li>
    </ul>
  </nav>
);

export const Responsive = (): JSX.Element => (
  <div className="nav-container">
    <nav>
      <a className="nav-link nav-mobile-trigger collapsed" data-toggle="collapse" href="#sidebar-nav">
        Acerca de Obelisco
      </a>
      <div className="nav-responsive collapse" id="sidebar-nav">
        <ul className="nav nav-lg flex-column">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Categorías
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-link-lg" href="#">
              Locales y comercios
            </a>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Local Indumentaria y calzado. (Actividades comerciales de venta).
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Locales gastronómicos: “para llevar/takeaway”
                </a>
                <ul className="nav nav-pills flex-column">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Con local a la calle
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      Food trucks
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Locales de óptica.
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Comercial minorista (excluyendo indumentaria y calzado)
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-link-lg" href="#">
              Actividades jurídicas
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-link-lg" href="#">
              Otras actividades
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);
