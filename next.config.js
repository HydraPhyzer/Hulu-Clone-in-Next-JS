/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  images: {
    domains: ['www.pinterest.com','i.pinimg.com','image.tmdb.org'],
  },
}
// module.exports = nextConfig

