// Base
import React from 'react';
import './version.scss';

// Config
export default {
  title: 'Versión|Releases'
};

export const Info = (): JSX.Element => (
  <div>
    <h1>Versión Obelisco 1.45.2</h1>
    <p>
      Acceso al release:{' '}
      <a
        className="access"
        target="_blank"
        href="https://github.com/gcba/Obelisco/releases/tag/v1.45.2"
        rel="noreferrer">
        Github
      </a>
    </p>
  </div>
);

Info.story = {
  name: '1.45.2'
};
