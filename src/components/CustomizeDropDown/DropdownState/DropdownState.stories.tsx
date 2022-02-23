import React from 'react';

export const DropDownStatesComponent = (): JSX.Element => {
  return (
    <div>
      <div className="row mt-5">
        <div className="col-md-4">
          <h4 className="text-danger text-bold">Seleccionado</h4>
          <h4 className="text-danger">Sin Borde</h4>
          <div className="dropdown-container">
            <div className="dropdown">
              <button
                type="button"
                className="btn btn-dropdown dropdown-toggle active"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                Desplegable
              </button>
              <div className="dropdown-menu active">
                <button className="dropdown-item" type="button">
                  Opción 1
                </button>
                <button className="dropdown-item" type="button">
                  Opción 2
                </button>
                <button className="dropdown-item" type="button">
                  Opción 3
                </button>
              </div>
            </div>
            <div className="dropdown">
              <button
                type="button"
                className="btn btn-dropdown dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                Desplegable
              </button>
              <div className="dropdown-menu">
                <button className="dropdown-item" type="button">
                  Opción 1
                </button>
                <button className="dropdown-item" type="button">
                  Opción 2
                </button>
                <button className="dropdown-item" type="button">
                  Opción 3
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <h4 className="text-danger">Hover</h4>
          <h4 className="text-danger text-bold">Grande</h4>
          <div className="dropdown-container">
            <div className="dropdown">
              <button
                type="button"
                className="btn btn-dropdown dropdown-toggle hover"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                Desplegable
              </button>
              <div className="dropdown-menu active">
                <button className="dropdown-item" type="button">
                  Opción 1
                </button>
                <button className="dropdown-item" type="button">
                  Opción 2
                </button>
                <button className="dropdown-item" type="button">
                  Opción 3
                </button>
              </div>
            </div>
            <div className="dropdown">
              <button
                type="button"
                className="btn btn-dropdown dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                Desplegable
              </button>
              <div className="dropdown-menu">
                <button className="dropdown-item" type="button">
                  Opción 1
                </button>
                <button className="dropdown-item" type="button">
                  Opción 2
                </button>
                <button className="dropdown-item" type="button">
                  Opción 3
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <h4 className="text-danger">Focus</h4>
          <h4 className="text-danger text-bold">Grande</h4>
          <div className="dropdown-container">
            <div className="dropdown">
              <button
                type="button"
                className="btn btn-dropdown dropdown-toggle focus"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                Desplegable
              </button>
              <div className="dropdown-menu">
                <button className="dropdown-item" type="button">
                  Opción 1
                </button>
                <button className="dropdown-item" type="button">
                  Opción 2
                </button>
                <button className="dropdown-item" type="button">
                  Opción 3
                </button>
              </div>
            </div>
            <div className="dropdown">
              <button
                type="button"
                className="btn btn-dropdown dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                Desplegable
              </button>
              <div className="dropdown-menu">
                <button className="dropdown-item" type="button">
                  Opción 1
                </button>
                <button className="dropdown-item" type="button">
                  Opción 2
                </button>
                <button className="dropdown-item" type="button">
                  Opción 3
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mt-5">
          <h4 className="text-danger">Con borde</h4>
          <div className="dropdown-container">
            <div className="dropdown dropdown-border">
              <button
                type="button"
                className="btn btn-dropdown dropdown-toggle dropdown-border active"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                Desplegable
              </button>
              <div className="dropdown-menu">
                <button className="dropdown-item" type="button">
                  Opción 1
                </button>
                <button className="dropdown-item" type="button">
                  Opción 2
                </button>
                <button className="dropdown-item" type="button">
                  Opción 3
                </button>
              </div>
            </div>
            <div className="dropdown">
              <button
                type="button"
                className="btn btn-dropdown dropdown-border dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                Desplegable
              </button>
              <div className="dropdown-menu">
                <button className="dropdown-item" type="button">
                  Opción 1
                </button>
                <button className="dropdown-item" type="button">
                  Opción 2
                </button>
                <button className="dropdown-item" type="button">
                  Opción 3
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mt-5">
          <h4 className="text-danger">Con borde</h4>
          <div className="dropdown-container">
            <div className="dropdown">
              <button
                type="button"
                className="btn btn-dropdown dropdown-toggle dropdown-border hover"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                Desplegable
              </button>
              <div className="dropdown-menu active">
                <button className="dropdown-item" type="button">
                  Opción 1
                </button>
                <button className="dropdown-item" type="button">
                  Opción 2
                </button>
                <button className="dropdown-item" type="button">
                  Opción 3
                </button>
              </div>
            </div>
            <div className="dropdown">
              <button
                type="button"
                className="btn btn-dropdown dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                Desplegable
              </button>
              <div className="dropdown-menu">
                <button className="dropdown-item" type="button">
                  Opción 1
                </button>
                <button className="dropdown-item" type="button">
                  Opción 2
                </button>
                <button className="dropdown-item" type="button">
                  Opción 3
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mt-5">
          <h4 className="text-danger">Con borde</h4>
          <div className="dropdown-container">
            <div className="dropdown">
              <button
                type="button"
                className="btn btn-dropdown dropdown-border dropdown-toggle focus"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                Desplegable
              </button>
              <div className="dropdown-menu">
                <button className="dropdown-item" type="button">
                  Opción 1
                </button>
                <button className="dropdown-item" type="button">
                  Opción 2
                </button>
                <button className="dropdown-item" type="button">
                  Opción 3
                </button>
              </div>
            </div>
            <div className="dropdown">
              <button
                type="button"
                className="btn btn-dropdown dropdown-border dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                Desplegable
              </button>
              <div className="dropdown-menu">
                <button className="dropdown-item" type="button">
                  Opción 1
                </button>
                <button className="dropdown-item" type="button">
                  Opción 2
                </button>
                <button className="dropdown-item" type="button">
                  Opción 3
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
