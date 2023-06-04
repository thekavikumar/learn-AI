import React, { FC } from "react";
import { Button } from "./Button";
import Link from "next/link";

interface HeroProps {}

export const Hero: FC<HeroProps> = ({}) => {
  return (
    <div className="flex justify-between items-center">
      <div className="space-y-6">
        <h1 className="font-bold text-6xl">Welcome to Learn AI</h1>
        <p className="font-medium text-gray-600 text-xl">
          Learn AI is a platform for learning about AI and machine learning. Try
          out the modals and see how they work without coding.
        </p>
        <p className="font-medium text-gray-600 text-xl">
          We have a collection of tutorials, articles, and videos to help you
          learn about AI. We also have a community of AI enthusiasts who are
          willing to help you learn.
        </p>
        <Button className="text-md">
          <Link href="/sign-up">Get Started</Link>
        </Button>
      </div>
      <div className="flex-1">
        <iframe
          className="h-[500px] w-[500px]"
          src="https://embed.lottiefiles.com/animation/126196"
        ></iframe>
      </div>
    </div>
  );
};
