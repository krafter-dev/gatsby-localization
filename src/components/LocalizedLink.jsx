import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { connect } from 'react-redux';
import { getLocale } from '~src/redux/selectors';
import i18n from '~config/i18n';

const LocalizedLink = ({ locale, to, ...props }) => {
  const isIndex = to === '/';

  const path = i18n[locale].default
    ? to
    : `${i18n[locale].startUrl}${isIndex ? '' : `${to}`}`;

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Link {...props} to={path} />;
};

LocalizedLink.propTypes = {
  to: PropTypes.string.isRequired,
  locale: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  locale: getLocale(state),
});

export default connect(mapStateToProps)(LocalizedLink);
