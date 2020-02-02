import React from 'react';
import Layout from '~src/components/Layout/PageLayout';
import SEO from '~src/components/Seo';
import Link from '~src/components/LocalizedLink';
import { getLocaleCopy } from '~src/utils/helpers';
import { page2 } from '~data/pages';

const SecondPage = ({ pageContext: { locale, name } }) => {
  const { siteTitle, h1Title, text, linkLabel, linkSlug } = getLocaleCopy(
    page2,
    locale
  );

  return (
    <Layout name={name} title={siteTitle}>
      <SEO title={siteTitle} />
      <h1>{h1Title}</h1>
      <p>{text}</p>
      <Link to={linkSlug}>{linkLabel}</Link>
    </Layout>
  );
};

export default SecondPage;
