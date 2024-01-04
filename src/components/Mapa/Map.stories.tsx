// Base
import React from 'react';
import './Map.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';
import { MapCard } from './index';

// Configuración general del componente
export default {
  title: 'Componentes|Mapa',
  decorators: [withA11y]
};

export const Map = (): JSX.Element => {
  const iframeElement = (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.561313314447!2d-58.40988132452283!3d-34.64052465944252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb0de7f4d675%3A0xfc2ef5324296a64!2sUspallata%203160%2C%20C1437JCL%20CABA!5e0!3m2!1ses!2sar!4v1704218461718!5m2!1ses!2sar"
      width="600"
      height="146"
      title="Mapa de como llegar"
      style={{ border: '0' }}
      allowFullScreen
      loading="lazy"
      tabIndex={-1}
      referrerPolicy="no-referrer-when-downgrade"></iframe>
  );
  return (
    <div className="storybook__container-card-map">
      <MapCard
        title="Ubicación"
        description="Av. Uspallata 3160"
        iframe={iframeElement}
        link="https://mapa.buenosaires.gob.ar/comollego/?lat=-34.640340&lng=-58.407032&zl=15&modo=transporte&dir=Uspallata+3160"
      />
    </div>
  );
};

Map.story = { name: 'Mapa' };
