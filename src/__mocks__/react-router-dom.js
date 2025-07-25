import React from 'react';

export const BrowserRouter = ({ children }) => (
  <div data-testid="router">{children}</div>
);

export const Routes = ({ children }) => (
  <div data-testid="routes">{children}</div>
);

export const Route = ({ element }) => element;

export const NavLink = ({ children, to }) => (
  <span data-testid="navlink">{children}</span>
);
