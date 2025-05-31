const nextConfig = {
  output: 'export',
  images: {
    domains: ['images.unsplash.com', 'cdn.example.com'],
    unoptimized: true,
  },
  trailingSlash: true, // Required for GitHub Pages
};

export default nextConfig;

