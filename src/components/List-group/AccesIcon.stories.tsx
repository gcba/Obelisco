import React from 'react';

export const AccesIcon = (): JSX.Element => {
  return (
    <div className="list-group-container">
      <div className="group-access" style={{ width: '526px' }}>
        <div className="card-access">
          <div className="card-access-body">
            <div className="">
              <h3 className="card-access-title ">Lorem ipsum dolor sit</h3>
              <p className="card-access-text">Lorem ipsum dolor sit amet</p>
            </div>
            <i className="bx bxs-shield-x card-access-icon"></i>
          </div>
          <a href="#" className="list-group-item card-item">
            <span className="access-title">Lorem ipsum dolor sit amet</span>
          </a>
        </div>
      </div>
      <div className="group-access" style={{ width: '526px' }}>
        <div className="card-access">
          <div className="card-access-body reverse">
            <div className="">
              <h3 className="card-access-title ">Lorem ipsum dolor sit</h3>
              <p className="card-access-text">Lorem ipsum dolor sit amet</p>
            </div>
            <i className="bx bxs-shield-x card-access-icon"></i>
          </div>
          <a href="#" className="list-group-item card-item">
            <span className="access-title">Lorem ipsum dolor sit amet</span>
          </a>
        </div>
      </div>
    </div>
  );
};
