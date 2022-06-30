import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import Layout from '../components/layout';
import theme from '../src/theme/theme';

// Imports custom CSS stylesheets for later use with rehype-highlight(code highlighting for code blocks)
import '../styles/atom-one-dark.css';
import '../styles/atom-one-light.css';

// Implements Next Layout and sets ChakraUI with a modified theme.
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <NextNProgress />
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>

  )
}

export default MyApp
