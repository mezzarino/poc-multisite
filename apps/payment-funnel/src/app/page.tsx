import { Metadata } from "next";
import Link from "next/link";
import { CurrencyWidget } from "shared-components-mezzarino";

export const metadata: Metadata = {
  title: "Funnel project",
};

export default function Home() {

  const apiKey = process.env.X_RAPIDAPI_KEY as string;
  const apiHost = process.env.X_RAPIDAPI_HOST as string;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-gray-600">
      <main className="mx-auto w-auto px-4 pt-16 pb-8 sm:pt-24 lg:px-8">
        <h1 className="mx-auto text-center text-6xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl xl:text-8xl">
          Funnel project
        </h1>
        <ul className="mt-12">
          <li className="mt-12 inline mr-4">
            <Link href="/brands/brand-a" className="p-4 border border-white bg-white text-gray-600">Brand A</Link>
          </li>
          <li className="mt-12 inline mr-4">
            <Link href="/brands/brand-b" className="p-4 border border-white bg-white text-gray-600">Brand B</Link>
          </li>
          <li className="mt-12 inline mr-4">
            <Link href="/brands/brand-c" className="p-4 border border-white bg-white text-gray-600">Brand C</Link>
          </li>
        </ul>
      </main>
      <div className="mt-12 mx-auto w-1/2 text-white border border-white p-4">
        <CurrencyWidget apiKey={apiKey} apiHost={apiHost} />
        </div>
    </div>
  );
}
