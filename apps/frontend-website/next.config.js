module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/exchangerates",
        destination: "https://poc-multisite-apis.vercel.app/api/exchangerates"
      }
    ]
  },
};
