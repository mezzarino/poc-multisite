"use client";

import { useState } from "react";

export const CurrencyWidget = (props: { apiKey: string; apiHost: string; }) => {

    const [euroRate, setEuroRate] = useState("");
    const [dollarRate, setDollarRate] = useState("");

    const exchangeRateApiConfig = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': props.apiKey as string,
            'X-RapidAPI-Host': props.apiHost as string
        }
    };

    const getExchangeRate = async (currencyCode: string) => {

        const exchangeRateApiUrl = `https://exchange-rate-by-api-ninjas.p.rapidapi.com/v1/exchangerate?pair=GBP_${currencyCode}`;

        try {
            const response = await fetch(exchangeRateApiUrl, exchangeRateApiConfig);
            const result = await response.json();

            return result.exchange_rate;
            
        } catch (error) {
            return (error);
        }
    }

    const getEuroRate = () => {

        getExchangeRate("EUR").then((convertedExchangeRate) => {
            const exchangeRate: string = convertedExchangeRate as string;
            setEuroRate(exchangeRate);
        });
    };

    const getDollarRate = () => {
        getExchangeRate("USD").then((convertedExchangeRate) => {
            const exchangeRate: string = convertedExchangeRate as string;
            setDollarRate(exchangeRate);
        });
    };

    getEuroRate();

    getDollarRate();

    return (
        <>
            <div className="ui-p-4 ui-h-full">
            <p className="ui-inline-block ui-text-xl">
                This is an example widget, which is shared across funnel, customer and external website projects.
            </p>
            </div>
                
            <div className="ui-relative ui-overflow-x-auto ui-shadow-md ui-sm:rounded-lg">
                <table className="ui-w-full ui-text-sm ui-text-left">
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
                    <tbody>
                        <tr className="ui-border-b">
                            <th scope="row" className="ui-px-6 ui-py-4 ui-font-medium ui-whitespace-nowrap">
                                European Union
                            </th>
                            <td className="ui-px-6 ui-py-4">
                                Euro (EUR)
                            </td>
                            <td className="ui-px-6 ui-py-4">
                                {euroRate}
                            </td>
                        </tr>
                        <tr className="ui-border-b">
                            <th scope="row" className="ui-px-6 ui-py-4 ui-font-medium ui-whitespace-nowrap">
                                USA
                            </th>
                            <td className="ui-px-6 ui-py-4">
                                U.S. Dollar (USD)
                            </td>
                            <td className="ui-px-6 ui-py-4">
                                {dollarRate}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
};