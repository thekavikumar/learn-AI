import { Loader2 } from "lucide-react";
import React from "react";

export default function loading() {
  return (
    <div className="flex items-center justify-center mt-72">
      <Loader2 className="animate-spin" width={30} height={30} />
    </div>
  );
}
