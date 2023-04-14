// Base
import React, { useEffect } from 'react';
import './Version.stories.scss';

// Configuración general del componente
export default {
  title: 'Versión|Releases',
  parameters: { options: { showPanel: false } }
};

export const Info = (): JSX.Element => {
  const [version, setVersion] = React.useState('');

  useEffect(() => {
    fetch('https://api.github.com/repos/gcba/Obelisco/releases/latest')
      .then((response) => response.json())
      .then((data) => setVersion(data.tag_name));
  }, []);

  return (
    <>
      <h1>Versión Obelisco {version}</h1>
      <p>
        Acceso al release:{' '}
        <a className="access" target="_blank" href="https://github.com/gcba/Obelisco/releases/latest" rel="noreferrer">
          Github
        </a>
      </p>
    </>
  );
};

Info.story = {
  name: 'Versión actual'
};
