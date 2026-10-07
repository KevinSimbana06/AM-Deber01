import type { ReactNode } from "react";

interface ButtonProps {
  label: ReactNode;
  onClick: () => void;
  variant?: "digit" | "operation" | "control" | "equals";
  spanTwo?: boolean;
  spanThree?: boolean;
  grow?: boolean;
  ariaLabel?: string;
}

const baseClasses =
  "rounded-xl px-4 py-3 text-lg font-medium transition active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70";

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  digit: "bg-[#e2e4e9] text-[#111111] hover:brightness-95",
  operation: "bg-[#3c8dbc] text-white hover:brightness-110",
  control: "bg-[#d33724] text-white hover:brightness-110",
  equals: "bg-[#3c8dbc] text-white hover:brightness-110",
};

export function Button({
  label,
  onClick,
  variant = "digit",
  spanTwo = false,
  spanThree = false,
  grow = false,
  ariaLabel,
}: ButtonProps) {
  const spanClass = spanThree
    ? "col-span-3"
    : spanTwo
      ? "col-span-2"
      : "";
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel ?? (typeof label === "string" ? label : undefined)}
      className={`${baseClasses} ${variantClasses[variant]} ${spanClass} ${grow ? "flex-1" : ""}`}
    >
      {label}
    </button>
  );
}
