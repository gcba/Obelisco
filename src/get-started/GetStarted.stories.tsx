// Base
import React from 'react';
import './GetStarted.stories.scss';

// Configuración general del componente
export default {
  title: 'Comenzar|Inicio',
  parameters: { options: { showPanel: false } }
};

export const Instalacion = (): JSX.Element => (
  <div className="get-started-container">
    <div className="get-started">
      {/* OBELISCO */}
      <h1 id="obelisco">Obelisco</h1>
      <hr />
      <p>
        <a href="https://www.npmjs.com/package/@gcba/obelisco">
          <img
            src="https://img.shields.io/npm/v/@gcba/obelisco?label=Obelisco%20en%20npm&amp;logo=npm"
            alt="Versión de Obelisco en npm"
          />
        </a>{' '}
        <img
          src="https://github.com/gcba/Obelisco/workflows/Deploy%20storybook/badge.svg?branch=master"
          alt="Deploy storybook"
        />
      </p>
      <p>
        Obelisco es el nuevo sistema de diseño basado en componentes para los productos digitales de la ciudad de Buenos
        Aires. Fue creado para reemplazar <a href="https://github.com/gcba/bastrap">BAstrap</a>.
      </p>
      {/* VER DOCUMENTACION */}
      <h2>
        <a href="https://gcba.github.io/estandares/componentes/web/">Ver la documentación de componentes</a>.
      </h2>
      <br />

      {/* COMO USARLO */}
      <h2>Cómo usarlo</h2>
      <hr />
      <p>
        Obelisco se distribuye por medio del{' '}
        <a href="https://www.npmjs.com/package/@gcba/obelisco">paquete publicado en npm</a>. Es recomendable usar este
        sistema para definir la versión a usar y poder actualizarla fácilmente.
      </p>
      <br />

      {/* INSTALACION */}
      <h3>Instalación</h3>
      <p>Para instalarlo en un proyecto que ya usa npm, hay que ejecutar:</p>
      <pre className="code-box">
        <code>
          <span>npm</span> install @gcba/obelisco
        </code>
      </pre>
      <br />
      <br />

      {/* ACTUALIZACION */}
      <h3>Actualización</h3>
      <p>
        Si Obelisco ya está instalado en el proyecto y necesitás actualizarlo a la última versión, en el directorio del
        proyecto hay que ejecutar:
      </p>
      <pre className="code-box">
        <code>
          <span>npm</span> update @gcba/obelisco
        </code>
      </pre>
      <br />
      <br />

      {/* SIN USAR NPM */}
      <h3>Sin usar npm</h3>
      <p>
        Si en cambio, se necesitan los archivos para importarlos en algún proyecto, se pueden descargar desde la{' '}
        <a href="https://github.com/gcba/Obelisco/releases">sección de versiones</a>.<br />
        En caso de tener que actualizar a la última versión, hay que volver a descargar los archivos y reemplazarlos.
      </p>
      <br />

      {/* COMO IMPORTARLO */}
      <h2>Cómo importarlo</h2>
      <hr />
      <p>Obelisco cuenta de dos partes principales que se pueden importar de varias formas.</p>
      <br />

      {/* ESTILOS */}
      <h3>Estilos (css o sass)</h3>
      <p>
        Las hojas de estilos se pueden importar tanto en <strong>sass</strong> como en <strong>css</strong> ya
        compilado. El archivo css está ubicado en <code className="code-sm">/dist/obelisco.css</code> y el archivo
        principal de sass en <code className="code-sm">/src/scss/obelisco.scss</code>.
      </p>
      <p>Para importar el css, podemos hacerlo de la siguiente forma:</p>
      <pre className="code-box">
        <code> &lt;link rel=&quot;stylesheet&quot; href=&quot;ruta/al/proyecto/dist/obelisco.css&quot;&gt; </code>
      </pre>
      <br />
      <br />

      {/* TIPOGRAFIAS */}
      <h3>Tipografías</h3>
      <p>
        Obelisco requiere las tipografías <strong>Nunito</strong> y <strong>Open sans</strong> disponibles en google
        fonts, para utilizarlas con su CDN podemos hacerlo de la siguiente forma:
      </p>
      <pre className="code-box">
        <code>
          &lt;link
          href=&quot;https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap&quot;
          rel=&quot;stylesheet&quot; /&gt;
          <br />
          &lt;link href=&quot;https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap&quot;
          rel=&quot;stylesheet&quot;&gt;&lt;/link&gt;
        </code>
      </pre>
      <br />
      <br />

      {/* ICONOGRAFIA */}
      <h3>Iconografía</h3>
      <p>
        Obelisco utiliza las librerías de Boxicons y Material Icons que se pueden instalar de las siguientes maneras:
      </p>
      <p>Utilizando el paquete npm:</p>
      <pre className="code-box">
        <code>
          npm <span>install</span> boxicons
          <br />
          npm <span>install</span> material-icons@latest
        </code>
      </pre>
      <br />
      <br />
      <p>Para utilizarlas con su CDN podemos hacerlo de la siguiente forma:</p>
      <pre className="code-box">
        <code>
          &lt;link href=&quot;https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css&quot; rel=&quot;stylesheet&quot;&gt;
          <br />
          &lt;link href=&quot;https://fonts.googleapis.com/icon?family=Material+Icons+Round&quot;
          rel=&quot;stylesheet&quot;&gt;
        </code>
      </pre>
      <br />
      <br />

      {/* JAVASCRIPT */}
      <h3>Javascript</h3>
      <p>
        Como Obelisco está construido sobre bootstrap 4,{' '}
        <a href="https://getbootstrap.com/docs/4.6/getting-started/introduction/#js">debemos tener esas dependencias</a>
        .
      </p>
      <p>Un ejemplo de cómo importalas es:</p>
      <pre className="code-box">
        <code>
          &lt;script src=&quot;https://code.jquery.com/jquery-3.2.1.slim.min.js&quot;&gt;&lt;/script&gt;
          <br />
          &lt;script
          src=&quot;https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js&quot;&gt;&lt;/script&gt;
          <br />
          &lt;script
          src=&quot;https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js&quot;&gt;&lt;/script&gt;
        </code>
      </pre>
      <br />
      <blockquote>
        <p>
          <strong>Importante</strong>
          <br />
          Revisá las{' '}
          <a href="https://asijira-confluence.buenosaires.gob.ar/display/ASI/Versiones++y+Herramientas+aceptadas+por+la+ASI">
            versiones y herramientas aceptadas
          </a>{' '}
          por la <strong>Agencia de Seguridad Informática (ASI)</strong> del Gobierno de la Ciudad antes de elegir una
          versión de estas dependencias.
        </p>
      </blockquote>
      <br />

      {/* DESARROLLO */}
      <h2>Desarrollo</h2>
      <hr />
      <p>
        <a href="https://github.com/gcba/Obelisco/wiki">En la wiki del repositorio</a> está toda la información
        necesaria para entender cómo se organizan las diferentes partes del proyecto, cómo funciona y los procesos de
        trabajo que definimos.
      </p>
      <br />

      {/* MANTENIMIENTO Y COLABORACION */}
      <h2>Mantenimiento y colaboración</h2>
      <hr />
      <p>
        El mantenimiento y desarrollo de Obelisco lo hace el equipo de la Dirección General de Experiencia Digital, pero
        lo utilizan tanto equipos de gobierno como proveedores externos.
      </p>
      <p>
        Para agilizar y hacer más transparente el proceso, cualquier persona puede{' '}
        <a href="https://github.com/gcba/Obelisco/blob/master/CONTRIBUTING.md">contribuir de varias formas</a>.
      </p>
    </div>
  </div>
);

Instalacion.story = {
  name: 'Instalación'
};
