import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { API_URL } from '../data/constants';

const client = new ApolloClient({
    uri: API_URL,
    cache: new InMemoryCache(),
  });

export default client;