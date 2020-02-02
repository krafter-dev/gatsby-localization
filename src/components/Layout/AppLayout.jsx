/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setPathname } from '~src/redux/actions';
import { GlobalStyle } from '~src/styles';

const AppLayout = ({ children, location, setPathnameConnect }) => {
  const pathArr = location.pathname.split('/');
  const pathname =
    location.pathname.length > 3 ? `${pathArr[pathArr.length - 1]}` : '';

  useEffect(() => {
    setPathnameConnect(pathname);
  }, [pathname]);

  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default connect(null, { setPathnameConnect: setPathname })(AppLayout);
