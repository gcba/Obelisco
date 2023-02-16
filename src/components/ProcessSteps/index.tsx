import * as React from 'react';

interface ListProps {
  className?: string;
  items: ListItems[];
}

interface ListItems {
  title: string;
  description: string;
}

export const List: React.FC<ListProps> = ({ className, items }) => {
  return (
    <ul className={`${className ? `${className} ` : ''}list-steps`}>
      {items.map((item, index) => (
        <li className="list-steps-item" key={index}>
          <h5>{item.title}</h5>
          <p>{item.description}</p>
        </li>
      ))}
    </ul>
  );
};
