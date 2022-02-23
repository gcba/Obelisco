import React from 'react';

export const CustomizeCardTypeTwo = (): JSX.Element => {
  const CARDS = [
    { name: 'Estado predeterminado', style: '' },
    { name: 'Hover', style: 'hover' },
    { name: 'Focus', style: 'focus' },
    { name: 'Visitado', style: 'visited' }
  ];
  return (
    <div>
      {CARDS.map(({ name, style }, index) => (
        <div className="mt-5" key={index}>
          <h4>{name}</h4>
          <div className="cards-container">
            <div className={`card card-simple card-icon-bg ${style}`}>
              <div className="card-body">
                <i className="bx bxs-shield-x card-icon card-icon-with-bg bx-flip-horizontal"></i>
                <h3 className="card-title">
                  <a href="#">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</a>
                </h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                  labore et dolore magna
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
