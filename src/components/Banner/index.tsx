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
  responsiveText?: string;
}

export const Banner: React.FC<BannerProps> = (props: React.PropsWithChildren<BannerProps>) => {
  const { isDark, buttons, iconBanner, responsiveText } = props;

  const BannerClasses = classNames('banner', {
    ['banner-dark']: isDark !== undefined
  });

  return (
    <div className={BannerClasses.trim()}>
      <div className="banner-content">
        {!buttons && (
          <p className="banner-text">
            Esta descripción de banner <strong>puede tener énfasis</strong> y{' '}
            <a href="#" target="_blank" rel="noreferrer">
              enlace
            </a>
            .
          </p>
        )}
        {buttons && (
          <>
            {iconBanner && !iconBanner?.includes('bx') && <span className="material-icons-round">{iconBanner}</span>}
            {iconBanner && iconBanner?.includes('bx') && <i className={iconBanner}></i>}
            <p className="banner-text">
              Este banner tiene {buttons?.length === 1 ? 'un solo botón' : 'dos botones'} y{' '}
              <strong>puede tener énfasis</strong>. Se truncan los textos que superen {responsiveText}.
            </p>
            <div className="banner-actions">
              {buttons?.map(({ className, name, url }, index) => (
                <a key={index} href={url} target="_blank" rel="noreferrer" className={className}>
                  {name}
                </a>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export const useTextResponsive = (): string => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 752);
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile) {
    return '3 líneas de texto';
  } else {
    return 'más de una línea de texto';
  }
};

export const BUTTON_ALERT: BannerAction[] = [
  {
    name: 'Botón',
    className: 'btn btn-sm btn-secondary',
    url: '#'
  }
];
export const BUTTONS_ALERT: BannerAction[] = [
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
