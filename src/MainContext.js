import React from 'react';

const MainContext = React.createContext({
  loading: false,
  setLoading: () => {},
  userLogIn: () => {}
});

export default MainContext;
