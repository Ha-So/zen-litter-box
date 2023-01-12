export default {
  nextMdx: "npm install @next/mdx @mdx-js/loader @mdx-js/react",
  nextConfig: `const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use \`MDXProvider\`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  // Optionally, add any other Next.js config below
  reactStrictMode: true,
}

// Merge MDX config with Next.js config
module.exports = withMDX(nextConfig)`,
  mdxPages: `  - /pages
    - my-mdx-page.mdx
  - package.json`,
  npmError:
    "Module parse failed: Unexpected character ' ' (1:1) You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders ",
};
