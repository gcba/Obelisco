import * as React from 'react';
import classNames from 'classnames';
import { ButtonType, Size, sizeToClass } from '../utils';

export interface ButtonProps {
  type: ButtonType;
  size?: Size;
  isBlock?: boolean;
  isDisabled?: boolean;
  className?: string;
  isOutline?: boolean;
  isIconSpinner?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = (props: React.PropsWithChildren<ButtonProps>) => {
  const { type, size, isBlock, isDisabled, children, isOutline, isIconSpinner } = props;

  const className = classNames(
    'btn',
    { [`btn-${type}`]: !isOutline },
    { [`btn-outline-${type}`]: isOutline },
    size && sizeToClass(size) && `btn-${sizeToClass(size)}`,
    { 'btn-block': isBlock },
    props.className,
    { 'btn-icon': isIconSpinner }
  );

  return (
    <button type="button" className={className} disabled={isDisabled}>
      {isIconSpinner}
      {children}
    </button>
  );
};
