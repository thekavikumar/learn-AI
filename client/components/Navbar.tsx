"use client";
import Link from "next/link";
import React, { FC } from "react";
import { Button } from "./Button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

interface NavbarProps {}

export const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="font-bold text-3xl">Learn AI</h1>
      <div className="flex items-center gap-10">
        <Link
          href="/"
          className="text-gray-500 hover:text-black duration-200 transition font-medium"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-gray-500 hover:text-black duration-200 transition font-medium"
        >
          About
        </Link>
        <Link
          href="/mlmodels"
          className="text-gray-500 hover:text-black duration-200 transition font-medium"
        >
          ML Models
        </Link>
        <Link
          href="/contact"
          className="text-gray-500 hover:text-black duration-200 transition font-medium"
        >
          Contact
        </Link>
      </div>
      <SignedOut>
        <div className="flex items-center gap-5">
          <Button>
            <Link href="/sign-in">Login</Link>
          </Button>
        </div>
      </SignedOut>
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
    </div>
  );
};
