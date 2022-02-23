import React from 'react';

export const CustomizeCardTypeSix = (): JSX.Element => {
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
            <a className={`card card-content-image ${style}`} href="javascript:void(0)">
              <img src="cards/evento.jpg" className="card-img-top" alt="descripción alternativa" />
              <div className="card-body">
                <div className="mb-2">
                  <span className="badge badge-info">Etiqueta 1</span>
                  <span className="badge badge-info">Etiqueta 2</span>
                </div>
                <h3 className="card-title">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                </p>
              </div>
              <div className="card-footer">
                <small>Fecha de publicacion: 10/10/2021</small>
              </div>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
