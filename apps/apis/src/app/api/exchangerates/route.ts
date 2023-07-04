import { NextApiResponse } from "next";

export async function GET(res: NextApiResponse) {
  const data = [
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
  ];

  res.status(200).json(data);
}
