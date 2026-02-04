/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sspark.genspark.ai',
        pathname: '/cfimages/**',
      },
    ],
  },
};

export default nextConfig;
