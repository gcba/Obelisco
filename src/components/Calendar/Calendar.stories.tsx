// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';

//component y constants
import { CalendarMonth } from './index';
import { ACTIVE_DAYS_ANNUAL_EXAMPLE } from './Calendar.constants';

// Configuración general del componente
export default {
  title: 'Componentes|Calendario',
  decorators: [withA11y]
};

export const CalendarNoReferences = (): JSX.Element => {
  return <CalendarMonth monthNumber={1} start={1}></CalendarMonth>;
};
CalendarNoReferences.story = { name: 'Sin eventos' };

export const CalendarDeck = (): JSX.Element => {
  return (
    <div className="storybook__container-calendar container">
      <div className="calendar-deck">
        <CalendarMonth monthNumber={1} start={1} activeDays={ACTIVE_DAYS_ANNUAL_EXAMPLE.JANUARY}></CalendarMonth>
        <CalendarMonth monthNumber={2} start={4} activeDays={ACTIVE_DAYS_ANNUAL_EXAMPLE.FEBRUARY}></CalendarMonth>
        <CalendarMonth monthNumber={3} start={5} activeDays={ACTIVE_DAYS_ANNUAL_EXAMPLE.MARCH}></CalendarMonth>
        <CalendarMonth monthNumber={4} start={1} activeDays={ACTIVE_DAYS_ANNUAL_EXAMPLE.APRIL}></CalendarMonth>
        <CalendarMonth monthNumber={5} start={3} activeDays={ACTIVE_DAYS_ANNUAL_EXAMPLE.MAY}></CalendarMonth>
        <CalendarMonth monthNumber={6} start={6} activeDays={ACTIVE_DAYS_ANNUAL_EXAMPLE.JUNE}></CalendarMonth>
        <CalendarMonth monthNumber={7} start={1}></CalendarMonth>
        <CalendarMonth monthNumber={8} start={4} activeDays={ACTIVE_DAYS_ANNUAL_EXAMPLE.AUGUST}></CalendarMonth>
        <CalendarMonth monthNumber={9} start={0} activeDays={ACTIVE_DAYS_ANNUAL_EXAMPLE.SEPTEMBER}></CalendarMonth>
        <CalendarMonth monthNumber={10} start={2} activeDays={ACTIVE_DAYS_ANNUAL_EXAMPLE.OCTOBER}></CalendarMonth>
        <CalendarMonth monthNumber={11} start={5} activeDays={ACTIVE_DAYS_ANNUAL_EXAMPLE.NOVEMBER}></CalendarMonth>
        <CalendarMonth monthNumber={12} start={0} activeDays={ACTIVE_DAYS_ANNUAL_EXAMPLE.DECEMBER}></CalendarMonth>
      </div>
    </div>
  );
};
CalendarDeck.story = { name: 'Disposición' };
