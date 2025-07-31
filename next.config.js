/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  experimental: {
    optimizePackageImports: ['react-icons'],
  },
  webpack: (config) => {
    config.optimization.splitChunks.cacheGroups.styles = {
      name: 'styles',
      test: /\.(css|scss)$/,
      chunks: 'all',
      enforce: true,
    };
    config.optimization.splitChunks.cacheGroups.vendor = {
      test: /[\\/]node_modules[\\/]/,
      name: 'vendors',
      chunks: 'all',
    };
    return config;
  },
  async redirects() {
    return [
      // www 리다이렉트
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.moyahug.com',
          },
        ],
        destination: 'https://moyahug.com/:path*',
        permanent: true,
      },
      // HTTP to HTTPS 리다이렉트
      {
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
      },
            // Combine: HTTP + www
      {
        source: '/:path*',
        has: [
          { type: 'host', value: 'www.moyahug.com' },
          { type: 'header', key: 'x-forwarded-proto', value: 'http' },
        ],
        destination: 'https://moyahug.com/:path*',
        permanent: true,
      },
      // 오래된 URL 패턴 리다이렉트
      {
        source: '/travel/:continent/:slug',
        destination: '/travel/:continent/:slug',
        permanent: true,
      },
      {
        source: '/it/:category/:slug',
        destination: '/it/:category/:slug',
        permanent: true,
      },
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
