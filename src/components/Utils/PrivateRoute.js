import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import TokenService from '../../services/token-service';

export default function PrivateRoute({ component, ...props }) {
  const Component = component;
  return (
    <Route
      {...props}
      render={(componentProps) => (TokenService.hasAuthToken() ? (
        <Component {...componentProps} />
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { from: componentProps.location },
          }}
        />
      ))}
    />
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.func
};
