import React from 'react';

export const SimpleComponent = (): JSX.Element => {
  return (
    <div className="list-group">
      <div className="group-access">
        <div className="card-access">
          <div className="card-access-body reverse">
            <div>
              <h4 className="mb-1">Título del acceso</h4>
              <p className="mb-0">Descripción del acceso</p>
            </div>
            <span className="card-access-icon descriptive">Nº</span>
          </div>
          <a href="#" className="list-group-item card-item">
            <span className="access-title">
              <i className="bx bxs-info-circle"></i>
              Acceso grande
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export const AccessListComponent = (): JSX.Element => {
  return (
    <div className="list-group">
      <div className="group-access">
        <div className="card-access">
          <div className="card-access-body">
            <div>
              <h4 className="mb-1">Título del acceso</h4>
              <p className="mb-0">Descripción del acceso</p>
            </div>
            <span className="card-access-icon descriptive">Nº</span>
          </div>
          <hr className="clearfix" />
          <div className="container-access">
            <div className="access-option">
              <a href="#" className="list-group-item item-sm">
                <i className="bx bxs-info-circle"></i>
                <div className="access-content">
                  <span className="access-title">Acceso</span>
                  <p className="access-text">Descripción (Opcional)</p>
                </div>
              </a>
              <a href="#" className="list-group-item item-sm">
                <i className="bx bxs-info-circle"></i>
                <div className="access-content">
                  <span className="access-title">Acceso</span>
                  <p className="access-text">Descripción (Opcional)</p>
                </div>
              </a>
              <a href="#" className="list-group-item item-sm">
                <i className="bx bxs-info-circle"></i>
                <div className="access-content">
                  <span className="access-title">Acceso</span>
                  <p className="access-text">Descripción (Opcional)</p>
                </div>
              </a>
            </div>
          </div>
          <hr className="clearfix" />
          <a href="#" className="list-group-item card-item">
            <span className="access-title">
              <i className="bx bxs-info-circle"></i>
              Acceso grande
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export const CategoriesComponent = (): JSX.Element => {
  return (
    <div className="list-group">
      <div className="group-access">
        <div className="card-access">
          <div className="card-access-body">
            <div>
              <h4 className="mb-1">Título del acceso</h4>
              <p className="mb-0">Descripción del acceso</p>
            </div>
            <span className="card-access-icon descriptive">Nº</span>
          </div>
          <hr className="clearfix" />
          <div className="container-access">
            <div className="access-option">
              <h6 className="title-option">Categoría 1</h6>
              <a href="#" className="list-group-item item-sm">
                <span className="access-title">
                  <i className="bx bxs-info-circle"></i>
                  Acceso chico
                </span>
              </a>
              <a href="#" className="list-group-item item-sm">
                <span className="access-title">
                  <i className="bx bxs-info-circle"></i>
                  Acceso chico
                </span>
              </a>
              <h6 className="title-option">Categoría 2</h6>
              <a href="#" className="list-group-item item-sm">
                <span className="access-title">
                  <i className="bx bxs-info-circle"></i>
                  Acceso chico
                </span>
              </a>
              <a href="#" className="list-group-item item-sm">
                <span className="access-title">
                  <i className="bx bxs-info-circle"></i>
                  Acceso chico
                </span>
              </a>
            </div>
          </div>
          <hr className="clearfix" />
          <a href="#" className="list-group-item card-item">
            <span className="access-title">
              <i className="bx bxs-info-circle"></i>
              Acceso grande
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
