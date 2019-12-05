import React from 'react';
import App from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';

import withData from '../components/apollo-client';

class MyApp extends App {
  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <ApolloProvider client={apollo}>
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }
}

export default withData(MyApp);