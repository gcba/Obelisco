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

import React from 'react';

interface BaseTextProps {
  className?: string;
  children?: React.ReactNode;
}

interface HeadingProps extends BaseTextProps {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

interface TextProps extends BaseTextProps {
  lead?: boolean;
}

export const Heading: React.FC<HeadingProps> = ({ as, className, children }) => {
  return React.createElement(as, { className }, children);
};

export const Subtitle: React.FC<TextProps> = ({ className, children }) => {
  const classes = className ? `lead ${className}` : 'lead';
  return <p className={classes}>{children}</p>;
};

export const Text: React.FC<TextProps> = ({ className, children }) => {
  return <p className={className}>{children}</p>;
};

export const Small: React.FC<TextProps> = ({ className, children }) => {
  return <small className={className}>{children}</small>;
};

export const Epigraph: React.FC<TextProps> = ({ className, children }) => {
  const classes = className ? `text-xs ${className}` : 'text-xs';
  return <p className={classes}>{children}</p>;
};

export const Em: React.FC<TextProps> = ({ className, children }) => {
  return <em className={className}>{children}</em>;
};

export const Mark: React.FC<TextProps> = ({ className, children }) => {
  return <mark className={className}>{children}</mark>;
};

export const Sup: React.FC<TextProps> = ({ className, children }) => {
  return <sup className={className}>{children}</sup>;
};

export const Sub: React.FC<TextProps> = ({ className, children }) => {
  return <sub className={className}>{children}</sub>;
};

export const Kbd: React.FC<TextProps> = ({ className, children }) => {
  return <kbd className={className}>{children}</kbd>;
};

export const Blockquote: React.FC<TextProps> = ({ className, children }) => {
  return <blockquote className={className}>{children}</blockquote>;
};

export const UnorderedList: React.FC<TextProps> = ({ className, children }) => {
  return <ul className={className}>{children}</ul>;
};

export const OrderedList: React.FC<TextProps> = ({ className, children }) => {
  return <ol className={className}>{children}</ol>;
};

export const ListItem: React.FC<TextProps> = ({ className, children }) => {
  return <li className={className}>{children}</li>;
};
