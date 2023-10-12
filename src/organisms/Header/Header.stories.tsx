// Base
import React from 'react';
import './Header.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Constants
import { buttonToggler, Login, logo, search, user, userMobile, dropdownItem, navItem, NavSection } from '.';

// Configuración general del componente
export default {
  title: 'Organismos|Header (encabezado)/Con buscador',
  decorators: [withA11y]
};

export const SearchNoLoginOneLine = (): JSX.Element => {
  return (
    <div className="storybook__container-header">
      <header className="navbar navbar-light navbar-expand-lg">
        <div className="container header-container">
          {logo}
          <Login isMobile={true}></Login>
          {buttonToggler}
          <div className="collapse navbar-collapse" id="navbarContent">
            <div className="navbar-content">
              <NavSection>
                {dropdownItem}
                {navItem}
                {dropdownItem}
              </NavSection>
              {search}
              <Login></Login>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
SearchNoLoginOneLine.story = {
  name: 'No Logueado con 1 línea'
};

export const SearchNoLoginTwoLines = (): JSX.Element => {
  return (
    <div className="storybook__container-header">
      <header className="navbar navbar-light navbar-expand-lg">
        <div className="container header-container">
          {logo}
          <Login isMobile={true}></Login>
          {buttonToggler}
          <div className="collapse navbar-collapse" id="navbarContent">
            <div className="navbar-content">
              {search}
              <Login></Login>
            </div>
            <NavSection isExtended={true}>
              {dropdownItem}
              {navItem}
              {navItem}
              {dropdownItem}
              {navItem}
              {navItem}
              {navItem}
            </NavSection>
          </div>
        </div>
      </header>
    </div>
  );
};
SearchNoLoginTwoLines.story = {
  name: 'No Logueado con 2 líneas'
};

export const SearchLoginOneLine = (): JSX.Element => {
  return (
    <div className="storybook__container-header">
      <header className="navbar navbar-light navbar-expand-lg">
        <div className="container header-container">
          {logo}
          {buttonToggler}
          <div className="collapse navbar-collapse" id="navbarContent">
            <div className="navbar-content">
              <NavSection>
                {dropdownItem}
                {navItem}
                {dropdownItem}
              </NavSection>
              {search}
              {user}
            </div>
            {userMobile}
          </div>
        </div>
      </header>
    </div>
  );
};
SearchLoginOneLine.story = {
  name: 'Logueado con 1 línea'
};

export const SearchLoginTwoLines = (): JSX.Element => {
  return (
    <div className="storybook__container-header">
      <header className="navbar navbar-light navbar-expand-lg">
        <div className="container header-container">
          {logo}
          {buttonToggler}
          <div className="collapse navbar-collapse" id="navbarContent">
            <div className="navbar-content">
              {search}
              {user}
            </div>
            <NavSection isExtended={true}>
              {dropdownItem}
              {navItem}
              {navItem}
              {dropdownItem}
              {navItem}
              {navItem}
              {navItem}
            </NavSection>
            {userMobile}
          </div>
        </div>
      </header>
    </div>
  );
};
SearchLoginTwoLines.story = {
  name: 'Logueado con 2 líneas'
};
export const SearchOneLine = (): JSX.Element => {
  return (
    <div className="storybook__container-header">
      <header className="navbar navbar-light navbar-expand-lg">
        <div className="container header-container">
          {logo}
          {buttonToggler}
          <div className="collapse navbar-collapse" id="navbarContent">
            <div className="navbar-content">
              <NavSection>
                {dropdownItem}
                {navItem}
                {dropdownItem}
                {navItem}
              </NavSection>
              {search}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
SearchOneLine.story = {
  name: 'Sin logueo'
};
