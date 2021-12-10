import * as React from 'react';
import classnames from 'classnames';

export interface NavItem {
  name: string;
  id: string;
  href?: string;
  disabled?: boolean;
  children?: NavItem[];
}

export interface NavProps {
  items: NavItem[];
  selected?: string;
  navSize?: 'default' | 'large';
  onClick?: (id: string) => void;
}

const listClasses = 'nav flex-column nav-pills';

export const Nav: React.FC<NavProps> = (props: React.PropsWithChildren<NavProps>) => {
  const { items, selected, navSize, onClick } = props;

  const mainListClasses = classnames(listClasses, {
    'nav-lg': navSize === 'large'
  });

  return (
    <nav>
      <ul className={mainListClasses}>
        {items.map((item) => (
          <NavItemComponent {...item} key={item.id} level={0} onClick={onClick} selected={selected} />
        ))}
      </ul>
    </nav>
  );
};

interface NavItemComponentProps extends NavItem {
  level: number;
  selected?: string;
  onClick?: (id: string) => void;
}

const NavItemComponent: React.FC<NavItemComponentProps> = (props: NavItemComponentProps) => {
  const { name, id, href, children, level, disabled, selected } = props;

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
        {name}
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

const checkActiveChild = (children?: NavItem[], selected?: string): boolean => {
  return !!children?.some((child) => {
    return child.id === selected || (child.children && checkActiveChild(child.children, selected));
  });
};
