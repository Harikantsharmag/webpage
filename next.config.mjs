/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: ['images.unsplash.com', 'cdn.example.com'], // ← include any image sources you're using
    unoptimized: true, // ✅ Required for `output: 'export'` static builds
  },
  basePath: '/webpage',       // ← Important for GitHub Pages subpath
  assetPrefix: '/webpage', 
};

export default nextConfig;
