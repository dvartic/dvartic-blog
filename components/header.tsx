import { Flex, Heading, HStack, Link, Text, IconButton, Box, Menu, MenuList, MenuButton, MenuItem, useColorMode, useColorModeValue, useMediaQuery } from "@chakra-ui/react";
import { MoonIcon, HamburgerIcon, SunIcon } from '@chakra-ui/icons';
import NextLink from "next/link";
import { useMemo } from "react";
import { Codesquare01 } from "./custom-icons/codesquare01";
import { Github } from "./custom-icons/github";
import { useRouter } from 'next/router';
import { motion } from '../node_modules/framer-motion';

interface Props {
    propWidth: string;
    propMaxWidth: string;
}

// Framer Motion Variants
const svgVariant = {
    hover: {
        rotate: 10
    }
}

export function Header({ propWidth, propMaxWidth }: Props) {
    // Chakra implementation for dark/light theme. The returned toggleColorMode is then used in a button to change the theme. The colorMode variable stores the current theme as 'light' or 'dark', and can be used to change other parts of the UI.
    const { colorMode, toggleColorMode } = useColorMode();

    // Sets different color variables depending on if the page is in dark or light mode. These variables are then used to set color in components.
    const bg = useColorModeValue('gray.300', 'black');
    const svgColor = useColorModeValue('black', 'white');
    const svgBg = useColorModeValue('gray.300', 'gray.700');
    const activeRouteColorLink = useColorModeValue('blue.600', 'blue.400');
    const activeColorLink = useColorModeValue('blue.700', 'blue.100');

    // Detects wether the device supports hover or not through a media query, and executes a simple logic with memoized value to assign a different text-decoration property.
    const [isHoverNotSupported] = useMediaQuery('(hover: none)');
    const hover = useMemo(() => isHoverNotSupported ? { textDecoration: 'none' } : { textDecoration: 'underline' }, [isHoverNotSupported]);

    // Detects whether the current route is `/blog` and '/contact' (active) and stores a different value in the variables, which is then used to change the 'Blog' and 'Contact' Link color
    const router = useRouter();
    const isBlogActive = router.pathname.includes('/blog');
    const isContactActive = router.pathname.includes('/contact');
    const blogLinkColor = isBlogActive ? activeRouteColorLink : 'inherit';
    const contactLinkColor = isContactActive ? activeRouteColorLink : 'inherit';

    return (
        <header>
            <Box backgroundColor={bg}>
                <Flex justifyContent='space-between' w={propWidth} maxWidth={propMaxWidth} ml='auto' mr='auto' h={16} alignItems='center'>
                    <NextLink href={'/'} passHref scroll={false}>
                        <Link _hover={hover} _active={{ color: activeColorLink }} as={motion.a} initial="rest" whileHover="hover" animate="rest">
                            <HStack spacing={3}>
                                <Box paddingBottom={1.5} as={motion.div} variants={svgVariant}>
                                    <Codesquare01 svgColor={svgColor} />
                                </Box>
                                <Heading as='h1' display='flex' alignItems='center' size='xl'>Dvartic</Heading>
                            </HStack>
                        </Link>
                    </NextLink>
                    <Flex justifyContent='space-between' alignItems='center' w={['50%']} fontSize={['lg', 'lg', 'xl']} fontWeight='bold' display={{ base: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex', '2xl': 'flex' }} >
                        <NextLink href={'/blog'} passHref scroll={false}>
                            <Link display='flex' alignItems='center' color={blogLinkColor} _hover={hover} _active={{ color: activeColorLink }}>Blog</Link>
                        </NextLink>
                        <NextLink href={'/contact'} passHref scroll={false}>
                            <Link display='flex' alignItems='center' color={contactLinkColor} _hover={hover} _active={{ color: activeColorLink }}>Contact</Link>
                        </NextLink>
                        <Link display='flex' alignItems='center' alignContent='center' href='https://github.com/dvartic' isExternal _hover={hover} _active={{ color: activeColorLink }}>
                            <HStack>
                                <Box paddingBottom={1.5}>
                                    <Github svgColor={svgColor} />
                                </Box>
                                <Text>GitHub</Text>
                            </HStack>
                        </Link>
                        <Box paddingBottom={1.5}>
                            <IconButton
                                aria-label='Change Color Theme'
                                backgroundColor={svgBg}
                                icon={
                                    colorMode === 'light' ? <MoonIcon /> : <SunIcon />
                                }
                                onClick={toggleColorMode}
                            />
                        </Box>
                    </Flex>
                    <Box display={{ base: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none', '2xl': 'none' }} >
                        <HStack fontSize={['lg', 'lg', 'xl']} >
                            <Box paddingBottom={1.5}>
                                <IconButton aria-label='Change Color Theme' icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />} onClick={toggleColorMode} />
                            </Box>
                            <Menu>
                                <MenuButton position='relative' bottom={1} as={IconButton} aria-label='Options' icon={<HamburgerIcon />} variant='outline' />
                                <MenuList>
                                    <NextLink href={'/blog'} passHref scroll={false}>
                                        <MenuItem as='a'>Blog</MenuItem>
                                    </NextLink>
                                    <NextLink href={'/contact'} passHref scroll={false}>
                                        <MenuItem as='a'>Contact</MenuItem>
                                    </NextLink>
                                    <MenuItem icon={<Github svgColor={svgColor} />} as='a' href="https://github.com/dvartic" target='_blank'>GitHub</MenuItem>
                                </MenuList>
                            </Menu>
                        </HStack>
                    </Box>
                </Flex>
            </Box>
        </header>
    )
}

