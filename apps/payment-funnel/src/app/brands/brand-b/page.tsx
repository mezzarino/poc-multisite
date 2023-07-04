import { Metadata } from "next";
import Link from "next/link";
import { CurrencyWidget } from "shared-components-mezzarino";

export const metadata: Metadata = {
  title: "Brand B on Funnel project",
  description: "Brand B on Funnel project",
};

export default function Home() {
  const apiKey = process.env.X_RAPIDAPI_KEY as string;
  const apiHost = process.env.X_RAPIDAPI_HOST as string;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white py-2">
      <main className="mx-auto w-auto px-4 pb-8 pt-16 sm:pt-24 lg:px-8">
        <h1 className="mx-auto text-center font-sans text-6xl font-extrabold tracking-tight text-orange-600 sm:text-7xl lg:text-8xl xl:text-8xl">
          Brand B on Funnel project
        </h1>
        <Link href="/">Home</Link>
        <div className="mx-auto mt-12 w-1/2 border border-orange-600 p-4 text-orange-600">
          <CurrencyWidget apiKey={apiKey} apiHost={apiHost} />
        </div>
      </main>
    </div>
  );
}
