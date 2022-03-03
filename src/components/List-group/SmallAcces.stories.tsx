import React from 'react';

export const SmallAccess = (): JSX.Element => {
  return (
    <div>
      <div className="list-group-container">
        <div className="list-group">
          <a href="javascript:void(0)" className="list-group-item item-sm">
            Acceso grande
          </a>
          <a href="javascript:void(0)" className="list-group-item item-sm hover">
            Acceso grande
          </a>
          <a href="javascript:void(0)" className="list-group-item item-sm focus">
            Acceso grande
          </a>
        </div>
      </div>
    </div>
  );
};
