const website = require('./website');

module.exports = {
  en: {
    default: true,
    path: 'en',
    languageName: `English`,
    locale: 'en',
    htmlLang: 'en',
    ogLang: 'en_US',
    dateFormat: 'DD/MM/YYYY',
    siteTitle: website.siteTitle, // Manifest 'name'
    siteShortName: website.siteShortName, // Manifest 'short_name'. MUST be shorter than 12 char
    siteDescription: website.siteDescription, // Manifest 'description'
    startUrl: '/', // Manifest 'start_url'
    slugs: {
      page2: `page2`,
    },
  },
  de: {
    path: 'de',
    languageName: `Deutch`,
    locale: 'de',
    htmlLang: 'de',
    ogLang: 'de',
    dateFormat: 'DD.MM.YYYY',
    siteTitle: `Gatsby DE`, // Manifest 'name'
    siteShortName: `Gatsby DE`, // Manifest 'short_name'
    siteDescription: `Gatsby-Starter für die einfache Lokalisierung mit Redux.`, // Manifest 'description'
    startUrl: '/de/', // Manifest 'start_url'
    slugs: {
      page2: `seite2`,
    },
  },
};
