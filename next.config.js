module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_API_BASE_URL : process.env.NEXT_PUBLIC_API_BASE_URL ,
  },
  serverRuntimeConfig: {
    apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL ,
  },
  publicRuntimeConfig: {
    apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || '/api',
  },
};
