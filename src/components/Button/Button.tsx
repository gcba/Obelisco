import * as React from "react";
import { Type, Size, sizeToClass } from "../utils";

export interface ButtonProps {
  type: Type;
  size?: Size;
  block?: boolean;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = (
  props: React.PropsWithChildren<ButtonProps>
) => {
  const { type, size, block, disabled, children } = props;

  let className = `btn btn-${type}`;
  if (!!size && size !== "default") className += ` btn-${sizeToClass(size)}`;
  if (block) className += ` btn-block`;

  return (
    <button type="button" className={className} disabled={disabled}>
      {children}
    </button>
  );
};
