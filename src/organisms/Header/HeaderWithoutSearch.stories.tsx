// Base
import React from 'react';
import './Header.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { Dropdown, DropdownItem } from '../../components/Dropdown';

// Configuración general del componente
export default {
  title: 'Organismos|Header (encabezado)/Sin buscador',
  decorators: [withA11y]
};

/* export const HeaderNoLoginSearch = (): JSX.Element => {
  return (
    <div className="storybook__container-header">
      <header className="navbar navbar-light navbar-md">
        <div className="container">
          <a href="#" className="navbar-brand">
            <img className="header-logo" src="header/logotipo_ba.svg" alt="Logo de la Ciudad de Buenos Aires" />
          </a>
          <button
            className="navbar-toggler collapsed"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <a href="#" className="nav-link active">
                  <span>Sección 1</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <span>Sección 2</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="btn btn-link">
                  <span>Accedé a tu cuenta</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

HeaderNoLoginSearch.story = {
  name: 'No logueado'
};

export const HeaderLoginSearch = (): JSX.Element => {
  return (
    <div className="storybook__container-header">
      <header className="navbar navbar-light navbar-md">
        <div className="container">
          <a href="#" className="navbar-brand">
            <img className="header-logo" src="header/logotipo_ba.svg" alt="Logo de la Ciudad de Buenos Aires" />
          </a>
          <button
            className="navbar-toggler collapsed"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <a href="#" className="nav-link active">
                  <span>Sección 1</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <span>Sección 2</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <span>Sección 3</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <span>Sección 4</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" aria-label="Notificaciones" className="nav-link notifications">
                  <span className="material-icons-round">notifications</span>
                  <span>Notificaciones</span>
                </a>
              </li>
              <li className="nav-item d-responsive-logout">
                <a href="#" aria-label="Cerrar sesión" className="list-group-item list-group-item-logout logout-sm">
                  &nbsp;
                </a>
                <a href="#" aria-label="Cerrar sesión" className=" list-group-item-logout logout-sm logout">
                  <span>Cerrar sesión</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

HeaderLoginSearch.story = {
  name: 'Logueado'
}; */

