import { BlockContent } from "@/app/ui/blockContent";
import { Input } from "@/app/ui/input";

export const LoginForm = () => {
  return (
    <BlockContent className="flex flex-col gap-6">
      <h3 className="text-[28px]">Log In</h3>
      <Input label={"Email"} type={"email"} />
      <Input label={"Password"} type={"password"} />
      <button className="self-end py-1.5 w-[69px] bg-sky-600 rounded-sm cursor-pointer hover:bg-sky-800 active:bg-sky-950 text-white transition">
        Log In
      </button>
    </BlockContent>
  );
};
