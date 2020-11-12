import React from 'react';

const MainContext = React.createContext({
  loading: false,
  setLoading: () => {},
});

export default MainContext;
