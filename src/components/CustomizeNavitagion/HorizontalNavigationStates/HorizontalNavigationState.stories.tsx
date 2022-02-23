import React from 'react';
import '../CustomizeNavigation.scss';

export const HorizontalNavigationStatesComponent = (): JSX.Element => {
  return (
    <div>
      <div className="content-nav mt-5">
        <div className="row ">
          <div className="col-md-4">
            <div>
              <h4 className="text-danger text-bold">Seleccionado</h4>
              <h4 className="text-danger">Sin borde</h4>
              <div className="nav-container">
                <nav>
                  <ul className="nav flex-row nav-pills">
                    <li className="nav-item">
                      <a className="nav-link active" href="javascript:void(0)">
                        Navegación
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="javascript:void(0)">
                        Navegación
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <h4 className="text-danger text-bold">Hover</h4>
              <h4 className="text-danger">Sin borde</h4>
              <div className="">
                <nav>
                  <ul className="nav flex-row nav-pills">
                    <li className="nav-item">
                      <a className="nav-link hover" href="javascript:void(0)">
                        Navegación
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link " href="javascript:void(0)">
                        Navegación
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <h4 className="text-danger text-bold">Focus</h4>
              <h4 className="text-danger">Sin borde</h4>
              <div className="">
                <nav>
                  <ul className="nav flex-row nav-pills">
                    <li className="nav-item">
                      <a className="nav-link focus" href="javascript:void(0)">
                        Navegación
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="javascript:void(0)">
                        Navegación
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-5">
            <div>
              <h4 className="text-danger">Con borde</h4>
              <div className="nav-container">
                <nav>
                  <ul className="nav flex-row nav-pills">
                    <li className="nav-item">
                      <a className="nav-link nav-border active" href="javascript:void(0)">
                        Navegación
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link nav-border" href="javascript:void(0)">
                        Navegación
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-5">
            <div>
              <h4 className="text-danger">Con borde</h4>
              <div className="">
                <nav>
                  <ul className="nav flex-row nav-pills">
                    <li className="nav-item">
                      <a className="nav-link nav-border hover" href="javascript:void(0)">
                        Navegación
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link nav-border" href="javascript:void(0)">
                        Navegación
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-5">
            <div>
              <h4 className="text-danger">Con borde</h4>
              <div className="">
                <nav>
                  <ul className="nav flex-row nav-pills">
                    <li className="nav-item">
                      <a className="nav-link nav-border focus" href="javascript:void(0)">
                        Navegación
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link nav-border" href="javascript:void(0)">
                        Navegación
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
