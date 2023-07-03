import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "API Project",
  description: "API Project"
};

export default function Home() {

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="mx-auto w-auto px-4 pt-16 pb-8 sm:pt-24 lg:px-8">
        <h1 className="mx-auto text-center text-6xl font-bold tracking-tight text-black sm:text-7xl lg:text-8xl xl:text-8xl">
          API Project
        </h1>
        <p className="mt-12 mx-auto text-black"><Link className="text-black border border-black p-2" href="/api/exchangerates">View Exchange Rates API</Link></p>
      </main>
    </div>
  );
}
