/**
 * Componentes de Texto
 *
 * Estos componentes ofrecen variaciones para renderizar texto y aplicar transformaciones de texto.
 *
 * @param {object} props - Propiedades compartidas por todos los componentes de texto.
 * @param {string} [props.as] - Se aplica solo en el tipo de encabezado (h1 - h6).
 * @param {string} [props.className] - Clases CSS adicionales.
 * @param {React.ReactNode} props.children - Contenido del componente de texto.
 */

import React, { ReactNode } from 'react';

interface BaseTextProps {
  className?: string;
  children?: ReactNode | ReactNode[];
  weight?: 'font-weight-normal' | 'font-weight-semibold' | 'font-weight-bold';
  style?: React.CSSProperties;
}

interface TypographysProps extends BaseTextProps {
  as:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'p'
    | 'small'
    | 'strong'
    | 'em'
    | 'mark'
    | 'sup'
    | 'sub'
    | 'kbd'
    | 'spam';
}

export const Typography: React.FC<TypographysProps> = ({ as, className, children, weight }) => {
  const classes = className ? `${className} ${weight || ''}`.trim() : weight; // Trim para eliminar posibles espacios en blanco sobrantes
  return React.createElement(as, { className: classes }, children);
};

export const Blockquote: React.FC<BaseTextProps> = ({ className, children }) => {
  return <blockquote className={className}>{children}</blockquote>;
};

export const UnorderedList: React.FC<BaseTextProps> = ({ className, children }) => {
  return <ul className={className}>{children}</ul>;
};

export const OrderedList: React.FC<BaseTextProps> = ({ className, children }) => {
  return <ol className={className}>{children}</ol>;
};

export const ListItem: React.FC<BaseTextProps> = ({ className, children }) => {
  return <li className={className}>{children}</li>;
};
