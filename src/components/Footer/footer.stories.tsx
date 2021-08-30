// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Configuración del general del componente
export default {
  title: 'Componentes|Footer',
  decorators: [withA11y]
};

const phones = [
  [102, 'Niñez y Adolesencia'],
  [103, 'Emergencias'],
  [107, 'SAME'],
  [911, 'Policía'],
  [144, 'Violencia de género'],
  [147, 'Atención ciudadana']
];

const social = [
  ['Facebook', 'https://www.facebook.com/GCBA'],
  ['Instagram', 'https://www.instagram.com/buenosaires'],
  ['Twitter', 'https://twitter.com/gcba'],
  ['YouTube', 'https://www.youtube.com/user/GCBA'],
  ['LinkedIn', 'https://ar.linkedin.com/company/gobierno-de-la-ciudad-de-buenos-aires']
];

const PhonesSection = (): JSX.Element => (
  <section>
    <h4>Teléfonos útiles</h4>
    <ul className="list-inline">
      {phones.map(([number, name]) => (
        <li className="list-inline-item" key={number}>
          <a href={`tel:${number}`}>
            {number} - {name}
          </a>
        </li>
      ))}
    </ul>
    <a href="https://www.buenosaires.gob.ar/laciudad/telefonosutiles">Ver todos los teléfonos</a>
  </section>
);

const SocialSection = (): JSX.Element => (
  <section>
    <h4>Redes de la ciudad</h4>
    <ul className="list-inline">
      {social.map(([network, href]) => (
        <li className="list-inline-item" key={network}>
          <a href={href}>
            <i className={`bx bxl-${network.toLocaleLowerCase()}`} />
            {network}
          </a>
        </li>
      ))}
    </ul>
  </section>
);

const LegalSection = (): JSX.Element => (
  <section className="footer-legal-section">
    <div className="row justify-content-between">
      <div className="col-12 col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0">
        <img className="mr-3 d-lg-none" src="footer/ciudad-ba-sm.png" alt="Logo de la Ciudad de Buenos Aires" />
        <img className="mr-3 d-none d-lg-inline" src="footer/ciudad-ba.png" alt="Logo de la Ciudad de Buenos Aires" />
        <img src="footer/vamos-ba.png" alt="Logo de Vamos Buenos Aires" />
      </div>
      <div className="col-12 col-md-6 col-lg-7 col-xl-8">
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="https://boletinoficial.buenosaires.gob.ar">Boletín oficial</a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.buenosaires.gob.ar/innovacion/ciudadinteligente/terminos-y-condiciones">
              Términos y condiciones
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.buenosaires.gob.ar/privacidad">Política de privacidad</a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.buenosaires.gob.ar/oficiosjudiciales">Oficios judiciales</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

const LicenseSection = (): JSX.Element => (
  <section>
    <div className="footer-license-text">
      Los contenidos de buenosaires.gob.ar están licenciados bajo <br className="d-none d-sm-inline" /> Creative Commons
      Reconocimiento 2.5 Argentina License.
    </div>
  </section>
);

export const Completo = (): JSX.Element => (
  <footer className="main-footer">
    <div className="container">
      <PhonesSection />
      <SocialSection />
      <LegalSection />
      <LicenseSection />
    </div>
  </footer>
);

export const SoloTelefonos = (): JSX.Element => (
  <footer className="main-footer">
    <div className="container">
      <PhonesSection />
      <LegalSection />
      <LicenseSection />
    </div>
  </footer>
);

SoloTelefonos.story = {
  name: 'Solo Teléfonos'
};

export const SoloRedes = (): JSX.Element => (
  <footer className="main-footer">
    <div className="container">
      <SocialSection />
      <LegalSection />
      <LicenseSection />
    </div>
  </footer>
);
