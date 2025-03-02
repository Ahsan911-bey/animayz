/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ["s4.anilist.co"], // Allow external images from Anilist
      remotePatterns: [
        {
          protocol: "https",
          hostname: "s4.anilist.co",
        },
        {
            protocol: "https",
            hostname: "cdn.myanimelist.net",
          },
      ],
    },
  };
  
  export default nextConfig;
  