export const NoLogin = (): JSX.Element => {
  return (
    <div className="storybook__container-header">
      <header className="navbar navbar-light">
        <div className="container">
          <a href="#" className="navbar-brand">
            <img className="header-logo" src="header/logotipo_ba.svg" alt="Inicio" />
          </a>
          <div className="navbar-user-btn">
            <a
              className="btn btn-lg btn-icon btn-outline-link"
              href="#"
              target="_blank"
              aria-label="Accedé a tu cuenta">
              <span className="material-icons-round">person</span>
              <span className="btn-text-lg">Accedé a tu cuenta</span>
              <span className="btn-text-sm">Acceder</span>
            </a>
          </div>
        </div>
      </header>
      <header className="navbar navbar-light">
        <div className="container">
          <a href="#" className="navbar-brand">
            <img className="header-logo" src="header/logotipo_ba.svg" alt="Inicio" />
          </a>
          <button
            className="navbar-toggler collapsed navbar-sections-btn"
            data-toggle="collapse"
            data-target="#navbarSections"
            aria-controls="navbarSections"
            aria-expanded="false"
            aria-label="Secciones">
            <i className="bx bx-menu"></i>
          </button>
          <div className="navbar-user-btn">
            <a
              className="btn btn-lg btn-icon btn-outline-link"
              href="#"
              target="_blank"
              aria-label="Accedé a tu cuenta">
              <span className="material-icons-round">person</span>
              <span className="btn-text-lg">Accedé a tu cuenta</span>
              <span className="btn-text-sm">Acceder</span>
            </a>
          </div>
          <div className="collapse navbar-collapse nav-sections" id="navbarSections">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <a href="#" className="nav-link nav-link-lg active">
                  <span>Sección 1</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link nav-link-lg">
                  <span>Sección 2</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link nav-link-lg">
                  <span>Sección 3</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link nav-link-lg">
                  <span>Sección 4</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <header className="navbar navbar-light">
        <div className="container">
          <a href="#" className="navbar-brand">
            <img className="header-logo" src="header/logotipo_ba.svg" alt="Inicio" />
          </a>
          <div className="navbar-sections-dropdown">
            <Dropdown title="Menu" btnIconLeft="menu" isBordered isNested idDropdown="dropdownSections1" isMenuRight>
              <DropdownItem />
              <DropdownItem />
              <DropdownItem />
              <DropdownItem />
              <DropdownItem />
            </Dropdown>
          </div>
          <div className="navbar-user-btn">
            <a
              className="btn btn-lg btn-icon btn-outline-link"
              href="#"
              target="_blank"
              aria-label="Accedé a tu cuenta">
              <span className="material-icons-round">person</span>
              <span className="btn-text-lg">Accedé a tu cuenta</span>
              <span className="btn-text-sm">Acceder</span>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};
NoLogin.story = {
  name: 'No logueado'
};

export const Login = (): JSX.Element => {
  return (
    <div className="storybook__container-header">
      <header className="navbar navbar-light">
        <div className="container">
          <a href="#" className="navbar-brand">
            <img className="header-logo" src="header/logotipo_ba.svg" alt="Inicio" />
          </a>
          <div className="navbar-user-dropdown">
            <Dropdown
              title="Martina Pérez Leloir"
              btnIconLeft="person"
              isBordered
              isNested
              idDropdown="dropdownUser1"
              isMenuRight>
              <Dropdown
                title="Opción en cascada"
                isSubDropdown
                btnIconLeft="expand_more"
                btnIconLeftClass="btn-dropdown-icon"
                isMenuRight>
                <DropdownItem isSubItem />
                <DropdownItem isSubItem />
                <DropdownItem isSubItem />
              </Dropdown>
              <DropdownItem />
              <DropdownItem />
              <DropdownItem />
              <DropdownItem itemIconRight="logout" isDanger />
            </Dropdown>
          </div>
        </div>
      </header>
      <header className="navbar navbar-light">
        <div className="container">
          <a href="#" className="navbar-brand">
            <img className="header-logo" src="header/logotipo_ba.svg" alt="Inicio" />
          </a>
          <button
            className="navbar-toggler collapsed navbar-sections-btn"
            data-toggle="collapse"
            data-target="#navbarSections"
            aria-controls="navbarSections"
            aria-expanded="false"
            aria-label="Secciones">
            <i className="bx bx-menu"></i>
          </button>
          <div className="navbar-user-dropdown">
            <Dropdown
              title="Martina Pérez Leloir"
              btnIconLeft="person"
              isBordered
              isNested
              idDropdown="dropdownUser2"
              isMenuRight>
              <Dropdown
                title="Opción en cascada"
                isSubDropdown
                btnIconLeft="expand_more"
                btnIconLeftClass="btn-dropdown-icon"
                isMenuRight>
                <DropdownItem isSubItem />
                <DropdownItem isSubItem />
                <DropdownItem isSubItem />
              </Dropdown>
              <DropdownItem />
              <DropdownItem />
              <DropdownItem />
              <DropdownItem itemIconRight="logout" isDanger />
            </Dropdown>
          </div>
          <div className="collapse navbar-collapse nav-sections" id="navbarSections">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <a href="#" className="nav-link nav-link-lg active">
                  <span>Sección 1</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link nav-link-lg">
                  <span>Sección 2</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link nav-link-lg">
                  <span>Sección 3</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link nav-link-lg">
                  <span>Sección 4</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <header className="navbar navbar-light">
        <div className="container">
          <a href="#" className="navbar-brand">
            <img className="header-logo" src="header/logotipo_ba.svg" alt="Inicio" />
          </a>
          <div className="navbar-sections-dropdown">
            <Dropdown title="Menu" btnIconLeft="menu" isBordered isNested idDropdown="dropdownSections" isMenuRight>
              <DropdownItem />
              <DropdownItem />
              <DropdownItem />
              <DropdownItem />
              <DropdownItem />
            </Dropdown>
          </div>
          <div className="navbar-user-dropdown">
            <Dropdown
              title="Martina Pérez Leloir"
              btnIconLeft="person"
              isBordered
              isNested
              idDropdown="dropdownUser3"
              isMenuRight>
              <Dropdown
                title="Opción en cascada"
                isSubDropdown
                btnIconLeft="expand_more"
                btnIconLeftClass="btn-dropdown-icon"
                isMenuRight>
                <DropdownItem isSubItem />
                <DropdownItem isSubItem />
                <DropdownItem isSubItem />
              </Dropdown>
              <DropdownItem />
              <DropdownItem />
              <DropdownItem />
              <DropdownItem itemIconRight="logout" isDanger />
            </Dropdown>
          </div>
        </div>
      </header>
    </div>
  );
};
Login.story = {
  name: 'Logueado'
};
