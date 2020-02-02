/* eslint-disable no-nested-ternary */
/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { getLocale } from '~src/redux/selectors';
import i18n from '~config/i18n';

const SEO = ({ description, title, locale }) => {
  const meta = locale === 'en' ? i18n.en : locale === 'de' ? i18n.de : null;
  const metaDescription = description || meta.siteDescription;
  const metaTitle = title || meta.siteTitle;
  const metaSiteShortName = meta.siteShortName;
  const metaLang = meta.htmlLang || `en`;

  return (
    <Helmet
      htmlAttributes={{
        lang: metaLang,
      }}
      title={metaTitle}
      titleTemplate={`%s | ${metaSiteShortName}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]}
    />
  );
};

SEO.defaultProps = {
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  locale: getLocale(state),
});

export default connect(mapStateToProps)(SEO);
