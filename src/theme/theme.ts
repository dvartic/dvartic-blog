import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    components: {
        Link: {
            variants: {
                'post-preview': {
                    _hover: {
                        textDecoration: 'none',
                        opacity: 0.75
                    }
                }
            }
        }
    }
})

export default theme;