import React from 'react';
import { ButtonType, Size, sizeToClass } from '../utils';
import classNames from 'classnames';

export interface ButtonProps {
  type: ButtonType;
  size?: Size;
  block?: boolean;
  disabled?: boolean;
  className?: string;
  outline?: boolean;
  icon?: string;
}

export const Button: React.FC<ButtonProps> = (props: React.PropsWithChildren<ButtonProps>) => {
  const { type, size = 'default', block, disabled, children, outline, icon } = props;

  const btnClass = classNames({
    [`btn-${type}`]: !outline,
    [`btn-outline-${type}`]: outline,
    [`btn-${sizeToClass(size)}`]: size,
    'btn-block': block,
    [`${props.className}`]: props.className,
    'btn-icon': icon
  });

  return (
    <>
      <button type="button" className={`btn ${btnClass}`} disabled={disabled}>
        {icon && <i className={`bx ${icon}`}></i>}
        {children}
      </button>
    </>
  );
};

export interface ButtonDropdownProps {
  size?: Size;
  block?: boolean;
  disabled?: boolean;
  className?: string;
  outline?: boolean;
  isToggle?: boolean;
  isBorder?: boolean;
  icon?: React.ReactNode;
  isList?: boolean;
}

export const ButtonDropdown: React.FC<ButtonDropdownProps> = (props: React.PropsWithChildren<ButtonDropdownProps>) => {
  const { disabled, children, isToggle, size = 'default', isBorder, icon, isList } = props;

  let btnDropdownClass = classNames({
    'dropdown-toggle': isToggle,
    'btn-dropdown-border': isBorder
  });

  if (size !== 'default') {
    btnDropdownClass += ` btn-dropdown-${sizeToClass(size)}`;
  }

  return (
    <>
      {!isList ? (
        <button
          type="button"
          className={`btn btn-dropdown ${btnDropdownClass}`}
          disabled={disabled}
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          dangerouslySetInnerHTML={{
            __html: `${children ? children : ''} ${icon ? icon : ''}`
          }}></button>
      ) : (
        <button
          type="button"
          className={`btn btn-dropdown ${btnDropdownClass}`}
          disabled={disabled}
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false">
          {children}
        </button>
      )}
    </>
  );
};
