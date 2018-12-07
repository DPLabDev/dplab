$(function() {

  CMS.init({

    // Name of your site or location of logo file, relative to root directory (img/logo.png)
    siteName: '[SDP - Blog]',

    // Tagline for your site
    siteTagline: 'Blog - Business Analyst',

    // Email address
    siteEmail: 'admin@dplab.it',

    // Name
    siteAuthor: 'Dr. Stefano Di Piazza',

    // Navigation items
    siteNavItems: [{
        name: 'Github',
        href: 'https://github.com/DPLabDev/dplab',
        newWindow: false
      },
      {
        name: 'About',
        href: '#/pages/about',
        newWindow: false
      },
      {
        name: 'Linkedin',
        href: 'https://www.linkedin.com/in/dplab',
        newWindow: false
      }
    ],

    // Posts folder name
    postsFolder: 'blog/posts',

    // Homepage posts snippet length
    postSnippetLength: 240,

    // Pages folder name
    pagesFolder: 'blog/pages',

    // Order of sorting (true for newest to oldest)
    sortDateOrder: true,

    // Posts on Frontpage (blog style)
    postsOnFrontpage: true,

    // Page as Frontpage (static)
    pageAsFrontpage: '',

    // Posts/Blog on different URL location
    postsOnUrl: '',

    // Site fade speed
    fadeSpeed: 300,

    // Site footer text
    footerText: '&copy; ' + new Date().getFullYear() + ' All Rights Reserved.',

    // Mode 'Github' for Github Pages, 'Server' for Self Hosted. Defaults
    // to Github
    mode: 'Github',

    // If Github mode is set, your Github username and repo name.
    githubUserSettings: {
      username: 'DPLabDev',
      repo: 'dplab'
    },

    // If Github mode is set, choose which Github branch to get files from.
    // Defaults to Github pages branch (gh-pages)
    githubSettings: {
      branch: 'gh-pages',
      host: 'https://api.github.com'
    }

  });

  // Markdown settings
  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false
  });

});