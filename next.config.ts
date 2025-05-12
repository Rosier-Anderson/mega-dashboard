export const imageHosts = [
  "logo.clearbit.com",
  "php.net",
  "xinhuanet.com",
  "narod.ru",
  "sohu.com",
  "nsw.gov.au",
  "123-reg.co.uk",
  "toplist.cz",
  "google.ru",
  "scientificamerican.com",
  "nhs.uk",
  "yahoo.com",
  "japanpost.jp",
  "hubpages.com",
  "blinklist.com",
  "ucsd.edu",
  "senate.gov",
  "illinois.edu",
  "flavors.me",
  "pinterest.com"
] as const;

export type ImageHost = typeof imageHosts[number];
// next.config.js

const nextConfig = {
  experimental: {
    ppr: 'incremental'
  },
  images: {
    domains: [...imageHosts],
  },
};

export default nextConfig;
