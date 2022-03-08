import React from 'react';

export const AccessListCategory = (): JSX.Element => {
  return (
    <div>
      <div className="list-group-container">
        <div className="list-group">
          <div className="group-access">
            <div className="card-access">
              <div className="card-access-body">
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
                    Acceso chico
                  </a>
                  <a href="#" className="list-group-item item-sm">
                    Acceso chico
                  </a>
                  <h2 className="title-option">Categoria 2</h2>
                  <a href="#" className="list-group-item item-sm">
                    Acceso chico
                  </a>
                  <a href="#" className="list-group-item item-sm">
                    Acceso chico
                  </a>
                </div>
              </div>
              <a href="#" className="list-group-item card-item">
                Acceso grande
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
