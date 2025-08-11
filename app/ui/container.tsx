import { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  children: ReactNode;
  className?: string;
};

export const Container = ({ children, className }: Props) => {
  return <div className={clsx("container mx-auto", className)}>{children}</div>;
};
