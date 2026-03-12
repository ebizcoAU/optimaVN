/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,   // ← add this line
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
  },
}

module.exports = nextConfig