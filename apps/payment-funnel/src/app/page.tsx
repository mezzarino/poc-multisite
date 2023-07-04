import { Metadata } from "next";
import Link from "next/link";
import { CurrencyWidget } from "shared-components-mezzarino";

import { apiKey, apiHost } from "./constants";

export const metadata: Metadata = {
  title: "Funnel project",
  description: "Funnel project",
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-600 py-2">
      <main className="mx-auto w-auto px-4 pb-8 pt-16 sm:pt-24 lg:px-8">
        <h1 className="mx-auto text-center text-6xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl xl:text-8xl">
          Funnel project
        </h1>
        <ul className="mt-12">
          <li className="mr-4 mt-12 inline">
            <Link
              href="/brands/brand-a"
              className="border border-white bg-white p-4 text-gray-600"
            >
              Brand A
            </Link>
          </li>
          <li className="mr-4 mt-12 inline">
            <Link
              href="/brands/brand-b"
              className="border border-white bg-white p-4 text-gray-600"
            >
              Brand B
            </Link>
          </li>
          <li className="mr-4 mt-12 inline">
            <Link
              href="/brands/brand-c"
              className="border border-white bg-white p-4 text-gray-600"
            >
              Brand C
            </Link>
          </li>
        </ul>
      </main>
      <div className="mx-auto mt-12 w-1/2 border border-white p-4 text-white">
        <CurrencyWidget apiKey={apiKey} apiHost={apiHost} />
      </div>
    </div>
  );
}
