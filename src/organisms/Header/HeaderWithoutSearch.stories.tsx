// Base
import React from 'react';
import './Header.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Constants
import { BUTTON_TOGGLER, Login, LOGO, USER, USER_MOBILE, DROPDOWN_ITEM, NAV_ITEM, NavSection } from '.';

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
          {LOGO}
          <Login isMobile={true}></Login>
          {BUTTON_TOGGLER}
          <div className="collapse navbar-collapse" id="navbarContent">
            <div className="navbar-content">
              <NavSection>
                {DROPDOWN_ITEM}
                {NAV_ITEM}
                {DROPDOWN_ITEM}
              </NavSection>
              <Login></Login>
            </div>
          </div>
        </div>
        <div className="header-backdrop"></div>
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
          {LOGO}
          <Login isMobile={true}></Login>
          {BUTTON_TOGGLER}
          <div className="collapse navbar-collapse" id="navbarContent">
            <div className="navbar-content">
              <Login></Login>
            </div>
            <NavSection isExtended={true}>
              {DROPDOWN_ITEM}
              {NAV_ITEM}
              {NAV_ITEM}
              {DROPDOWN_ITEM}
              {NAV_ITEM}
              {NAV_ITEM}
              {NAV_ITEM}
            </NavSection>
          </div>
        </div>
        <div className="header-backdrop"></div>
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
          {LOGO}
          {BUTTON_TOGGLER}
          <div className="collapse navbar-collapse" id="navbarContent">
            <div className="navbar-content">
              <NavSection>
                {DROPDOWN_ITEM}
                {NAV_ITEM}
                {DROPDOWN_ITEM}
              </NavSection>
              {USER}
            </div>
            {USER_MOBILE}
          </div>
        </div>
        <div className="header-backdrop"></div>
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
          {LOGO}
          {BUTTON_TOGGLER}
          <div className="collapse navbar-collapse" id="navbarContent">
            <div className="navbar-content">{USER}</div>
            <NavSection isExtended={true}>
              {DROPDOWN_ITEM}
              {NAV_ITEM}
              {NAV_ITEM}
              {DROPDOWN_ITEM}
              {NAV_ITEM}
              {NAV_ITEM}
              {NAV_ITEM}
            </NavSection>
            {USER_MOBILE}
          </div>
        </div>
        <div className="header-backdrop"></div>
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
          {LOGO}
          {BUTTON_TOGGLER}
          <div className="collapse navbar-collapse" id="navbarContent">
            <div className="navbar-content">
              <NavSection>
                {NAV_ITEM}
                {DROPDOWN_ITEM}
                {NAV_ITEM}
                {DROPDOWN_ITEM}
                {NAV_ITEM}
                {NAV_ITEM}
              </NavSection>
            </div>
          </div>
        </div>
        <div className="header-backdrop"></div>
      </header>
    </div>
  );
};
OneLine.story = {
  name: 'Sin logueo'
};
