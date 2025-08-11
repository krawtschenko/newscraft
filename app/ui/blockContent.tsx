import { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  children?: ReactNode;
  className?: string;
};

export const BlockContent = ({ children, className }: Props) => {
  return (
    <div
      className={clsx(
        "p-8 rounded-lg shadow-[0_16px_48px_0_rgba(0,0,0,0.18)] dark:shadow-none dark:bg-[#212529]",
        className,
      )}
    >
      {children}
    </div>
  );
};
