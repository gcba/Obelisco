import React from 'react';
import '../CustomizeNavigation.scss';

export const NavigationStateComponent = (): JSX.Element => {
  return (
    <div>
      <div className="content-nav mt-5">
        <div>
          <h4 className="text-danger">Seleccionado - Predetermiando</h4>
          <div className="nav-container mt-5">
            <nav>
              <ul className="nav flex-column nav-pills">
                <li className="nav-item">
                  <a className="nav-link active" href="javascript:void(0)">
                    Anidado Nivel 1
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="javascript:void(0)">
                    Anidado Nivel 1
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="javascript:void(0)">
                    Anidado Nivel 1
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="javascript:void(0)">
                    Anidado Nivel 1
                  </a>
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
        <div>
          <h4 className="text-danger">Hover</h4>
          <div className="nav-container mt-5">
            <nav>
              <ul className="nav flex-column nav-pills">
                <li className="nav-item">
                  <a className="nav-link active" href="javascript:void(0)">
                    Anidado Nivel 1
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="javascript:void(0)">
                    Anidado Nivel 1
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="javascript:void(0)">
                    Anidado Nivel 1
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="javascript:void(0)">
                    Anidado Nivel 1
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link hover" href="javascript:void(0)">
                    Anidado Nivel 1
                  </a>
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
                  <a className="nav-link active" href="javascript:void(0)">
                    Anidado Nivel 1
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="javascript:void(0)">
                    Anidado Nivel 1
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="javascript:void(0)">
                    Anidado Nivel 1
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="javascript:void(0)">
                    Anidado Nivel 1
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link focus" href="javascript:void(0)">
                    Anidado Nivel 1
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
