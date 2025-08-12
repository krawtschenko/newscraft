import { ComponentPropsWithoutRef, useId } from "react";
import clsx from "clsx";

type Props = {
  label?: string;
  error?: string;
} & ComponentPropsWithoutRef<"input">;

export const Input = ({ label, error, ...rest }: Props) => {
  const id = useId();

  return (
    <div className="w-[304px] relative">
      {label && (
        <label className="block font-light" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        className={clsx(
          "w-full py-1.5 px-3 border border-[#DFDFDF] rounded-sm focus:outline-none hover:border-sky-300 focus:border-sky-400 transition",
          error && "border-red-600",
        )}
        id={id}
        {...rest}
      />
      {error && (
        <span className="absolute block font-light text-sm text-red-600">
          {error}
        </span>
      )}
    </div>
  );
};
