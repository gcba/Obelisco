import React from 'react';
import { withA11Y } from '@storybook/addon-a11y';
import { NavigationIcon } from './NavigationIcon/NavigationIcon.stories';
import { VerticalNavigationComponent } from './Vertical-navigation/VerticalNavigation.stories';
import { NavigationStateComponent } from './NavigationState/NavigationState.stories';
import { HorizontalNavigationComponent } from './HorizontalNavigation/HorizontalNavigation.stories';
import { HorizontalNavigationIconComponent } from './HorizontalNavigationIcon/HorizontalNavigationIcon.stories';
import { HorizontalNavigationStatesComponent } from './HorizontalNavigationStates/HorizontalNavigationState.stories';
import { NavigationMobileComponent } from './NavigationMobile/NavigationMobileComponent.stories';

//config
export default {
  title: 'Componentes|Customize Navigation',
  decorators: [withA11Y]
};

export const CustomizeNavigation = (): JSX.Element => {
  return (
    <div>
      <h2>Navegación Vertical</h2>
      <VerticalNavigationComponent />
    </div>
  );
};

export const NavigationWithIcon = (): JSX.Element => {
  return (
    <div>
      <h2>Navegación Vertical con icono</h2>
      <NavigationIcon />
    </div>
  );
};

export const NavigationState = (): JSX.Element => {
  return (
    <div>
      <h2>Navegación Estados</h2>
      <NavigationStateComponent />
    </div>
  );
};

export const HorizontalNavigation = (): JSX.Element => {
  return (
    <div>
      <h2>Navegación Horizontal</h2>
      <HorizontalNavigationComponent />
    </div>
  );
};

export const HorizontalNavigationIcon = (): JSX.Element => {
  return (
    <div>
      <h2>Navegación Horizontal con icono</h2>
      <HorizontalNavigationIconComponent />
    </div>
  );
};

export const HorizontalNavigationStates = (): JSX.Element => {
  return (
    <div>
      <h2>Navegación Horizontal con icono</h2>
      <HorizontalNavigationStatesComponent />
    </div>
  );
};

export const NavigationMobile = (): JSX.Element => {
  return (
    <div>
      <h2>Mobile</h2>
      <NavigationMobileComponent />
    </div>
  );
};
