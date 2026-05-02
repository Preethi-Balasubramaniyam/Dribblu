/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    qualities: [75, 80, 85],
  },
}

module.exports = nextConfig
