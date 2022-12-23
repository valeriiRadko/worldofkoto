/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    dirs: ["pages", "components", "lib", "src", "hooks", "config"],
  },
}

module.exports = nextConfig
