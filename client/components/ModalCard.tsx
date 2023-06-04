import Image from "next/image";
import React, { FC } from "react";

interface ModalCardProps {
  model: any;
}

export const ModalCard: FC<ModalCardProps> = ({ model }) => {
  return (
    <div className="flex gap-6 max-w-5xl mx-auto border-2 hover:shadow-xl hover:scale-105 duration-150 border-gray-500 rounded-md">
      <Image
        src={`${model.attributes.image}`}
        alt={model.attributes.title}
        width={400}
        height={400}
        className="rounded-md"
      />
      <div className="flex flex-col gap-4 p-3">
        <h2 className="text-3xl font-bold">{model.attributes.title}</h2>
        <p className="text-lg text-gray-600 font-medium">
          {model.attributes.description["one"]}
        </p>
      </div>
    </div>
  );
};
