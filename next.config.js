/** @type {import('next').NextConfig} */
const nextConfig = {}
const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  optimizeFonts: false,
  webpack5: false,
}

module.exports = nextConfig
