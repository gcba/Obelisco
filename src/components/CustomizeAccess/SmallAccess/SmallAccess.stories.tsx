import React from 'react';

export const SmallAccessComponent = (): JSX.Element => {
  return (
    <div>
      <div className="row">
        <div className="col-md-4 mt-5">
          <h4 className="text-danger">Default</h4>
          <a href="javascript:void(0)" className="list-group-item item-sm">
            <div className="access-content">
              <span className="access-title">Acceso grande</span>
            </div>
          </a>
        </div>
        <div className="col-md-4 mt-5">
          <h4 className="text-danger">Hover</h4>
          <a href="javascript:void(0)" className="list-group-item item-sm hover">
            <div className="access-content">
              <span className="access-title">Acceso grande</span>
            </div>
          </a>
        </div>
        <div className="col-md-4 mt-5">
          <h4 className="text-danger">Focus</h4>
          <a href="javascript:void(0)" className="list-group-item item-sm focus">
            <div className="access-content">
              <span className="access-title">Acceso grande</span>
            </div>
          </a>
        </div>
        <div className="col-md-4 mt-5">
          <h4 className="text-danger">Default</h4>
          <a href="javascript:void(0)" className="list-group-item item-sm">
            <div className="access-content">
              <span className="access-title">Acceso grande</span>
              <p className="access-text">Descripción</p>
            </div>
          </a>
        </div>
        <div className="col-md-4 mt-5">
          <h4 className="text-danger">Hover</h4>
          <a href="javascript:void(0)" className="list-group-item item-sm hover">
            <div className="access-content">
              <span className="access-title">Acceso grande</span>
              <p className="access-text">Descripción</p>
            </div>
          </a>
        </div>
        <div className="col-md-4 mt-5">
          <h4 className="text-danger">Focus</h4>
          <a href="javascript:void(0)" className="list-group-item item-sm focus">
            <div className="access-content">
              <span className="access-title">Acceso grande</span>
              <p className="access-text">Descripción</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
