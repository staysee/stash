import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import TokenService from '../../services/token-service';

export default function PublicOnlyRoute({ component, ...props }) {
  const Component = component;
  return (
    <Route
      {...props}
      render={(componentProps) => (TokenService.hasAuthToken()
        ? <Redirect to="/" />
        : <Component {...componentProps} />)}
    />
  );
}

PublicOnlyRoute.propTypes = {
  component: PropTypes.func
};
