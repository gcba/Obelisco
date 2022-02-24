import React from 'react';

export const AccessMobile = (): JSX.Element => {
  return (
    <div>
      <h2>Acceso Mobile</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="row">
            <div className="col-12">
              <h4 className="text-danger text-bold">icono derecha</h4>
              <div className="group-access">
                <div className="card-access">
                  <div className="card-access-body">
                    <div className="">
                      <h3 className="card-access-title text-bold">Lorem ipsum dolor sit</h3>
                      <p className="card-access-text">Lorem ipsum dolor sit amet</p>
                    </div>
                    <i className="bx bxs-shield-x card-access-icon bx-flip-horizontal"></i>
                  </div>
                  <a href="javascript:void(0)" className="list-group-item card-item">
                    <div className="access-content">
                      <span className="access-title">Lorem ipsum dolor sit amet</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 mt-5">
              <h4 className="text-danger text-bold">icono izquierda</h4>
              <div className="group-access">
                <div className="card-access">
                  <div className="card-access-body reverse">
                    <div className="">
                      <h3 className="card-access-title text-bold">Lorem ipsum dolor sit</h3>
                      <p className="card-access-text">Lorem ipsum dolor sit amet</p>
                    </div>
                    <i className="bx bxs-shield-x card-access-icon bx-flip-horizontal"></i>
                  </div>
                  <a href="javascript:void(0)" className="list-group-item card-item">
                    <div className="access-content">
                      <span className="access-title">Lorem ipsum dolor sit amet</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 mt-5">
              <h4 className="text-danger text-bold">Categorias</h4>
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
                      <h2 className="title-option">Categoria 1</h2>
                      <a href="javascript:void(0)" className="list-group-item item-sm">
                        <div className="access-content">
                          <span className="access-title">Acceso chico</span>
                        </div>
                      </a>
                      <a href="javascript:void(0)" className="list-group-item item-sm">
                        <div className="access-content">
                          <span className="access-title">Acceso chico</span>
                        </div>
                      </a>
                      <a href="javascript:void(0)" className="list-group-item item-sm">
                        <div className="access-content">
                          <span className="access-title">Acceso chico</span>
                        </div>
                      </a>
                      <a href="javascript:void(0)" className="list-group-item item-sm">
                        <div className="access-content">
                          <span className="access-title">Acceso chico</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <a href="javascript:void(0)" className="list-group-item card-item">
                    <div className="access-content">
                      <span className="access-title">Acceso grande</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
