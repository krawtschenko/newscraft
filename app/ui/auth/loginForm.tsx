import { BlockContent } from "@/app/ui/blockContent";

export const LoginForm = () => {
  return (
    <BlockContent className="flex flex-col gap-6">
      <h3 className="text-[28px]">Log In</h3>
      <input type="text" />
      <input type="text" />
    </BlockContent>
  );
};
