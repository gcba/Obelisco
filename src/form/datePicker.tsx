// Base
import React, { useState } from 'react';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import { es } from 'date-fns/locale/es';
import { getYear, getMonth, isSaturday, isSunday } from 'date-fns';

registerLocale('es', es);
setDefaultLocale('es');

interface DatePickerProps {
  isClearable?: boolean;
  dateFormat: string;
  defaultDate?: Date;
  months?: string[];
  yearRange?: { start: number; end: number };
  isNavButton?: boolean;
  excludedDates?: { date: Date; message: string }[];
  disableWeekends?: boolean;
}

const filterWeekends = (date: Date): boolean => {
  return !isSaturday(date) && !isSunday(date);
};

export const SimpleDate: React.FC<DatePickerProps> = ({
  isClearable,
  dateFormat,
  defaultDate,
  excludedDates,
  disableWeekends = false
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(defaultDate || null);
  const filterDate = disableWeekends ? filterWeekends : undefined;
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e: React.SetStateAction<Date | null>) => {
    setIsOpen(!isOpen);
    setSelectedDate(e);
  };
  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <div className="d-flex">
      <div className="Sample">
        {isOpen && (
          <DatePicker
            selected={selectedDate}
            onChange={(date) => {
              setSelectedDate(date);
              handleChange(date);
            }}
            inline
            dateFormat={dateFormat}
            locale="es"
            isClearable={isClearable}
            excludeDates={excludedDates}
            filterDate={filterDate}
          />
        )}
        {selectedDate && selectedDate.toLocaleDateString()}
        <button className="example-custom-input" onClick={handleClick}>
          hola
        </button>
      </div>
    </div>
  );
};

export const PickerDate: React.FC<DatePickerProps> = ({
  isClearable,
  dateFormat,
  defaultDate,
  months,
  yearRange,
  isNavButton,
  excludedDates,
  disableWeekends = false
}) => {
  const [startDate, setStartDate] = useState<Date | null>(defaultDate || null);

  const filterDate = disableWeekends ? filterWeekends : undefined;

  const range = (start: number, end: number, step: number): number[] => {
    const result = [];
    for (let i = start; i <= end; i += step) {
      result.push(i);
    }
    return result;
  };

  const years = range(yearRange?.start || 1990, yearRange?.end || getYear(new Date()) + 1, 1);
  const availableMonths = months || [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e: React.SetStateAction<Date | null>) => {
    setIsOpen(!isOpen);
    setStartDate(e);
  };
  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <div className="d-flex">
      <div className="Sample">
        {isOpen && (
          <DatePicker
            renderCustomHeader={({
              date,
              changeYear,
              changeMonth,
              decreaseMonth,
              increaseMonth,
              prevMonthButtonDisabled,
              nextMonthButtonDisabled
            }) => (
              <div>
                {isNavButton && (
                  <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                    {'<'}
                  </button>
                )}
                <select value={getYear(date)} onChange={({ target: { value } }) => changeYear(parseInt(value, 10))}>
                  {years.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>

                <select
                  value={availableMonths[getMonth(date)]}
                  onChange={({ target: { value } }) => changeMonth(availableMonths.indexOf(value))}>
                  {availableMonths.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>

                {isNavButton && (
                  <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                    {'>'}
                  </button>
                )}
              </div>
            )}
            selected={startDate}
            onChange={(date) => {
              date && setStartDate(date);
              handleChange(date);
            }}
            dateFormat={dateFormat}
            locale="es"
            inline
            isClearable={isClearable}
            excludeDates={excludedDates}
            filterDate={filterDate}
          />
        )}
      </div>
      {startDate && startDate.toLocaleDateString()}
      <button className="example-custom-input" onClick={handleClick}>
        hola
      </button>
    </div>
  );
};

export const RangeDate: React.FC<DatePickerProps> = ({
  isClearable,
  dateFormat,
  months,
  yearRange,
  isNavButton,
  excludedDates,
  disableWeekends = false
}) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const range = (start: number, end: number, step: number): number[] => {
    const result = [];
    for (let i = start; i <= end; i += step) {
      result.push(i);
    }
    return result;
  };

  const filterDate = disableWeekends ? filterWeekends : undefined;

  const years = range(yearRange?.start || 1990, yearRange?.end || getYear(new Date()) + 1, 1);
  const availableMonths = months || [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const onChange = (dates: [any, any]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);

    if (end) {
      setIsDatePickerOpen(false);
    }
  };

  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const handleClick = () => {
    setIsDatePickerOpen(!isDatePickerOpen);
  };

  return (
    <div className="d-flex">
      <div className="Sample">
        {isDatePickerOpen && (
          <DatePicker
            renderCustomHeader={({
              date,
              changeYear,
              changeMonth,
              decreaseMonth,
              increaseMonth,
              prevMonthButtonDisabled,
              nextMonthButtonDisabled
            }) => (
              <div>
                {isNavButton && (
                  <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                    {'<'}
                  </button>
                )}
                <select value={getYear(date)} onChange={({ target: { value } }) => changeYear(parseInt(value, 10))}>
                  {years.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>

                <select
                  value={availableMonths[getMonth(date)]}
                  onChange={({ target: { value } }) => changeMonth(availableMonths.indexOf(value))}>
                  {availableMonths.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>

                {isNavButton && (
                  <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                    {'>'}
                  </button>
                )}
              </div>
            )}
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            dateFormat={dateFormat}
            isClearable={isClearable}
            excludeDates={excludedDates}
            filterDate={filterDate}
            inline
          />
        )}
      </div>
      {/*Como muestro la fecha seleccionada aca */}
      {startDate && endDate ? (
        <p>
          {startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}
        </p>
      ) : (
        <p className="mr-5">Selecciona un rango de fechas</p>
      )}
      <button type="button" className="btn btn-primary" onClick={handleClick}>
        Fecha
      </button>
    </div>
  );
};
