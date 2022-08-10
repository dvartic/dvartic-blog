import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import Layout from '../components/layout';
import theme from '../src/theme/theme';
import { AnimatePresence, motion } from 'framer-motion';

// Imports custom CSS stylesheets for later use with rehype-highlight(code highlighting for code blocks)
import '../styles/atom-one-dark.css';
import '../styles/atom-one-light.css';

// Implements Next Layout and sets ChakraUI with a modified theme.
function MyApp({ Component, pageProps, router }: AppProps) {

  // Get current URL in a variable to set key properties
  const url = `http://localhost:3000/${router.route}`;

  // Define variants for first entry animation (motion.main component)
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
}
  return (
    <ChakraProvider theme={theme}>
      <AnimatePresence
        exitBeforeEnter
        initial={true}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Layout key={url}>
          <NextNProgress />
          <motion.main
            variants={variants}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ type: 'linear' }}
          >
            <Component {...pageProps} />
          </motion.main>
        </Layout>
      </AnimatePresence>
    </ChakraProvider>
  )
}

export default MyApp
