import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LocalizedLink from './LocalizedLink';
import LanguageSwitch from './LanguageSwitch';

const Container = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
`;

const Title = styled.h1`
  margin: 0;
`;

const Link = styled(LocalizedLink)`
  color: white;
  text-decoration: none;
`;

const Header = ({ siteTitle }) => (
  <Container>
    <Box>
      <Title>
        <Link to="/">{siteTitle}</Link>
      </Title>
      <LanguageSwitch />
    </Box>
  </Container>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
