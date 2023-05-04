import classNames from 'classnames';
import React from 'react';

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
