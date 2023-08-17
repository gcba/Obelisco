// Base
import React, { useEffect, useState } from 'react';
import './Nav.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { Nav } from '.';

// Configuración general del componente
export default {
  title: 'Componentes|Navegación y pestañas/Navegación vertical',
  component: Nav,
  decorators: [withA11y]
};

const simpleItems = [
  { name: 'Link', id: '1' },
  { name: 'Activo', id: '2' },
  { name: 'Link', id: '3' },
  { name: 'Deshabilitado', id: '4', disabled: true }
];

const doubleLevel = [
  { name: 'Categorías', id: '0' },
  {
    name: 'Locales y comercios',
    id: '1',
    children: [
      { name: 'Local Indumentaria y calzado. (Actividades comerciales de venta).', id: '1.1' },
      { name: 'Locales gastronómicos: “para llevar/takeaway”', id: '1.2' },
      { name: 'Locales de óptica', id: '1.3' },
      { name: 'Comercial minorista (excluyendo indumentaria y calzado)', id: '1.4' }
    ]
  },
  { name: 'Actividades jurídicas', id: '2' },
  { name: 'Otras actividades', id: '3' }
];

const tripleLevel = [
  { name: 'Categorías', id: '0' },
  {
    name: 'Locales y comercios',
    id: '1',
    children: [
      { name: 'Local Indumentaria y calzado. (Actividades comerciales de venta).', id: '1.1' },
      {
        name: 'Locales gastronómicos: “para llevar/takeaway”',
        id: '1.2',
        children: [
          { name: 'Con local a la calle', id: '1.2.1' },
          { name: 'Food trucks', id: '1.2.2' }
        ]
      },
      { name: 'Locales de óptica', id: '1.3' },
      { name: 'Comercial minorista (excluyendo indumentaria y calzado)', id: '1.4' }
    ]
  },
  { name: 'Actividades jurídicas', id: '2' },
  { name: 'Otras actividades', id: '3' }
];

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 1000);
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};

interface ResponsiveProps {
  isTwoLevel?: boolean;
  hasIcon?: boolean;
}

export const Simple = (): JSX.Element => (
  <div className="nav-container">
    <Nav items={simpleItems} selected="2" />
  </div>
);

export const SimpleConIcono = (): JSX.Element => (
  <div className="nav-container">
    <Nav items={simpleItems} selected="2" hasIcon={true} />
  </div>
);

SimpleConIcono.story = {
  name: 'Simple con ícono'
};

export const Con2Niveles = (): JSX.Element => {
  const isMobile = useIsMobile();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      {loaded && (
        <>
          {isMobile ? (
            <Responsive isTwoLevel={true} hasIcon={false} />
          ) : (
            <div className="nav-container">
              <Nav items={doubleLevel} navSize="large" selected="1.2" />
            </div>
          )}
        </>
      )}
    </>
  );
};

Con2Niveles.story = {
  name: 'Con 2 niveles'
};

export const Con2NivelesConIcono = (): JSX.Element => {
  const isMobile = useIsMobile();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      {loaded && (
        <>
          {isMobile ? (
            <Responsive isTwoLevel={true} />
          ) : (
            <div className="nav-container">
              <Nav items={doubleLevel} navSize="large" selected="1.2" hasIcon={true} />
            </div>
          )}
        </>
      )}
    </>
  );
};

Con2NivelesConIcono.story = {
  name: 'Con 2 niveles con ícono'
};

export const Con3Niveles = (): JSX.Element => {
  const isMobile = useIsMobile();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      {loaded && (
        <>
          {isMobile ? (
            <Responsive hasIcon={false} />
          ) : (
            <div className="nav-container">
              <Nav items={tripleLevel} navSize="large" selected="1.2.2" />
            </div>
          )}
        </>
      )}
    </>
  );
};

Con3Niveles.story = {
  name: 'Con 3 niveles'
};

export const Con3NivelesConIcono = (): JSX.Element => {
  const isMobile = useIsMobile();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      {loaded && (
        <>
          {isMobile ? (
            <Responsive />
          ) : (
            <div className="nav-container">
              <Nav items={tripleLevel} navSize="large" selected="1.2.2" hasIcon={true} />
            </div>
          )}
        </>
      )}
    </>
  );
};

Con3NivelesConIcono.story = {
  name: 'Con 3 niveles con ícono'
};

export const Responsive = ({ isTwoLevel, hasIcon = true }: ResponsiveProps): JSX.Element => {
  const navItems = isTwoLevel ? doubleLevel : tripleLevel;
  const selected = isTwoLevel ? '1.2' : '1.2.2';

  return (
    <div className="nav-container">
      <div className="accordion">
        <div className="card">
          <a
            className="card-header collapsed card-link"
            data-toggle="collapse"
            href="#sidebar-nav"
            aria-label="collapse">
            Navegacion
          </a>
          <div className="collapse mt-2 shadow-sm" id="sidebar-nav">
            <Nav items={navItems} navSize="large" selected={selected} hasIcon={hasIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};
