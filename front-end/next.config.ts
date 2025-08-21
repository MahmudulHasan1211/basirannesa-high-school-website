import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  images: {
    domains: ['res.cloudinary.com',"img.daisyui.com","localhost"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "5000",
        pathname: "/uploads/avatars/**",
      },
    ],
  },
};
// const nextConfig: NextConfig = {
//   output: 'export',
//   images: {
//     domains: ['res.cloudinary.com',"img.daisyui.com","localhost"],
//     remotePatterns: [
//       {
//         protocol: "http",
//         hostname: "api.basirannesahighschool.edu.bd",
//         port: "30000",
//         pathname: "/uploads/avatars/**",
//       },
//     ],
//   },
// };

export default nextConfig;
