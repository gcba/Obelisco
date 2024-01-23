import React from 'react';

interface ActiveDays {
  day?: number;
  title?: string;
  url?: string;
  dataDirection?: string;
}
interface TableMonthProps {
  start?: number;
  numberOfDays?: number;
  activeDays?: ActiveDays[];
  month?: string;
  monthNumber?: number;
  year?: number;
  hasTitle?: boolean;
  isUnlinked?: boolean;
}

export const CalendarMonth: React.FC<TableMonthProps> = ({
  start = 0,
  numberOfDays,
  month,
  year = 2024,
  activeDays,
  monthNumber,
  hasTitle,
  isUnlinked = false
}): JSX.Element => {
  const monthAmountOfDays = (monthNumber?: number, year?: number): number => {
    if (typeof monthNumber !== 'number' || monthNumber < 1 || monthNumber > 12) {
      return 0;
    }

    if (monthNumber === 4 || monthNumber === 6 || monthNumber === 9 || monthNumber === 11) {
      return 30;
    } else if (monthNumber === 2) {
      return (year ? year : 2024) % 4 === 0 ? 29 : 28;
    } else {
      return 31;
    }
  };

  const daysArray = Array.from(
    { length: numberOfDays ? numberOfDays : monthAmountOfDays(monthNumber, year) },
    (_, index) => index + 1
  );

  const emptyDaysArray = start < 7 && Array.from({ length: start }, (_, index) => <td key={index}></td>);
  const daysInAWeek = 7;
  const totalDays = start + daysArray.length;
  const numberWeeks = Math.ceil(totalDays / 7);

  const renderDays = (startIdx: number, endIdx: number, activeItems?: ActiveDays[]) =>
    daysArray.slice(startIdx, endIdx).map((day) => {
      const activeItem = activeItems?.find((obj) => obj.day === day);
      if (activeItem) {
        return (
          <td key={day}>
            <span
              {...(hasTitle
                ? { title: activeItem.title }
                : {
                    'data-direction': activeItem.dataDirection || 'top-right',
                    'data-tooltip': activeItem.title
                  })}>
              {isUnlinked ? (
                <span className="active">{day}</span>
              ) : (
                <a href={activeItem.url ? activeItem.url : '#'} className="calendar-link">
                  <span className="active">{day}</span>
                </a>
              )}
            </span>
          </td>
        );
      } else {
        return (
          <td key={day}>
            <span>{day}</span>
          </td>
        );
      }
    });

  const monthTitle = [
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
  ];

  const monthsTitles = (monthNumber?: number) => {
    if (monthNumber && monthNumber >= 1 && monthNumber <= 12) {
      return monthTitle[monthNumber - 1];
    } else {
      return 'Mes inválido';
    }
  };

  const DAYS_HEADER_TABLE = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];

  return (
    <div className="calendar">
      <div className="calendar-header">
        <h3 className="calendar-title">{month ? month : monthsTitles(monthNumber)}</h3>
        <span className="calendar-year">{year}</span>
      </div>
      <div className="calendar-body">
        <table>
          <tbody>
            <tr className="calendar-week">
              {DAYS_HEADER_TABLE.map((dayHeader, index) => (
                <th key={index}>{dayHeader}</th>
              ))}
            </tr>
            {Array.from({ length: numberWeeks }, (_, i) => (
              <tr key={i} className="calendar-numbers">
                {i === 0 ? (
                  <>
                    {emptyDaysArray}
                    {renderDays(i, daysInAWeek - start, activeDays)}
                  </>
                ) : (
                  renderDays(daysInAWeek * i - start, daysInAWeek - start + daysInAWeek * i, activeDays)
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {activeDays && (
        <div className="calendar-footer">
          <ul className="calendar-footer-list">
            {activeDays?.map((activeDay) => (
              <li key={activeDay.day}>
                <strong>{activeDay.day}.</strong> {activeDay.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
