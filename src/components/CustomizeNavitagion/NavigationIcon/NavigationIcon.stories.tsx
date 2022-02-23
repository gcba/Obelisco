import React from 'react';
import '../CustomizeNavigation.scss';

export const NavigationIcon = (): JSX.Element => {
  return (
    <div>
      <div className="content-nav mt-5">
        <div>
          <h4 className="text-danger">Anidado nivel 1</h4>
          <div className="nav-container mt-5">
            <nav>
              <ul className="nav flex-column nav-pills">
                <li className="nav-item">
                  <a className="nav-link icon-user" href="javascript:void(0)">
                    Anidado Nivel 1
                  </a>
                  <ul className="nav flex-column nav-pills">
                    <li className="nav-item">
                      <a className="nav-link icon-user" href="javascript:void(0)">
                        Anidado Nivel 2
                      </a>
                    </li>
                    <ul className="nav flex-column nav-pills">
                      <li className="nav-item">
                        <a className="nav-link icon-user" href="javascript:void(0)">
                          Anidado Nivel 3
                        </a>
                      </li>
                    </ul>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div>
          <h4 className="text-danger">Anidado nivel 2</h4>
          <div className="nav-container mt-5">
            <nav>
              <ul className="nav flex-column nav-pills">
                <li className="nav-item">
                  <a className="nav-link active-child icon-user" href="javascript:void(0)">
                    Anidado Nivel 1
                  </a>
                  <ul className="nav flex-column nav-pills">
                    <li className="nav-item">
                      <a className="nav-link active-child icon-user" href="javascript:void(0)">
                        Anidado Nivel 2
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div>
          <h4 className="text-danger">Anidado nivel 3</h4>
          <div className="nav-container mt-5">
            <nav>
              <ul className="nav flex-column nav-pills">
                <li className="nav-item">
                  <a className="nav-link active icon-user" href="javascript:void(0)">
                    Anidado Nivel 1
                  </a>
                  <ul className="nav flex-column nav-pills">
                    <li className="nav-item">
                      <a className="nav-link active icon-user" href="javascript:void(0)">
                        Anidado Nivel 2
                      </a>
                      <ul className="nav flex-column nav-pills">
                        <li className="nav-item">
                          <a className="nav-link active icon-user" href="javascript:void(0)">
                            Anidado Nivel 3
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
