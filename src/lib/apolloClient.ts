import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: `${process.env.GRAPHQL_ENDPOINT}/master`,
    cache: new InMemoryCache(),
  });

export default client;