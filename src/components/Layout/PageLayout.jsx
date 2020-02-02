import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setPageName } from '~src/redux/actions';
import { getLocale } from '~src/redux/selectors';
import Header from '../Header';
import { getLocaleCopy } from '~src/utils/helpers';
import { footer } from '~data/components';

const Container = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`;

const PageLayout = ({ children, name, title, setPageNameConnect, locale }) => {
  const { text } = getLocaleCopy(footer, locale);

  useEffect(() => {
    setPageNameConnect(name);
  }, [name]);

  return (
    <>
      <Header siteTitle={title} />
      <Container>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, {text}
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Container>
    </>
  );
};

PageLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const mapStateToProps = state => ({
  locale: getLocale(state),
});

export default connect(mapStateToProps, { setPageNameConnect: setPageName })(
  PageLayout
);
