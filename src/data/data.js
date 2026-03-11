export const dateArray = [
  "24-Apr-2024",
  "02-May-2024",
  "09-May-2024",
  "31-May-2024",
  "21-Jun-2024",
];

export const strategyArray = [
  {
    View: "Bullish",
    Value: {
      "24-Apr-2024": [
        "Bull Call Spread",
        "Bull Put Spread",
        "Bull Put Spread",
        "Long Call",
        "Bull Put Spread",
        "Bull Call Spread",
      ],

      "02-May-2024": [
        "Bull Call Spread",
        "Bull Call Spread",
        "Bull Put Spread",
        "Long Call",
        "Long Call",
      ],

      "09-May-2024": ["Strategy Put", "Strategy Call", "Strategy Call"],
    },
  },

  {
    View: "Bearish",
    Value: {
      "24-Apr-2024": [
        "Bear Call Spread",
        "Bear Call Spread",
        "Bear Call Spread",
        "Long Put",
        "Long Put",
      ],

      "31-May-2024": ["Long Put", "Long Put", "Long Put", "Long Put"],

      "21-Jun-2024": ["Strategy3", "Strategy3", "Bear Put Spread"],
    },
  },

  {
    View: "RangeBound",
    Value: {
      "24-Apr-2024": [
        "Short Straddle",
        "Short Strangle",
        "Short Strangle",
        "Iron Butterfly",
      ],

      "02-May-2024": ["Short Straddle", "Short Strangle", "Iron Butterfly"],

      "21-Jun-2024": ["Iron Condor", "Iron Butterfly"],
    },
  },

  {
    View: "Volatile",
    Value: {
      "02-May-2024": ["Long Straddle", "Long Strangle", "Long Strangle"],

      "09-May-2024": ["Long Straddle", "Long Strangle"],

      "31-May-2024": ["Long Straddle", "Long Strangle"],
    },
  },
];

export const viewsArray = strategyArray.map((item) => item.View);
