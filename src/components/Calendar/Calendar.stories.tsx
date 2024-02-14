// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';
import { CalendarMonth } from './index';

// Configuración general del componente
export default {
  title: 'Componentes|Calendario',
  decorators: [withA11y]
};

const ACTIVE_DAYS = {
  JANUARY: [
    { day: 10, title: 'Día Mundial del Ave' },
    { day: 26, title: 'Día de la Educación Ambiental' },
    { day: 28, title: 'Día Mundial por la Reducción de las Emisiones de CO2' }
  ],
  FEBRUARY: [
    { day: 2, title: 'Día Mundial de los Humedales' },
    { day: 3, title: 'Día Mundial Sin Sorbetes' },
    { day: 14, title: 'Día Mundial de la Energía' }
  ],
  MARCH: [
    { day: 3, title: 'Día Mundial de la Vida Silvestre' },
    { day: 5, title: 'Día de la Eficiencia Energética' },
    { day: 15, title: 'Día Mundial del Consumo Responsable' },
    { day: 22, title: 'Día Mundial del Agua' },
    { day: 26, title: 'Día Mundial del Clima' }
  ],
  APRIL: [
    { day: 22, title: 'Día Internacional de la Tierra' },
    { day: 28, title: 'Día Internacional de la Conciencia sobre el Ruido' },
    { day: 29, title: 'Día del Animal' }
  ],
  MAY: [
    { day: 9, title: 'Día Internacional de las Aves' },
    { day: 10, title: 'Día del Recuperador Urbano' },
    { day: 17, title: 'Día del Reciclaje' },
    { day: 21, title: 'Día Mundial de la Diversidad Cultural para el Diálogo y el Desarrollo' },
    { day: 22, title: 'Día Mundial de la Biodiversidad' }
  ],
  JUNE: [
    { day: 5, title: 'Día Mundial del Ambiente' },
    { day: 8, title: 'Día Mundial de los Océanos' },
    { day: 17, title: 'Día Mundial de la Lucha contra la Desertificación y la Sequía' }
  ],
  JULY: [
    { day: 3, title: 'Día Internacional Libre de Bolsas de Plástico' },
    { day: 7, title: 'Día Nacional de la Conservación del Suelo' },
    { day: 8, title: 'Día de la Acción Ambiental por la Cuenca Matanza Riachuelo' }
  ],
  AUGUST: [
    { day: 1, title: 'Día de la Pachamama' },
    { day: 9, title: 'Día Internacional de los Pueblos Indígenas' },
    { day: 18, title: 'Día de la Prevención de Incendios Forestales' },
    { day: 26, title: 'Día Internacional contra el Dengue' },
    { day: 29, title: 'Día del Árbol' }
  ],
  SEPTEMBER: [
    { day: 16, title: 'Día Internacional de la Protección de la Capa de Ozono' },
    { day: 22, title: 'Día Mundial sin Automóvil' },
    {
      day: 25,
      title: 'Día Internacional de la Acción (Jornada de los ODS) y Día Nacional de la Ballena Franca Austral'
    },
    { day: 26, title: 'Día Mundial de la Salud Ambiental' },
    { day: 27, title: 'Día de la Conciencia Ambiental' },
    { day: 29, title: 'Día de la Concientización sobre la Pérdida y Desperdicio de Alimentos' }
  ],
  OCTOBER: [
    { day: 5, title: 'Día de la Educación Vial' },
    { day: 13, title: 'Día Internacional para la Reducción de los Desastres Naturales' },
    { day: 18, title: 'Día Mundial para la Protección de la Naturaleza' },
    { day: 24, title: 'Día Internacional contra el Cambio Climático' }
  ],
  NOVEMBER: [
    { day: 1, title: 'Día Mundial de la Ecología' },
    { day: 6, title: 'Día de los Parques Nacionales' },
    { day: 16, title: '3er jueves Día Mundial del Aire Puro' },
    { day: 22, title: 'Día de la Flor Nacional' }
  ],
  DECEMBER: [
    { day: 5, title: 'Día del Ciudadano Ambiental' },
    { day: 10, title: 'Día Internacional de los Derechos Humanos y de los Animales' },
    { day: 11, title: 'Día Internacional de las Montañas' }
  ]
};
const ACTIVE_DAYS_JANUARY = [
  { day: 1, title: 'Nombre del evento.' },
  { day: 10, title: 'Nombre del evento.' },
  { day: 11, title: 'Nombre del evento.' }
];
const ACTIVE_DAYS_JANUARY_COLLAPSED = [
  { day: 1, title: 'Nombre del evento.' },
  { day: 10, title: 'Nombre del evento.' },
  { day: 11, title: 'Nombre del evento.' },
  { day: 15, title: 'Nombre del evento.' },
  { day: 23, title: 'Nombre del evento.' },
  { day: 27, title: 'Nombre del evento.' }
];
const ACTIVE_DAYS_JANUARY_DISABLED = [
  { day: 1, isDisabled: true },
  { day: 8, isDisabled: true }
];
/* const RELIGIOUS_ACTIVE_DAYS = {
  JANUARY: [
    { day: 1, title: 'Santa María Madre de Dios', type: 'cristiana' },
    { day: 6, title: 'Epifanía del Señor', type: 'cristiana' },
    { day: 7, title: 'Navidad del Señor- Ortodoxa', type: 'cristiana' },
    { day: 9, title: 'Nacimiento de Guru Gobind Singh', type: 'multiple' },
    { day: 10, title: 'Día de la Iluminación del Buda Sakyamuni', type: 'budista' },
    { day: 17, title: 'Tu Bishvat', type: 'judia' },
    { day: 20, title: 'Oxossi ', type: 'africanista' },
    {
      day: 27,
      title: 'Día Internacional de Conmemoración en Memoria de las Víctimas del Holocausto',
      type: 'judia'
    }
  ],
  FEBRUARY: [
    { day: 1, title: 'Conmemoración del Nacimiento del Bodhisattva Maitreya', type: 'budista' },
    { day: 2, title: 'Iemanjá ● Presentación del Señor', type: 'multiple' },
    { day: 26, title: 'Purim', type: 'judia' },
    { day: 28, title: 'Lailat al-Miraÿ', type: 'islamica' }
  ],
  MARCH: [
    { day: 2, title: 'Miércoles de ceniza', type: 'cristiana' },
    { day: 7, title: 'Inicio de la Gran Cuaresma - Ortodoxa', type: 'cristiana' },
    { day: 11, title: 'Lailat al -Miraÿ*', type: 'islamica' },
    { day: 17, title: 'Lailat al-Barat ● Purim ● Gaura Purnima', type: 'multiple' },
    { day: 18, title: 'Hola Mohalla ● Holi', type: 'multiple' },
    { day: 19, title: 'San José', type: 'cristiana' },
    { day: 21, title: 'Naw Rúz ● Conmemoración del Nacimiento del Bodhisattva Avalokitesvara', type: 'multiple' },
    { day: 25, title: 'Anunciación del Señor', type: 'cristiana' }
  ],
  APRIL: [
    { day: 2, title: 'Primer día del mes de Ramadán', type: 'islamica' },
    { day: 6, title: 'Restauración de la Iglesia (IJSUD)', type: 'cristiana' },
    { day: 7, title: '', type: 'cristiana' },
    { day: 8, title: '', type: 'judia' },
    { day: 10, title: 'Rama Navami ● Domingo de ramos', type: 'multiple' },
    { day: 13, title: '', type: 'islamica' },
    { day: 14, title: 'Año Nuevo Sikh ● Jueves Santo', type: 'multiple' },
    { day: 15, title: 'Viernes santo', type: 'cristiana' },
    { day: 16, title: 'Sábado Santo ● Pesaj', type: 'multiple' },
    { day: 17, title: 'Pascua de Resurrección / Domingo de Ramos- Ortodoxa ● Pesaj', type: 'multiple' },
    { day: 18, title: 'Pesaj', type: 'islamica' },
    { day: 19, title: 'Pesaj', type: 'islamica' },
    { day: 20, title: 'Últimas 10 noches del mes de Ramadán ● Pesaj ● Ridván', type: 'multiple' },
    { day: 21, title: 'Pesaj ● Jueves santo - Ortodoxa', type: 'multiple' },
    { day: 22, title: 'Pesaj ● Viernes santo - Ortodoxa', type: 'multiple' },
    { day: 23, title: 'Pesaj ● Ogún ● Sábado santo - Ortodoxa', type: 'multiple' },
    {
      day: 24,
      title: 'Pascua de Resurreción - Ortodoxa ● Dia de Acción por la Tolerancia y el Respeto entre los Pueblos',
      type: 'multiple'
    },
    { day: 25, title: 'Domingo de ramos - Ortodoxa', type: 'cristiana' },
    {
      day: 28,
      title: 'Lailat al-Qadr* ● Iom Hashoa ● Día del establecimiento del budismo de Nichiren',
      type: 'multiple'
    },
    { day: 29, title: 'Noveno día de Ridván', type: 'bahai' }
  ],
  MAY: [
    { day: 2, title: 'Id al Fitr* ● Duodecimo día de Ridvan', type: 'multiple' },
    {
      day: 8,
      title: 'Celebración del Nacimiento del Buda Sakyamuni (VESAK) ● Fiesta de la Virgen de Luján ',
      type: 'multiple'
    },
    { day: 13, title: 'Pretos Velhos', type: 'africanista' },
    { day: 14, title: 'Nrsimha Chaturdasi', type: 'hinduista' },
    { day: 17, title: 'Shavout', type: 'judia' },
    { day: 18, title: 'Shavout', type: 'judia' },
    { day: 19, title: 'Lag Baomer', type: 'islamica' },
    { day: 24, title: 'Declaración del Báb', type: 'islamica' },
    { day: 29, title: 'Ascención de Bahá\u0027u\u0027lláh ● Ascensión del Señor', type: 'multiple' },
    { day: 30, title: 'Santísima Trinidad', type: 'cristiana' }
  ],
  JUNE: [
    { day: 5, title: 'Shavout ● Pentecosté', type: 'multiple' },
    { day: 6, title: 'Shavout', type: 'judia' },
    { day: 12, title: 'Santísima Trinidad / Pentecostés- Ortodoxa', type: 'cristiana' },
    { day: 13, title: 'Bara', type: 'africanista' },
    { day: 19, title: 'Corpus Christi', type: 'cristiana' }
  ],
  JULY: [
    { day: 7, title: 'Exu', type: 'africanista' },
    { day: 8, title: 'Dia del Tarwiyah - preparación Hayy', type: 'islamica' },
    { day: 9, title: 'Dia de Arafat', type: 'islamica' },
    { day: 10, title: 'Id Al Adha* ● Martirio del Báb', type: 'multiple' },
    { day: 11, title: 'Al-Haÿÿ*', type: 'islamica' },
    { day: 17, title: 'Id al-Ghadir* ● Día de la Iluminación del Bodhisattva Avalokiteshvara', type: 'multiple' },
    { day: 24, title: 'Día de los Pioneros - IJSUD', type: 'cristiana' },
    { day: 26, title: 'Naná Burukú', type: 'africanista' },
    { day: 27, title: 'Osanha', type: 'africanista' },
    { day: 30, title: 'Ras as- Sana*', type: 'islamica' }
  ],
  AUGUST: [
    { day: 6, title: 'Transfiguración del Señor', type: 'cristiana' },
    { day: 7, title: 'Tisha B\u0027Av\u0027', type: 'judia' },
    { day: 8, title: 'Ashura', type: 'islamica' },
    { day: 11, title: 'Balaram Purnima', type: 'hinduista' },
    {
      day: 15,
      title: 'Asunción de las Santísima Virgen / Dormición de la Madre de Dios- Ortodoxa',
      type: 'cristiana'
    },
    { day: 16, title: 'Xapana', type: 'africanista' },
    { day: 19, title: 'Sri Krishna Janmastami', type: 'hinduista' },
    { day: 20, title: 'Vyasa Puja Srila Prabhupada', type: 'hinduista' },
    { day: 26, title: 'Conmemoración del Nacimiento del Bodhisattva Ksitigarbha', type: 'budista' }
  ],
  SEPTEMBER: [
    { day: 3, title: 'Radhastami', type: 'hinduista' },
    { day: 8, title: 'Natividad de Maria', type: 'cristiana' },
    { day: 10, title: '', type: 'Sikh' },
    { day: 14, title: 'Exaltación de la Santísima Cruz', type: 'cristiana' },
    {
      day: 27,
      title: 'Rosh Hashana ● Xango Ibeiji',
      type: 'multiple'
    },
    { day: 29, title: 'Xango Aganjú', type: 'africanista' },
    { day: 30, title: 'Xango Aganjú', type: 'africanista' }
  ],
  OCTOBER: [
    { day: 5, title: 'Iom Kippur', type: 'judia' },
    { day: 7, title: 'Mawlid an-Nabi*', type: 'islamica' },
    { day: 10, title: 'Sukot', type: 'judia' },
    { day: 11, title: 'Sukot', type: 'judia' },
    { day: 12, title: 'Sukot', type: 'judia' },
    { day: 13, title: 'Sukot', type: 'judia' },
    { day: 14, title: 'Sukot', type: 'judia' },
    { day: 15, title: 'Sukot', type: 'judia' },
    { day: 16, title: 'Sukot', type: 'judia' },
    { day: 17, title: 'Sukot', type: 'judia' },
    { day: 18, title: 'Sukot', type: 'judia' },
    { day: 19, title: 'Conmemoración del Nacimiento del Buda de la Medicina', type: 'budista' },
    { day: 25, title: 'Diwali', type: 'hinduista' },
    {
      day: 26,
      title: 'Nacimiento de El Báb',
      type: 'bahai'
    },
    { day: 27, title: 'Nacimiento de Bahá\u0027u\u0027lláh', type: 'bahai' },
    { day: 31, title: 'Día de la Reforma Protestante', type: 'cristiana' }
  ],
  NOVEMBER: [
    { day: 1, title: 'Día de Todos los Santos', type: 'cristiana' },
    { day: 2, title: 'Día de los Fieles Difuntos', type: 'cristiana' },
    { day: 11, title: 'San Martín de Tours', type: 'cristiana' },
    { day: 15, title: 'Día de Umbanda', type: 'africanista' },
    { day: 20, title: 'Ratha Yatra ● Cristo Rey', type: 'multiple' },
    { day: 21, title: 'Entrada de la Madre de Dios en el Templo - ortodoxa', type: 'cristiana' },
    { day: 25, title: 'Obá ● Día de la Libertad Religiosa', type: 'multiple' },
    { day: 26, title: 'Día de la Alianza', type: 'bahai' },
    {
      day: 28,
      title: 'Fallecimiento del Guru Tegh Bahadur ● Ascensión de \u0027Abdu\u0027l-Bahá',
      type: 'multiple'
    }
  ],
  DECEMBER: [
    { day: 1, title: 'Januca', type: 'judia' },
    { day: 2, title: 'Januca', type: 'judia' },
    { day: 3, title: 'Januca', type: 'judia' },
    { day: 4, title: 'Oia - Iansha', type: 'multiple' },
    { day: 8, title: 'Oxum ● Inmaculada Concepción de María', type: 'multiple' },
    { day: 10, title: 'Conmemoración del Nacimiento del Buda Amithaba', type: 'budista' },
    { day: 12, title: 'Virgen de Guadalupe', type: 'cristiana' },
    { day: 19, title: 'Januca', type: 'judia' },
    { day: 20, title: 'Januca', type: 'judia' },
    { day: 21, title: 'Januca', type: 'judia' },
    { day: 22, title: 'Januca', type: 'judia' },
    { day: 23, title: 'Januca ● Nacimiento del Profeta Joseph Smith-IJSUD', type: 'multiple' },
    { day: 24, title: 'Januca ● Nochebuena', type: 'multiple' },
    { day: 25, title: 'Januca ● Navidad', type: 'multiple' },
    { day: 26, title: 'Januca ● Sagrada Familia', type: 'multiple' }
  ]
};

export const CalendarReligiousCollapse = (): JSX.Element => {
  return (
    <div className="container">
      <div className="calendar-references">
        <p className="calendar-references-text">Referencias</p>
        <div className="calendar-references-box">
          <div>
            <div className="color-box">
              <span className="color bg-coral">.</span>
              Africanista
            </div>
            <div className="color-box">
              <span className="color bg-musket">.</span>
              <span>Bahaí</span>
            </div>
            <div className="color-box">
              <span className="color bg-citrus">.</span>
              <span>Budista</span>
            </div>
            <div className="color-box">
              <span className="color bg-lime">.</span>
              <span>Cristiana</span>
            </div>
            <div className="color-box">
              <span className="color bg-sky">.</span>
              <span>Hinduista</span>
            </div>
          </div>
          <div>
            <div className="color-box">
              <span className="color bg-lavender">.</span>
              <span>Islámica</span>
            </div>
            <div className="color-box">
              <span className="color bg-berries">.</span>
              <span>Judía</span>
            </div>
            <div className="color-box">
              <span className="color bg-pistachio">.</span>
              <span>Sikh</span>
            </div>
            <div className="color-box">
              <span className="color bg-gray">.</span>
              <span>Más de una religión</span>
            </div>
          </div>
        </div>
      </div>
      <div className="calendar-yearly">
        <CalendarMonth
          monthNumber={1}
          start={1}
          isCollapsed
          hasTitle
          activeDays={RELIGIOUS_ACTIVE_DAYS.JANUARY}></CalendarMonth>
        <CalendarMonth
          monthNumber={2}
          start={4}
          isCollapsed
          hasTitle
          activeDays={RELIGIOUS_ACTIVE_DAYS.FEBRUARY}></CalendarMonth>
        <CalendarMonth
          monthNumber={3}
          start={5}
          isCollapsed
          hasTitle
          activeDays={RELIGIOUS_ACTIVE_DAYS.MARCH}></CalendarMonth>
        <CalendarMonth
          monthNumber={4}
          start={1}
          isCollapsed
          hasTitle
          activeDays={RELIGIOUS_ACTIVE_DAYS.APRIL}></CalendarMonth>
        <CalendarMonth
          monthNumber={5}
          start={3}
          isCollapsed
          hasTitle
          activeDays={RELIGIOUS_ACTIVE_DAYS.MAY}></CalendarMonth>
        <CalendarMonth
          monthNumber={6}
          start={6}
          isCollapsed
          hasTitle
          activeDays={RELIGIOUS_ACTIVE_DAYS.JUNE}></CalendarMonth>
        <CalendarMonth
          monthNumber={7}
          start={1}
          isCollapsed
          hasTitle
          activeDays={RELIGIOUS_ACTIVE_DAYS.JULY}></CalendarMonth>
        <CalendarMonth
          monthNumber={8}
          start={4}
          isCollapsed
          hasTitle
          activeDays={RELIGIOUS_ACTIVE_DAYS.AUGUST}></CalendarMonth>
        <CalendarMonth
          monthNumber={9}
          start={0}
          isCollapsed
          hasTitle
          activeDays={RELIGIOUS_ACTIVE_DAYS.SEPTEMBER}></CalendarMonth>
        <CalendarMonth
          monthNumber={10}
          start={2}
          isCollapsed
          hasTitle
          activeDays={RELIGIOUS_ACTIVE_DAYS.OCTOBER}></CalendarMonth>
        <CalendarMonth
          monthNumber={11}
          start={5}
          isCollapsed
          hasTitle
          activeDays={RELIGIOUS_ACTIVE_DAYS.NOVEMBER}></CalendarMonth>
        <CalendarMonth
          monthNumber={12}
          start={0}
          isCollapsed
          hasTitle
          activeDays={RELIGIOUS_ACTIVE_DAYS.DECEMBER}></CalendarMonth>
      </div>
    </div>
  );
};
CalendarReligiousCollapse.story = { name: 'Interreligioso -Drupal' };

export const CalendarAnualNoActiveDates = (): JSX.Element => {
  return (
    <div className="container">
      <div className="calendar-yearly">
        <CalendarMonth monthNumber={1} start={1} isCollapsed></CalendarMonth>
        <CalendarMonth monthNumber={2} start={4} isCollapsed></CalendarMonth>
        <CalendarMonth monthNumber={3} start={5} isCollapsed></CalendarMonth>
        <CalendarMonth monthNumber={4} start={1} isCollapsed></CalendarMonth>
        <CalendarMonth monthNumber={5} start={3} isCollapsed></CalendarMonth>
        <CalendarMonth monthNumber={6} start={6} isCollapsed></CalendarMonth>
        <CalendarMonth monthNumber={7} start={1} isCollapsed></CalendarMonth>
        <CalendarMonth monthNumber={8} start={4} isCollapsed></CalendarMonth>
        <CalendarMonth monthNumber={9} start={0} isCollapsed></CalendarMonth>
        <CalendarMonth monthNumber={10} start={2} isCollapsed></CalendarMonth>
        <CalendarMonth monthNumber={11} start={5} isCollapsed></CalendarMonth>
        <CalendarMonth monthNumber={12} start={0} isCollapsed></CalendarMonth>
      </div>
    </div>
  );
};
CalendarAnualNoActiveDates.story = { name: 'Anual - Drupal' }; */

