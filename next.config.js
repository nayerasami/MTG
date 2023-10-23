/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  optimizeFonts: false,
  // "rules": {
  //   // Other rules
  //   "@next/next/no-img-element": "off"
  // }
 
}

module.exports = nextConfig