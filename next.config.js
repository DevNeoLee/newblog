/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  experimental: {
    optimizePackageImports: ['react-icons'],
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
      {
        source: '/(.*)',
        headers: [
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
        ],
      },
    ];
  },
}

module.exports = nextConfig
