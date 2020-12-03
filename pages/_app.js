import React from 'react';
import PropTypes from 'prop-types';
import '../styles/globals.css';
import '../styles/flaticon.css';

const App = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

App.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.object,
};

export default App;
