import React, { FC } from "react";

interface YoutubeProps {
  title: string;
  link: string;
}

export const Youtube: FC<YoutubeProps> = ({ title, link }) => {
  return (
    <div className="rounded-md flex justify-center">
      <iframe
        className="rounded-md w-[560px] h-[315px] shadow-2xl"
        src={"https://www.youtube.com/embed/" + link}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};
