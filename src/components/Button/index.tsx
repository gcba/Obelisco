import * as React from 'react';
import { ButtonType, Size, SpinnerType, sizeToClass } from '../utils';
import { Spinner } from '../Spinner';

export interface ButtonProps {
  type: ButtonType;
  size?: Size;
  block?: boolean;
  disabled?: boolean;
  className?: string;
  outline?: boolean;
  iconBx?: string;
  iconMaterial?: string;
  spinner?: SpinnerType;
}

export const Button: React.FC<ButtonProps> = (props: React.PropsWithChildren<ButtonProps>) => {
  const { type, size, block, disabled, children, outline, iconBx, iconMaterial, spinner } = props;

  let className = `btn btn-${type}`;
  if (outline) className = `btn btn-outline-${type}`;
  if (!!size && size !== 'default') className += ` btn-${sizeToClass(size)}`;
  if (block) className += ` btn-block`;
  if (props.className) className += ` ${props.className}`;
  if (iconBx || iconMaterial || spinner) className += ` btn-icon`;

  return (
    <button type="button" className={className} disabled={disabled}>
      {spinner && <Spinner type={spinner} size="small"></Spinner>}
      {iconBx && <i className={`bx ${iconBx}`}></i>}
      {iconMaterial && <span className="material-icons-round">{`${iconMaterial}`}</span>}
      {children}
    </button>
  );
};
