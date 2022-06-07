// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Componentes|Audio/Con contenedor',
  decorators: [withA11y]
};

export const CompleteContainer = (): JSX.Element => {
  return (
    <div className="cards-container">
      <a className="card" href="#">
        <div className="card-body">
          <h4 className="card-title">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</h4>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
          </p>
          <audio className="audio-sm" controls>
            <source
              src="https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-61905/zapsplat_multimedia_alert_chime_short_musical_notification_cute_child_like_001_64918.mp3?_=1"
              type="audio/ogg"
            />
            Your browser does not support the audio tag.
          </audio>
        </div>
      </a>
    </div>
  );
};

CompleteContainer.story = { name: 'Completo' };

export const TitledContainer = (): JSX.Element => {
  return (
    <div className="cards-container">
      <a className="card" href="#">
        <div className="card-body">
          <h4 className="card-title">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</h4>
          <audio className="audio-sm mt-3" controls>
            <source
              src="https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-61905/zapsplat_multimedia_alert_chime_short_musical_notification_cute_child_like_001_64918.mp3?_=1"
              type="audio/ogg"
            />
            Your browser does not support the audio tag.
          </audio>
        </div>
      </a>

      <br />
      <a className="card" href="#">
        <div className="card-body">
          <p className="card-text">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
          </p>
          <audio className="audio-sm" controls>
            <source
              src="https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-61905/zapsplat_multimedia_alert_chime_short_musical_notification_cute_child_like_001_64918.mp3?_=1"
              type="audio/ogg"
            />
            Your browser does not support the audio tag.
          </audio>
        </div>
      </a>
    </div>
  );
};

TitledContainer.story = { name: 'Solo titulo' };

export const ContainerAudio = (): JSX.Element => {
  return (
    <div className="cards-container">
      <a className="card" href="#">
        <div className="card-body">
          <audio className="audio-sm" controls>
            <source
              src="https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-61905/zapsplat_multimedia_alert_chime_short_musical_notification_cute_child_like_001_64918.mp3?_=1"
              type="audio/ogg"
            />
            Your browser does not support the audio tag.
          </audio>
        </div>
      </a>
    </div>
  );
};

ContainerAudio.story = { name: 'Solo audio' };

export const ContainerNews = (): JSX.Element => {
  return (
    <div className="cards-container">
      <a className="card" href="#">
        <img src="cards/evento.jpg" className="card-img-top" alt="descripción alternativa" />
        <audio className="audio-event" controls>
          <source
            src="https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-61905/zapsplat_multimedia_alert_chime_short_musical_notification_cute_child_like_001_64918.mp3?_=1"
            type="audio/ogg"
          />
          Your browser does not support the audio tag.
        </audio>
        <div className="card-body">
          <div className="mb-2">
            <span className="badge badge-info">Etiqueta 1</span>
            <span className="badge badge-info">Etiqueta 2</span>
          </div>
          <h4 className="card-title">Título de tarjeta</h4>
          <p className="card-text">
            Recomendamos en este espacio no utilizar más de 3 líneas, para generar una lectura óptima.
          </p>
        </div>
        <div className="card-footer">
          <small>Fecha de publicación: 10/10/2021</small>
        </div>
      </a>
    </div>
  );
};

ContainerNews.story = { name: 'Noticias' };
