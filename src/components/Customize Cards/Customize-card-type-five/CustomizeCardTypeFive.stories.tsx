import React from 'react';

export const CustomizeCardTypeFive = (): JSX.Element => {
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
          <div className="horizontal-container">
            <a className={`card card-small-complete ${style}`} href="javascript:void(0)">
              <div className="card-image">
                <img
                  src="cards/paseobajo-wide.png"
                  className="card-img-left"
                  alt="descripción alternativa"
                  width="168"
                />
              </div>
              <div className="card-body">
                <h3 className="card-title">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                </h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                  labore et
                </p>
              </div>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
