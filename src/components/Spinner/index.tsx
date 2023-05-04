import React from 'react';
import { SpinnerType, Size, sizeToClass } from '../utils';

export interface SpinnerProps {
  type: SpinnerType;
  size?: Size;
  block?: boolean;
}

export const Spinner: React.FC<SpinnerProps> = (props: React.PropsWithChildren<SpinnerProps>) => {
  const { type, size, block } = props;

  let className = `spinner-border text-${type}`;
  if (!!size && size !== 'default') className += ` spinner-border-${sizeToClass(size)}`;
  if (block) className = `spinner-block text-${type}`;

  return (
    <div className={className} role="status">
      <span className="sr-only">Cargando...</span>
    </div>
  );
};
