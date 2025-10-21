/** @type {import('next').NextConfig} */
const nextConfig = {
  // App Router é padrão no Next.js 13+
  experimental: {
    serverComponentsExternalPackages: []
  },
  compiler: {
    styledComponents: true
  }
}

module.exports = nextConfig