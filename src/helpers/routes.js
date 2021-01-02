import React from "react";
import { Route, Redirect } from "react-router-dom";

export function IsUserRedirect({ user, loggedInPath, children, ...restProps }) {
  return (
    <Route
      {...restProps}
      render={() => {
        if (!user) {
          return children;
        } else {
          return <Redirect to={{ pathname: loggedInPath }} />;
        }
      }}
    />
  );
}

export function ProtectedRoute({ user, children, ...restProps }) {
  return (
    <Route
      {...restProps}
      render={({ location }) => {
        if (user) {
          return children;
        } else {
          return (
            <Redirect to={{ pathname: "signin", state: { from: location } }} />
          );
        }
      }}
    />
  );
}
