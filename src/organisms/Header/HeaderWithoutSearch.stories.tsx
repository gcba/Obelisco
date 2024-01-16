// Base
import React from 'react';
import './Header.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Component and Constants
import { Header, SECTIONS_FIRST_LINE, SECTIONS_SECOND_LINE, SECTIONS_NO_SEARCH } from '.';

// Configuración general del componente
export default {
  title: 'Organismos|Header (encabezado)/Sin buscador',
  decorators: [withA11y]
};

export const NoLoginOneLine = (): JSX.Element => {
  return (
    <div className="storybook__container-header">
      <Header hasLogin sections={SECTIONS_FIRST_LINE}></Header>
    </div>
  );
};
NoLoginOneLine.story = {
  name: 'Deslogueado en 1 línea'
};
export const NoLoginTwoLines = (): JSX.Element => {
  return (
    <div className="storybook__container-header">
      <Header hasLogin sections={SECTIONS_SECOND_LINE} isSectionExtended></Header>
    </div>
  );
};
NoLoginTwoLines.story = {
  name: 'Deslogueado en 2 líneas'
};
export const LoginOneLine = (): JSX.Element => {
  return (
    <div className="storybook__container-header">
      <Header hasProfile sections={SECTIONS_FIRST_LINE}></Header>
    </div>
  );
};
LoginOneLine.story = {
  name: 'Logueado en 1 línea'
};
export const LoginTwoLines = (): JSX.Element => {
  return (
    <div className="storybook__container-header">
      <Header hasProfile sections={SECTIONS_SECOND_LINE} isSectionExtended></Header>
    </div>
  );
};
LoginTwoLines.story = {
  name: 'Logueado en 2 líneas'
};

export const OneLine = (): JSX.Element => {
  return (
    <div className="storybook__container-header">
      <Header sections={SECTIONS_NO_SEARCH}></Header>
    </div>
  );
};
OneLine.story = {
  name: 'Sin logueo'
};
