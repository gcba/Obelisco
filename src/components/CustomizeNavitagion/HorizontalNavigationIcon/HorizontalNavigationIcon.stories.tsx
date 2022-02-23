import React from 'react';
import '../CustomizeNavigation.scss';

export const HorizontalNavigationIconComponent = (): JSX.Element => {
  return (
    <div>
      <div className="content-nav mt-5">
        <div className="row ">
          <div className="col-md-6">
            <div>
              <h4 className="text-danger">Sin borde</h4>
              <h4 className="text-danger text-bold">Grande</h4>
              <div className="nav-container mt-5">
                <nav>
                  <ul className="nav flex-row nav-pills">
                    <li className="nav-item">
                      <a className="nav-link icon-user" href="javascript:void(0)">
                        Navegación
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="javascript:void(0)">
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
          <div className="col-md-6">
            <div>
              <h4 className="text-danger">Con borde</h4>
              <h4 className="text-danger text-bold">Grande</h4>
              <div className=" mt-5">
                <nav>
                  <ul className="nav flex-row nav-pills">
                    <li className="nav-item">
                      <a className="nav-link nav-border icon-user" href="javascript:void(0)">
                        Navegación
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link nav-border" href="javascript:void(0)">
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
          <div className="col-md-6 mt-5">
            <div>
              <h4 className="text-danger text-bold">Mediano</h4>
              <div className=" mt-5">
                <nav>
                  <ul className="nav flex-row nav-pills">
                    <li className="nav-item">
                      <a className="nav-link nav-medium icon-user" href="javascript:void(0)">
                        Navegación
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link nav-medium" href="javascript:void(0)">
                        Navegación
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link nav-medium" href="javascript:void(0)">
                        Navegación
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <div>
              <h4 className="text-danger text-bold">Mediano</h4>
              <div className=" mt-5">
                <nav>
                  <ul className="nav flex-row nav-pills">
                    <li className="nav-item">
                      <a className="nav-link nav-medium nav-border icon-user" href="javascript:void(0)">
                        Navegación
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link nav-medium nav-border" href="javascript:void(0)">
                        Navegación
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link nav-medium nav-border" href="javascript:void(0)">
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
