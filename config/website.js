const base = {
  name: `Gatsby`, // Site title.
  url: `https://gatsby-localization.netlify.com/`, // Domain of your website. No trailing slash!
};

module.exports = {
  /* meta tags */

  // Manifest `name`
  siteTitle: `${base.name} i18n`,
  // Title for JSONLD.
  siteTitleAlt: `${base.name} i18n`,
  // Manifest `short_name`. MUST be shorter than 12 characters
  siteShortName: base.name,
  // Useful when you want titles to inherit from a template
  siteTitleTemplate: `%s | ${base.name} i18n`,
  // Manifest `description`
  siteDescription: `Gatsby starter for easy localization setup with Redux.`,

  /* url */

  // Domain of your site. No trailing slash!
  siteUrl: base.url,
  // Prefixes all links. For cases when deployed to example.github.io/gatsby-example/.
  pathPrefix: `/`,

  /* social */

  // Logo used for SEO.
  siteLogo: `src/images/gatsby-icon.png`,

  /* manifest */

  // Used for setting manifest background and progress theme colors.
  manifestBackgroundColor: `#222222`,
  // Used for setting manifest theme color .
  manifestThemeColor: `#222222`,
  manifestDisplay: `standalone`,
  // This path is relative to the root of the site.
  manifestIcon: `src/images/gatsby-icon.png`,
};
