// Base
import React from 'react';
import './Map.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';
import { MapaCard } from './index';

// Configuración general del componente
export default {
  title: 'Componentes|Mapa',
  decorators: [withA11y]
};

export const Map = (): JSX.Element => {
  const iframeElement = (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.611312241825!2d-58.47500842445462!3d-34.5633954553695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb6878f2d4d9d%3A0x8553561751a33b4!2sAv.%20Monroe%203555%2C%20C1430BKC%20CABA!5e0!3m2!1ses-419!2sar!4v1702306415307!5m2!1ses-419!2sar"
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
      <MapaCard
        title="Ubicación"
        description="Av. Monroe 3555"
        iframe={iframeElement}
        link="https://mapa.buenosaires.gob.ar/comollego/?lat=-34.565106&lng=-58.470986&zl=15&modo=transporte&dir=Monroe+Av.+3555"
      />
    </div>
  );
};

Map.story = { name: 'Mapa' };
