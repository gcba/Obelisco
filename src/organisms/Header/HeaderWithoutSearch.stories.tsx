// Base
import React from 'react';
import './Header.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Constants
import { buttonToggler, logo, Login, user, userMobile, NavSection, dropdownItem, navItem } from '.';

// Configuración general del componente
export default {
  title: 'Organismos|Header (encabezado)/Sin buscador',
  decorators: [withA11y]
};

export const NoLoginOneLine = (): JSX.Element => {
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
              <Login></Login>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
NoLoginOneLine.story = {
  name: 'Deslogueado en 1 línea'
};
export const NoLoginTwoLines = (): JSX.Element => {
  return (
    <div className="storybook__container-header">
      <header className="navbar navbar-light navbar-expand-lg">
        <div className="container header-container">
          {logo}
          <Login isMobile={true}></Login>
          {buttonToggler}
          <div className="collapse navbar-collapse" id="navbarContent">
            <div className="navbar-content">
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
NoLoginTwoLines.story = {
  name: 'Deslogueado en 2 líneas'
};
export const LoginOneLine = (): JSX.Element => {
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
              {user}
            </div>
            {userMobile}
          </div>
        </div>
      </header>
    </div>
  );
};
LoginOneLine.story = {
  name: 'Logueado en 1 línea'
};
export const LoginTwoLines = (): JSX.Element => {
  return (
    <div className="storybook__container-header">
      <header className="navbar navbar-light navbar-expand-lg">
        <div className="container header-container">
          {logo}
          {buttonToggler}
          <div className="collapse navbar-collapse" id="navbarContent">
            <div className="navbar-content">{user}</div>
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
LoginTwoLines.story = {
  name: 'Logueado en 2 líneas'
};

export const OneLine = (): JSX.Element => {
  return (
    <div className="storybook__container-header">
      <header className="navbar navbar-light navbar-expand-lg">
        <div className="container header-container">
          {logo}
          {buttonToggler}
          <div className="collapse navbar-collapse" id="navbarContent">
            <div className="navbar-content">
              <NavSection>
                {navItem}
                {dropdownItem}
                {navItem}
                {dropdownItem}
                {navItem}
                {navItem}
              </NavSection>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
OneLine.story = {
  name: 'Sin logueo'
};
