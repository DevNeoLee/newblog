/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next.js 15 optimization for 100% static pages
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000, // 1 year cache for optimized images
  },
  
  // Compiler optimizations for production
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  async redirects() {
    return [
      // www 리다이렉트 (프로덕션에서만)
      ...(process.env.NODE_ENV === 'production' ? [{
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.moyahug.com',
          },
        ],
        destination: 'https://moyahug.com/:path*',
        permanent: true,
      }] : []),
      // HTTP to HTTPS 리다이렉트 (프로덕션에서만)
      ...(process.env.NODE_ENV === 'production' ? [{
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        destination: 'https://moyahug.com/:path*',
        permanent: true,
      }] : []),
      // HTTP + www 조합 리다이렉트 (프로덕션에서만)
      ...(process.env.NODE_ENV === 'production' ? [{
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.moyahug.com',
          },
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        destination: 'https://moyahug.com/:path*',
        permanent: true,
      }] : []),
    ];
  },
  async headers() {
    return [
      // Global security and performance headers
      {
        source: '/(.*)',
        headers: [
          // Security headers
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          // Performance headers
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
      // Static assets caching (images, fonts, etc.)
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Image optimization caching
      {
        source: '/_next/image(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Font files caching
      {
        source: '/_next/static/media/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Static HTML pages caching (optimized for static sites)
      {
        source: '/((?!_next/static|_next/image|favicon.ico).*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=86400, immutable', // 24 hours for static pages
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig
