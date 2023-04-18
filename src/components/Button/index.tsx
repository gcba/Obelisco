import * as React from 'react';
import { ButtonType, Size, sizeToClass } from '../utils';

export interface ButtonProps {
  type: ButtonType;
  size?: Size;
  block?: boolean;
  disabled?: boolean;
  className?: string;
  outline?: boolean;
  iconBx?: string;
  iconMaterial?: string;
}

export const Button: React.FC<ButtonProps> = (props: React.PropsWithChildren<ButtonProps>) => {
  const { type, size, block, disabled, children, outline, iconBx, iconMaterial } = props;

  let className = `btn btn-${type}`;
  if (outline) className = `btn btn-outline-${type}`;
  if (!!size && size !== 'default') className += ` btn-${sizeToClass(size)}`;
  if (block) className += ` btn-block`;
  if (props.className) className += ` ${props.className}`;
  if (iconBx || iconMaterial) className += ` btn-icon`;

  return (
    <button type="button" className={className} disabled={disabled}>
      {iconBx && <i className={`bx ${iconBx}`}></i>}
      {iconMaterial && <span className="material-icons-round">{`${iconMaterial}`}</span>}
      {children}
    </button>
  );
};
