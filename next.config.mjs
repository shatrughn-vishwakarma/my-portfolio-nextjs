/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // basePath: '/shatrughn-vishwakarma', // 👈 add your repo name here
  // assetPrefix: '/shatrughn-vishwakarma/',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
