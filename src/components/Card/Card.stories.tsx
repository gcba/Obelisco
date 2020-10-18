// Base
import React from 'react';
import './Card.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components

// Config
export default {
  title: 'Componentes|Tarjetas',
  decorators: [withA11y]
};

//Images
import paseobajo from './../../../static/cards/paseobajo.jpg';

export const TitleSubtitleText = (): JSX.Element => {
  return (
    <div className="container">
      <div className="cards-content">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Título Tarjeta </h5>
            <h6 className="card-subtitle mb-2 text-muted">Subtítulo</h6>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            </p>
            <hr className="line"></hr>
            <div className="subcontent">
              <small className="text-muted">Lorem ipsum dolor</small>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Título Tarjeta </h5>
            <h6 className="card-subtitle mb-2 text-muted">Subtítulo</h6>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            </p>
            <hr className="line"></hr>
            <div className="subcontent">
              <small className="text-muted">Lorem ipsum dolor</small>
            </div>
          </div>
        </div>
        <a href="#" className="btn-link card">
          <div className="card-body">
            <h5 className="card-title">Título Tarjeta </h5>
            <h6 className="card-subtitle mb-2 text-muted">Subtítulo</h6>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            </p>
            <hr className="line"></hr>
            <div className="subcontent">
              <small className="text-muted">Lorem ipsum dolor</small>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

TitleSubtitleText.story = { name: 'Título + Subtítulo + Texto' };

export const TitleTextLink = (): JSX.Element => {
  return (
    <div className="container">
      <div className="cards-content">
        <div className="card-max">
          <div className="card-body">
            <h5 className="card-title">Título Tarjeta </h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            </p>
            <a href="#" className="btn-link">
              Ver título card
            </a>
          </div>
        </div>
        <div className="card-max">
          <div className="card-body">
            <h5 className="card-title">Título Tarjeta </h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            </p>
            <a href="#" className="btn-link">
              Ver título card
            </a>
          </div>
        </div>
        <div className="card-max">
          <div className="card-body">
            <h5 className="card-title">Título Tarjeta </h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            </p>
            <a href="#" className="btn-link">
              Ver título card
            </a>
          </div>
        </div>
        <div className="card-max">
          <div className="card-body">
            <h5 className="card-title">Título Tarjeta </h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            </p>
            <a href="#" className="btn-link">
              Ver título card
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

TitleTextLink.story = { name: 'Título + Texto + Link' };

export const TitleSubtitleLink = (): JSX.Element => {
  return (
    <div className="container">
      <div className="cards-content">
        <div className="card">
          <img src="/cards/paseobajo.jpg" className="card-img-top class-img" />
          <div className="card-body">
            <h5 className="card-title">Título Tarjeta </h5>
            <h6 className="card-subtitle mb-2 text-muted">Subtítulo</h6>
          </div>
        </div>
        <div className="card">
          <img src="/cards/paseobajo.jpg" className="card-img-top class-img" />
          <div className="card-body">
            <h5 className="card-title">Título Tarjeta </h5>
            <h6 className="card-subtitle mb-2 text-muted">Subtítulo</h6>
          </div>
        </div>
        <div className="card">
          <img src="/cards/paseobajo.jpg" className="card-img-top class-img" />
          <div className="card-body">
            <h5 className="card-title">Título Tarjeta </h5>
            <h6 className="card-subtitle mb-2 text-muted">Subtítulo</h6>
          </div>
        </div>
        <a href="#" className="btn-link card">
          <img src="/cards/paseobajo.jpg" className="card-img-top class-img" />
          <div className="card-body">
            <h5 className="card-title">Título Tarjeta </h5>
            <h6 className="card-subtitle mb-2 text-muted">Subtítulo</h6>
          </div>
        </a>
      </div>
    </div>
  );
};

TitleSubtitleLink.story = { name: 'Imagen + Título + Subtítulo' };

//Proximas Cards
/*export const OverlineTitleTextButtonCaption = (): JSX.Element => {
  return (
    <div className="">
      <div className="card">        
        <div className="card-body">
          <div className="card-overline">OVERLINE</div>
          <h5 className="card-title">Título Card </h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy
            eirmod tempor
          </p>   
          <hr className="line"></hr> 
          <div className="subcontent"> 
            <button type="button" className="btn btn-primary btn-sm ml-0">Botón</button>
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>   
        </div>
      </div>
    </div>
  );
};
OverlineTitleTextButtonCaption.story = { name: 'Overline + Título + Texto + Botón + Caption'};*/

/*
export const EstaticAction = (): JSX.Element => {
  return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Jefatura de Gobierno</h5>
          <h6 className="card-subtitle mb-2">Ejes principales</h6>
          <a href="#" className="card-link-btn">Jefe de Gobierno</a>
          <a href="#" className="card-link-btn">Vicejefatura</a>
          <a href="#" className="card-link-btn">Compromisos</a>
          <a href="#" className="card-link-btn">BA Elige</a>
          <hr className="line"></hr>
          <h6 className="card-subtitle mb-2">Horacio Rodriguez Larreta</h6>
          <span className="text-muted">Jefe de Gobierno</span>
        </div>
      </div>
  );
};
EstaticAction.story = { name: 'Estáticas + contenido accionable'};*/
