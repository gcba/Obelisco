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
        <a className="nav-link nav-link-header" href="#">
          Active
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link nav-link-header active" href="#">
          Link
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link nav-link-header" href="#">
          Link
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link nav-link-header disabled" href="#" tabIndex={-1} aria-disabled="true">
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
        <a className="nav-link nav-link-header active" href="#">
          Active
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link nav-link-header" href="#">
          Link
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link nav-link-header" href="#">
          Link
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link nav-link-header disabled" href="#" tabIndex={-1} aria-disabled="true">
          Disabled
        </a>
      </li>
    </ul>
  </nav>
);

export const Con2Niveles = (): JSX.Element => (
  <nav className="nav-container">
    <ul className="nav flex-column">
      <li className="nav-item">
        <a className="nav-link nav-link-header" href="#">
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
        <a className="nav-link nav-link-header" href="#">
          Actividades jurídicas
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link nav-link-header" href="#">
          Otras actividades
        </a>
      </li>
    </ul>
  </nav>
);

export const MobileCollapsed = (): JSX.Element => (
  <nav className="nav-container">
    <ul className="nav-mobile flex-column">
      <li className="nav-item">
        <a className="nav-link nav-link-header nav-link-header-main_expand" href="#">
          Categorías
        </a>
      </li>
    </ul>
  </nav>
);

export const MobileExpanded = (): JSX.Element => (
  <nav className="nav-container">
    <ul className="nav-mobile flex-column">
<<<<<<< HEAD
      <li className="nav-item">
        <a className="nav-link nav-link-header nav-link-header-main_collapse" href="#">
          Categorías
        </a>

        <ul className="nav-mobile nav-mobile-inner flex-column">
          <li className="nav-item">
            <a className="nav-link nav-link-header" href="#">
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
                    <a className="nav-link active" href="#">
                      Con local a la calle
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Food trucks
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Locales de óptica.
=======
    <li className="nav-item">
      <a className="nav-link nav-link-header nav-link-header-main_otro" href="#">
        Categorías
      </a>


      <ul className="nav-mobile nav-mobile-inner flex-column">
      <li className="nav-item">
        <a className="nav-link nav-link-header" href="#">
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
>>>>>>> Creación de nav-mobile y actualización de nav respecto al UI Kit
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
<<<<<<< HEAD
                  Comercial minorista (excluyendo indumentaria y calzado)
=======
                  Food trucks
>>>>>>> Creación de nav-mobile y actualización de nav respecto al UI Kit
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
<<<<<<< HEAD
            <a className="nav-link nav-link-header" href="#">
              Actividades jurídicas
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-link-header" href="#">
              Otras actividades
=======
            <a className="nav-link" href="#">
              Locales de óptica.
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Comercial minorista (excluyendo indumentaria y calzado)
>>>>>>> Creación de nav-mobile y actualización de nav respecto al UI Kit
            </a>
          </li>
        </ul>
      </li>
<<<<<<< HEAD
    </ul>
  </nav>
=======
      <li className="nav-item">
        <a className="nav-link nav-link-header" href="#">
          Actividades jurídicas
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link nav-link-header" href="#">
          Otras actividades
        </a>
      </li>
    </ul>
    </li>
  </ul>
</nav>
>>>>>>> Creación de nav-mobile y actualización de nav respecto al UI Kit
);
