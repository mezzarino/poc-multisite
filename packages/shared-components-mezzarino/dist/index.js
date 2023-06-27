'use strict';

var jsxRuntime = require('react/jsx-runtime');

var r=()=>jsxRuntime.jsx("div",{className:"ui-p-4 ui-h-full",children:jsxRuntime.jsx("p",{className:"ui-inline-block ui-text-xl",children:"This is an example widget, which is shared across funnel, customer and external website projects."})});

exports.CurrencyWidget = r;
