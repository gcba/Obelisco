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

  const isPrevDisabled = current === 0;
  const isNextDisabled = current === pages.length - 1;

  const onPageSelected = (page: number) => {
    setCurrent(page);
    props.onPageSelected && props.onPageSelected(page);
  };
  const onPrev = () => {
    if (current > 0) onPageSelected(current - 1);
  };
  const onNext = () => {
    if (current < pages.length - 1) onPageSelected(current + 1);
  };

  let pagesToShow = pages;
  let showTopTrimmer = false;
  let showBottomTrimmer = false;

  const lastIndex = pages.length - 1;

  if (pages.length > 9) {
    if (current < 5) {
      pagesToShow = pagesToShow.slice(0, 7);
      showTopTrimmer = true;
    } else if (current > lastIndex - 5) {
      pagesToShow = pagesToShow.slice(lastIndex - 5);
      showBottomTrimmer = true;
    } else {
      pagesToShow = pagesToShow.slice(current - 2, current + 3);
      showBottomTrimmer = true;
      showTopTrimmer = true;
    }
  }

  return (
    <nav aria-label={props.ariaLabel}>
      <ul className="pagination">
        <PaginationItem disabled={isPrevDisabled} onClick={() => onPrev()}>
          <span className="page-previous-icon" aria-hidden="true" />
          <span className="page-previous-text"> {prevText ? prevText : 'Anterior'}</span>
        </PaginationItem>

        {showBottomTrimmer && (
          <>
            <PaginationNumber index={0} current={current} onClick={() => onPageSelected(0)} />
            <PaginationItem disabled={true}>...</PaginationItem>
          </>
        )}

        {pagesToShow.map((i) => (
          <PaginationNumber index={i} key={i} current={current} onClick={() => onPageSelected(i)} />
        ))}

        {showTopTrimmer && (
          <>
            <PaginationItem disabled={true}>...</PaginationItem>
            <PaginationNumber index={lastIndex} current={current} onClick={() => onPageSelected(lastIndex)} />
          </>
        )}

        <PaginationItem disabled={isNextDisabled} onClick={() => onNext()}>
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
  active?: boolean;
  disabled?: boolean;
}

export const PaginationItem: React.FC<PaginationItemProps> = (props: React.PropsWithChildren<PaginationItemProps>) => {
  const onClick: React.MouseEventHandler = (event) => {
    event.preventDefault();
    props.onClick && props.onClick();
  };

  if (props.disabled) {
    return (
      <li className="page-item disabled">
        <span className="page-link">{props.children}</span>
      </li>
    );
  }

  return (
    <li className={`page-item ${props.active ? 'active' : ''}`}>
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
    <PaginationItem active={index === current} onClick={onClick}>
      {index + 1}
    </PaginationItem>
  );
};
