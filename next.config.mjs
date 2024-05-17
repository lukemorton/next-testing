/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return {
      beforeFiles: [
        {
          source: "/:path((?!_next|favicon.ico$).+)",
          has: [
            {
              type: "host",
              value: "admin\\..*",
            },
          ],
          destination: "/admin/:path*",
        },
      ],
    };
  },
};

export default nextConfig;
