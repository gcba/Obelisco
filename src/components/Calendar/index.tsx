import React from 'react';

interface ActiveDays {
  day?: number | number[];
  title?: string;
  url?: string;
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
  isLinked?: boolean;
  isCollapsed?: boolean;
}

export const CalendarMonth: React.FC<CalendarMonthProps> = ({
  start = 0,
  numberOfDays,
  month,
  year = 2024,
  activeDays,
  monthNumber,
  isLinked = false,
  isCollapsed
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
  const totalDaysCalentar = daysArray.length + start;
  const totalWeeksCalendar = Math.ceil(totalDaysCalentar / 7);
  const MONTH_TITLE = [
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
  const DAYS_HEADER_TABLE = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];
  const activeDaysNotDisabled = activeDays?.filter((activeDay) => !activeDay.isDisabled).length;

  const colorActive = (text: string) => {
    const mapTexts = {
      sky: 'bg-sky',
      lavender: 'bg-lavender',
      coral: 'bg-coral',
      avocado: 'bg-avocado',
      citrus: 'bg-citrus',
      lime: 'bg-lime',
      pistachio: 'bg-pistachio',
      berries: 'bg-berries',
      musket: 'bg-musket',
      blackberry: 'bg-blackberry',
      aqua: 'bg-aqua',
      strawberry: 'bg-strawberry',
      gray: 'bg-gray'
    };

    const result = mapTexts[text.toLowerCase()] || '';

    return result;
  };

  const renderActiveDay = (day: number, activeItem: ActiveDays): JSX.Element => (
    <span
      className={
        activeItem.type
          ? activeItem.type === 'secondary'
            ? 'active-secondary'
            : `active ${colorActive(activeItem.type)}`
          : 'active'
      }>
      {day}
    </span>
  );

  const renderDayTd = (day: number, activeItem?: ActiveDays, isLinked?: boolean): JSX.Element => {
    if (activeItem) {
      return (
        <td key={day}>
          {activeItem.isDisabled ? (
            <span className="disabled">{day}</span>
          ) : isLinked ? (
            <a
              href={activeItem.url ? activeItem.url : '#'}
              className="calendar-link"
              title={activeItem.title && activeItem.title}>
              {renderActiveDay(day, activeItem)}
            </a>
          ) : (
            <span title={activeItem.title && activeItem.title}>{renderActiveDay(day, activeItem)}</span>
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
  };

  const renderDays = (startIdx: number, endIdx: number, activeItems?: ActiveDays[]) =>
    daysArray.slice(startIdx, endIdx).map((day) => {
      const activeItem = activeItems?.find((obj) => {
        if (Array.isArray(obj.day)) {
          return obj.day.includes(day);
        }
        return obj.day === day;
      });
      return renderDayTd(day, activeItem, isLinked);
    });

  const renderDaysForRow = (startIdx: number, endIdx: number, activeItems?: ActiveDays[]) => {
    const daysForRow: Array<number | null> = daysArray.slice(startIdx, endIdx);

    while (daysForRow.length < 7) {
      daysForRow.push(null);
    }

    return daysForRow.map((day, index) => {
      if (day !== null) {
        const activeItem = activeItems?.find((obj) => {
          if (Array.isArray(obj.day)) {
            return obj.day.includes(day);
          }
          return obj.day === day;
        });
        return renderDayTd(day, activeItem, isLinked);
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

  const renderFooter = () => {
    if (activeDays && (activeDaysNotDisabled || 0 > 0)) {
      return (
        <div className="calendar-footer">
          {isCollapsed ? (
            <div className="accordion">
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
                      {activeDays?.map(
                        (activeDay, index) =>
                          !activeDay.isDisabled && (
                            <li key={index}>
                              <strong>
                                {Array.isArray(activeDay.day) && activeDay.day.length === 2
                                  ? `${activeDay.day[0]}, ${activeDay.day[1]}.`
                                  : Array.isArray(activeDay.day) && activeDay.day.length > 2
                                  ? `${activeDay.day[0]} al ${activeDay.day[activeDay.day.length - 1]}.`
                                  : `${activeDay.day}.`}
                              </strong>{' '}
                              {activeDay.title}
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
              {activeDays?.map(
                (activeDay, index) =>
                  !activeDay.isDisabled && (
                    <li key={index}>
                      <strong>
                        {Array.isArray(activeDay.day) && activeDay.day.length === 2
                          ? `${activeDay.day[0]}, ${activeDay.day[1]}.`
                          : Array.isArray(activeDay.day) && activeDay.day.length > 2
                          ? `${activeDay.day[0]} al ${activeDay.day[activeDay.day.length - 1]}.`
                          : `${activeDay.day}.`}
                      </strong>{' '}
                      {activeDay.title}
                    </li>
                  )
              )}
            </ul>
          )}
        </div>
      );
    } else {
      return null;
    }
  };

  const monthsTitles = (monthNumber?: number) => {
    if (monthNumber && monthNumber >= 1 && monthNumber <= 12) {
      return MONTH_TITLE[monthNumber - 1];
    } else {
      return 'Mes inválido';
    }
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <h2 className="calendar-title">{month ? month : monthsTitles(monthNumber)}</h2>
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
            {totalWeeksCalendar !== 6 && <tr className="calendar-week">{renderEmptyCells()}</tr>}
          </tbody>
        </table>
      </div>
      {renderFooter()}
    </div>
  );
};
