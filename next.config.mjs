/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        port: '',
        protocol: 'https',
        hostname: 'image.tmdb.org',
        pathname: '/t/p/w500/*',
      },
    ],
  },
}

export default nextConfig
