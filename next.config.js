/** @type {import('next').NextConfig} */
const nextImages = require('next-images')
const nextVideos = require('next-videos')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async exportPathMap() {
    return {
      '/index.js': { page: '/' },
      '/news/index.js': { page: '/news' },
      '/news/detail.js': { page: '/news/detail' },
      '/posts/index.js': { page: '/posts' },
      '/posts/detail.js': { page: '/posts/detail' }
    }
  },
  trailingSlash: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  }
}

module.exports = nextImages(nextVideos(nextConfig))