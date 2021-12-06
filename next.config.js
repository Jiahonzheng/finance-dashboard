/** @type {import('next').NextConfig} */
const next = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/forex",
      },
    ];
  },
};

module.exports = {
  ...next,
};
