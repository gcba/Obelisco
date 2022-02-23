import React from 'react';

export const NavigationMobileComponent = (): JSX.Element => {
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <div className="content-nav mt-5">
            <div>
              <h4 className="text-danger">Vertical</h4>
              <div className="nav-container mt-5">
                <nav>
                  <ul className="nav flex-column nav-pills">
                    <li className="nav-item">
                      <a className="nav-link active-child" href="javascript:void(0)">
                        Anidado Nivel 1
                      </a>
                      <ul className="nav flex-column nav-pills">
                        <li className="nav-item">
                          <a className="nav-link " href="#">
                            Anidado Nivel 2
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link active-child" href="#">
                            Anidado Nivel 2
                          </a>
                          <ul className="nav flex-column nav-pills">
                            <li className="nav-item">
                              <a className="nav-link active" href="#">
                                Anidado Nivel 3
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link " href="#">
                            Anidado Nivel 2
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="javascript:void(0)">
                        Anidado Nivel 1
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-4">
          <h4>Desplazamiento horizontal</h4>
          <div className="content-nav ">
            <div className="row container">
              <div className="col-md-12">
                <div>
                  <div className="nav-container ">
                    <nav>
                      <ul className="nav flex-row nav-pills">
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
              <div className="col-md-12">
                <div>
                  <div className="">
                    <nav>
                      <ul className="nav flex-row nav-pills">
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
      </div>
    </div>
  );
};
