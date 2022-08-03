import React from 'react';

export const AccessListCategory = (): JSX.Element => {
  return (
    <div className="list-group-container">
      <div className="list-group">
        <div className="group-access">
          <div className="card-access">
            <div className="card-access-body p-list">
              <div className="">
                <h3 className="card-access-title ">Titulo</h3>
                <p className="card-access-text">Bajada</p>
              </div>
              <i className="bx bxs-shield-x card-access-icon"></i>
            </div>
            <div className="container-access">
              <hr className="clearfix" />
              <div className="access-option">
                <h2 className="title-option">Categoria 1</h2>
                <a href="#" className="list-group-item item-sm">
                  <span className="access-title">Acceso chico</span>
                </a>
                <a href="#" className="list-group-item item-sm">
                  <span className="access-title">Acceso chico</span>
                </a>
                <h2 className="title-option">Categoria 2</h2>
                <a href="#" className="list-group-item item-sm">
                  <span className="access-title">Acceso chico</span>
                </a>
                <a href="#" className="list-group-item item-sm">
                  <span className="access-title">Acceso chico</span>
                </a>
              </div>
            </div>
            <a href="#" className="list-group-item card-item">
              <span className="access-title">Acceso grande</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
