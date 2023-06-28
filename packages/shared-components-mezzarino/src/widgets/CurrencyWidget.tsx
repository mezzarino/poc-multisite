"use client";

import { useState } from "react";

export const CurrencyWidget = () => {

    const [rate, setRate] = useState(0);

    const handleRateUpdate = () => {
        setRate(23);
    };

    return (
        <div className="ui-p-4 ui-h-full">
            <p className="ui-inline-block ui-text-xl">
                This is an example widget, which is shared across funnel, customer and external website projects.
            </p>
            <p>{rate}</p>
            <p><button onClick={handleRateUpdate}>Update the rate</button></p>
        </div>
    )
};