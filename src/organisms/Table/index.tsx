import * as React from 'react';

export type TableCellContet = string | number | JSX.Element;

interface TableCellOptions {
  content: TableCellContet;
  props?: {
    [key: string]: unknown;
  };
}

type TableCell = TableCellOptions | TableCellContet;

type TableRow =
  | TableCell[]
  | {
      content: TableCell[];
      props?: {
        [key: string]: unknown;
      };
    };

export interface TableProps {
  head: TableCell[];
  body: TableRow[];
  caption?: string;
  striped?: boolean;
  bordered?: boolean;
  hoverable?: boolean;
  selectable?: boolean;
  className?: string;
  onSelectionChange?: (index: number) => void;
}

export const Table: React.FC<TableProps> = (props: React.PropsWithChildren<TableProps>) => {
  const { head, body, caption, striped, bordered, hoverable, selectable } = props;

  let className = `table`;
  if (striped) className += ` table-striped`;
  if (bordered) className += ` table-bordered`;
  if (hoverable) className += ` table-hover`;
  if (selectable) className += ` table-selectable`;
  if (props.className) className += ` ${props.className}`;

  return (
    <table className={className}>
      {caption && <caption>{caption}</caption>}
      <thead>
        <tr>
          {selectable && <TableCellRenderer type="head" cell={<Selectable />} />}
          {head.map((cell: TableCell, index: number) => (
            <TableCellRenderer type="head" cell={cell} key={index} />
          ))}
        </tr>
      </thead>
      <tbody>
        {body.map((row: TableCell[], index: number) => (
          <tr key={index}>
            {selectable && (
              <td>
                <Selectable />
              </td>
            )}
            {row.map((cell: TableCell, index: number) => (
              <TableCellRenderer type="body" cell={cell} key={index} />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

interface TableCellRendererProps {
  type: 'head' | 'body';
  cell: TableCell;
}

const TableCellRenderer: React.FC<TableCellRendererProps> = (props: TableCellRendererProps) => {
  const { type, cell } = props;
  let content: TableCellContet;
  let childProps: { [key: string]: unknown } = {};

  if (typeof cell === 'object' && !React.isValidElement(cell)) {
    content = (cell as TableCellOptions).content || '-';
    childProps = (cell as TableCellOptions).props || {};
  } else {
    content = cell as TableCellContet;
  }

  if (type === 'head') {
    return (
      <th scope="col" {...childProps}>
        {content}
      </th>
    );
  } else if (type === 'body') {
    return <td {...childProps}>{content}</td>;
  }
  return <></>;
};

const Selectable: React.FC = () => <input type="checkbox" aria-label="checkbox" />;
