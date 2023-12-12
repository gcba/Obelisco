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
        link="https://www.google.com/maps/place/Av.+Monroe+3555,+C1430BKC+CABA/@-34.5633955,-58.4750084,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcb6878f2d4d9d:0x8553561751a33b4!8m2!3d-34.5633999!4d-58.4724335!16s%2Fg%2F11k4hjk78h?entry=ttu"
      />
    </div>
  );
};

Map.story = { name: 'Mapa' };
