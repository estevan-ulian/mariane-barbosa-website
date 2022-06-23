import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/globalStyle'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
