/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: ['images.unsplash.com', 'cdn.example.com'], // ← include any image sources you're using
    unoptimized: true, // ✅ Required for `output: 'export'` static builds
  },
};

export default nextConfig;
