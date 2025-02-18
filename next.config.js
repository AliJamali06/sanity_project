/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io", // Allows images from Sanity
      },
    ],
  },
  devIndicators: {
    autoPrerender: false,
  },
  env: {
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
  },
  // SWC configuration
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    styledComponents: true, // Enable styled-components support
  },
  // Enable SWC minification
  swcMinify: true,
  // Disable optimization during development
  optimizeFonts: false,
  experimental: {
    optimizeCss: false, // Disable CSS optimization
    optimizePackageImports: ['@fortawesome/fontawesome-free', 'recharts']
  },
  // Add this section for fonts
  async headers() {
    return [
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;

