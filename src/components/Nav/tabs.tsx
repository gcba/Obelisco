import React, { useRef, useState } from 'react';
import classnames from 'classnames';
import { checkActiveChild, NavItem, NavItemComponent, NavItemComponentProps, NavProps } from '.';

export interface TabsItem extends NavItem {
  iconTabs: string;
}

export interface TabsProps extends NavProps {
  items: TabsItem[];
  classUl: string;
  isWithButton?: boolean;
  onSelect?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

export interface TabsComponentsProps extends NavItemComponentProps, TabsItem {}

const NavItemComponentSlider: React.FC<TabsComponentsProps> = (props: TabsComponentsProps) => {
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

const listClasses = 'nav nav-pills tabs';

export const NavTabsSlider: React.FC<TabsProps> = (props: React.PropsWithChildren<TabsProps>) => {
  const { items, selected, navSize, hasIcon, classUl, isWithButton = true } = props;

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const mainListClasses = classnames(classUl, {
    'nav-lg': navSize === 'large'
  });

  const tabsBoxRef = useRef<HTMLUListElement>(null);

  const handleIcons = (scrollVal: number) => {
    const tabsBox = tabsBoxRef.current;
    if (!tabsBox) return;
    const maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
    const arrowIcons = tabsBox.parentElement?.querySelectorAll('.icon') as NodeListOf<HTMLElement>;
    arrowIcons?.[0]?.style.setProperty('display', scrollVal <= 0 || tabsBox.scrollLeft === 1 ? 'none' : 'flex');
    arrowIcons?.[1]?.style.setProperty(
      'display',
      maxScrollableWidth - scrollVal <= 1 || tabsBox.scrollLeft === maxScrollableWidth ? 'none' : 'flex'
    );
  };

  const handleIconClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const iconId = event.currentTarget.id;
    const tabsBox = tabsBoxRef.current;
    if (!tabsBox) return;

    const currentPosition = tabsBox.scrollLeft;
    const tabs = tabsBox.querySelectorAll('.nav-item');
    const tabWidth = tabs.length > 0 ? tabs[0].getBoundingClientRect().width + 5 : 0;
    const scrollDistance = iconId === 'left' ? -tabWidth - 30 : tabWidth - 30;
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
    event.preventDefault();
    if (!tabsBox) return;
    if (scrollLeft == tabsBoxRef?.current?.scrollLeft) {
      const activeTab = tabsBox.querySelector('.active');
      if (activeTab) {
        const duration = 1;
        setTimeout(() => {
          activeTab.classList.remove('active');
          tab.classList.add('active');
        }, duration);
      } else {
        tab.classList.add('active');
      }
    }
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLUListElement>) => {
    setIsDragging(true);
    event.preventDefault();
    const tabsBox = tabsBoxRef.current;
    if (!tabsBox) return;
    setStartX(event.pageX - tabsBox.offsetLeft);
    setScrollLeft(tabsBox.scrollLeft);
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
    event.preventDefault();
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

  const handleTouchEnd = () => setIsDragging(false);

  const handleMouseLeave = () => setIsDragging(false);

  const handleMouseUp = () => setIsDragging(false);

  return (
    <>
      <nav className={`tabs-slider ${!isWithButton ? 'px-0' : ''}`}>
        <ul
          className={mainListClasses}
          ref={tabsBoxRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseLeave={handleMouseLeave}>
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
        {isWithButton && (
          <div className="icons-container">
            <div className="right-left icon" onClick={handleIconClick} id="left">
              <span className="material-icons-round">arrow_back_ios</span>
            </div>
            <div className="right-left icon" onClick={handleIconClick} id="right">
              <span className="material-icons-round">arrow_forward_ios</span>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
