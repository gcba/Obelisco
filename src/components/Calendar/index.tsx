import React from 'react';

interface ActiveDays {
  day?: number;
  title?: string;
  url?: string;
  dataDirection?: string;
  type?: string;
  isDisabled?: boolean;
}
interface CalendarMonthProps {
  start?: number;
  numberOfDays?: number;
  activeDays?: ActiveDays[];
  month?: string;
  monthNumber?: number;
  year?: number;
  hasTitle?: boolean;
  isUnlinked?: boolean;
  isCollapsed?: boolean;
  isInYearlyCalendar?: boolean;
}

export const CalendarMonth: React.FC<CalendarMonthProps> = ({
  start = 0,
  numberOfDays,
  month,
  year = 2024,
  activeDays,
  monthNumber,
  hasTitle,
  isUnlinked = false,
  isCollapsed,
  isInYearlyCalendar = false
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

  const colorReligion = (text: string) => {
    const mapTexts = {
      africanista: 'bg-coral',
      bahai: 'bg-musket',
      budista: 'bg-citrus',
      cristiana: 'bg-lime',
      hinduista: 'bg-sky',
      islamica: 'bg-lavender',
      judia: 'bg-berries',
      sikh: 'bg-pistachio',
      multiple: 'bg-gray'
    };

    const result = mapTexts[text.toLowerCase()] || '';

    return result;
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
            {activeItem.isDisabled ? (
              <span className="disabled">{day}</span>
            ) : (
              <span
                {...(hasTitle
                  ? { title: activeItem.title }
                  : {
                      'data-direction': activeItem.dataDirection || 'top-right',
                      'data-tooltip': activeItem.title
                    })}>
                {isUnlinked ? (
                  <span className={`active ${activeItem.type ? colorReligion(activeItem.type) : ''}`.trim()}>
                    {day}
                  </span>
                ) : (
                  <a href={activeItem.url ? activeItem.url : '#'} className="calendar-link">
                    <span className={`active ${activeItem.type ? colorReligion(activeItem.type) : ''}`.trim()}>
                      {day}
                    </span>
                  </a>
                )}
              </span>
            )}
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

  const totalDaysCalentar = daysArray.length + start;
  const totalWeeksCalendar = Math.ceil(totalDaysCalentar / 7);

  const renderDaysForRow = (startIdx: number, endIdx: number, activeItems?: ActiveDays[]) => {
    const daysForRow: Array<number | null> = daysArray.slice(startIdx, endIdx);

    while (daysForRow.length < 7) {
      daysForRow.push(null);
    }

    return daysForRow.map((day, index) => {
      if (day !== null) {
        const activeItem = activeItems?.find((obj) => obj.day === day);
        return (
          <td key={index}>
            {activeItem ? (
              activeItem.isDisabled ? (
                <span className="disabled">{day}</span>
              ) : (
                <span
                  {...(hasTitle
                    ? { title: activeItem.title }
                    : {
                        'data-direction': activeItem.dataDirection || 'top-right',
                        'data-tooltip': activeItem.title
                      })}>
                  {isUnlinked ? (
                    <span className={`active ${activeItem.type ? colorReligion(activeItem.type) : ''}`.trim()}>
                      {day}
                    </span>
                  ) : (
                    <a href={activeItem.url ? activeItem.url : '#'} className="calendar-link">
                      <span className={`active ${activeItem.type ? colorReligion(activeItem.type) : ''}`.trim()}>
                        {day}
                      </span>
                    </a>
                  )}
                </span>
              )
            ) : (
              <span>{day}</span>
            )}
          </td>
        );
      } else {
        return (
          <td key={index}>
            <span></span>
          </td>
        );
      }
    });
  };

  const renderEmptyCells = () => {
    const emptyCells = [];
    let i = 0;

    while (i < 7) {
      emptyCells.push(
        <td key={i}>
          <span></span>
        </td>
      );
      i++;
    }

    return emptyCells;
  };

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

  const DAYS_HEADER_TABLE = ['D', 'L', 'M', 'X', 'J', 'V', 'S'];

  const activeDaysNotDisabled = activeDays?.filter((activeDay) => !activeDay.isDisabled).length;

  const sortedActiveDays = activeDays?.sort((a, b) => {
    if (a.day !== undefined && b.day !== undefined) {
      return a.day - b.day;
    }
    return 0;
  });

  return (
    <div className="calendar">
      <div className="calendar-header">
        <h3 className="calendar-title">{month ? month : monthsTitles(monthNumber)}</h3>
        <span className="calendar-year">{year}</span>
      </div>
      <div className="calendar-body">
        <table>
          <thead>
            <tr className="calendar-week-header">
              {DAYS_HEADER_TABLE.map((dayHeader, index) => (
                <th key={index}>
                  <span>{dayHeader}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: numberWeeks }, (_, i) => (
              <tr key={i} className="calendar-week">
                {i === 0 ? (
                  <>
                    {emptyDaysArray}
                    {renderDays(i, daysInAWeek - start, activeDays)}
                  </>
                ) : (
                  <>{renderDaysForRow(daysInAWeek * i - start, daysInAWeek - start + daysInAWeek * i, activeDays)}</>
                )}
              </tr>
            ))}
            {isInYearlyCalendar && totalWeeksCalendar !== 6 && <tr className="calendar-week">{renderEmptyCells()}</tr>}
          </tbody>
        </table>
      </div>

      {activeDays && (activeDaysNotDisabled || 0 > 0) ? (
        <div className="calendar-footer">
          {isCollapsed ? (
            <div className="accordion accordion-white">
              <div className="card">
                <button
                  className="card-header collapsed"
                  data-toggle="collapse"
                  data-target={`#collapse${monthsTitles(monthNumber)}`}>
                  <i className="bx bx-calendar"></i>
                  <span className="collapse-title">Referencias</span>
                </button>
                <div id={`collapse${monthsTitles(monthNumber)}`} className="collapse">
                  <div className="card-body">
                    <ul className="calendar-footer-list">
                      {sortedActiveDays?.map(
                        (activeDay) =>
                          !activeDay.isDisabled && (
                            <li key={activeDay.day}>
                              <strong>{activeDay.day}.</strong> {activeDay.title}
                            </li>
                          )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <ul className="calendar-footer-list">
              {sortedActiveDays?.map(
                (activeDay) =>
                  !activeDay.isDisabled && (
                    <li key={activeDay.day}>
                      <strong>{activeDay.day}.</strong> {activeDay.title}
                    </li>
                  )
              )}
            </ul>
          )}
        </div>
      ) : null}
    </div>
  );
};
