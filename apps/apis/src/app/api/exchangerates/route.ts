import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      id: 1,
      country: "European Union",
      currency: "Euro (EUR)",
      rate: 1.1348,
    },
    {
      id: 2,
      country: "USA",
      currency: "U.S. Dollar (USD)",
      rate: 1.2359,
    },
    {
      id: 3,
      country: "Australia",
      currency: "Australian Dollar (AUD)",
      rate: 1.8501,
    },
  ]);
}
