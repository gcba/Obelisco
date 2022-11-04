import * as React from 'react';

export const Spinner = (): JSX.Element => {
  return (
    <div className="spinner-border text-info" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export const SpinnerText = (): JSX.Element => {
  return (
    <div className="spinner-container">
      <h4>Estamos creando tu trámite</h4>
      <p>Por favor esperá unos segundos...</p>
      <div className="spinner-border text-info" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};
