export type Props = {
  label: String;
  path?: string;
  target?: string;
  passHref?: boolean;
  position?: "center" | "left";
  onClick?: () => void;
};
