import { ModalCard } from "@/components/ModalCard";
import { SearchBar } from "@/components/SearchBar";
import { getData } from "@/lib/utils";
import Link from "next/link";
import React from "react";

async function page() {
  const uri = `${process.env.BACKEND_URL}/api/models`;
  const data = await getData(uri);
  return (
    <div className="mb-14">
      <div className="flex items-center justify-center mt-10">
        <SearchBar />
      </div>
      {data["data"].map((m: any) => {
        return (
          <div className="p-5 mt-5">
            <Link href={`/mlmodels/${m.id}`}>
              <ModalCard model={m} key={m.id} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default page;
