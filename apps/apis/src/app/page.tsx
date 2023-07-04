import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "API Project",
  description: "API Project",
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="mx-auto w-auto px-4 pb-8 pt-16 sm:pt-24 lg:px-8">
        <h1 className="mx-auto text-center text-6xl font-bold tracking-tight text-black sm:text-7xl lg:text-8xl xl:text-8xl">
          API Project
        </h1>
        <p className="mx-auto mt-12 text-black">
          <Link
            className="border border-black p-2 text-black"
            href="/api/exchangerates"
          >
            View Exchange Rates API
          </Link>
        </p>
      </main>
    </div>
  );
}
