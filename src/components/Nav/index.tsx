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
  isMainNav?: boolean;
  onClick?: (id: string) => void;
}

export const Nav: React.FC<NavProps> = (props: React.PropsWithChildren<NavProps>) => {
  const { items, selected, isMainNav, onClick } = props;

  return (
    <nav>
      <ul className="nav flex-column">
        {items.map(item => (
          <NavItemComponent
            {...item}
            key={item.id}
            level={0}
            onClick={onClick}
            selected={selected}
            isMainNav={isMainNav}
          />
        ))}
      </ul>
    </nav>
  );
};

interface NavItemComponentProps extends NavItem {
  level: number;
  selected?: string;
  onClick?: (id: string) => void;
  isMainNav?: boolean;
}

const NavItemComponent: React.FC<NavItemComponentProps> = (props: NavItemComponentProps) => {
  const { name, id, href, children, level, disabled, selected, isMainNav } = props;

  const isActive = selected && (id === selected || hasActiveChild(children, selected));

  const linkClassName = classnames('nav-link', {
    'nav-link-header': level === 0 && isMainNav,
    active: !disabled && isActive,
    disabled: disabled
  });

  const childrenClassName = classnames('nav', 'flex-column', {
    'nav-pills': level > 0
  });

  const handleClick: React.MouseEventHandler = event => {
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
      {!disabled && isActive && children && (
        <ul className={childrenClassName}>
          {children.map(item => (
            <NavItemComponent {...item} key={item.id} level={level + 1} onClick={props.onClick} selected={selected} />
          ))}
        </ul>
      )}
    </li>
  );
};

const hasActiveChild = (children?: NavItem[], selected?: string): boolean => {
  return !!children?.some(child => {
    return child.id === selected || (child.children && hasActiveChild(child.children, selected));
  });
};
