import React, { useRef, useState } from 'react';
import classnames from 'classnames';
import { NavItem, NavItemComponent, NavItemComponentProps, NavProps } from '.';

export interface TabsItem extends NavItem {
  iconTabs: string;
  content: React.ReactNode;
}

export interface TabsProps extends NavProps {
  items: TabsItem[];
  classUl: string;
  idPrefix: string;
  label: string;
  isWithButton?: boolean;
}

export interface TabsComponentsProps extends NavItemComponentProps, TabsItem {}

const NavItemComponentSlider: React.FC<TabsComponentsProps> = (props: TabsComponentsProps) => {
  const { name, id, children, disabled, selected, level, iconTabs, hasIcon } = props;

  const isActive = selected === id;

  const linkClassName = classnames('nav-link', {
    active: isActive,
    disabled: disabled
  });

  return (
    <li className="nav-item" role="presentation">
      <button
        className={linkClassName}
        disabled={disabled}
        tabIndex={disabled ? -1 : undefined}
        data-toggle="tab"
        data-target={`#panel-content-${id}`}
        type="button"
        role="tab"
        aria-controls={`panel-content-${id}`}
        aria-selected={isActive}>
        {hasIcon && iconTabs ? (
          <div className="nav-icon" dangerouslySetInnerHTML={{ __html: `${name} ${iconTabs}` }}></div>
        ) : (
          <>{name}</>
        )}
      </button>
      {children && (
        <ul className={listClasses} role="tabpanel" id={`panel-${id}`}>
          {children.map((item) => (
            <NavItemComponent {...item} key={item.id} selected={selected} level={level} />
          ))}
        </ul>
      )}
    </li>
  );
};

const listClasses = 'nav nav-pills tabs';

export const NavTabsSlider: React.FC<TabsProps> = (props: React.PropsWithChildren<TabsProps>) => {
  const { items, navSize, hasIcon, classUl, isWithButton = true, selected, idPrefix } = props;

  const [activeTabId] = useState<string>(selected || ''); // Valor predeterminado de cadena vacía si selected es null o undefined

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

  const handleIconClick = (event: React.MouseEvent<HTMLElement>) => {
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

  const handleMouseDown = (event: React.MouseEvent<HTMLUListElement>) => {
    setIsDragging(true);

    const tabsBox = tabsBoxRef.current;
    if (!tabsBox) return;
    setStartX(event.pageX - tabsBox.offsetLeft);
    setScrollLeft(tabsBox.scrollLeft);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLUListElement>) => {
    if (!isDragging) return;

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
      <nav className="tabs-slider" aria-label={props.label}>
        <ul
          className={mainListClasses}
          ref={tabsBoxRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseLeave={handleMouseLeave}
          id={`${idPrefix}-myTab`}
          role="tablist">
          {items.map((item) => (
            <NavItemComponentSlider
              {...item}
              key={item.id}
              hasIcon={hasIcon}
              type={item.type}
              selected={activeTabId}
              level={0}
            />
          ))}
        </ul>
        {isWithButton && (
          <div className="icons-container">
            <button className="right-left icon" onClick={handleIconClick} id="left">
              <span className="material-icons-round">arrow_back_ios</span>
            </button>
            <button className="right-left icon" onClick={handleIconClick} id="right">
              <span className="material-icons-round">arrow_forward_ios</span>
            </button>
          </div>
        )}
      </nav>
      <div className="tab-content" id={`${idPrefix}-myTabContent`}>
        {items.map((item) => (
          <div
            key={item.id}
            className={classnames('tab-pane', {
              fade: true,
              show: item.id === activeTabId,
              active: item.id === activeTabId
            })}
            id={`panel-content-${item.id}`}
            role="tabpanel"
            aria-label={`${item.id}-tab`}>
            {item.content}
          </div>
        ))}
      </div>
    </>
  );
};
