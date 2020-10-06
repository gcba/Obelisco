// Base
import React from 'react';
import './Card.stories.scss';

//import paseobajo from './../../../static/cards/paseobajo.jpg';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components

// Config
export default {
  title: 'Componentes|Tarjeta/Accionables',
  decorators: [withA11y]
};


export const TitleAndSubtitle = (): JSX.Element => {
  return (
    <div className="">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Título Card </h5>
          <h6 className="card-subtitle mb-2 text-muted">Subtítulo</h6>         
        </div>
      </div>
    </div>
  );
};

TitleAndSubtitle.story = { name: 'Título + Subtítulo'};


export const TitleSubtitleImg = (): JSX.Element => {
  return (
    <div className="">
      <div className="card">
      
      <div className="card-body">
        <h5 className="card-title">Título Card</h5>
        <h6 className="card-subtitle mb-2 text-muted">Subtítulo</h6>
      </div>
      </div>
    </div>
  );
};
//<img src={paseobajo} className="card-img-top"></img>
TitleSubtitleImg.story = { name: 'Título + Subtítulo + Imagen'};

export const TitleText = (): JSX.Element => {
  return (
    <div className="">
      <div className="card">       
        <div className="card-body">
          <h5 className="card-title">Título Card </h5>   
          <p className="card-text">
            Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy
            eirmod tempor
          </p>
        </div>
      </div>
    </div>
  );
};
TitleText.story = { name: 'Título + Texto'};


export const OverlineTitleText = (): JSX.Element => {
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
        </div>
      </div>
    </div>
  );
};
OverlineTitleText.story = { name: 'Overline + Título + Texto'};

export const TitleTextLink = (): JSX.Element => {
  return (
    <div className="">
      <div className="card">       
        <div className="card-body">
          <h5 className="card-title">Título Card </h5>   
          <p className="card-text">
            Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy
            eirmod tempor
          </p>
          <a href="#" className="btn-link">Link</a>
        </div>
      </div>
    </div>
  );
};
TitleTextLink.story = { name: 'Título + Texto + Link'};


export const TitleTextButton = (): JSX.Element => {
  return (
    <div className="">
      <div className="card">       
        <div className="card-body">
          <h5 className="card-title">Título Card </h5>   
          <p className="card-text">
            Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy
            eirmod tempor
          </p>
          <button type="button" className="btn btn-primary btn-sm ml-0">Botón</button>
        </div>
      </div>
    </div>
  );
};
TitleTextButton.story = { name: 'Título + Texto + Botón'};


export const OverlineTitleTextButton = (): JSX.Element => {
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
          <button type="button" className="btn btn-primary btn-sm ml-0">Botón</button>
        </div>
      </div>
    </div>
  );
};
OverlineTitleTextButton.story = { name: 'Overline + Título + Texto + Botón'};

export const OverlineTitleTextButtonCaption = (): JSX.Element => {
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
OverlineTitleTextButtonCaption.story = { name: 'Overline + Título + Texto + Botón + Caption'};