/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://docs.google.com/document/d/1_0XQ2pTMfnK-3G1Q3XHEkL9zVqJSBRAuNEbN43-i6-8/edit?usp=sharing',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig 