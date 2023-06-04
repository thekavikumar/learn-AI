"use client";

import React, { ButtonHTMLAttributes, FC, useState } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  loading?: boolean;
}

export const Button: FC<
  ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, className }) => {
  const [loading, setLoading] = useState(false);

  return (
    <button
      onClick={() => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      }}
      className={cn(
        "flex items-center border border-black px-5 py-2 rounded-[5px] font-semibold text-sm hover:bg-black  duration-150 hover:text-white transition-all",
        className
      )}
    >
      {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      {children}
    </button>
  );
};
