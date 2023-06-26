// Base
import React from 'react';
import './Map.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { MapComponent } from '.';

// Configuración general del componente
export default {
  title: 'Componentes|Mapa',
  decorators: [withA11y]
};

const DESCRIPTION_MAP = 'Dirección: Av. Monroe 3555';
const BUTTON_MAP = {
  name: 'Cómo llego',
  url: 'https://mapa.buenosaires.gob.ar/comollego/?lat=-34.565106&lng=-58.470986&zl=15&modo=transporte&dir=Monroe+Av.+3555'
};
const IFRAME_MAP = {
  name: 'Mapa 1',
  url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.5521332555372!2d-58.473792074373804!3d-34.5648934229683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb67d776e79c9%3A0x8a6102a0181948c!2sAv.%20Monroe%203555%2C%20C1430BKC%20CABA!5e0!3m2!1ses-419!2sar!4v1687788246291!5m2!1ses-419!2sar'
};
const IFRAME_MAP_DOS = {
  name: 'Mapa 2',
  url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.5521332555372!2d-58.473792074373804!3d-34.5648934229683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb67d776e79c9%3A0x8a6102a0181948c!2sAv.%20Monroe%203555%2C%20C1430BKC%20CABA!5e0!3m2!1ses-419!2sar!4v1687788246291!5m2!1ses-419!2sar'
};
const FORM_ID = 'name-input-1';
const FORM_ID_DOS = 'name-input-2';

/* Mapa con buscador */
export const MapSearch = (): JSX.Element => {
  return (
    <div className="storybook__wrapper-map">
      <MapComponent button={BUTTON_MAP} iframe={IFRAME_MAP} formSearchId={FORM_ID} />
      <MapComponent button={BUTTON_MAP} iframe={IFRAME_MAP_DOS} formSearchId={FORM_ID_DOS} bgColor="light" />
    </div>
  );
};
MapSearch.story = { name: 'Con Buscador' };

/* Mapa sin buscador */
export const MapText = (): JSX.Element => {
  return (
    <div className="storybook__wrapper-map">
      <MapComponent description={DESCRIPTION_MAP} button={BUTTON_MAP} iframe={IFRAME_MAP} formSearchId={FORM_ID} />
      <MapComponent
        description={DESCRIPTION_MAP}
        button={BUTTON_MAP}
        iframe={IFRAME_MAP_DOS}
        formSearchId={FORM_ID_DOS}
        bgColor="light"
      />
    </div>
  );
};

MapText.story = { name: 'Sin buscador' };
