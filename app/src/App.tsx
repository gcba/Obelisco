/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="container mt-5">
        <div className="card-deck max-cards-3 card-column">
          <div className="card card-horizontal">
            <i className="bx bxs-info-circle card-icon-left"></i>
            <div className="card-body">
              <h3 className="card-title">
                <a href="#" className="card-title-link">
                  Título de la tarjeta con más de una línea
                </a>
              </h3>
              <p className="card-text">Descripción de la tarjeta</p>
            </div>
          </div>
          <div className="card card-horizontal">
            <i className="bx bxs-info-circle card-icon-left"></i>
            <div className="card-body">
              <h3 className="card-title">
                <a href="#" className="card-title-link">
                  Título de la tarjeta con más de una línea
                </a>
              </h3>
              <p className="card-text">Descripción de la tarjeta</p>
            </div>
          </div>
          <div className="card card-horizontal">
            <i className="bx bxs-info-circle card-icon-left"></i>
            <div className="card-body">
              <h3 className="card-title">
                <a href="#" className="card-title-link">
                  Título de la tarjeta con más de una línea
                </a>
              </h3>
              <p className="card-text">Descripción de la tarjeta</p>
            </div>
          </div>
          <div className="card card-horizontal">
            <i className="bx bxs-info-circle card-icon-left"></i>
            <div className="card-body">
              <h3 className="card-title">
                <a href="#" className="card-title-link">
                  Título de la tarjeta con más de una línea
                </a>
              </h3>
              <p className="card-text">Descripción de la tarjeta</p>
            </div>
          </div>
          <div className="card card-horizontal">
            <i className="bx bxs-info-circle card-icon-left"></i>
            <div className="card-body">
              <h3 className="card-title">
                <a href="#" className="card-title-link">
                  Título de la tarjeta con más de una línea
                </a>
              </h3>
              <p className="card-text">Descripción de la tarjeta</p>
            </div>
          </div>
        </div>
      </div>
      
      <hr/>
      
      <div className="storybook__container-accordion col-8">
        <div className="accordion" id="accordionExample">
          <div className="card">
            <button
              className="card-header collapsed"
              data-toggle="collapse"
              data-target="#collapseOne"
            >
              Título
            </button>
            <div id="collapseOne" className="collapse" data-parent="#accordionExample">
              <div className="card-body">
                <p>
                  Esta es la descripción que se encuentra dentro de un colapsable.
                  Recomendamos no utilizar demasiado texto, para generar una lectura
                  óptima.
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <button
              className="card-header collapsed"
              data-toggle="collapse"
              data-target="#collapseTwo"
            >
              Título
            </button>
            <div id="collapseTwo" className="collapse" data-parent="#accordionExample">
              <div className="card-body">
                <p>
                  Esta es la descripción que se encuentra dentro de un colapsable.
                  Recomendamos no utilizar demasiado texto, para generar una lectura
                  óptima.
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <button
              className="card-header collapsed"
              data-toggle="collapse"
              data-target="#collapseThree"
            >
              Título
            </button>
            <div id="collapseThree" className="collapse" data-parent="#accordionExample">
              <div className="card-body">
                <p>
                  Esta es la descripción que se encuentra dentro de un colapsable.
                  Recomendamos no utilizar demasiado texto, para generar una lectura
                  óptima.
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="accordion accordion-white" id="accordionExampleTwo">
          <div className="card">
            <button
              className="card-header collapsed"
              data-toggle="collapse"
              data-target="#collapseFour"
            >
              Título
            </button>
            <div
              id="collapseFour"
              className="collapse"
              data-parent="#accordionExampleTwo"
            >
              <div className="card-body">
                <p>
                  Esta es la descripción que se encuentra dentro de un colapsable.
                  Recomendamos no utilizar demasiado texto, para generar una lectura
                  óptima.
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <button
              className="card-header collapsed"
              data-toggle="collapse"
              data-target="#collapseFive"
            >
              Título
            </button>
            <div
              id="collapseFive"
              className="collapse"
              data-parent="#accordionExampleTwo"
            >
              <div className="card-body">
                <p>
                  Esta es la descripción que se encuentra dentro de un colapsable.
                  Recomendamos no utilizar demasiado texto, para generar una lectura
                  óptima.
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <button
              className="card-header collapsed"
              data-toggle="collapse"
              data-target="#collapseSix"
            >
              Título
            </button>
            <div id="collapseSix" className="collapse" data-parent="#accordionExampleTwo">
              <div className="card-body">
                <p>
                  Esta es la descripción que se encuentra dentro de un colapsable.
                  Recomendamos no utilizar demasiado texto, para generar una lectura
                  óptima.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
