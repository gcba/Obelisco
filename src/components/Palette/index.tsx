import * as React from 'react';

export interface paletteProps {
  items: colors[];
}

export interface colors {
  name: string;
  level: string;
  hex?: string;
}

//#38485C #505E70 #9EAAB8 #007BC7

export const Palette: React.FC<paletteProps> = (props: React.PropsWithChildren<paletteProps>) => {
  const { items } = props;
  return (
    <>
      {items.map((item) => (
        <>
          <div className="palette-card" style={{ boxShadow: `0 0 0 2px ${item.hex} inset` }}>
            <div className="palette-color-background" style={{ backgroundColor: item.hex }}></div>
            <div className="palette-body">
              <h4 className="palette-card-title">{item.name}</h4>
              <span className="palette-span-bold">{item.level}</span>
              <div className="palette-hex">
                <span>Hex</span>
                <span>{item.hex}</span>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
};
