import { Container } from "@/app/ui/container";
import { SiSnapcraft } from "react-icons/si";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

type Props = {
  userId?: string;
};

export const Header = ({ userId }: Props) => {
  return (
    <div className="py-2.5 bg-[#F8F9FA] dark:bg-[#212529]">
      <Container className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href={"/"} className="text-4xl">
            <SiSnapcraft />
          </Link>

          <Link href={"/recent"}>Recent Articles</Link>
          <Link href={"/about"}>About</Link>
        </div>

        <div className="flex items-center gap-10">
          {!userId && (
            <button className="m-0 p-0 flex items-center gap-1 cursor-pointer">
              Log in <FaArrowRight />
            </button>
          )}

          {userId && (
            <>
              <Link href={"/articles"}>Recent Articles</Link>
              <Link href={"/create"}>About</Link>
              <div className="w-8 h-8 rounded-full bg-amber-500"></div>
            </>
          )}
        </div>
      </Container>
    </div>
  );
};
