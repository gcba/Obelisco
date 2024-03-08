// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';

//component y constants
import { CalendarMonth } from './index';
import {
  ACTIVE_DAYS_DEFAULT,
  ACTIVE_DAYS_JANUARY_TWO_REFERENCES,
  ACTIVE_DAYS_JANUARY_COLLAPSED,
  ACTIVE_DAYS_JANUARY_REFERENCES
} from './Calendar.constants';

// Configuración general del componente
export default {
  title: 'Componentes|Calendario / Con eventos',
  decorators: [withA11y]
};

export const CalendarPredeterminate = (): JSX.Element => {
  return <CalendarMonth monthNumber={1} start={1} activeDays={ACTIVE_DAYS_DEFAULT}></CalendarMonth>;
};
CalendarPredeterminate.story = { name: 'Predeterminado' };

export const CalendarLink = (): JSX.Element => {
  return <CalendarMonth monthNumber={1} start={1} activeDays={ACTIVE_DAYS_DEFAULT} isLinked></CalendarMonth>;
};
CalendarLink.story = { name: 'Con enlace' };

export const CalendarTwoReferences = (): JSX.Element => {
  return <CalendarMonth monthNumber={1} start={1} activeDays={ACTIVE_DAYS_JANUARY_TWO_REFERENCES}></CalendarMonth>;
};
CalendarTwoReferences.story = { name: 'Con dos referencias' };

export const CalendarCollapsable = (): JSX.Element => {
  return (
    <CalendarMonth monthNumber={1} start={1} activeDays={ACTIVE_DAYS_JANUARY_COLLAPSED} isCollapsed></CalendarMonth>
  );
};
CalendarCollapsable.story = { name: 'Con colapsable' };

export const CalendarReferences = (): JSX.Element => {
  return (
    <CalendarMonth monthNumber={1} start={1} activeDays={ACTIVE_DAYS_JANUARY_REFERENCES} isCollapsed></CalendarMonth>
  );
};
CalendarReferences.story = { name: 'Con referencias cromáticas' };
