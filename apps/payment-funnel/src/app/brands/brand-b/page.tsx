import { Metadata } from "next";
import Link from "next/link";
import { CurrencyWidget } from "shared-components-mezzarino";

export const metadata: Metadata = {
  title: "Brand B on Funnel project",
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-white">
      <main className="mx-auto w-auto px-4 pt-16 pb-8 sm:pt-24 lg:px-8">
        <h1 className="font-sans mx-auto text-center text-6xl font-extrabold tracking-tight text-orange-600 sm:text-7xl lg:text-8xl xl:text-8xl">
        Brand B on Funnel project
        </h1>
        <Link href="/">Home</Link>
        <div className="mt-12 mx-auto w-96 text-orange-600 border border-orange-600 p-4">
          <CurrencyWidget />
        </div>
      </main>
    </div>
  );
}
