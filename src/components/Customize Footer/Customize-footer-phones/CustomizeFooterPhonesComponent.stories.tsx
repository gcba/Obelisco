import React from 'react';

export const CustomizeFooterPhonesComponent = (): JSX.Element => {
  return (
    <div>
      <h2>Teléfonos útiles e institucional</h2>
      <footer className="main-footer">
        <div className="container">
          <section>
            <h4>Teléfonos útiles</h4>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="tel:102">102 - Niñez y Adolescencia</a>
              </li>
              <li className="list-inline-item">
                <a href="tel:103">103 - Emergencias</a>
              </li>
              <li className="list-inline-item">
                <a href="tel:107">107 - SAME</a>
              </li>
              <li className="list-inline-item">
                <a href="tel:911">911 - Policía</a>
              </li>
              <li className="list-inline-item">
                <a href="tel:144">144 - Violencia de género</a>
              </li>
              <li className="list-inline-item">
                <a href="tel:147">147 - Atención ciudadana</a>
              </li>
            </ul>
            <a href="https://www.buenosaires.gob.ar/laciudad/telefonosutiles">Ver todos los teléfonos</a>
          </section>
        </div>
        <hr className="clearfix" />
        <div className="container">
          <section className="footer-legal-section">
            <div className="row align-items-center">
              <div className="col-12 col-md-5 col-xl-4 mb-4 mb-md-0">
                <img
                  className="mr-3 d-lg-none"
                  src="footer/ciudad-ba-sm.svg"
                  alt="Logo de la Ciudad de Buenos Aires"
                  height="38"
                />
                <img
                  className="mr-3 d-none d-lg-inline"
                  src="footer/ciudad-ba.svg"
                  alt="Logo de la Ciudad de Buenos Aires"
                  height="38"
                />
                <img src="footer/vamos-ba.svg" alt="Logo de Vamos Buenos Aires" height="38" />
              </div>
              <div className="col-12 col-md-7 col-xl-8">
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
          <section>
            <div className="footer-license-text">
              Los contenidos de buenosaires.gob.ar están licenciados bajo
              <br className="d-none d-sm-inline" />
              Creative Commons Reconocimiento 2.5 Argentina License.
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
};
