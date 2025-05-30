/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <-- add this
  images: {
    domains: ['images.unsplash.com'], // your custom domains
  },
};

export default nextConfig;
