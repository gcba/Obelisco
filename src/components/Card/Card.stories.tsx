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

export const TitleSubtitleText = (): JSX.Element => {
  return (
    <div className="cards-container">
      <a className="card" href="#">
        <div className="card-body">
          <h4 className="card-title">Título de tarjeta</h4>
          <div className="card-subtitle">Subtítulo de tarjeta</div>
          <p className="card-text">
            Recomendamos en este espacio no utilizar más de 3 líneas, para generar una lectura óptima.
          </p>
        </div>
        <div className="card-footer text-right">
          <small>Last updated 3 mins ago</small>
        </div>
      </a>
    </div>
  );
};
TitleSubtitleText.story = { name: 'Contenedor simple' };

export const TitleSubtitleLink = (): JSX.Element => {
  return (
    <div className="cards-container">
      <button className="card">
        <img src="/cards/paseobajo.jpg" className="card-img-top" />
        <div className="card-body">
          <h4 className="card-title">Título Tarjeta</h4>
          <div className="card-subtitle">Subtítulo</div>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          </p>
        </div>
      </button>
    </div>
  );
};
TitleSubtitleLink.story = { name: 'Contenedor con imagen' };

export const TitleTextLink = (): JSX.Element => {
  return (
    <div className="cards-container">
      <div className="card card-simple">
        <div className="card-body">
          <h4 className="card-title">Título Tarjeta</h4>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          </p>
          <a href="#" className="link-arrow">
            Ver título card
          </a>
        </div>
      </div>
    </div>
  );
};
TitleTextLink.story = { name: 'Sin contenedor' };

//Proximas Cards
/*export const OverlineTitleTextButtonCaption = (): JSX.Element => {
  return (
    <div className="">
      <div className="card">        
        <div className="card-body">
          <div className="card-overline">OVERLINE</div>
          <h4 className="card-title">Título Card </h4>
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
          <h4 className="card-title">Jefatura de Gobierno</h4>
          <div className="card-subtitle mb-2">Ejes principales</div>
          <a href="#" className="card-link-btn">Jefe de Gobierno</a>
          <a href="#" className="card-link-btn">Vicejefatura</a>
          <a href="#" className="card-link-btn">Compromisos</a>
          <a href="#" className="card-link-btn">BA Elige</a>
          <hr className="line"></hr>
          <div className="card-subtitle mb-2">Horacio Rodriguez Larreta</div>
          <span className="text-muted">Jefe de Gobierno</span>
        </div>
      </div>
  );
};
EstaticAction.story = { name: 'Estáticas + contenido accionable'};*/
