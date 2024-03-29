import React from 'react';
import classnames from 'classnames';
import { Size } from '../utils';

export interface NavItem {
  name: string;
  id: string;
  type?: Size;
  href?: string;
  disabled?: boolean;
  children?: NavItem[];
  hasBordered?: boolean;
}

export interface NavProps {
  items: NavItem[];
  selected?: string;
  navSize?: 'default' | 'large';
  onClick?: (id: string) => void;
  hasIcon?: boolean;
  hasReverse?: boolean;
}

export interface NavItemComponentProps extends NavItem {
  level: number;
  selected?: string;
  onClick?: (id: string) => void;
  hasBordered?: boolean;
  type?: Size;
  hasIcon?: boolean;
  hasReverse?: boolean;
  onSelect?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const listClasses = 'nav flex-column nav-pills';

export const Nav: React.FC<NavProps> = (props: React.PropsWithChildren<NavProps>) => {
  const { items, selected, navSize, onClick, hasIcon } = props;

  const mainListClasses = classnames(listClasses, {
    'nav-lg': navSize === 'large'
  });

  return (
    <nav>
      <ul className={mainListClasses}>
        {items.map((item) => (
          <NavItemComponent {...item} key={item.id} level={0} onClick={onClick} selected={selected} hasIcon={hasIcon} />
        ))}
      </ul>
    </nav>
  );
};

const listClassesHorizontal = 'nav flex-row nav-pills';

export const NavHorizontal: React.FC<NavProps> = (props: React.PropsWithChildren<NavProps>) => {
  const { items, selected, navSize, onClick, hasIcon, hasReverse } = props;

  const mainListClasses = classnames(listClassesHorizontal, {
    'nav-lg': navSize === 'large'
  });

  return (
    <nav>
      <ul className={mainListClasses}>
        {items.map((item) => (
          <NavItemComponentHorizontal
            {...item}
            key={item.id}
            level={0}
            onClick={onClick}
            selected={selected}
            hasIcon={hasIcon}
            hasReverse={hasReverse}
            type={item.type}
          />
        ))}
      </ul>
    </nav>
  );
};

export const NavItemComponent: React.FC<NavItemComponentProps> = (props: NavItemComponentProps) => {
  const { name, id, href, children, level, disabled, selected, hasIcon } = props;

  const isActive = selected && id === selected;
  const hasActiveChild = checkActiveChild(children, selected);

  const linkClassName = classnames('nav-link', {
    'active-child': !disabled && hasActiveChild,
    active: !disabled && isActive,
    disabled: disabled
  });

  const handleClick: React.MouseEventHandler = (event) => {
    if (!href) {
      event.preventDefault();
      !disabled && props.onClick && props.onClick(id);
    }
  };

  return (
    <li className="nav-item">
      <a
        className={linkClassName}
        href={href || '#'}
        onClick={handleClick}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : undefined}>
        {hasIcon ? (
          <div className="nav-icon">
            <i className="bx bxs-user-circle"></i>
            <span>{name}</span>
          </div>
        ) : (
          <span>{name}</span>
        )}
      </a>
      {!disabled && (isActive || hasActiveChild) && children && (
        <ul className={listClasses}>
          {children.map((item) => (
            <NavItemComponent {...item} key={item.id} level={level + 1} onClick={props.onClick} selected={selected} />
          ))}
        </ul>
      )}
    </li>
  );
};

const NavItemComponentHorizontal: React.FC<NavItemComponentProps> = (props: NavItemComponentProps) => {
  const { name, id, href, children, level, disabled, selected, hasBordered, type, hasIcon, hasReverse } = props;

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

  const handleClick: React.MouseEventHandler = (event) => {
    if (!href) {
      event.preventDefault();
      !disabled && props.onClick && props.onClick(id);
    }
  };

  return (
    <li className="nav-item">
      <a
        className={linkClassName}
        href={href || '#'}
        onClick={handleClick}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : undefined}>
        {hasReverse ? (
          <div className="nav-icon">
            <span>{name}</span>
            <i className="bx bxs-user-circle"></i>
          </div>
        ) : hasIcon ? (
          <div className="nav-icon">
            <i className="bx bxs-user-circle"></i>
            <span>{name}</span>
          </div>
        ) : (
          <span>{name}</span>
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

export const checkActiveChild = (children?: NavItem[], selected?: string): boolean => {
  return !!children?.some((child) => {
    return child.id === selected || (child.children && checkActiveChild(child.children, selected));
  });
};
