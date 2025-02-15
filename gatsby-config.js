const path = require('path');
const website = require('./config/website');
const i18n = require('./config/i18n');

const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development';
// eslint-disable-next-line no-console
console.log(`Using environment config: '${activeEnv}'`);

require('dotenv').config({
  path: `.env.${activeEnv}`,
});

const pathPrefix = website.pathPrefix === '/' ? '' : website.pathPrefix;

module.exports = {
  /* General Information */
  pathPrefix: website.pathPrefix,
  siteMetadata: {
    siteTitle: website.siteTitle,
    siteTitleAlt: website.siteTitleAlt,
    siteTitleTemplate: website.siteTitleTemplate,
    siteUrl: website.siteUrl + pathPrefix, // For gatsby-plugin-sitemap
    logo: website.siteLogo, // Logo for JSONLD
    siteDescription: website.siteDescription,
    author: website.author,
    twitter: website.twitter,
    facebook: website.facebook,
  },
  /* Plugins */
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV !== `production`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: website.siteTitle,
        short_name: website.siteShortName,
        description: website.siteDescription,
        lang: 'en',
        start_url: '/',
        localize: [
          {
            name: i18n.de.siteTitle,
            short_name: i18n.de.siteShortName,
            description: i18n.de.siteDescription,
            lang: 'de',
            start_url: '/de/',
          },
        ],
        background_color: website.manifestBackgroundColor,
        theme_color: website.manifestThemeColor,
        display: website.manifestDisplay,
        icon: website.manifestIcon,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }],
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '~src': path.resolve(__dirname, 'src'),
          '~config': path.resolve(__dirname, 'config'),
          '~data': path.resolve(__dirname, 'data'),
        },
        extensions: ['.js', '.json', '.jsx'],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
