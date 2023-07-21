// Base
import React from 'react';
import './Footer.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Configuración general del componente
export default {
  title: 'Organismos|Footer (pie de página)',
  decorators: [withA11y]
};

const phones = [
  [102, 'Niñez y Adolescencia'],
  [103, 'Emergencias'],
  [107, 'SAME'],
  [911, 'Policía'],
  [144, 'Violencia de género'],
  [147, 'Atención ciudadana']
];

const social = [
  ['Facebook', 'https://www.facebook.com/GCBA', 'facebook-circle'],
  ['Instagram', 'https://www.instagram.com/gcba/', 'instagram-alt'],
  ['Twitter', 'https://twitter.com/buenosaires'],
  ['YouTube', 'https://www.youtube.com/user/GCBA'],
  ['LinkedIn', 'https://ar.linkedin.com/company/gobierno-de-la-ciudad-de-buenos-aires', 'linkedin-square'],
  ['TikTok', 'https://www.tiktok.com/@buenosaires', 'tiktok'],
  ['Pinterest', 'https://www.pinterest.es/buenosaires/', 'pinterest']
];

const PhonesSection = (): JSX.Element => (
  <section>
    <h4>Teléfonos útiles</h4>
    <ul className="list-inline">
      {phones.map(([number, name]) => (
        <li className="list-inline-item phone-items" key={number}>
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
      {social.map(([network, href, icon]) => (
        <li className="list-inline-item redes-items" key={network}>
          <a href={href}>
            <i className={`bx bxl-${icon ? icon : network.toLocaleLowerCase()}`} />
            {network}
          </a>
        </li>
      ))}
    </ul>
  </section>
);

const LegalSection = (): JSX.Element => (
  <section className="footer-legal-section">
    <div className="row align-items-center">
      <div className="col-12 col-md-5 col-xl-4 footer-content-img">
        <img className="d-lg-none" src="footer/ciudad-ba-sm.svg" alt="Ciudad de Buenos Aires" height="48" />
        <img className="d-none d-lg-inline" src="footer/ciudad-ba.svg" alt="Ciudad de Buenos Aires" height="40" />
        <img className="img-vamos-ba" src="footer/vamos-ba.svg" alt="Vamos Buenos Aires" />
      </div>
      <div className="col-12">
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="https://boletinoficial.buenosaires.gob.ar">Boletín oficial</a>
          </li>
          <li className="list-inline-item">
            <a href="https://buenosaires.gob.ar/jefaturadegabinete/innovacion/terminos-y-condiciones">
              Términos y condiciones
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.buenosaires.gob.ar/privacidad">Política de privacidad</a>
          </li>
          <li className="list-inline-item">
            <a href="https://buenosaires.gob.ar/jefedegobierno/legalytecnica/normativa/boletin-oficial-y-registro/oficios-judiciales">
              Oficios judiciales
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.buenosaires.gob.ar/gobierno/transparencia">Transparencia</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

const LicenseSection = (): JSX.Element => (
  <section>
    <div className="footer-license-text">
      Los contenidos de buenosaires.gob.ar están licenciados bajo Creative Commons Reconocimiento 2.5 Argentina License.
    </div>
  </section>
);

export const Completo = (): JSX.Element => (
  <div className="storybook__container-footer">
    <footer className="main-footer">
      <div className="container">
        <PhonesSection />
        <SocialSection />
      </div>
      <hr className="divider" />
      <div className="container">
        <LegalSection />
        <LicenseSection />
      </div>
    </footer>
  </div>
);

export const SoloLegales = (): JSX.Element => (
  <div className="storybook__container-footer">
    <footer className="main-footer">
      <div className="container">
        <LegalSection />
        <LicenseSection />
      </div>
    </footer>
  </div>
);

SoloLegales.story = {
  name: 'Solo legales'
};

export const FooterIndicator = (): JSX.Element => (
  <div className="storybook__container-footer">
    <div className="footer-info">
      <div className="container">
        <h4 className="footer-info-text">¿Te fue útil esta página?</h4>
        <div className="footer-info-actions">
          <button className="btn btn-primary">Sí, me fue útil</button>
          <button className="btn btn-secondary">No me sirvió</button>
        </div>
      </div>
    </div>
    <footer className="main-footer">
      <div className="container">
        <PhonesSection />
        <SocialSection />
      </div>
      <hr className="divider" />
      <div className="container">
        <LegalSection />
        <LicenseSection />
      </div>
    </footer>
  </div>
);
FooterIndicator.story = {
  name: 'Con indicador'
};
