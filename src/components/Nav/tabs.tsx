import React, { useRef, useState } from 'react';
import classnames from 'classnames';
import { checkActiveChild, NavItemComponent, NavItemComponentProps, NavProps } from '.';

const NavItemComponentSlider: React.FC<NavItemComponentProps> = (props: NavItemComponentProps) => {
  const { name, id, href, children, level, disabled, selected, hasBordered, type, hasIcon, onSelect, iconTabs } = props;

  const isActive = selected && id === selected;
  const hasActiveChild = checkActiveChild(children, selected);

  const linkClassName = classnames('nav-link', {
    'nav-link-sm': type === 'small',
    'nav-link-lg': type === 'large',
    'border-link': hasBordered,
    'active-child': !disabled && hasActiveChild,
    active: !disabled && isActive,
    disabled: disabled
  });

  return (
    <li className="nav-item">
      <a
        className={linkClassName}
        href={href || '#'}
        onClick={onSelect}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : undefined}>
        {hasIcon && iconTabs ? (
          <div className="nav-icon" dangerouslySetInnerHTML={{ __html: `${name} ${iconTabs}` }}></div>
        ) : (
          <>{name}</>
        )}
      </a>
      {!disabled && (isActive || hasActiveChild) && children && (
        <ul className={listClasses}>
          {children.map((item) => (
            <NavItemComponent
              {...item}
              key={item.id}
              level={level + 1}
              onClick={props.onClick}
              selected={selected}
              hasIcon={hasIcon}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

const NavItemComponentTabs: React.FC<NavItemComponentProps> = (props: NavItemComponentProps) => {
  const {
    name,
    id,
    href,
    children,
    level,
    disabled,
    selected,
    hasBordered,
    type,
    hasIcon,
    onSelect,
    iconTabs,
    isFullWidth
  } = props;

  const isActive = selected && id === selected;
  const hasActiveChild = checkActiveChild(children, selected);

  const linkClassName = classnames('nav-link', {
    'nav-link-sm': type === 'small',
    'nav-link-lg': type === 'large',
    'border-link': hasBordered,
    'active-child': !disabled && hasActiveChild,
    'w-100': isFullWidth,
    active: !disabled && isActive,
    disabled: disabled
  });

  const liClassName = classnames('nav-item', {
    'w-100': isFullWidth
  });

  return (
    <li className={liClassName}>
      <a
        className={linkClassName}
        href={href || '#'}
        onClick={onSelect}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : undefined}>
        {hasIcon && iconTabs ? (
          <div className="nav-icon" dangerouslySetInnerHTML={{ __html: `${name} ${iconTabs}` }}></div>
        ) : (
          <>{name}</>
        )}
      </a>
      {!disabled && (isActive || hasActiveChild) && children && (
        <ul className={listClasses}>
          {children.map((item) => (
            <NavItemComponent
              {...item}
              key={item.id}
              level={level + 1}
              onClick={props.onClick}
              selected={selected}
              hasIcon={hasIcon}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

const listClasses = 'nav nav-pills flex-row tabs';

export const NavTabs: React.FC<NavProps> = (props: React.PropsWithChildren<NavProps>) => {
  const { items, selected, navSize, hasIcon } = props;

  const mainListClasses = classnames(listClassesTabs, {
    'nav-lg': navSize === 'large'
  });

  const tabsBoxRef = useRef<HTMLUListElement>(null);

  return (
    <>
      <nav>
        <ul className={mainListClasses} ref={tabsBoxRef}>
          {items.map((item) => (
            <NavItemComponentTabs
              {...item}
              key={item.id}
              level={0}
              selected={selected}
              hasIcon={hasIcon}
              type={item.type}
            />
          ))}
        </ul>
      </nav>
    </>
  );
};
const listClassesTabs = 'nav nav-pills flex-row tabs';

export const NavTabsWidth: React.FC<NavProps> = (props: React.PropsWithChildren<NavProps>) => {
  const { items, selected, navSize, hasIcon } = props;

  const mainListClasses = classnames(listClassesTabsFullWidth, {
    'nav-lg': navSize === 'large'
  });

  const tabsBoxRef = useRef<HTMLUListElement>(null);

  return (
    <>
      <nav>
        <ul className={mainListClasses} ref={tabsBoxRef}>
          {items.map((item) => (
            <NavItemComponentTabs
              {...item}
              key={item.id}
              level={0}
              selected={selected}
              hasIcon={hasIcon}
              type={item.type}
              isFullWidth={true}
            />
          ))}
        </ul>
      </nav>
    </>
  );
};
const listClassesTabsFullWidth = 'nav nav-pills flex-row tabs';

export const NavTabsSlider: React.FC<NavProps> = (props: React.PropsWithChildren<NavProps>) => {
  const { items, selected, navSize, hasIcon } = props;

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const mainListClasses = classnames(listClassesSlider, {
    'nav-lg': navSize === 'large'
  });

  const tabsBoxRef = useRef<HTMLUListElement>(null);

  const handleIcons = (scrollVal: number) => {
    const tabsBox = tabsBoxRef.current;
    if (!tabsBox) return;
    const maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
    const arrowIcons = tabsBox.parentElement?.querySelectorAll('.icon i');
    arrowIcons?.[0].parentElement?.style.setProperty('display', scrollVal <= 0 ? 'none' : 'flex');
    arrowIcons?.[1].parentElement?.style.setProperty('display', maxScrollableWidth - scrollVal <= 1 ? 'none' : 'flex');
  };

  const handleIconClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const iconId = event.currentTarget.id;
    const tabsBox = tabsBoxRef.current;
    if (!tabsBox) return;

    const currentPosition = tabsBox.scrollLeft;
    const tabs = tabsBox.querySelectorAll('.nav-item');
    const tabWidth = tabs.length > 0 ? tabs[0].getBoundingClientRect().width + 5 : 0;
    const scrollDistance = iconId === 'left' ? -tabWidth : tabWidth;
    const targetPosition = currentPosition + scrollDistance;

    const options: ScrollToOptions = {
      left: targetPosition,
      behavior: 'smooth'
    };
    tabsBox.scrollTo(options);
    handleIcons(targetPosition);
  };

  const handleTabClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const tab = event.currentTarget;
    const tabsBox = tabsBoxRef.current;
    if (!tabsBox) return;
    const activeTab = tabsBox.querySelector('.active');
    if (activeTab) {
      const duration = 500;
      setTimeout(() => {
        activeTab.classList.remove('active');
        tab.classList.add('active');
      }, duration);
    } else {
      tab.classList.add('active');
    }
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLUListElement>) => {
    setIsDragging(true);
    const tabsBox = tabsBoxRef.current;
    if (!tabsBox) return;
    setStartX(event.pageX - tabsBox.offsetLeft);
    setScrollLeft(tabsBox.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLUListElement>) => {
    if (!isDragging) return;
    event.preventDefault();
    const tabsBox = tabsBoxRef.current;
    if (!tabsBox) return;
    const x = event.pageX - tabsBox.offsetLeft;
    const walk = (x - startX) * 1.2; // Velocidad de desplazamiento ajustable
    tabsBox.scrollLeft = scrollLeft - walk;
    handleIcons(tabsBox.scrollLeft);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLUListElement>) => {
    setIsDragging(true);
    const tabsBox = tabsBoxRef.current;
    if (!tabsBox) return;
    setStartX(event.touches[0].pageX - tabsBox.offsetLeft);
    setScrollLeft(tabsBox.scrollLeft);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLUListElement>) => {
    if (!isDragging) return;
    event.preventDefault();
    const tabsBox = tabsBoxRef.current;
    if (!tabsBox) return;
    const x = event.touches[0].pageX - tabsBox.offsetLeft;
    const walk = (x - startX) * 1.2; // Velocidad de desplazamiento ajustable
    tabsBox.scrollLeft = scrollLeft - walk;
    handleIcons(tabsBox.scrollLeft);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <>
      <nav className="tabs-slider">
        <ul
          className={mainListClasses}
          ref={tabsBoxRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}>
          {items.map((item) => (
            <NavItemComponentSlider
              {...item}
              key={item.id}
              level={0}
              onSelect={handleTabClick}
              selected={selected}
              hasIcon={hasIcon}
              type={item.type}
            />
          ))}
        </ul>
        <div className="icons-container">
          <div className="right-left" onClick={handleIconClick} id="left">
            <span className="material-icons-round">arrow_back_ios</span>
          </div>
          <div className="right-left" onClick={handleIconClick} id="right">
            <span className="material-icons-round">arrow_forward_ios</span>
          </div>
        </div>
      </nav>
    </>
  );
};
const listClassesSlider = 'nav nav-pills flex-row tabs';

export const NavTabsContainer: React.FC<NavProps> = (props: React.PropsWithChildren<NavProps>) => {
  const { items, selected, navSize, hasIcon } = props;

  const mainListClasses = classnames(listClassesTabsContainer, {
    'nav-lg': navSize === 'large'
  });

  const tabsBoxRef = useRef<HTMLUListElement>(null);

  return (
    <>
      <nav>
        <ul className={mainListClasses} ref={tabsBoxRef}>
          {items.map((item) => (
            <NavItemComponentTabs
              {...item}
              key={item.id}
              level={0}
              selected={selected}
              hasIcon={hasIcon}
              type={item.type}
            />
          ))}
        </ul>
      </nav>
    </>
  );
};
const listClassesTabsContainer = 'nav nav-pills flex-row tabs nav-box';

export const NavTabsWidthContainer: React.FC<NavProps> = (props: React.PropsWithChildren<NavProps>) => {
  const { items, selected, navSize, hasIcon } = props;

  const mainListClasses = classnames(listClassesTabsFullWidthContainer, {
    'nav-lg': navSize === 'large'
  });

  const tabsBoxRef = useRef<HTMLUListElement>(null);

  return (
    <>
      <nav>
        <ul className={mainListClasses} ref={tabsBoxRef}>
          {items.map((item) => (
            <NavItemComponentTabs
              {...item}
              key={item.id}
              level={0}
              selected={selected}
              hasIcon={hasIcon}
              type={item.type}
              isFullWidth={true}
            />
          ))}
        </ul>
      </nav>
    </>
  );
};
const listClassesTabsFullWidthContainer = 'nav nav-pills flex-row tabs nav-box';

export const NavTabsContainerBg: React.FC<NavProps> = (props: React.PropsWithChildren<NavProps>) => {
  const { items, selected, navSize, hasIcon } = props;

  const mainListClasses = classnames(listClassesTabsContainerBg, {
    'nav-lg': navSize === 'large'
  });

  const tabsBoxRef = useRef<HTMLUListElement>(null);

  return (
    <>
      <nav>
        <ul className={mainListClasses} ref={tabsBoxRef}>
          {items.map((item) => (
            <NavItemComponentTabs
              {...item}
              key={item.id}
              level={0}
              selected={selected}
              hasIcon={hasIcon}
              type={item.type}
            />
          ))}
        </ul>
      </nav>
    </>
  );
};
const listClassesTabsContainerBg = 'nav nav-pills tabs flex-row nav-box-bg';

export const NavTabsSliderBox: React.FC<NavProps> = (props: React.PropsWithChildren<NavProps>) => {
  const { items, selected, navSize, hasIcon } = props;

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const mainListClasses = classnames(listClassesSliderBox, {
    'nav-lg': navSize === 'large'
  });

  const tabsBoxRef = useRef<HTMLUListElement>(null);

  const handleIcons = (scrollVal: number) => {
    const tabsBox = tabsBoxRef.current;
    if (!tabsBox) return;
    const maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
    const arrowIcons = tabsBox.parentElement?.querySelectorAll('.icon i');
    arrowIcons?.[0].parentElement?.style.setProperty('display', scrollVal <= 0 ? 'none' : 'flex');
    arrowIcons?.[1].parentElement?.style.setProperty('display', maxScrollableWidth - scrollVal <= 1 ? 'none' : 'flex');
  };

  const handleIconClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const iconId = event.currentTarget.id;
    const tabsBox = tabsBoxRef.current;
    if (!tabsBox) return;

    const currentPosition = tabsBox.scrollLeft;
    const tabs = tabsBox.querySelectorAll('.nav-item');
    const tabWidth = tabs.length > 0 ? tabs[0].getBoundingClientRect().width + 5 : 0;
    const scrollDistance = iconId === 'left' ? -tabWidth : tabWidth;
    const targetPosition = currentPosition + scrollDistance;

    const options: ScrollToOptions = {
      left: targetPosition,
      behavior: 'smooth'
    };
    tabsBox.scrollTo(options);
    handleIcons(targetPosition);
  };

  const handleTabClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const tab = event.currentTarget;
    const tabsBox = tabsBoxRef.current;
    if (!tabsBox) return;
    const activeTab = tabsBox.querySelector('.active');
    if (activeTab) {
      const duration = 500;
      setTimeout(() => {
        activeTab.classList.remove('active');
        tab.classList.add('active');
      }, duration);
    } else {
      tab.classList.add('active');
    }
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLUListElement>) => {
    setIsDragging(true);
    const tabsBox = tabsBoxRef.current;
    if (!tabsBox) return;
    setStartX(event.pageX - tabsBox.offsetLeft);
    setScrollLeft(tabsBox.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLUListElement>) => {
    if (!isDragging) return;
    event.preventDefault();
    const tabsBox = tabsBoxRef.current;
    if (!tabsBox) return;
    const x = event.pageX - tabsBox.offsetLeft;
    const walk = (x - startX) * 1.2; // Velocidad de desplazamiento ajustable
    tabsBox.scrollLeft = scrollLeft - walk;
    handleIcons(tabsBox.scrollLeft);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLUListElement>) => {
    setIsDragging(true);
    const tabsBox = tabsBoxRef.current;
    if (!tabsBox) return;
    setStartX(event.touches[0].pageX - tabsBox.offsetLeft);
    setScrollLeft(tabsBox.scrollLeft);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLUListElement>) => {
    if (!isDragging) return;
    event.preventDefault();
    const tabsBox = tabsBoxRef.current;
    if (!tabsBox) return;
    const x = event.touches[0].pageX - tabsBox.offsetLeft;
    const walk = (x - startX) * 1.2; // Velocidad de desplazamiento ajustable
    tabsBox.scrollLeft = scrollLeft - walk;
    handleIcons(tabsBox.scrollLeft);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <>
      <nav className="tabs-slider">
        <ul
          className={mainListClasses}
          ref={tabsBoxRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}>
          {items.map((item) => (
            <NavItemComponentSlider
              {...item}
              key={item.id}
              level={0}
              onSelect={handleTabClick}
              selected={selected}
              hasIcon={hasIcon}
              type={item.type}
            />
          ))}
        </ul>
        <div className="icons-container">
          <div className="right-left" onClick={handleIconClick} id="left">
            <span className="material-icons-round">arrow_back_ios</span>
          </div>
          <div className="right-left" onClick={handleIconClick} id="right">
            <span className="material-icons-round">arrow_forward_ios</span>
          </div>
        </div>
      </nav>
    </>
  );
};
const listClassesSliderBox = 'nav nav-pills flex-row tabs nav-box';

export const NavTabsSliderBg: React.FC<NavProps> = (props: React.PropsWithChildren<NavProps>) => {
  const { items, selected, navSize, hasIcon } = props;

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const mainListClasses = classnames(listClassesSliderBg, {
    'nav-lg': navSize === 'large'
  });

  const tabsBoxRef = useRef<HTMLUListElement>(null);

  const handleIcons = (scrollVal: number) => {
    const tabsBox = tabsBoxRef.current;
    if (!tabsBox) return;
    const maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
    const arrowIcons = tabsBox.parentElement?.querySelectorAll('.icon i');
    arrowIcons?.[0].parentElement?.style.setProperty('display', scrollVal <= 0 ? 'none' : 'flex');
    arrowIcons?.[1].parentElement?.style.setProperty('display', maxScrollableWidth - scrollVal <= 1 ? 'none' : 'flex');
  };

  const handleIconClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const iconId = event.currentTarget.id;
    const tabsBox = tabsBoxRef.current;
    if (!tabsBox) return;

    const currentPosition = tabsBox.scrollLeft;
    const tabs = tabsBox.querySelectorAll('.nav-item');
    const tabWidth = tabs.length > 0 ? tabs[0].getBoundingClientRect().width + 5 : 0;
    const scrollDistance = iconId === 'left' ? -tabWidth : tabWidth;
    const targetPosition = currentPosition + scrollDistance;

    const options: ScrollToOptions = {
      left: targetPosition,
      behavior: 'smooth'
    };
    tabsBox.scrollTo(options);
    handleIcons(targetPosition);
  };

  const handleTabClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const tab = event.currentTarget;
    const tabsBox = tabsBoxRef.current;
    if (!tabsBox) return;
    const activeTab = tabsBox.querySelector('.active');
    if (activeTab) {
      const duration = 500;
      setTimeout(() => {
        activeTab.classList.remove('active');
        tab.classList.add('active');
      }, duration);
    } else {
      tab.classList.add('active');
    }
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLUListElement>) => {
    setIsDragging(true);
    const tabsBox = tabsBoxRef.current;
    if (!tabsBox) return;
    setStartX(event.pageX - tabsBox.offsetLeft);
    setScrollLeft(tabsBox.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLUListElement>) => {
    if (!isDragging) return;
    event.preventDefault();
    const tabsBox = tabsBoxRef.current;
    if (!tabsBox) return;
    const x = event.pageX - tabsBox.offsetLeft;
    const walk = (x - startX) * 1.2; // Velocidad de desplazamiento ajustable
    tabsBox.scrollLeft = scrollLeft - walk;
    handleIcons(tabsBox.scrollLeft);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLUListElement>) => {
    setIsDragging(true);
    const tabsBox = tabsBoxRef.current;
    if (!tabsBox) return;
    setStartX(event.touches[0].pageX - tabsBox.offsetLeft);
    setScrollLeft(tabsBox.scrollLeft);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLUListElement>) => {
    if (!isDragging) return;
    event.preventDefault();
    const tabsBox = tabsBoxRef.current;
    if (!tabsBox) return;
    const x = event.touches[0].pageX - tabsBox.offsetLeft;
    const walk = (x - startX) * 1.2; // Velocidad de desplazamiento ajustable
    tabsBox.scrollLeft = scrollLeft - walk;
    handleIcons(tabsBox.scrollLeft);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <>
      <nav className="tabs-slider">
        <ul
          className={mainListClasses}
          ref={tabsBoxRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}>
          {items.map((item) => (
            <NavItemComponentSlider
              {...item}
              key={item.id}
              level={0}
              onSelect={handleTabClick}
              selected={selected}
              hasIcon={hasIcon}
              type={item.type}
            />
          ))}
        </ul>
        <div className="icons-container">
          <div className="right-left" onClick={handleIconClick} id="left">
            <span className="material-icons-round">arrow_back_ios</span>
          </div>
          <div className="right-left" onClick={handleIconClick} id="right">
            <span className="material-icons-round">arrow_forward_ios</span>
          </div>
        </div>
      </nav>
    </>
  );
};
const listClassesSliderBg = 'nav nav-pills flex-row tabs nav-box-bg';
