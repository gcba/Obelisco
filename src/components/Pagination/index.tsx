import * as React from 'react';

export interface PaginationProps {
  pages: number;
  ariaLabel: string;
  default?: number;
  prevText?: string;
  nextText?: string;
  onPageSelected?: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = (props: PaginationProps) => {
  const pages = Array.from(Array(props.pages).keys());
  const [current, setCurrent] = React.useState<number>(props.default || 0);
  const { prevText, nextText } = props;

  const isShowPrev = current === 0;
  const isShowNext = current === pages.length - 1;

  const onPageSelected = (page: number): void => {
    setCurrent(page);
    props.onPageSelected && props.onPageSelected(page);
  };

  const onPrev = (): void => {
    if (current > 0) onPageSelected(current - 1);
  };

  const onNext = (): void => {
    if (current < pages.length - 1) onPageSelected(current + 1);
  };

  let pagesToShow = pages;
  let isShowTopTrimmer = true;
  let isShowBottomTrimmer = false;

  const lastIndex = pages.length - 1;

  if (pages.length > 2) {
    if (current < 2) {
      pagesToShow = pagesToShow.slice(0, 2);
      isShowTopTrimmer = true;
    } else if (current > lastIndex - 2) {
      pagesToShow = pagesToShow.slice(lastIndex - 1);
      isShowTopTrimmer = false;
      isShowBottomTrimmer = true;
    } else {
      pagesToShow = pagesToShow.slice(current - 1, current + 2);
      isShowBottomTrimmer = true;
      isShowTopTrimmer = true;
    }
  }

  return (
    <nav aria-label={props.ariaLabel}>
      <ul className="pagination">
        <PaginationItem isHidden={isShowPrev} onClick={() => onPrev()}>
          <span className="page-previous-icon" aria-hidden="true" />
          <span className="page-previous-text"> {prevText ? prevText : 'Anterior'}</span>
        </PaginationItem>

        {isShowBottomTrimmer && (
          <>
            <PaginationNumber index={0} current={current} onClick={() => onPageSelected(0)} />
            <PaginationItem>...</PaginationItem>
          </>
        )}

        {pagesToShow.map((i) => (
          <PaginationNumber index={i} key={i} current={current} onClick={() => onPageSelected(i)} />
        ))}

        {isShowTopTrimmer && (
          <>
            <PaginationItem>...</PaginationItem>
            <PaginationNumber index={lastIndex} current={current} onClick={() => onPageSelected(lastIndex)} />
          </>
        )}

        <PaginationItem isHidden={isShowNext} onClick={() => onNext()}>
          <span className="page-next-text">{nextText ? nextText : 'Siguiente'} </span>
          <span className="page-next-icon" aria-hidden="true" />
        </PaginationItem>
      </ul>
    </nav>
  );
};

interface PaginationItemProps {
  onClick?: () => void;
  className?: string;
  isActive?: boolean;
  isHidden?: boolean;
}

export const PaginationItem: React.FC<PaginationItemProps> = (props: React.PropsWithChildren<PaginationItemProps>) => {
  const onClick: React.MouseEventHandler = (event) => {
    event.preventDefault();
    props.onClick && props.onClick();
  };

  if (props.children === '...') {
    return (
      <li className="page-item no-events">
        <span className="page-link">{props.children}</span>
      </li>
    );
  }

  if (props.isHidden) {
    return (
      <li className="page-item" style={{ display: 'none' }}>
        <span className="page-link">{props.children}</span>
      </li>
    );
  }

  return (
    <li className={`page-item ${props.isActive ? 'active' : ''}`}>
      <a className="page-link" href="#" onClick={onClick}>
        {props.children}
      </a>
    </li>
  );
};

interface PaginationNumberProps {
  index: number;
  current: number;
  onClick: () => void;
}

export const PaginationNumber: React.FC<PaginationNumberProps> = (props: PaginationNumberProps) => {
  const { index, current, onClick } = props;

  return (
    <PaginationItem isActive={index === current} onClick={onClick}>
      {index + 1}
    </PaginationItem>
  );
};
