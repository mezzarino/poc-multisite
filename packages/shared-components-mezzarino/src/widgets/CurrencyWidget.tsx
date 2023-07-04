"use client";

import { useEffect, useState } from "react";

export const CurrencyWidget = (props: { apiKey: string; apiHost: string }) => {
  const [exchangeRate, setExchangeRate] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const getExchangeRates = async () => {
    const response = await fetch("/api/exchangerates");

    if (!response.ok) {
      throw new Error("Failed to fetch exchange rates");
    }

    setExchangeRate(await response.json());
    setLoading(false);
  };

  const loadingRates = (
    <tr className="ui-border-b">
      <th
        scope="row"
        colSpan={3}
        className="ui-whitespace-nowrap ui-px-6 ui-py-4 ui-font-medium"
      >
        Loading rates...
      </th>
    </tr>
  );

  const loadedRates = exchangeRate.map((currency) => {
    return (
      <tr className="ui-border-b" key={currency.id}>
        <th
          scope="row"
          className="ui-whitespace-nowrap ui-px-6 ui-py-4 ui-font-medium"
        >
          {currency.country}
        </th>
        <td className="ui-px-6 ui-py-4">{currency.currency}</td>
        <td className="ui-px-6 ui-py-4">{currency.rate}</td>
      </tr>
    );
  });

  const rateContent: JSX.Element = !loading
    ? (loadedRates as unknown as JSX.Element)
    : loadingRates;

  useEffect(() => {
    getExchangeRates();
  }, []);

  return (
    <>
      <div className="ui-h-full ui-p-4">
        <p className="ui-inline-block ui-text-xl">
          This is an example widget, which is shared across funnel, customer and
          external website projects.
        </p>
      </div>

      <div className="ui-sm:rounded-lg ui-relative ui-overflow-x-auto ui-shadow-md">
        <table className="ui-w-full ui-text-left ui-text-sm">
          <thead className="ui-text-xsui-uppercase">
            <tr>
              <th scope="col" className="ui-px-6 ui-py-3">
                Country
              </th>
              <th scope="col" className="ui-px-6 ui-py-3">
                Currency
              </th>
              <th scope="col" className="ui-px-6 ui-py-3">
                Sell Rate
              </th>
            </tr>
          </thead>
          <tbody>{rateContent}</tbody>
        </table>
      </div>
    </>
  );
};
