import React from 'react';

const MainContext = React.createContext({
  loading: false,
  setLoading: () => {},
  loggedIn: false,
  setLoggedIn: () => {}
});

export default MainContext;
