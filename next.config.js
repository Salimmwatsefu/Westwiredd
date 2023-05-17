/** @type {import('next').NextConfig} */
const nextConfig = {
    images:  {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.unsplash.com', 
          },
          {
            protocol: 'https',
            hostname: 'assets.bose.com', 
          },
        ],
      },
}

module.exports = nextConfig
