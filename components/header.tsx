import { Flex, Heading, HStack, Link, Text, IconButton, Box, Hide, Menu, MenuList, MenuButton, MenuItem, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { MoonIcon, HamburgerIcon, SunIcon } from '@chakra-ui/icons';
import NextLink from "next/link";
import { Codesquare01 } from "./custom-icons/codesquare01";
import { Github } from "./custom-icons/github";
import { useRouter } from 'next/router';

interface Props {
    propWidth: string,
    propMaxWidth: string
}

export function Header({ propWidth, propMaxWidth }: Props) {
    // Chakra implementation for dark/light theme. The returned toggleColorMode is then used in a button to change the theme. The colorMode variable stores the current theme as 'light' or 'dark', and can be used to change other parts of the UI.
    const { colorMode, toggleColorMode } = useColorMode();

    // Sets different color variables depending on if the page is in dark or light mode. These variables are then used to set color in components.
    const bg = useColorModeValue('gray.100', 'black');
    const svgColor = useColorModeValue('black', 'white');
    const svgBg = useColorModeValue('gray.300', 'gray.700');
    const activeColorLink = useColorModeValue('gray.600', 'gray.400');

    // Detects whether the current route is `/blog` (active) and stores a different value in the linkColor variable, which is then used to change the 'Blog' Link color
    const router = useRouter();
    const isBlogActive = router.pathname.includes('/blog');
    const linkColor = isBlogActive ? activeColorLink : 'inherit';

    return (
        <header>
            <Box backgroundColor={bg}>
                <Flex justifyContent='space-between' w={propWidth} maxWidth={propMaxWidth} ml='auto' mr='auto' h={16} alignItems='center'>
                    <NextLink href={'/'} passHref>
                        <Link>
                            <HStack spacing={3}>
                                <Box paddingBottom={1.5}>
                                    <Codesquare01 svgColor={svgColor} />
                                </Box>
                                <Heading display='flex' alignItems='center' size='xl'>Dvartic</Heading>
                            </HStack>
                        </Link>
                    </NextLink>
                    <Hide below='sm'>
                        <Flex justifyContent='space-between' alignItems='center' w={['50%']} fontSize={['lg', 'lg', 'xl']} fontWeight='bold'>
                            <NextLink href={'/blog'} passHref>
                                <Link display='flex' alignItems='center' color={linkColor}>Blog</Link>
                            </NextLink>
                            <Link display='flex' alignItems='center' alignContent='center' href='https://github.com/dvartic' isExternal>
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
                    </Hide>
                    <Hide above='sm'>
                        <HStack fontSize={['lg', 'lg', 'xl']}>
                            <Box paddingBottom={1.5}>
                                <IconButton aria-label='Change Color Theme' icon={<MoonIcon />} onClick={toggleColorMode} />
                            </Box>
                            <Menu>
                                <MenuButton position='relative' bottom={1} as={IconButton} aria-label='Options' icon={<HamburgerIcon />} variant='outline' />
                                <MenuList>
                                    <NextLink href={'/blog'} passHref>
                                        <MenuItem as='a'>Blog</MenuItem>
                                    </NextLink>
                                    <MenuItem icon={<Github svgColor={svgColor} />} as='a' href="https://github.com/dvartic" target='_blank'>GitHub</MenuItem>
                                </MenuList>
                            </Menu>
                        </HStack>
                    </Hide>
                </Flex>
            </Box>
        </header>
    )
}