/* export const CalendarTooltip = (): JSX.Element => {
  return <CalendarMonth monthNumber={12} start={0} activeDays={ACTIVE_DAYS.DECEMBER}></CalendarMonth>;
};
CalendarTooltip.story = { name: 'Con tooltip' }; */

export const CalendarLink = (): JSX.Element => {
  return <CalendarMonth monthNumber={1} start={1} activeDays={ACTIVE_DAYS_JANUARY} hasTitle></CalendarMonth>;
};
CalendarLink.story = { name: 'Con enlace' };

export const CalendarNoLink = (): JSX.Element => {
  return <CalendarMonth monthNumber={1} start={1} activeDays={ACTIVE_DAYS_JANUARY} hasTitle isUnlinked></CalendarMonth>;
};
CalendarNoLink.story = { name: 'Sin enlace' };

export const CalendarNoTitle = (): JSX.Element => {
  return <CalendarMonth monthNumber={1} start={1} activeDays={ACTIVE_DAYS_JANUARY}></CalendarMonth>;
};
CalendarNoTitle.story = { name: 'Sin title' };

export const CalendarNoReferences = (): JSX.Element => {
  return <CalendarMonth monthNumber={1} start={1} hasTitle></CalendarMonth>;
};
CalendarNoReferences.story = { name: 'Sin referencias' };

