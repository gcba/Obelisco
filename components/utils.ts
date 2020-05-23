export type Type =
  | "primary"
  | "secondary"
  | "success"
  | "info"
  | "warning"
  | "danger"
  | "light"
  | "dark";
export const types: Type[] = [
  "primary",
  "secondary",
  "success",
  "info",
  "warning",
  "danger",
  "light",
  "dark"
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
