import React, { useRef, useState, useEffect, useCallback } from 'react';
import classNames from 'classnames';

export interface Option {
  value: string;
  label: string;
}

export interface DropdownProps {
  title?: string;
  className?: string;
  isActive?: boolean;
  isBordered?: boolean;
  size?: 'sm' | 'lg';
  onlyIcon?: boolean;
  buttonIcon?: React.ReactNode;
  option?: true;
}

export interface DropdownOptionProps {
  options: Option[];
  isRadio?: boolean;
  children?: React.ReactNode;
}

export const Dropdown: React.FC<DropdownProps> = (props: React.PropsWithChildren<DropdownProps>) => {
  const {
    title = 'Desplegable',
    isActive,
    isBordered,
    children,
    size,
    onlyIcon,
    className,
    buttonIcon,
    option
  } = props;

  const containerClass = classNames('dropdown', className);

  const buttonClass = classNames('btn', 'btn-dropdown', {
    'dropdown-toggle': !buttonIcon && !onlyIcon,
    active: isActive,
    'btn-dropdown-border': isBordered,
    [`btn-dropdown-${size}`]: size
  });

  return option ? (
    <fieldset className="dropdown">
      <button type="button" className={buttonClass} data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
        {title}
      </button>
      {children}
    </fieldset>
  ) : (
    <div className={containerClass}>
      <button type="button" className={buttonClass} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {onlyIcon ? (
          buttonIcon
        ) : (
          <>
            {title}
            {buttonIcon}
          </>
        )}
      </button>
      {children}
    </div>
  );
};

export default Dropdown;

export const DropdownOption = ({ options, isRadio, children }: DropdownOptionProps): JSX.Element => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [checkboxStates, setCheckboxStates] = useState<{ [key: string]: boolean }>({});
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Maneja el cambio de estado de una casilla de verificación
  const handleCheckboxChange = (checkboxName: string) => {
    setCheckboxStates((prevState) => ({
      ...prevState,
      [checkboxName]: !prevState[checkboxName]
    }));
  };

  // Maneja el cambio de estado de un radio button
  const handleRadioChange = (radioName: string) => {
    const updatedCheckboxStates = {};
    options.forEach((option) => {
      updatedCheckboxStates[option.value] = option.value === radioName;
    });
    setCheckboxStates(updatedCheckboxStates);
  };

  // Maneja el evento de abrir/cerrar el dropdown
  const handleDropdownToggle = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  // Maneja el evento de clic fuera del dropdown para cerrarlo
  const handleOutsideClick = useCallback((event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setDropdownOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [handleOutsideClick]);

  const selectedCheckboxCount = Object.values(checkboxStates).filter((checked) => checked).length;

  return (
    <>
      <div className="dropdown-container">
        <div className={`dropdown mb-3 ${dropdownOpen ? 'show' : ''}`} ref={dropdownRef}>
          <button
            type="button"
            className={`btn btn-dropdown btn-dropdown-border btn-dropdown-lg dropdown-toggle ${
              dropdownOpen ? 'active' : ''
            }`}
            onClick={handleDropdownToggle}
            aria-haspopup="true"
            aria-expanded={dropdownOpen ? 'true' : 'false'}>
            Desplegable {selectedCheckboxCount > 0 ? `(${selectedCheckboxCount})` : ''}
          </button>
          <div className={`dropdown-menu dropdown-body ${dropdownOpen ? 'show' : ''}`}>
            {options.map((option) => (
              <div className={`custom-control ${isRadio ? 'custom-radio' : 'custom-checkbox'}`} key={option.value}>
                {isRadio ? (
                  <label className={`btn btn-chip btn-sm ${checkboxStates[option.value] ? 'active' : ''}`}>
                    <input
                      className="btn-check"
                      type="radio"
                      id={`skills-${option.value}-input`}
                      name="profession"
                      value={option.value}
                      checked={checkboxStates[option.value]}
                      onChange={() => handleRadioChange(option.value)}
                    />
                    {option.label}
                    {children}
                  </label>
                ) : (
                  <>
                    <input
                      className="custom-control-input"
                      type="checkbox"
                      id={`skills-${option.value}-input`}
                      name="skills"
                      value={option.value}
                      checked={checkboxStates[option.value]}
                      onChange={() => handleCheckboxChange(option.value)}
                    />
                    <label className="custom-control-label" htmlFor={`skills-${option.value}-input`}>
                      {option.label}
                    </label>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
