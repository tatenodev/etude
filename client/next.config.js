/** @type {import('next').NextConfig} */
const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  images: {
    domains: ["raw.githubusercontent.com"],
  },
  ...withVanillaExtract(),
};

module.exports = nextConfig;
