import React from 'react';
import styled from 'styled-components';
import Layout from '~src/components/Layout/PageLayout';
import Image from '~src/components/Image';
import SEO from '~src/components/Seo';
import Link from '~src/components/LocalizedLink';
import { getLocaleCopy } from '~src/utils/helpers';
import { home } from '~data/pages';

const ImgContainer = styled.div`
  max-width: 300px;
  margin-bottom: 1.45rem;
`;
const IndexPage = ({ pageContext: { locale, name } }) => {
  const {
    siteTitle,
    h1Title,
    text1,
    text2,
    linkLabel,
    linkSlug,
  } = getLocaleCopy(home, locale);

  return (
    <Layout name={name} title={siteTitle}>
      <SEO title={siteTitle} />
      <h1>{h1Title}</h1>
      <p>{text1}</p>
      <p>{text2}</p>
      <ImgContainer>
        <Image />
      </ImgContainer>
      <Link to={linkSlug}>{linkLabel}</Link>
    </Layout>
  );
};

export default IndexPage;
