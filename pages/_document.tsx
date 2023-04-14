import { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "../src/theme/color-mode-config";

// Sets language attribute, initial configuration for the Chakra Color Mode and competely disables browser Scroll Restoration for compatibility with Framer Motion exit animations.
export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" />
                <script dangerouslySetInnerHTML={{ __html: `history.scrollRestoration = "manual"` }} />
            </Head>
            <body>
                <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
