import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

interface BannerAction {
  name: string;
  className?: string;
  url?: string;
}
interface BannerProps {
  iconBanner?: string;
  buttons?: BannerAction[];
  isDark?: boolean;
  textBanner?: React.ReactNode;
}

export const Banner: React.FC<BannerProps> = (props: React.PropsWithChildren<BannerProps>) => {
  const { isDark, buttons, iconBanner, textBanner } = props;

  const BannerClasses = classNames('banner', {
    ['banner-dark']: isDark !== undefined
  });

  return (
    <div className={BannerClasses.trim()}>
      <div className="banner-content">
        {iconBanner && !iconBanner?.includes('bx') && <span className="material-icons-round">{iconBanner}</span>}
        {iconBanner && iconBanner?.includes('bx') && <i className={iconBanner}></i>}
        <p className="banner-text">{textBanner}</p>
        {buttons && (
          <div className="banner-actions">
            {buttons?.map(({ className, name, url }, index) => (
              <a key={index} href={url} target="_blank" rel="noreferrer" className={className}>
                {name}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export const handleTextResponsive = (): boolean => {
  const [textResponsive, setTextResponsive] = useState(false);

  useEffect(() => {
    function handleResize() {
      setTextResponsive(window.innerWidth < 752);
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return textResponsive;
};

export const TextBannerButton = (props: { textButtonAmount?: string }): JSX.Element => {
  return (
    <>
      Este banner tiene {props.textButtonAmount} y <strong>puede tener énfasis</strong>. Se truncan los textos que
      superen {handleTextResponsive() ? '3 líneas de texto' : 'más de una línea de texto'}.
    </>
  );
};

export const TEXT_BANNER_LINK = (
  <>
    Esta descripción de banner <strong>puede tener énfasis</strong> y{' '}
    <a href="#" target="_blank" rel="noreferrer">
      enlace
    </a>
    .
  </>
);

export const BUTTON_BANNER: BannerAction[] = [
  {
    name: 'Botón',
    className: 'btn btn-sm btn-secondary',
    url: '#'
  }
];

export const BUTTONS_BANNER: BannerAction[] = [
  {
    name: 'Botón',
    className: 'btn btn-sm btn-secondary',
    url: '#'
  },
  {
    name: 'Botón',
    className: 'btn btn-sm btn-primary',
    url: '#'
  }
];
