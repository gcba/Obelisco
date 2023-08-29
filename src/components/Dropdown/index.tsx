import React, { useState } from 'react';
import classNames from 'classnames';
import { Size, sizeToClass } from '../utils';

export interface Option {
  value: string;
  label: string;
}

export interface DropdownOptionProps {
  options: Option[];
  isRadio?: boolean;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  iconType?: 'material' | 'boxicon';
  size?: Size;
  idDropdown?: string;
}
export interface DropdownProps {
  title?: string;
  isBordered?: boolean;
  onlyIcon?: boolean;
  btnIconRight?: string;
  btnIconRightClass?: string;
  btnIconLeft?: string;
  btnIconLeftClass?: string;
  isMenuRight?: boolean;
  isNested?: boolean;
  idDropdown?: string;
  isSubDropdown?: boolean;
}
export interface DropdownItemsProps {
  title?: string;
  isDanger?: boolean;
  isAlignRight?: boolean;
  itemIconRight?: string;
  itemIconLeft?: string;
  isSubItem?: boolean;
  isDisabled?: boolean;
}

export const DropdownIcon: React.FC<{ itemIcon: string; itemIconClass?: string }> = ({ itemIcon, itemIconClass }) => (
  <>
    {itemIcon && !itemIcon?.includes('bx') && (
      <span className={`material-icons-round ${itemIconClass ? itemIconClass : ''}`.trim()}>{itemIcon}</span>
    )}
    {itemIcon && itemIcon?.includes('bx') && (
      <i className={`${itemIcon} ${itemIconClass ? itemIconClass : ''}`.trim()}></i>
    )}
  </>
);

export const DropdownItem: React.FC<DropdownItemsProps> = (props: React.PropsWithChildren<DropdownItemsProps>) => {
  const {
    title = 'Opción de navegación',
    isDanger,
    itemIconRight,
    itemIconLeft,
    isAlignRight,
    isSubItem,
    isDisabled
  } = props;

  const itemClass = classNames('dropdown-item', {
    'item-danger': isDanger,
    'sub-item': isSubItem
  });

  return (
    <a className={itemClass} href="#" {...(isDisabled ? { disabled: true } : {})}>
      {itemIconLeft && <DropdownIcon itemIcon={itemIconLeft} />}
      <span className={`item-text ${isAlignRight ? 'text-right' : ''}`.trim()}>
        {isDanger ? 'Cerrar sesión' : title}
      </span>
      {itemIconRight && <DropdownIcon itemIcon={itemIconRight} />}
    </a>
  );
};

export const Dropdown: React.FC<DropdownProps> = (props: React.PropsWithChildren<DropdownProps>) => {
  const {
    title = 'Desplegable',
    isBordered,
    children,
    onlyIcon,
    btnIconRight,
    btnIconLeft,
    btnIconRightClass,
    btnIconLeftClass,
    isMenuRight,
    isNested,
    idDropdown = 'dropdownContent',
    isSubDropdown
  } = props;

  const dropdownClass = classNames('dropdown', { 'sub-dropdown': isSubDropdown });

  const buttonDropdownClass = classNames('btn', 'btn-dropdown', 'btn-dropdown-lg', {
    'btn-dropdown-border': isBordered,
    'dropdown-toggle': !isNested || isNested == undefined,
    'sub-btn-dropdown': isSubDropdown
  });

  const dropdownMenuClass = classNames('dropdown-menu', {
    'dropdown-menu-right': isMenuRight,
    'collapse ': isNested,
    'sub-dropdown-menu': isSubDropdown
  });

  return (
    <div className={dropdownClass}>
      <button
        type="button"
        className={buttonDropdownClass}
        {...(isNested
          ? {
              'data-toggle': 'collapse',
              'data-target': `#${idDropdown}`,
              'aria-controls': `${idDropdown}`,
              'aria-expanded': 'false',
              'aria-label': 'Toggle'
            }
          : {
              'data-toggle': 'dropdown',
              'aria-haspopup': 'true',
              'aria-expanded': 'false'
            })}>
        {btnIconLeft && <DropdownIcon itemIcon={btnIconLeft} itemIconClass={btnIconLeftClass} />}
        {(!onlyIcon || onlyIcon == undefined) && (
          <span className={isSubDropdown ? 'item-text' : 'btn-dropdown-text'}>{title}</span>
        )}
        {btnIconRight && <DropdownIcon itemIcon={btnIconRight} itemIconClass={btnIconRightClass} />}
      </button>
      <div className={dropdownMenuClass} {...(isNested ? { id: idDropdown } : {})}>
        {children}
      </div>
    </div>
  );
};

export const DropdownOption = ({
  options,
  isRadio = false,
  children,
  icon,
  iconType,
  size,
  idDropdown
}: DropdownOptionProps): JSX.Element => {
  const [checkboxStates, setCheckboxStates] = useState<{ [key: string]: boolean }>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

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

  const selectedCheckboxCount = Object.values(checkboxStates).filter((checked) => checked).length;
  const dropdownTitle = selectedCheckboxCount > 0 ? `Desplegable (${selectedCheckboxCount})` : 'Desplegable';
  const displayTitle = selectedOption ? selectedOption : dropdownTitle;

  const generateUniqueID = (value: string, isRadio: boolean) => {
    const prefix = isRadio ? 'radio' : 'checkbox';
    return `${prefix}-${value}-${Math.random().toString(36).substr(2, 9)}`;
  };

  return (
    <>
      <div className="dropdown dropdown-form">
        <button
          type="button"
          className={`btn btn-dropdown btn-dropdown-border ${
            size !== undefined && sizeToClass(size) ? `btn-dropdown-${sizeToClass(size)} ` : ''
          }`.trim()}
          data-toggle="collapse"
          data-target={`#${idDropdown}`}
          aria-controls={idDropdown}
          aria-expanded="false"
          aria-label="Toggle">
          {icon && iconType === 'material' ? icon : icon && <i className={`bx ${icon}`}></i>}
          <span className="btn-dropdown-text">{displayTitle}</span>
          <span className="material-icons-round btn-dropdown-icon">expand_more</span>
        </button>
        <div className="dropdown-menu dropdown-body collapse" id={idDropdown}>
          {options.map((option) => (
            <div className={`custom-control ${isRadio ? 'custom-radio' : 'custom-checkbox'}`} key={option.value}>
              {isRadio ? (
                <label className={`btn btn-chip ${checkboxStates[option.value] ? 'active' : ''}`}>
                  <input
                    className="btn-check"
                    type="radio"
                    id={generateUniqueID(option.value, isRadio)}
                    name="profession"
                    value={option.value}
                    checked={checkboxStates[option.value]}
                    onChange={() => handleRadioChange(option.value)}
                  />
                  <span className="btn-chip-text">{option.label}</span>
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
    </>
  );
};
