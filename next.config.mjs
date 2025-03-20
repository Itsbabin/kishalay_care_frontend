/** @type {import('next').NextConfig} **/

const nextConfig = {
    devIndicators: false,
    images: {
        remotePatterns: [{
            protocol: "https",
            hostname: "res.cloudinary.com",
          }], // Allow Cloudinary images
      },
};

export default nextConfig;
