// Base
import React from 'react';
import './Header.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Component and Constants
import { Header, SECTIONS_FIRST_LINE, SECTIONS_SECOND_LINE, SECTIONS_SEARCH } from '.';

// Configuración general del componente
export default {
  title: 'Organismos|Header (encabezado)/Con buscador',
  decorators: [withA11y]
};

export const SearchNoLoginOneLine = (): JSX.Element => {
  return (
    <div className="storybook__container-header">
      <Header hasLogin hasSearch sections={SECTIONS_FIRST_LINE}></Header>
    </div>
  );
};
SearchNoLoginOneLine.story = {
  name: 'Deslogueado en 1 línea'
};

export const SearchNoLoginTwoLines = (): JSX.Element => {
  return (
    <div className="storybook__container-header">
      <Header hasLogin hasSearch sections={SECTIONS_SECOND_LINE} isSectionExtended={true}></Header>
    </div>
  );
};
SearchNoLoginTwoLines.story = {
  name: 'Deslogueado en 2 líneas'
};

export const SearchLoginOneLine = (): JSX.Element => {
  return (
    <div className="storybook__container-header">
      <Header hasProfile hasSearch sections={SECTIONS_FIRST_LINE}></Header>
    </div>
  );
};
SearchLoginOneLine.story = {
  name: 'Logueado en 1 línea'
};

export const SearchLoginTwoLines = (): JSX.Element => {
  return (
    <div className="storybook__container-header">
      <Header hasProfile hasSearch sections={SECTIONS_SECOND_LINE} isSectionExtended></Header>
    </div>
  );
};
SearchLoginTwoLines.story = {
  name: 'Logueado en 2 líneas'
};
export const SearchOneLine = (): JSX.Element => {
  return (
    <div className="storybook__container-header">
      <Header hasSearch sections={SECTIONS_SEARCH}></Header>
    </div>
  );
};
SearchOneLine.story = {
  name: 'Sin logueo'
};
