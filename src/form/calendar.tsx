import React from 'react';

interface ActiveDays {
  day?: number;
  title?: string;
}
interface TableMonthProps {
  start?: number;
  numberOfDays?: number;
  activeDays?: ActiveDays[];
  month?: string;
  year?: string;
}

export const CalendarMonth: React.FC<TableMonthProps> = ({
  start = 0,
  numberOfDays = 30,
  month,
  year,
  activeDays
}): JSX.Element => {
  const daysArray = Array.from({ length: numberOfDays }, (_, index) => index + 1);

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
            <span data-direction="top-right" data-tooltip={activeItem.title}>
              <a href="#" className="calendar-link">
                <span className="active">{day}</span>
              </a>
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

  return (
    <div className="calendar">
      <div className="date-header">
        <h4>{month}</h4>
        <span>{year}</span>
      </div>
      <div className="date-body">
        <table>
          <tbody>
            <tr className="date-week">
              <th>D</th>
              <th>L</th>
              <th>M</th>
              <th>M</th>
              <th>J</th>
              <th>V</th>
              <th>S</th>
            </tr>
            {Array.from({ length: numberWeeks }, (_, i) => (
              <tr key={i} className="date-numbers">
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
        <div className="date-footer">
          <ul className="date-footer-list">
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
