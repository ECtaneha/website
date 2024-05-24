/** @type {import('next').NextConfig} */
const nextConfig = {
  // vercel に deploy する場合はコメントアウト
  // static export する場合はコメントアウトを外す
  // output: 'export',
  trailingSlash: true,
};

export default nextConfig;