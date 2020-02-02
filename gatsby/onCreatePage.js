const locales = require('../config/i18n');

// Remove trailing slashes unless it's only "/", then leave it as it is
const replaceTrailing = path => (path === `/` ? path : path.replace(/\/$/, ``));

// Remove slashes at the beginning and end
const replaceBoth = _path => _path.replace(/^\/|\/$/g, '');

module.exports = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  // Only create one 404 page at /404.html
  if (page.path.includes('404')) {
    return;
  }

  // First delete the pages so we can re-create them
  deletePage(page);

  Object.keys(locales).map(lang => {
    // Remove the trailing slash from the path, e.g. --> /categories
    // eslint-disable-next-line no-param-reassign
    page.path = replaceTrailing(page.path);

    // Remove the leading AND traling slash from path, e.g. --> categories
    const name = replaceBoth(page.path);

    // Create the "slugs" for the pages. Unless default language, add prefix àla "/en"
    const localizedPath = locales[lang].default
      ? page.path
      : `${locales[lang].path}/${name ? locales[lang].slugs[name] : ''}`; // locale "slugs".
    // : `${locales[lang].path}${page.path}`;

    return createPage({
      ...page,
      path: localizedPath,
      context: {
        locale: lang,
        name,
      },
    });
  });
};
