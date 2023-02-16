// Base
import React from 'react';
import './Version.stories.scss';

// Configuración general del componente
export default {
  title: 'Versión|Releases',
  parameters: { options: { showPanel: false } }
};

export const Info = (): JSX.Element => (
  <>
    <h1>Versión Obelisco 1.46.1</h1>
    <p>
      Acceso al release:{' '}
      <a
        className="access"
        target="_blank"
        href="https://github.com/gcba/Obelisco/releases/tag/v1.46.1"
        rel="noreferrer">
        Github
      </a>
    </p>
  </>
);

Info.story = {
  name: '1.46.1'
};
