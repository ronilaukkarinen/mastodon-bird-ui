// Browsersync configuration for proxying mastodon.test
// This allows you to develop mastodon-bird-ui CSS while testing against your real Mastodon instance

module.exports = {
  proxy: 'https://mementomori.test',
  port: 3999,
  files: ['dist/**/*.css'],
  https: false,
  serveStatic: [
    {
      route: '/bird-ui',
      dir: 'dist',
    },
  ],
  snippetOptions: {
    rule: {
      match: /<\/head>/i,
      fn: function (snippet, match) {
        // Inject both CSS files into the head
        const cssInjection = `
    <link rel="stylesheet" href="/bird-ui/layout-single-column.css">
    <link rel="stylesheet" href="/bird-ui/layout-multiple-columns.css">
`;
        return cssInjection + snippet + match;
      },
    },
  },
  open: false,
  notify: true,
  logLevel: 'info',
  logPrefix: 'Mastodon Bird UI',
  reloadDelay: 0,
  reloadDebounce: 500,
  injectChanges: true,
  watchEvents: ['change'],
  ignore: ['node_modules', '.git', '*.map'],
};
