import React from 'react';

export const SmallAccessDescription = (): JSX.Element => {
  return (
    <div className="list-group-container">
      <div className="list-group">
        <a href="#" className="list-group-item item-sm">
          <div className="access-content">
            <span className="access-title">Acceso chico</span>
            <p className="access-text">Descripción</p>
          </div>
        </a>
        <a href="#" className="list-group-item item-sm hover">
          <div className="access-content">
            <span className="access-title">Acceso chico</span>
            <p className="access-text">Descripción</p>
          </div>
        </a>
        <a href="#" className="list-group-item item-sm focus">
          <div className="access-content">
            <span className="access-title">Acceso chico</span>
            <p className="access-text">Descripción</p>
          </div>
        </a>
      </div>
    </div>
  );
};
