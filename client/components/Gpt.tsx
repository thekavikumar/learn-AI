"use client";
import React, { FC, useState } from "react";
import { dollyChat, gptChatCompletion, imageCreate } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import Image from "next/image";

interface InputProps {
  dbData: any;
}

export const Gpt: FC<InputProps> = ({ dbData }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [data, setData] = useState("");

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleSubmit = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    if (dbData.attributes.model == "chatgpt") {
      const res = await gptChatCompletion(prompt);
      setData(`${res?.content}`);
      return;
    }
    if (dbData.attributes.model == "dolly") {
      const res = await dollyChat(prompt);
      setData(`${res?.message}`);
      return;
    }
    if (dbData.attributes.model == "image") {
      const res = await imageCreate(prompt);
      setData(`${res}`);
      return;
    }
  };

  const [loading, setLoading] = useState(false);

  return (
    <div className="flex gap-3 flex-col">
      <div className="flex gap-3 items-center">
        <h2 className="text-xl font-bold">Try Out here: </h2>
        <div
          className={`border-2 rounded-md flex p-3 w-1/2 ${
            isFocused ? "border-2 border-gray-500 shadow-md" : ""
          }`}
        >
          <input
            type="search"
            onFocus={handleFocus}
            onChange={(e) => setPrompt(e.target.value)}
            onBlur={handleBlur}
            className="w-full focus:outline-none bg-transparent"
            placeholder="Type your prompt here...."
          />
        </div>
        <button
          onClick={handleSubmit}
          className={
            "flex items-center border border-black px-5 py-2 rounded-[5px] font-semibold text-sm hover:bg-black  duration-150 hover:text-white transition-all"
          }
        >
          {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}

          <span className="font-bold text-xl">Generate</span>
        </button>
      </div>
      {dbData.attributes.model != "image" && (
        <div className="">
          {data !== "" && <p className="text-xl font-bold">Response: </p>}
          <p className="text-lg">{data}</p>
        </div>
      )}

      {dbData.attributes.model == "image" && data !== "" && (
        <div className="">
          {data !== "" && (
            <Image src={data} alt="gpt3" width={400} height={400} />
          )}
        </div>
      )}
    </div>
  );
};
