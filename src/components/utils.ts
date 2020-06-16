export type Type =
  | "primary"
  | "secondary"
  | "success"
  | "info"
  | "danger"
  | "link";

export const types: Type[] = [
  "primary",
  "secondary",
  "info",
  "success",
  "danger",
  "link"
];

export type Size = "default" | "small" | "large";
export const sizes: Size[] = ["small", "default", "large"];

export const sizeToClass = (size: Size | "default"): string => {
  switch (size) {
    case "default":
      return "";
    case "large":
      return "lg";
    case "small":
      return "sm";
  }
};
