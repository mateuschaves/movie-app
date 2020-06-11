import React from 'react';
import { RootAuthenticated, RootNotAuthenticated } from './navigations';

import { useSelector } from 'react-redux';

export default function Routes() {

  const { alreadyAuthenticated } = useSelector(state => state.Auth);
  return (
    <>
      {
        alreadyAuthenticated ? <RootAuthenticated /> : <RootNotAuthenticated />
      }
    </>
  );
}
