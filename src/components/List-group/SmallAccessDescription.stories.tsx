import React from 'react';

export const SmallAccessDescription = (): JSX.Element => {
  return (
    <div>
      <div className="list-group-container">
        <div className="list-group">
          <a href="javascript:void(0)" className="list-group-item item-sm">
            <div className="access-content">
              <span className="access-title">Acceso grande</span>
              <p className="access-text">Descripción</p>
            </div>
          </a>
          <a href="javascript:void(0)" className="list-group-item item-sm hover">
            <div className="access-content">
              <span className="access-title">Acceso grande</span>
              <p className="access-text">Descripción</p>
            </div>
          </a>
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
