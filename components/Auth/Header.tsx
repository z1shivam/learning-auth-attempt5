import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <Link href={"/"}>
      <h1 className={cn("text-3xl font-semibold", font.className)}>🔐SimpleAuth</h1>
      </Link>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
