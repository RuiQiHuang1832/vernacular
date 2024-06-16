/** @type {import('next').NextConfig} */


const nextConfig = {
  async redirects() {
    return [
      {
        source: '/settings',
        destination: '/settings/general',
        permanent: true, // or false depending on your requirement
      },
    ]
  },
    swcMinify: false,
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'image.tmdb.org',
            port: '',
            pathname: '/t/p/original/**',
          },
        ],
      },
}
module.exports = nextConfig
