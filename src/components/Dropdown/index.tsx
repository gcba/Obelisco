import React from 'react';

import { ButtonDropdown } from '../Button/index';
import { Size } from 'components/utils';

interface DropdownProps {
  items: string[];
  size?: Size;
  isLink?: boolean;
  isBorder?: boolean;
  isToggle?: boolean;
  icon?: React.ReactNode;
  isList?: boolean;
  customMenu?: React.ReactNode;
}

type EventDropdown = React.MouseEvent<HTMLAnchorElement, MouseEvent> | React.MouseEvent<HTMLButtonElement, MouseEvent>;

export const Dropdown: React.FC<DropdownProps> = ({
  items,
  size,
  isLink,
  isBorder,
  isToggle,
  children,
  icon,
  isList,
  customMenu
}): JSX.Element => {
  const [selected, setSelected] = React.useState<string[]>([]);

  const selectOption = (option: string, e: EventDropdown): void => {
    e.preventDefault();

    if (selected.includes(option)) {
      setSelected(selected.filter((item) => item !== option));
      return;
    }

    setSelected([...selected, option]);
  };

  return (
    <div className="dropdown mb-3">
      <ButtonDropdown
        isToggle={isToggle}
        size={size}
        isBorder={isBorder}
        icon={icon}
        isList={isList}
        isActive={selected.length > 0}>
        {selected.length > 0 ? `${children ?? ''} (${selected.length})` : children}
      </ButtonDropdown>
      {customMenu}
      {!isLink && items.length > 0 ? (
        <div className="dropdown-menu">
          {items.map((item, index) => (
            <button
              key={index}
              className={`dropdown-item ${selected.includes(item) ? 'active' : ''}`}
              type="button"
              onClick={(e) => selectOption(item, e)}>
              {item}
            </button>
          ))}
        </div>
      ) : (
        items.length > 0 && (
          <ul className="dropdown-menu">
            {items.map((item, index) => (
              <li key={index}>
                <a
                  className={`dropdown-item ${selected.includes(item) ? 'active' : ''}`}
                  href="#"
                  onClick={(e) => selectOption(item, e)}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        )
      )}
    </div>
  );
};
