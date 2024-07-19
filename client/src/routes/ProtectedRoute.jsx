import React from 'react';
import { Route, Redirect } from 'wouter';
import useAuthStore from '../store/auth-store';
import { shallow } from 'zustand/shallow';

const ProtectedRoute = ({ component: Component, redirectTo, ...rest }) => {
  const isLogged = useAuthStore((state) => state.isLogged, shallow);
  const redirect = "/auth/iniciar-sesion"

  return (
    <Route {...rest}>
      {
        !isLogged ?
          <Redirect to={redirectTo ?? redirect} />
          :
          Component ? <Component /> : rest.children
      }
    </Route>
  );
};

export default ProtectedRoute;
