/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'hausandhaus.com',
      },
      {
        protocol: 'https',
        hostname: 'www.hausandhaus.com',
      }
    ],
  },
};

export default nextConfig;

