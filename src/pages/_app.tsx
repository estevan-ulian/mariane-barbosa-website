import { ApolloProvider } from '@apollo/client';
import client from '../lib/apolloClient';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/globalStyle';
import { AppProps } from 'next/app'
import { theme } from '../styles/theme';
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
    return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
    )
  }

export default MyApp
