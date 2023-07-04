import { Metadata } from "next";
import { CurrencyWidget } from "shared-components-mezzarino";

import { apiKey, apiHost } from "./constants";

export const metadata: Metadata = {
  title: "Customer website project",
  description: "Customer website project",
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="mx-auto w-auto px-4 pb-8 pt-16 sm:pt-24 lg:px-8">
        <h1 className="mx-auto text-center text-6xl font-bold tracking-tight text-black sm:text-7xl lg:text-8xl xl:text-8xl">
          Customer website project
        </h1>
        <div className="mx-auto mt-12 w-1/2 border border-black p-4 text-black">
          <CurrencyWidget apiKey={apiKey} apiHost={apiHost} />
        </div>
      </main>
    </div>
  );
}
