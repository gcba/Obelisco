import React from 'react';

export const CustomizeCardTypeOne = (): JSX.Element => {
  const CARDS = [
    { name: 'Estado predeterminado', style: '' },
    { name: 'Hover', style: 'hover' },
    { name: 'Focus', style: 'focus' },
    { name: 'Visitado', style: 'visited' }
  ];
  return (
    <div>
      {CARDS.map(({ name, style }, index) => (
        <div key={index}>
          <h4>{name}</h4>
          <div className="cards-container mt-5">
            <div className={`card card-simple ${style}`}>
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
                  <a href="javascript:void(0)">Ambiente, espacio público y edilicio</a>
                </h3>
                <p className="card-text">
                  Habilitaciones para el uso de la vía pública, espacios urbanos y servicios para el desarrollo
                  sostenible.
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
