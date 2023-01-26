import * as React from 'react';
import { ButtonType, Size, sizeToClass } from '../utils';

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
  const { type, size, block, disabled, children, outline, icon } = props;

  let className = `btn btn-${type}`;
  if (outline) className = `btn btn-outline-${type}`;
  if (!!size && size !== 'default') className += ` btn-${sizeToClass(size)}`;
  if (block) className += ` btn-block`;
  if (props.className) className += ` ${props.className}`;
  if (icon) className += ` btn-icon`;

  return (
    <button type="button" className={className} disabled={disabled}>
      {icon && <i className={`bx ${icon}`}></i>}
      {children}
    </button>
  );
};
