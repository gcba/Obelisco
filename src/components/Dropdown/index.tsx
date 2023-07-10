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
  icon?: React.ReactNode;
  iconType?: 'material' | 'boxicon';
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

export const DropdownOption = ({
  options,
  isRadio = false,
  children,
  icon,
  iconType
}: DropdownOptionProps): JSX.Element => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [checkboxStates, setCheckboxStates] = useState<{ [key: string]: boolean }>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleCheckboxChange = (checkboxName: string) => {
    setCheckboxStates((prevState) => ({
      ...prevState,
      [checkboxName]: !prevState[checkboxName]
    }));
  };

  const handleRadioChange = (radioName: string) => {
    const selectedOption = options.find((option) => option.value === radioName)?.label || null;
    setSelectedOption(selectedOption);

    const updatedCheckboxStates = {};
    options.forEach((option) => {
      updatedCheckboxStates[option.value] = option.value === radioName;
    });
    setCheckboxStates(updatedCheckboxStates);
  };

  const handleDropdownToggle = () => {
    setDropdownOpen((prevState) => !prevState);
  };

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
  const dropdownTitle = selectedCheckboxCount > 0 ? `Desplegable (${selectedCheckboxCount})` : 'Desplegable';
  const displayTitle = selectedOption ? selectedOption : dropdownTitle;

  const generateUniqueID = (value: string, isRadio: boolean) => {
    const prefix = isRadio ? 'radio' : 'checkbox';
    return `${prefix}-${value}-${Math.random().toString(36).substr(2, 9)}`;
  };

  return (
    <>
      <div className="storybook-dropdown-form-container">
        <div className={`dropdown dropdown-form ${dropdownOpen ? 'show' : ''}`} ref={dropdownRef}>
          <button
            type="button"
            className={`btn btn-dropdown btn-dropdown-border btn-dropdown-lg dropdown-toggle  ${
              dropdownOpen ? 'active' : ''
            }`}
            onClick={handleDropdownToggle}
            aria-haspopup="true"
            aria-expanded={dropdownOpen ? 'true' : 'false'}>
            {icon && iconType === 'material' ? icon : icon && <i className={`bx ${icon}`}></i>}
            <p className="mb-0">{displayTitle}</p>
          </button>
          <div className={`dropdown-menu dropdown-body ${dropdownOpen ? 'show' : ''}`}>
            {options.map((option) => (
              <div className={`custom-control ${isRadio ? 'custom-radio' : 'custom-checkbox'}`} key={option.value}>
                {isRadio ? (
                  <label className={`btn btn-chip btn-sm ${checkboxStates[option.value] ? 'active' : ''}`}>
                    <input
                      className="btn-check"
                      type="radio"
                      id={generateUniqueID(option.value, isRadio)}
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
