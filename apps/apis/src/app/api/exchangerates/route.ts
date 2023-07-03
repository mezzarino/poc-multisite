import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json([
        {
            id: 1,
            country: "European Union",
            currency: "Euro (EUR)",
            rate: 1.1232
        },
        {
            id: 2,
            country: "United States",
            currency: "U.S. Dollar (USD)",
            rate: 1.2674
        }
    ]);
};