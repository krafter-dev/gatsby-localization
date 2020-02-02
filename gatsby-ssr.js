import React from 'react';
import withProvider from '~src/redux/store/withProvider';
import AppLayout from '~src/components/Layout/AppLayout';

export const wrapRootElement = withProvider;

export const wrapPageElement = ({ element, props }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <AppLayout {...props}>{element}</AppLayout>
);
