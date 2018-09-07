import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import './global.style';

const client = new ApolloClient({
  uri: process.env.GRAPHQL_ENDPOINT
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>, 
  document.getElementById('root')
);
registerServiceWorker();
