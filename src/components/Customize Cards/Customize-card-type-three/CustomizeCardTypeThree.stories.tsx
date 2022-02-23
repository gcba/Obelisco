import React from 'react';

export const CustomizeCardTypeThree = (): JSX.Element => {
  const CARDS = [
    { name: 'Estado predeterminado', style: '' },
    { name: 'Hover', style: 'hover' },
    { name: 'Focus', style: 'focus' }
  ];
  return (
    <div>
      {CARDS.map(({ name, style }, index) => (
        <div className="mt-5" key={index}>
          <h4>{name}</h4>
          <div className="cards-container">
            <a className={`card card-border ${style}`}>
              <div className="card-body">
                <i className="bx bxs-shield-x card-icon card-icon-with-bg bx-flip-horizontal"></i>
                <h3 className="card-title">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                  labore et dolore magna
                </p>
              </div>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
