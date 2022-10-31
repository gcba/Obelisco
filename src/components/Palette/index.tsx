import * as React from 'react';

export interface PaletteProps {
  items: colors[];
}

export interface colors {
  name?: string;
  level?: string;
  hex: string;
  className: string;
}

export const Palette: React.FC<PaletteProps> = (props: React.PropsWithChildren<PaletteProps>) => {
  const { items } = props;
  return (
    <>
      {items.map((item) => (
        <div key={item.hex} className={`palette-card-${item.className}`}>
          <div className={`palette-background-${item.className}`}></div>
          <div className="palette-body">
            <h4 className="palette-card-title">{item.name}</h4>
            <span className="palette-span-bold">{item.level}</span>
            <div className="palette-hex">
              <span>Hex</span>
              <span>{item.hex}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export const PaletteDetailsColor: React.FC<PaletteProps> = (props: React.PropsWithChildren<PaletteProps>) => {
  const { items } = props;
  return (
    <>
      {items.map((item) => (
        <div key={item.hex} className={`palette-card-${item.className}`}>
          <div className={`palette-background-${item.className}`}></div>
          <div className="palette-body">
            <div className="palette-hex-details">
              <span>Hex</span>
              <span>{item.hex}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
