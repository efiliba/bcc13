/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [{
      protocol: 'https',
      hostname: 'main.dkvdr0mkm5359.amplifyapp.com',
      port: '',
      pathname: '/images/**'
    }]
  }
}
