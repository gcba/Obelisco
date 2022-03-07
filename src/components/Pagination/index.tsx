import * as React from 'react';

export interface PaginationProps {
  pages: number;
  ariaLabel: string;
  default?: number;
  prevText?: string;
  nextText?: string;
  isShowPrev?: boolean;
  isShowNext?: boolean;
  isHoverItem?: boolean;
  isFocusItem?: boolean;
  onPageSelected?: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = (props: PaginationProps) => {
  const pages = Array.from(Array(props.pages).keys());
  const [current, setCurrent] = React.useState<number>(props.default || 0);
  const { prevText, nextText, isShowPrev, isShowNext, isHoverItem, isFocusItem } = props;

  const isPrevDisabled = current === 0;
  const isNextDisabled = current === pages.length - 1;

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
        {isShowPrev && (
          <PaginationItem
            isDisabled={isPrevDisabled}
            isHover={isHoverItem}
            isFocus={isFocusItem}
            onClick={() => onPrev()}>
            <span className="page-previous-icon" aria-hidden="true" />
            <span className="page-previous-text"> {prevText ? prevText : 'Anterior'}</span>
          </PaginationItem>
        )}

        {isShowBottomTrimmer && (
          <>
            <PaginationNumber index={0} current={current} onClick={() => onPageSelected(0)} />
            <PaginationItem isDisabled={true}>...</PaginationItem>
          </>
        )}

        {pagesToShow.map((i) => (
          <PaginationNumber index={i} key={i} current={current} onClick={() => onPageSelected(i)} />
        ))}

        {isShowTopTrimmer && (
          <>
            <PaginationItem isDisabled={true}>...</PaginationItem>
            <PaginationNumber index={lastIndex} current={current} onClick={() => onPageSelected(lastIndex)} />
          </>
        )}

        {isShowNext && (
          <PaginationItem
            isDisabled={isNextDisabled}
            isHover={isHoverItem}
            isFocus={isFocusItem}
            onClick={() => onNext()}>
            <span className="page-next-text">{nextText ? nextText : 'Siguiente'} </span>
            <span className="page-next-icon" aria-hidden="true" />
          </PaginationItem>
        )}
      </ul>
    </nav>
  );
};

interface PaginationItemProps {
  onClick?: () => void;
  className?: string;
  isActive?: boolean;
  isDisabled?: boolean;
  isHover?: boolean;
  isFocus?: boolean;
}

export const PaginationItem: React.FC<PaginationItemProps> = (props: React.PropsWithChildren<PaginationItemProps>) => {
  const onClick: React.MouseEventHandler = (event) => {
    event.preventDefault();
    props.onClick && props.onClick();
  };

  if (props.isDisabled) {
    return (
      <li className="page-item disabled">
        <span className="page-link">{props.children}</span>
      </li>
    );
  }

  if (props.isHover) {
    return (
      <li className="page-item">
        <a className="page-link hover" href="javascript:void(0)" onClick={onClick}>
          {props.children}
        </a>
      </li>
    );
  }

  if (props.isFocus) {
    return (
      <li className="page-item">
        <a className="page-link focus" href="javascript:void(0)" onClick={onClick}>
          {props.children}
        </a>
      </li>
    );
  }

  return (
    <li className={`page-item ${props.isActive ? 'active' : ''}`}>
      <a className="page-link" href="javascript:void(0)" onClick={onClick}>
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
