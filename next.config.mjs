const nextConfig = {
  output: 'export',
  basePath: '/webpage',
  assetPrefix: '/webpage',
  images: {
    domains: ['images.unsplash.com', 'cdn.example.com'],
    unoptimized: true,
  },
  trailingSlash: true, // Required for GitHub Pages
};

export default nextConfig;

