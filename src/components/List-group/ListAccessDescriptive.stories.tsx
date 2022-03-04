import React from 'react';

export const AccessListDescriptive = (): JSX.Element => {
  return (
    <div>
      <div className="list-group-container">
        <div className="list-group">
          <div className="group-access">
            <div className="card-access">
              <div className="card-access-body">
                <div className="">
                  <h3 className="card-access-title text-bold">Titulo</h3>
                  <p className="card-access-text">Bajada</p>
                </div>
                <i className="bx bxs-shield-x card-access-icon bx-flip-horizontal"></i>
              </div>
              <div className="container-access">
                <hr className="clearfix" />
                <div className="access-option">
                  <a href="j#" className="list-group-item item-sm">
                    <div className="access-content">
                      <span className="access-title">Acceso grande</span>
                      <p className="access-text">Descripción</p>
                    </div>
                  </a>
                  <a href="j#" className="list-group-item item-sm">
                    <div className="access-content">
                      <span className="access-title">Acceso grande</span>
                      <p className="access-text">Descripción</p>
                    </div>
                  </a>
                  <a href="j#" className="list-group-item item-sm">
                    <div className="access-content">
                      <span className="access-title">Acceso grande</span>
                      <p className="access-text">Descripción</p>
                    </div>
                  </a>
                </div>
              </div>
              <a href="j#" className="list-group-item card-item">
                <div className="access-content">
                  <span className="access-title">Lorem ipsum dolor sit amet</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
