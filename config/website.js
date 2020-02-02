const base = {
  name: `Gatsby`, // Site title.
  url: `https://gatsby-i18n.test`, // Domain of your website. No trailing slash!
};

module.exports = {
  /* meta tags */
  siteTitle: `${base.name} i18n`, // Manifest `name`
  siteTitleAlt: `${base.name} i18n`, // Title for JSONLD.
  siteShortName: base.name, // Manifest `short_name`. MUST be shorter than 12 characters
  siteTitleTemplate: `%s | ${base.name} i18n`, // Useful when you want titles to inherit from a template
  siteDescription: `Gatsby starter for easy localization setup with Redux.`, // Manifest `description`

  /* url */
  siteUrl: base.url, // Domain of your site. No trailing slash!
  pathPrefix: `/`, // Prefixes all links. For cases when deployed to example.github.io/gatsby-example/.

  /* social */
  siteLogo: `src/images/gatsby-icon.png`, // Logo used for SEO.

  /* manifest */
  manifestBackgroundColor: `#222222`, // Used for setting manifest background and progress theme colors.
  manifestThemeColor: `#222222`, // Used for setting manifest theme color .
  manifestDisplay: `standalone`,
  manifestIcon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
};
