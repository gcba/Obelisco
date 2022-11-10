import * as React from 'react';
import { SpinnerType } from '../utils';

export interface SpinnerProps {
  type: SpinnerType;
}

export const Spinner: React.FC<SpinnerProps> = (props: React.PropsWithChildren<SpinnerProps>) => {
  const { type } = props;
  const className = `spinner-border text-${type}`;
  return (
    <div className={className} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export const SpinnerText: React.FC<SpinnerProps> = (props: React.PropsWithChildren<SpinnerProps>) => {
  const { type } = props;
  const className = `spinner-border text-${type}`;
  return (
    <div className="d-flex flex-column align-items-center">
      <h4>Estamos creando tu trámite</h4>
      <p>Por favor esperá unos segundos...</p>
      <div className={className} role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};
