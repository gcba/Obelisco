import React from 'react';

// Components
import { Size, sizeToClass } from '../utils';
import classnames from 'classnames';

export interface ListStepsContent {
  title: string;
  description?: string;
  isLightItem?: boolean;
}

interface ListStepsProps {
  content: ListStepsContent[];
  size?: Size;
  isLight?: boolean;
  isNumbered?: boolean;
}

function createList(size: number, isTextLarge?: boolean, startLightItem?: number): ListStepsContent[] {
  const list: ListStepsContent[] = [];
  for (let i = 1; i <= size; i++) {
    const step: ListStepsContent = {
      title: `Instrucción ${i}`,
      description: isTextLarge
        ? `En esta descripción de la instrucción ${i} se muestran los detalles principales de las acciones que deberá tomar el usuario luego. En esta descripción de la instrucción ${i} se muestran los detalles principales de las acciones que deberá tomar el usuario luego.`
        : `En esta descripción de la instrucción ${i} se muestran los detalles principales de las acciones que deberá tomar el usuario luego.`
    };
    startLightItem && i >= startLightItem && (step.isLightItem = true);
    list.push(step);
  }
  return list;
}

export const LISTSTEPS_CONTENT = createList(3);
export const LISTSTEPS_CONTENT_LARGE = createList(3, true);
export const LISTSTEPS_CONTENT_LIGHT_ITEMS = createList(5, false, 4);

export const ListSteps: React.FC<ListStepsProps> = (props: React.PropsWithChildren<ListStepsProps>) => {
  const { content, size, isLight, isNumbered } = props;

  const ListStepsClasses = classnames(
    'list-steps',
    size && sizeToClass(size) && `list-steps-${sizeToClass(size)}`,
    { 'list-steps-numbers': isNumbered },
    { 'list-steps-light': isLight }
  );

  return (
    <ul className={ListStepsClasses.trim()}>
      {content.map(({ title, description, isLightItem }, index) => (
        <li className={`list-steps-item ${isLightItem ? `list-steps-item-light` : ''.trim()}`} key={index}>
          <h4>{title}</h4>
          {description && <p>{description}</p>}
        </li>
      ))}
    </ul>
  );
};
