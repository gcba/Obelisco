import React from 'react';

export const SmallAccess = (): JSX.Element => {
  return (
    <div>
      <div className="list-group-container">
        <div className="list-group">
          <a href="#" className="list-group-item item-sm">
            <span className="access-title">Acceso chico</span>
          </a>
          <a href="#" className="list-group-item item-sm hover">
            <span className="access-title">Acceso chico</span>
          </a>
          <a href="#" className="list-group-item item-sm focus">
            <span className="access-title">Acceso chico</span>
          </a>
        </div>
      </div>
    </div>
  );
};
