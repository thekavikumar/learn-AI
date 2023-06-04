import React, { FC } from "react";
import Link from "next/link";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

interface FooterProps {}

export const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className="flex justify-between items-center bg-white">
      <h1 className="text-center font-medium text-gray-700">
        Copyright@2023 Made with 💖 by Kavi Kumar
      </h1>
      <div className="flex items-center gap-5">
        <Link href="https://github.com/thekavikumar" target="_blank">
          <BsGithub className="text-2xl text-gray-700 hover:text-black duration-150 transition-all" />
        </Link>
        <Link href="https://www.instagram.com/mr.cyber_ninja/" target="_blank">
          <BsInstagram className="text-2xl text-gray-700 hover:text-black duration-150 transition-all" />
        </Link>
        <Link href="https://www.linkedin.com/in/thekavikumar/" target="_blank">
          <BsLinkedin className="text-2xl text-gray-700 hover:text-black duration-150 transition-all" />
        </Link>
      </div>
    </div>
  );
};
