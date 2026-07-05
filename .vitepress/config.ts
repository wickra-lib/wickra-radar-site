import { defineConfig } from 'vitepress'
import wasm from 'vite-plugin-wasm'
import topLevelAwait from 'vite-plugin-top-level-await'

// JSON-LD structured data (Organization + SoftwareApplication) so search
// engines and LLM crawlers can resolve the product's entity, ownership, and
// where it is published. Emitted once in the document <head> below.
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://radar.wickra.org/#organization',
      name: 'Wickra',
      url: 'https://radar.wickra.org/',
      logo: 'https://radar.wickra.org/wickra-mark.svg',
      sameAs: [
        'https://github.com/wickra-lib/wickra-radar',
        'https://github.com/wickra-lib/wickra',
        'https://wickra.org/',
      ],
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://radar.wickra.org/#software',
      name: 'Wickra Radar',
      url: 'https://radar.wickra.org/',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Windows, macOS, Linux, WebAssembly',
      programmingLanguage: ['Rust', 'Python', 'JavaScript', 'WebAssembly', 'C', 'C++', 'C#', 'Go', 'Java', 'R'],
      description:
        'Perp-universe alert radar — OI delta, funding flip, book imbalance, liquidation clusters and OI/price divergence, in ten languages. Built on the Wickra core.',
      license: 'https://github.com/wickra-lib/wickra-radar#license',
      publisher: { '@id': 'https://radar.wickra.org/#organization' },
    },
  ],
}

export default defineConfig({
  title: 'Wickra Radar',
  description:
    'Perp-universe alert radar — OI delta, funding flip, book imbalance, liquidation clusters and OI/price divergence, in ten languages. Built on the Wickra core.',
  lang: 'en-US',
  cleanUrls: true,

  // Served at the domain root (radar.wickra.org via Cloudflare Pages).
  base: '/',

  sitemap: { hostname: 'https://radar.wickra.org' },

  // README.md is repo documentation, not a site page — keep it out of the build.
  srcExclude: ['README.md'],

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/wickra-mark.svg' }],
    ['link', { rel: 'icon', href: '/favicon.ico', sizes: 'any' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#0ea5e9' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Wickra Radar — perp-universe alert radar' }],
    [
      'meta',
      {
        property: 'og:description',
        content:
          'Alert the whole perp universe: OI delta, funding flip, book imbalance, liquidation clusters and OI/price divergence, in ten languages, deterministic and byte-identical across every binding.',
      },
    ],
    ['meta', { property: 'og:image', content: 'https://radar.wickra.org/og-banner.webp' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: 'https://radar.wickra.org/og-banner.webp' }],
    ['script', { type: 'application/ld+json' }, JSON.stringify(structuredData)],
  ],

  transformPageData(pageData) {
    const path = pageData.relativePath.replace(/(?:index)?\.md$/, '')
    const canonical = `https://radar.wickra.org/${path}`
    pageData.frontmatter.head ??= []
    pageData.frontmatter.head.push(
      ['link', { rel: 'canonical', href: canonical }],
      ['meta', { property: 'og:url', content: canonical }],
    )
  },

  themeConfig: {
    siteTitle: 'Wickra Radar',
    logo: { src: '/wickra-mark.svg', alt: 'Wickra Radar' },
    logoLink: 'https://wickra.org/',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Demo', link: '/demo' },
      { text: 'Live', link: 'https://live.wickra.org' },
      { text: 'Benchmarks', link: '/benchmarks' },
      {
        text: 'API',
        items: [
          { text: 'Rust', link: '/api/rust' },
          { text: 'Python', link: '/api/python' },
          { text: 'Node', link: '/api/node' },
          { text: 'WASM', link: '/api/wasm' },
          { text: 'C', link: '/api/c' },
          { text: 'C#', link: '/api/csharp' },
          { text: 'Go', link: '/api/go' },
          { text: 'Java', link: '/api/java' },
          { text: 'R', link: '/api/r' },
        ],
      },
      { text: 'GitHub', link: 'https://github.com/wickra-lib/wickra-radar' },
      {
        text: 'Links',
        items: [
          { text: 'crates.io', link: 'https://crates.io/crates/wickra-radar' },
          { text: 'PyPI', link: 'https://pypi.org/project/wickra-radar/' },
          { text: 'npm', link: 'https://www.npmjs.com/package/wickra-radar' },
          { text: 'NuGet', link: 'https://www.nuget.org/packages/WickraRadar' },
          { text: 'Maven Central', link: 'https://central.sonatype.com/artifact/org.wickra/wickra-radar' },
          { text: 'Go module', link: 'https://pkg.go.dev/github.com/wickra-lib/wickra-radar-go' },
          { text: 'r-universe', link: 'https://wickra-lib.r-universe.dev' },
        ],
      },
      {
        text: 'v0.1.0',
        items: [
          { text: 'Release notes', link: 'https://github.com/wickra-lib/wickra-radar/releases' },
          { text: 'Changelog', link: 'https://github.com/wickra-lib/wickra-radar/blob/main/CHANGELOG.md' },
          { text: 'docs.rs', link: 'https://docs.rs/wickra-radar/latest/wickra_radar/' },
        ],
      },
      {
        text: 'Ecosystem',
        items: [
          { text: 'Wickra (core)', link: 'https://wickra.org' },
          { text: 'Docs', link: 'https://docs.wickra.org' },
          { text: 'Exchange', link: 'https://exchange.wickra.org' },
          { text: 'Backtest', link: 'https://backtest.wickra.org' },
          { text: 'Terminal', link: 'https://terminal.wickra.org' },
          { text: 'Screener', link: 'https://screener.wickra.org' },
          { text: 'X-Ray', link: 'https://xray.wickra.org' },
          { text: 'Radar', link: 'https://radar.wickra.org' },
          { text: 'Copilot', link: 'https://copilot.wickra.org' },
          { text: 'Shazam', link: 'https://shazam.wickra.org' },
        ],
      },
    ],

    sidebar: {
      '/api/': [
        {
          text: 'Bindings',
          items: [
            { text: 'Rust', link: '/api/rust' },
            { text: 'Python', link: '/api/python' },
            { text: 'Node', link: '/api/node' },
            { text: 'WASM', link: '/api/wasm' },
            { text: 'C', link: '/api/c' },
            { text: 'C#', link: '/api/csharp' },
            { text: 'Go', link: '/api/go' },
            { text: 'Java', link: '/api/java' },
            { text: 'R', link: '/api/r' },
          ],
        },
      ],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/wickra-lib/wickra-radar' }],

    search: { provider: 'local' },

    outline: { level: [2, 3], label: 'On this page' },

    lastUpdated: { text: 'Updated', formatOptions: { dateStyle: 'medium' } },
  },

  markdown: {
    theme: { light: 'github-light', dark: 'github-dark' },
    lineNumbers: false,
  },

  vite: {
    // wickra-wasm is a wasm-pack `--target bundler` build: its JS glue does
    // `import * as wasm from './wickra_wasm_bg.wasm'` and expects the bundler
    // to instantiate the module and expose its exports. vite-plugin-wasm does
    // exactly that, and vite-plugin-top-level-await handles the top-level await
    // the wasm init emits.
    plugins: [wasm(), topLevelAwait()],
    optimizeDeps: {
      // esbuild's dep pre-bundling can't follow the .wasm ESM import, so keep
      // wickra-wasm out of it and let vite-plugin-wasm handle it on demand.
      exclude: ['wickra-wasm'],
    },
    server: {
      fs: {
        allow: ['..'],
      },
    },
  },
})
