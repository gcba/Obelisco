import React, { useEffect, useRef, useState } from 'react';

interface VideoProps {
  videoUrl: string;
}

export const VideoYt = ({ videoUrl }: VideoProps): JSX.Element => {
  const [showPlayButton, setShowPlayButton] = useState(true);

  const handlePlay = () => {
    setShowPlayButton(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      setShowPlayButton(false);
    }
  };

  return (
    <div className="cards-container">
      <div className="card video">
        <div className="card-video">
          {showPlayButton && (
            <div
              className="card-play"
              onClick={handlePlay}
              onKeyDown={handleKeyDown}
              tabIndex={0}
              aria-label="Reproducir video">
              <span className="material-icons-round text-white">play_circle</span>
            </div>
          )}
          <div className="main-iframe">
            {!showPlayButton && (
              <div onClick={() => setShowPlayButton(true)}>
                <iframe
                  width="100%"
                  height="200px"
                  src={`${videoUrl}?autoplay=1`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen></iframe>
              </div>
            )}
          </div>
        </div>
        <div className="card-body">
          <div className="mb-2">
            <span className="badge badge-danger">Etiqueta</span>
            <span className="badge badge-danger">Etiqueta</span>
          </div>
          <h4 className="card-title">Titular de la tarjeta con dos líneas de ejemplo</h4>
          <p className="card-text">
            Descripción del titular de una tarjeta con contenedor que puede contener hasta 2 líneas.
          </p>
          <p className="text-xs m-0 text-success">Estado de la noticia</p>
        </div>
      </div>
      <br />
      <div className="card video">
        <div className="card-video">
          <div className="main-iframe">
            <iframe
              width="100%"
              height="200px"
              src={`${videoUrl}?autoplay=2`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen></iframe>
          </div>
        </div>
        <div className="card-body">
          <div className="mb-2">
            <span className="badge badge-danger">Etiqueta</span>
            <span className="badge badge-danger">Etiqueta</span>
          </div>
          <h4 className="card-title">Titular de la tarjeta con dos líneas de ejemplo</h4>
          <p className="card-text">
            Descripción del titular de una tarjeta con contenedor que puede contener hasta 2 líneas.
          </p>
          <p className="text-xs m-0 text-success">Estado de la noticia</p>
        </div>
      </div>
    </div>
  );
};
export const Video = ({ videoUrl }: VideoProps): JSX.Element => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showPlayButton, setShowPlayButton] = useState(true);

  useEffect(() => {
    if (showPlayButton) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play();
    }
  }, [showPlayButton]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      setShowPlayButton(false);
    }
  };

  return (
    <div className="cards-container">
      <div className="card video">
        <div className="card-video">
          {showPlayButton && (
            <div
              className="card-play"
              onClick={() => setShowPlayButton(false)}
              onKeyDown={handleKeyDown}
              tabIndex={0}
              aria-label="Reproducir video">
              <span className="material-icons-round text-white">play_circle</span>
            </div>
          )}
          <video
            src={videoUrl}
            controls={!showPlayButton}
            onPlay={() => setShowPlayButton(false)}
            onPause={() => setShowPlayButton(true)}
            ref={videoRef}
          />
        </div>
        <div className="card-body">
          <div className="mb-2">
            <span className="badge badge-danger">Etiqueta</span>
            <span className="badge badge-danger">Etiqueta</span>
          </div>
          <h4 className="card-title">Titular de la tarjeta con dos líneas de ejemplo</h4>
          <p className="card-text">
            Descripción del titular de una tarjeta con contenedor que puede contener hasta 2 líneas.
          </p>
          <p className="text-xs m-0 text-success">Estado de la noticia</p>
        </div>
      </div>
    </div>
  );
};
