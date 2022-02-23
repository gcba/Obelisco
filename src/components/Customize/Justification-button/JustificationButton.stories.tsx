import React from 'react';
import './JustificationButton.scss';

export const JustificationButton = (): JSX.Element => {
  return (
    <div className="row mt-5">
      <div className="col-md-3">
        <h4>Default</h4>
        <div>
          <h4>Grande</h4>
          <button className="btn btn-lg btn-primary">Aceptar</button>
        </div>

        <div className="my-5">
          <h4>Mediano (Predeterminado)</h4>
          <button className="btn btn-primary">Aceptar</button>
        </div>

        <div className="my-5">
          <h4>Mediano (Predeterminado)</h4>
          <button className="btn btn-sm btn-primary">Aceptar</button>
        </div>
      </div>
      <div className="col-md-4">
        <h4>En caja</h4>
        <div className="rounded p-4">
          <button className="btn btn-block btn-lg btn-primary ">Aceptar</button>
          <button className="btn btn-block btn-primary">Aceptar</button>
          <button className="btn btn-block btn-sm btn-primary">Aceptar</button>
        </div>
      </div>
      <div className="col-md-4">
        <h4>4 columnas</h4>
        <div className="row row-flex p-4">
          <div className="col-12">
            <button className="btn btn-block btn-lg btn-primary ">Aceptar</button>
          </div>
          <div className="col-12">
            <button className="btn btn-block btn-primary mt-5">Aceptar</button>
          </div>
          <div className="col-12">
            <button className="btn btn-block btn-sm btn-primary mt-5">Aceptar</button>
          </div>
        </div>
      </div>
    </div>
  );
};
