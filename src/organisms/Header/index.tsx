import React from 'react';

interface SectionsProps {
  children: React.ReactNode;
  isExtended?: boolean;
}
interface LoginProps {
  isMobile?: boolean;
}

interface HeaderProps {
  hasLogin?: boolean;
  hasProfile?: boolean;
  hasSearch?: boolean;
  isSectionExtended?: boolean;
  sections?: React.ReactNode;
}

export const DROPDOWN_ITEM = (
  <li className="dropdown">
    <button
      type="button"
      className="btn btn-dropdown btn-dropdown-lg dropdown-toggle"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false">
      <span className="btn-dropdown-text">Navegación</span>
      <span className="material-icons-round btn-dropdown-icon">expand_more</span>
    </button>
    <div className="dropdown-menu">
      <a className="dropdown-item" href="#">
        <span className="item-text">Navegación</span>
      </a>
      <a className="dropdown-item" href="#">
        <span className="item-text">Navegación</span>
      </a>
      <a className="dropdown-item" href="#">
        <span className="item-text">Navegación</span>
      </a>
      <a className="dropdown-item" href="#">
        <span className="item-text">Navegación</span>
      </a>
      <a className="dropdown-item" href="#">
        <span className="item-text">Navegación</span>
      </a>
      <a className="dropdown-item" href="#">
        <span className="item-text">Navegación</span>
      </a>
      <a className="dropdown-item item-link" href="#">
        <span className="item-text">Navegación</span>
        <span className="material-icons-round">arrow_forward</span>
      </a>
    </div>
  </li>
);

export const NAV_ITEM = (
  <li className="nav-item">
    <a className="nav-link nav-link-lg" href="#">
      <span>Navegación</span>
    </a>
  </li>
);

export const NavSection: React.FC<SectionsProps> = ({ children, isExtended }) => {
  return (
    <div className={isExtended ? `navbar-content-extended` : `navbar-sections`}>
      <nav>
        <h3 className="navbar-sections-title">Secciones</h3>
        <ul className="nav nav-pills nav-sections">{children}</ul>
      </nav>
    </div>
  );
};

export const LOGO = (
  <a href="https://buenosaires.gob.ar" className="navbar-brand">
    <img className="header-logo" src="header/logotipo_ba.svg" alt="Gobierno de la Ciudad de Buenos Aires - Inicio" />
  </a>
);

export const BUTTON_TOGGLER = (
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarContent"
    aria-controls="navbarContent"
    aria-expanded="false"
    aria-label="Menú"></button>
);

export const SEARCH = (
  <div className="navbar-search">
    <form className="form-search">
      <div className="form-group">
        <label className="sr-only" htmlFor="search-input">
          Buscador
        </label>
        <input
          type="search"
          className="form-control input-search"
          id="search-input"
          name="name"
          placeholder="Buscar en Buenos Aires"
        />
        <button className="reset" type="reset" aria-label="Borrar"></button>
        <button className="submit-search" type="submit" aria-label="Buscar"></button>
      </div>
    </form>
  </div>
);

export const Login: React.FC<LoginProps> = ({ isMobile }) => {
  return (
    <div className={isMobile ? `navbar-login-mobile` : `navbar-login`}>
      <a className="btn btn-lg btn-icon btn-outline-link" href="#" target="_blank">
        <span className="material-icons-round">person</span>
        <span className="btn-text">Ingresar</span>
      </a>
    </div>
  );
};

export const USER = (
  <div className="navbar-user">
    <div className="dropdown">
      <button
        type="button"
        className="btn btn-dropdown btn-dropdown-lg btn-dropdown-border dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        <span className="material-icons-round">person</span>
        <span className="btn-dropdown-text">Perfil</span>
      </button>
      <div className="dropdown-menu dropdown-menu-right">
        <a className="dropdown-item" href="#">
          <span className="item-text">Navegación 1</span>
        </a>
        <a className="dropdown-item" href="#">
          <span className="item-text">Navegación 2</span>
        </a>
        <a className="dropdown-item" href="#">
          <span className="item-text">Navegación 3</span>
        </a>
        <a className="dropdown-item" href="#">
          <span className="item-text">Notificaciones</span>
          <span className="item-notifications"></span>
        </a>
        <a className="dropdown-item item-danger" href="#">
          <span className="item-text">Cerrar sesión</span>
          <span className="material-icons-round">logout</span>
        </a>
      </div>
    </div>
  </div>
);

export const USER_MOBILE = (
  <div className="navbar-user-mobile">
    <nav>
      <h3 className="navbar-user-mobile-title">Perfil</h3>
      <ul className="nav flex-column nav-pills nav-user">
        <li className="nav-item">
          <a className="nav-link nav-link-lg" href="#">
            <span>Navegación 1</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link nav-link-lg" href="#">
            <span>Navegación 2</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link nav-link-lg" href="#">
            <span>Navegación 3</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link nav-link-lg" href="#">
            <span>Notificaciones</span>
            <span className="item-notifications"></span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link nav-link-danger nav-link-lg" href="#">
            <div className="nav-icon">
              <span className="material-icons-round">logout</span>
              <span>Cerrar sesión</span>
            </div>
          </a>
        </li>
      </ul>
    </nav>
  </div>
);

export const SECTIONS_FIRST_LINE = (
  <NavSection>
    {DROPDOWN_ITEM}
    {NAV_ITEM}
    {DROPDOWN_ITEM}
  </NavSection>
);

export const SECTIONS_SECOND_LINE = (
  <NavSection isExtended={true}>
    {DROPDOWN_ITEM}
    {NAV_ITEM}
    {NAV_ITEM}
    {DROPDOWN_ITEM}
    {NAV_ITEM}
    {NAV_ITEM}
    {NAV_ITEM}
  </NavSection>
);
export const SECTIONS_SEARCH = (
  <NavSection>
    {DROPDOWN_ITEM}
    {NAV_ITEM}
    {DROPDOWN_ITEM}
    {NAV_ITEM}
  </NavSection>
);
export const SECTIONS_NO_SEARCH = (
  <NavSection>
    {NAV_ITEM}
    {DROPDOWN_ITEM}
    {NAV_ITEM}
    {DROPDOWN_ITEM}
    {NAV_ITEM}
    {NAV_ITEM}
  </NavSection>
);

export const Header: React.FC<HeaderProps> = ({ hasLogin, hasProfile, hasSearch, isSectionExtended, sections }) => {
  const shouldShowButtonToggler = hasSearch || hasProfile || sections;
  const shouldShowNavbarContent =
    hasSearch || hasLogin || hasProfile || isSectionExtended === undefined || !isSectionExtended;

  return (
    <header className="navbar navbar-light navbar-expand-lg" role="banner">
      <a href="#main" className="skip-to-main-content-link">
        Ir al contenido principal
      </a>
      <div className="container header-container">
        {LOGO}
        {hasLogin && <Login isMobile={true}></Login>}
        {(hasSearch || hasLogin || hasProfile || sections) && (
          <>
            {shouldShowButtonToggler && BUTTON_TOGGLER}
            <div className="collapse navbar-collapse" id="navbarContent">
              {shouldShowNavbarContent && (
                <div className="navbar-content">
                  {sections && (!isSectionExtended || isSectionExtended === undefined) && sections}
                  {hasSearch && SEARCH}
                  {hasLogin && <Login></Login>}
                  {hasProfile && USER}
                </div>
              )}
              {isSectionExtended && sections}
              {hasProfile && USER_MOBILE}
            </div>
          </>
        )}
      </div>
      <div className="header-backdrop"></div>
    </header>
  );
};
