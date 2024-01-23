// Base
import React from 'react';
import './Form.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';
import { CalendarMonth } from './calendar';

// Configuración general del componente
export default {
  title: 'Formulario|Calendario',
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

export const CalendarTooltip = (): JSX.Element => {
  return <CalendarMonth monthNumber={12} start={0} activeDays={ACTIVE_DAYS.DECEMBER}></CalendarMonth>;
};
CalendarTooltip.story = { name: 'Con tooltip' };

export const CalendarTitle = (): JSX.Element => {
  return <CalendarMonth monthNumber={12} start={0} activeDays={ACTIVE_DAYS.DECEMBER} hasTitle></CalendarMonth>;
};
CalendarTitle.story = { name: 'Con title' };

export const CalendarNoLink = (): JSX.Element => {
  return <CalendarMonth monthNumber={1} start={1} activeDays={ACTIVE_DAYS.JANUARY} isUnlinked></CalendarMonth>;
};
CalendarNoLink.story = { name: 'Sin enlace' };

export const CalendarYearly = (): JSX.Element => {
  return (
    <div className="d-flex flex-wrap">
      <div className="col-12 col-md-6 col-xl-4 d-inline-block my-4">
        <CalendarMonth monthNumber={1} start={1} activeDays={ACTIVE_DAYS.JANUARY}></CalendarMonth>
      </div>
      <div className="col-12 col-md-6 col-xl-4 d-inline-block my-4">
        <CalendarMonth monthNumber={2} start={4} activeDays={ACTIVE_DAYS.FEBRUARY}></CalendarMonth>
      </div>
      <div className="col-12 col-md-6 col-xl-4 d-inline-block my-4">
        <CalendarMonth monthNumber={3} start={5} activeDays={ACTIVE_DAYS.MARCH}></CalendarMonth>
      </div>
      <div className="col-12 col-md-6 col-xl-4 d-inline-block my-4">
        <CalendarMonth monthNumber={4} start={1} activeDays={ACTIVE_DAYS.APRIL}></CalendarMonth>
      </div>
      <div className="col-12 col-md-6 col-xl-4 d-inline-block my-4">
        <CalendarMonth monthNumber={5} start={3} activeDays={ACTIVE_DAYS.MAY}></CalendarMonth>
      </div>
      <div className="col-12 col-md-6 col-xl-4 d-inline-block my-4">
        <CalendarMonth monthNumber={6} start={6} activeDays={ACTIVE_DAYS.JUNE}></CalendarMonth>
      </div>
      <div className="col-12 col-md-6 col-xl-4 d-inline-block my-4">
        <CalendarMonth monthNumber={7} start={1} activeDays={ACTIVE_DAYS.JULY}></CalendarMonth>
      </div>
      <div className="col-12 col-md-6 col-xl-4 d-inline-block my-4">
        <CalendarMonth monthNumber={8} start={4} activeDays={ACTIVE_DAYS.AUGUST}></CalendarMonth>
      </div>
      <div className="col-12 col-md-6 col-xl-4 d-inline-block my-4">
        <CalendarMonth monthNumber={9} start={0} activeDays={ACTIVE_DAYS.SEPTEMBER}></CalendarMonth>
      </div>
      <div className="col-12 col-md-6 col-xl-4 d-inline-block my-4">
        <CalendarMonth monthNumber={10} start={2} activeDays={ACTIVE_DAYS.OCTOBER}></CalendarMonth>
      </div>
      <div className="col-12 col-md-6 col-xl-4 d-inline-block my-4">
        <CalendarMonth monthNumber={11} start={5} activeDays={ACTIVE_DAYS.NOVEMBER}></CalendarMonth>
      </div>
      <div className="col-12 col-md-6 col-xl-4 d-inline-block my-4">
        <CalendarMonth monthNumber={12} start={0} activeDays={ACTIVE_DAYS.DECEMBER}></CalendarMonth>
      </div>
    </div>
  );
};
CalendarYearly.story = { name: 'Calendario anual' };
