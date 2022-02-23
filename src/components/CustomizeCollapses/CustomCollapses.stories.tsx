import React from 'react';
import { withA11Y } from '@storybook/addon-a11y';

//config
export default {
  title: 'Componentes|Customize Collapses',
  decorators: [withA11Y]
};

export const CustomCollapses = (): JSX.Element => {
  const COLLAPSES = [
    { name: 'Estado predeterminado', name2: 'Activo', style: '' },
    { name: 'Estado predeterminado - Con icono', name2: 'Activo - Con icono', style: 'icon-user' },
    { name: 'Hover', name2: 'Activo', style: 'hover' },
    { name: 'Focus', name2: 'Activo', style: 'focus' }
  ];
  return (
    <div>
      <h2>Colapsables apra información</h2>
      {COLLAPSES.map(({ name, name2, style }, index) => (
        <div className="row" key={index}>
          <div className="col-md-6 mt-5">
            <h4>{name}</h4>
            <div id="accordion">
              <div className="accordion-wrapper">
                <div className="accordion" id="accordionExample">
                  <div className="card">
                    <button
                      className={`card-header collapsed card-link ${style}`}
                      data-toggle="collapse"
                      data-target="#collapseOne">
                      Colapsable
                    </button>
                    <div id="collapseOne" className="collapse" data-parent="#accordion">
                      <div className="card-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempore. Perferendis recusandae
                        laborum fugiat, in corporis accusamus. Fugit, totam recusandae. Est, quas? Accusantium pariatur,
                        dolorum voluptatibus ad odio aut nihil quae. Quia cum quibusdam porro id, accusamus, laudantium
                        eveniet maiores velit dolores voluptate saepe obcaecati molestiae est magnam quisquam sunt.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <h4>{name2}</h4>
            <div id="accordion">
              <div className="accordion-wrapper">
                <div className="accordion" id="accordionExample">
                  <div className="card">
                    <button
                      className={`card-header card-link ${style}`}
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="true">
                      Colapsable
                    </button>
                    <div id="collapseTwo" className="collapse show" data-parent="#accordion">
                      <div className="card-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempore. Perferendis recusandae
                        laborum fugiat, in corporis accusamus. Fugit, totam recusandae. Est, quas? Accusantium pariatur,
                        dolorum voluptatibus ad odio aut nihil quae. Quia cum quibusdam porro id, accusamus, laudantium
                        eveniet maiores velit dolores voluptate saepe obcaecati molestiae est magnam quisquam sunt.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const CustomCollapsesMobile = (): JSX.Element => {
  const COLLAPSES = [
    { name: 'Estado predeterminado', name2: 'Activo', style: '' },
    { name: 'Estado predeterminado - Con icono', name2: 'Activo - Con icono', style: 'icon-user' },
    { name: 'Hover', name2: 'Activo', style: 'hover' },
    { name: 'Focus', name2: 'Activo', style: 'focus' }
  ];
  return (
    <div>
      <h2>Colapsables apra información</h2>
      <div className="row">
        <div className="col-md-4">
          {COLLAPSES.map(({ name, name2, style }, index) => (
            <div className="row" key={index}>
              <div className="col-md-12 mt-5">
                <h4>{name}</h4>
                <div id="accordion">
                  <div className="accordion-wrapper">
                    <div className="accordion" id="accordionExample">
                      <div className="card">
                        <button
                          className={`card-header collapsed card-link ${style}`}
                          data-toggle="collapse"
                          data-target="#collapseOne">
                          Colapsable
                        </button>
                        <div id="collapseOne" className="collapse" data-parent="#accordion">
                          <div className="card-body">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempore. Perferendis
                            recusandae laborum fugiat, in corporis accusamus. Fugit, totam recusandae. Est, quas?
                            Accusantium pariatur, dolorum voluptatibus ad odio aut nihil quae. Quia cum quibusdam porro
                            id, accusamus, laudantium eveniet maiores velit dolores voluptate saepe obcaecati molestiae
                            est magnam quisquam sunt.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mt-5">
                <h4>{name2}</h4>
                <div id="accordion">
                  <div className="accordion-wrapper">
                    <div className="accordion" id="accordionExample">
                      <div className="card">
                        <button
                          className={`card-header card-link ${style}`}
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="true">
                          Colapsable
                        </button>
                        <div id="collapseTwo" className="collapse show" data-parent="#accordion">
                          <div className="card-body">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempore. Perferendis
                            recusandae laborum fugiat, in corporis accusamus. Fugit, totam recusandae. Est, quas?
                            Accusantium pariatur, dolorum voluptatibus ad odio aut nihil quae. Quia cum quibusdam porro
                            id, accusamus, laudantium eveniet maiores velit dolores voluptate saepe obcaecati molestiae
                            est magnam quisquam sunt.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
