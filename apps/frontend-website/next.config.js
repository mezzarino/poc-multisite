module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/exchangerates",
        destination: "http://localhost:3002/api/exchangerates"
      }
    ]
  },
};
