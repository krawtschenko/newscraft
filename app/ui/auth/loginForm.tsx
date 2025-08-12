"use client";

import { BlockContent } from "@/app/ui/blockContent";
import { Input } from "@/app/ui/input";
import { LoginSchema, loginSchema } from "@/app/ui/auth/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type Props = {
  onLoginAction: (data: LoginSchema) => void;
};

export const LoginForm = ({ onLoginAction }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  return (
    <BlockContent>
      <form onSubmit={handleSubmit((data) => onLoginAction(data))}>
        <div className="flex flex-col gap-6">
          <h3 className="text-[28px]">Log In</h3>
          <Input
            label={"Email"}
            {...register("email")}
            error={errors.email?.message}
          />

          <Input
            label={"Password"}
            type={"password"}
            {...register("password")}
            error={errors.password?.message}
          />

          <button className="self-end py-1.5 w-[69px] bg-sky-600 rounded-sm cursor-pointer hover:bg-sky-800 active:bg-sky-950 text-white transition">
            Log In
          </button>
        </div>
      </form>
    </BlockContent>
  );
};
