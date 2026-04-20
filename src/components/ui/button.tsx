import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

const buttonBaseClass =
  "inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2 hover:-translate-y-0.5";

const buttonVariants = {
  primary: "bg-foreground text-background shadow-[0_10px_30px_rgba(15,23,42,0.16)] hover:bg-foreground/92",
  secondary: "border border-foreground/12 bg-background text-foreground hover:bg-foreground/[0.03]",
  ghost: "bg-transparent text-foreground/80 hover:bg-foreground/[0.04] hover:text-foreground"
} as const;

type ButtonVariant = keyof typeof buttonVariants;

export function Button({
  children,
  href,
  className,
  variant = "primary"
}: {
  children: ReactNode;
  href?: string;
  className?: string;
  variant?: ButtonVariant;
}) {
  const classes = cn(buttonBaseClass, buttonVariants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}
