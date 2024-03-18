// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';
// import { Multiple, Range, Simple } from '.';
import { PickerDate, SimpleDate, RangeDate } from './datePicker';
import { subDays } from 'date-fns';

// Components

// Configuración general del componente
export default {
  title: 'Componentes|Date Picker',
  decorators: [withA11y]
};

export const Picker = (): JSX.Element => {
  const defaultDate = new Date(); // dia actual
  //const defaultDate = new Date(2023, 4, 15); //dia por defecto mes y año recuerda que la indexacion de mes comienza desse 0 a 11

  return (
    <>
      <h1>test de react datepicker</h1>
      <SimpleDate
        dateFormat="dd/MM/yyyy"
        isClearable
        excludedDates={[
          { date: new Date(), message: 'Hoy' },
          { date: subDays(new Date(), 1), message: 'Ayer' }
          // Agrega más fechas excluidas según sea necesario
        ]}
        disableWeekends={false}
        defaultDate={defaultDate}
      />
      <br />
      <br />
      <br />
      {/* <PickerDate dateFormat="dd/MM/yyyy" isClearable defaultDate={defaultDate} /> */}
      <PickerDate
        isClearable
        dateFormat="dd-MM-yyyy"
        defaultDate={defaultDate}
        months={[
          'Enero',
          'Febrero',
          'Marzo',
          'Abril',
          'Mayo',
          'Junio',
          'Julio',
          'Agosto',
          'Septiembre',
          'Octubre',
          'Noviembre',
          'Diciembre'
        ]}
        yearRange={{ start: 2000, end: 2030 }}
        isNavButton={false}
        excludedDates={[
          { date: new Date(), message: 'Hoy' },
          { date: subDays(new Date(), 1), message: 'Ayer' }
          // Agrega más fechas excluidas según sea necesario
        ]}
      />
      <br />
      <br />
      <br />
      <RangeDate
        isClearable={true}
        dateFormat="dd-MM-yyyy"
        months={[
          'Enero',
          'Febrero',
          'Marzo',
          'Abril',
          'Mayo',
          'Junio',
          'Julio',
          'Agosto',
          'Septiembre',
          'Octubre',
          'Noviembre',
          'Diciembre'
        ]}
        yearRange={{ start: 2000, end: 2030 }}
        isNavButton={false}
        excludedDates={[
          { date: new Date(), message: 'Hoy' },
          { date: subDays(new Date(), 1), message: 'Ayer' }
          // Agrega más fechas excluidas según sea necesario
        ]}
      />
    </>
  );
};
