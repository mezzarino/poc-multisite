import { exchangeRateData } from '../data/ExchangeRateData';

export const CurrencyWidget = (props: { apiKey: string; apiHost: string; }) => {
    
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
                                {exchangeRateData[0].rate}
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
                                {exchangeRateData[1].rate}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
};