import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-transform duration-(--motion-quick,150ms) active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40",
  {
    variants: {
      variant: {
        primary: "bg-forest text-forest-fg shadow-card",
        ghost: "bg-transparent text-ink hover:bg-line/60",
        outline: "bg-raised text-ink shadow-card",
        soft: "bg-forest-soft text-forest",
      },
      size: {
        md: "h-11 rounded-md px-4 text-sm",
        lg: "h-12 rounded-lg px-5 text-[15px]",
        icon: "size-11 rounded-md",
        pill: "h-9 rounded-full px-3.5 text-sm",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export function Button({
  className,
  variant,
  size,
  asChild,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
