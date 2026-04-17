import Link from "next/link";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const buttonClass =
  "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition hover:-translate-y-0.5";

export function Button({ children, href, className }: { children: ReactNode; href?: string; className?: string }) {
  if (href) {
    return (
      <Link href={href} className={cn(buttonClass, "bg-primary text-white", className)}>
        {children}
      </Link>
    );
  }

  return <button className={cn(buttonClass, "bg-primary text-white", className)}>{children}</button>;
}

