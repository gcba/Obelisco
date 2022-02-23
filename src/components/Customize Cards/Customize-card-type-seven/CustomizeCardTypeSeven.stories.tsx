import React from 'react';

export const CustomizeCardTypeSeven = (): JSX.Element => {
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
            <a className={`card card-event ${style}`} href="javascript:void(0)">
              <img src="cards/evento.jpg" className="card-img-top" alt="descripción alternativa" />
              <div className="card-body">
                <small>18 DE ENERO AL 1 DE FEBRERO</small>
                <h3 className="card-title">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</h3>
              </div>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
