// Base
import React from 'react';
import './Header.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Constants
import { BUTTON_TOGGLER, Login, LOGO, SEARCH, USER, USER_MOBILE, DROPDOWN_ITEM, NAV_ITEM, NavSection } from '.';

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
              {SEARCH}
              <Login></Login>
            </div>
          </div>
        </div>
        <div className="header-backdrop"></div>
      </header>
    </div>
  );
};
SearchNoLoginOneLine.story = {
  name: 'Deslogueado en 1 línea'
};

export const SearchNoLoginTwoLines = (): JSX.Element => {
  return (
    <div className="storybook__container-header">
      <header className="navbar navbar-light navbar-expand-lg">
        <div className="container header-container">
          {LOGO}
          <Login isMobile={true}></Login>
          {BUTTON_TOGGLER}
          <div className="collapse navbar-collapse" id="navbarContent">
            <div className="navbar-content">
              {SEARCH}
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
SearchNoLoginTwoLines.story = {
  name: 'Deslogueado en 2 líneas'
};

export const SearchLoginOneLine = (): JSX.Element => {
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
              {SEARCH}
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
SearchLoginOneLine.story = {
  name: 'Logueado en 1 línea'
};

export const SearchLoginTwoLines = (): JSX.Element => {
  return (
    <div className="storybook__container-header">
      <header className="navbar navbar-light navbar-expand-lg">
        <div className="container header-container">
          {LOGO}
          {BUTTON_TOGGLER}
          <div className="collapse navbar-collapse" id="navbarContent">
            <div className="navbar-content">
              {SEARCH}
              {USER}
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
            {USER_MOBILE}
          </div>
        </div>
        <div className="header-backdrop"></div>
      </header>
    </div>
  );
};
SearchLoginTwoLines.story = {
  name: 'Logueado en 2 líneas'
};
export const SearchOneLine = (): JSX.Element => {
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
                {NAV_ITEM}
              </NavSection>
              {SEARCH}
            </div>
          </div>
        </div>
        <div className="header-backdrop"></div>
      </header>
    </div>
  );
};
SearchOneLine.story = {
  name: 'Sin logueo'
};
