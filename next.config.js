/** @type {import('next').NextConfig} */

const securityHeaders =[
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
]

const nextConfig = {
  
  images: {
    domains: ['marianebarbosa.com.br', 'mariane-barbosa.ulian.biz'],
  },
  reactStrictMode: true,
  env: {
    WP_GRAPHQL_ENDPOINT: process.env.WP_GRAPHQL_ENDPOINT
  },
}

module.exports = nextConfig