export const CalendarCollapsable = (): JSX.Element => {
  return (
    <CalendarMonth
      monthNumber={1}
      start={1}
      activeDays={ACTIVE_DAYS_JANUARY_COLLAPSED}
      hasTitle
      isCollapsed></CalendarMonth>
  );
};
CalendarCollapsable.story = { name: 'Con colapsable' };

export const CalendarDisabled = (): JSX.Element => {
  return <CalendarMonth monthNumber={1} start={1} activeDays={ACTIVE_DAYS_JANUARY_DISABLED}></CalendarMonth>;
};
CalendarDisabled.story = { name: 'Con fecha deshabilitada' };

export const CalendarYearly = (): JSX.Element => {
  return (
    <div className="container">
      <div className="calendar-yearly">
        <CalendarMonth
          monthNumber={1}
          start={1}
          hasTitle
          activeDays={ACTIVE_DAYS.JANUARY}
          isInYearlyCalendar></CalendarMonth>
        <CalendarMonth
          monthNumber={2}
          start={4}
          hasTitle
          activeDays={ACTIVE_DAYS.FEBRUARY}
          isInYearlyCalendar></CalendarMonth>
        <CalendarMonth
          monthNumber={3}
          start={5}
          hasTitle
          activeDays={ACTIVE_DAYS.MARCH}
          isInYearlyCalendar></CalendarMonth>
        <CalendarMonth
          monthNumber={4}
          start={1}
          hasTitle
          activeDays={ACTIVE_DAYS.APRIL}
          isInYearlyCalendar></CalendarMonth>
        <CalendarMonth
          monthNumber={5}
          start={3}
          hasTitle
          activeDays={ACTIVE_DAYS.MAY}
          isInYearlyCalendar></CalendarMonth>
        <CalendarMonth
          monthNumber={6}
          start={6}
          hasTitle
          activeDays={ACTIVE_DAYS.JUNE}
          isInYearlyCalendar></CalendarMonth>
        <CalendarMonth
          monthNumber={7}
          start={1}
          hasTitle
          activeDays={ACTIVE_DAYS.JULY}
          isInYearlyCalendar></CalendarMonth>
        <CalendarMonth
          monthNumber={8}
          start={4}
          hasTitle
          activeDays={ACTIVE_DAYS.AUGUST}
          isInYearlyCalendar></CalendarMonth>
        <CalendarMonth
          monthNumber={9}
          start={0}
          hasTitle
          activeDays={ACTIVE_DAYS.SEPTEMBER}
          isInYearlyCalendar></CalendarMonth>
        <CalendarMonth
          monthNumber={10}
          start={2}
          hasTitle
          activeDays={ACTIVE_DAYS.OCTOBER}
          isInYearlyCalendar></CalendarMonth>
        <CalendarMonth
          monthNumber={11}
          start={5}
          hasTitle
          activeDays={ACTIVE_DAYS.NOVEMBER}
          isInYearlyCalendar></CalendarMonth>
        <CalendarMonth
          monthNumber={12}
          start={0}
          hasTitle
          activeDays={ACTIVE_DAYS.DECEMBER}
          isInYearlyCalendar></CalendarMonth>
      </div>
    </div>
  );
};
CalendarYearly.story = { name: 'Anual' };
