import { Markdown } from "@/components/Markdown";
import { Youtube } from "@/components/Youtube";
import { getData } from "@/lib/utils";
import Link from "next/link";

interface PageProps {
  params: {
    title: string;
  };
}

export default async function Page({ params }: PageProps) {
  const uri = `${process.env.BACKEND_URL}/api/models/${params.title}`;
  const res = await getData(uri);
  const data = res["data"];
  const descriptions = Object.values(data.attributes.description);
  const codeDescriptions = Object.values(data.attributes.codeDescription);
  const refs = Object.values(data.attributes.references);
  return (
    <div className="max-w-5xl mx-auto pb-8">
      <div className="p-8 flex flex-col gap-8">
        <h1 className="text-4xl font-bold text-center">
          {data.attributes.title}
        </h1>
        <Youtube
          link={data.attributes.videoLink}
          title={data.attributes.title}
        />
        <div className="flex flex-col gap-4">
          {descriptions.map((description: any) => {
            return (
              <p className="text-lg text-gray-600 font-medium border-l-[7px] p-3 border-gray-300">
                {description}
              </p>
            );
          })}
        </div>
        <div className="">
          <Markdown markdown={data.attributes.code} />
        </div>
        <div className="flex flex-col gap-4">
          {codeDescriptions.map((description: any) => {
            return (
              <p className="text-lg text-gray-600 font-medium mb-2">
                {description}
              </p>
            );
          })}
        </div>
        <div className="flex flex-col gap-4">
          <h1>Some links for more information:</h1>
          {refs.map((ref: any) => {
            return (
              <Link href={ref} className="underline hover:text-blue-500">
                {ref}
              </Link>
            );
          })}
          <Link
            href={`/demo/${data.id}`}
            className="underline hover:text-blue-500"
          >
            Try Out Online
          </Link>
        </div>
      </div>
    </div>
  );
}
