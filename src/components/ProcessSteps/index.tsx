import React from 'react';

// Components
import { Size, sizeToClass } from '../utils';
import classnames from 'classnames';

export interface ListStepsContent {
  title: string;
  description?: string[];
  isLightItem?: boolean;
}

interface ListStepsProps {
  content: ListStepsContent[];
  size?: Size;
  isLight?: boolean;
  isNumbered?: boolean;
}

export const ListSteps: React.FC<ListStepsProps> = (props: React.PropsWithChildren<ListStepsProps>) => {
  const { content, size, isLight, isNumbered } = props;

  const ListStepsClasses = classnames(
    'list-steps',
    size && sizeToClass(size) && `list-steps-${sizeToClass(size)}`,
    { 'list-steps-light': isLight },
    { 'list-steps-numbers': isNumbered }
  );
  return (
    <ul className={ListStepsClasses.trim()}>
      {content.map(({ title, description, isLightItem }, index) => (
        <li className={`list-steps-item ${isLightItem ? `list-steps-item-light` : ''.trim()}`} key={index}>
          <h4>{title}</h4>
          {description && description.map((item, i) => <p key={i}>{item}</p>)}
        </li>
      ))}
    </ul>
  );
};
