import { Metadata } from "next";
import { CurrencyWidget } from "shared-components-mezzarino";

export const metadata: Metadata = {
  title: "Customer website project",
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="mx-auto w-auto px-4 pt-16 pb-8 sm:pt-24 lg:px-8">
        <h1 className="mx-auto text-center text-6xl font-bold tracking-tight text-black sm:text-7xl lg:text-8xl xl:text-8xl">
          Customer website project
        </h1>
        <div className="mt-12 mx-auto w-96 text-black border border-black p-4">
          <CurrencyWidget />
        </div>
      </main>
    </div>
  );
}
