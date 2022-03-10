/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  headers: {
    "Cache-Control": "max-age=31536000",
  },
};

module.exports = nextConfig;
