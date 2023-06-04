import { Gpt } from "@/components/Gpt";
import { Markdown } from "@/components/Markdown";
import { getData } from "@/lib/utils";
import React from "react";

interface PageProps {
  params: {
    title: string;
  };
}

async function page({ params }: PageProps) {
  const uri = `${process.env.BACKEND_URL}/api/models/${params.title}`;
  const res = await getData(uri);
  const data = res["data"];
  const steps = Object.values(data.attributes.steps);

  return (
    <div className="max-w-5xl mx-auto pb-8">
      <div className="p-8 flex flex-col gap-8">
        <h1 className="text-4xl font-bold text-center">
          {data.attributes.title}
        </h1>
        <div className="flex flex-col gap-4">
          {steps.map((description: any) => {
            const theKey = description.split(":");
            return (
              <div className="flex gap-3 text-lg text-gray-600 font-medium mb-2">
                <p>✨</p>
                <p>
                  <span className="font-bold">{theKey[0]}: </span>
                  {theKey[1]}
                </p>
              </div>
            );
          })}
        </div>
        <div className="">
          <Gpt dbData={data}/>
        </div>
        <div className="">
          <h2 className="text-2xl font-bold">API Implementation: </h2>
          <Markdown markdown={data.attributes.code} />
        </div>
      </div>
    </div>
  );
}

export default page;
