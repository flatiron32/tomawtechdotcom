var metalsmith  = require('metalsmith'),
    branch      = require('metalsmith-branch'),
    brokenCheck = require('metalsmith-broken-link-checker'),
    collections = require('metalsmith-collections'),
    excerpts    = require('metalsmith-excerpts'),
    layouts     = require('metalsmith-layouts'),
    markdown    = require('metalsmith-markdown'),
    pageTitles  = require('metalsmith-page-titles'),
    permalinks  = require('metalsmith-permalinks'),
    serve       = require('metalsmith-serve'),
    sitemap     = require('metalsmith-sitemap'),
    watch       = require('metalsmith-watch');

var Handlebars     = require('handlebars');
var HandlebarsIntl = require('handlebars-intl');
HandlebarsIntl.registerWith(Handlebars);

var siteBuild = metalsmith(__dirname)
  .metadata({
    site: {
      title: 'Tomaw Tech',
      url: 'http://tomawtech.com'
    }
  })
  .source('./src')
  .destination('./build')
  .use(pageTitles())
  .use(markdown())
  .use(excerpts())
  .use(collections({
    posts: {
      pattern: 'posts/**.html',
      sortBy: 'publishDate',
      reverse: true
    }
  }))
  .use(branch('posts/**.html')
    .use(permalinks({
      pattern: 'posts/:title',
      relative: false
    }))
  )
  .use(branch('!posts/**.html')
    .use(branch('!index.md')
      .use(permalinks({
        relative: false
      }))
    )
  )
  .use(branch('index.html')
    .use(layouts({
      engine: 'handlebars',
      partials: './layouts/partials',
    }))
  )
  .use(branch('!index.html')
    .use(layouts({
      engine: 'handlebars',
      partials: './layouts/partials',
      default: 'page.hbt',
    }))
  )
  .use(sitemap({
    hostname: 'http://tomawtech.com'
  }))
  // .use(brokenCheck())
  // .use(serve({
  //   port: 8080,
  //   verbose: true
  // }))
  // .use(watch({
  //   pattern: '**/*',
  //   livereload: true
  // }))
  .build(function (err) {
    if (err) {
      console.log(err);
    }
    else {
      console.log('Site build complete!');
    }
  });