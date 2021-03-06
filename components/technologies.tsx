import { Heading, VStack, SimpleGrid, Text, Box, Spacer, Hide, useColorModeValue } from "@chakra-ui/react";
import { ReactLogo } from "./custom-icons/react-logo";
import { Chakra } from "./custom-icons/chakra";
import { Tailwind } from "./custom-icons/tailwind";
import { JavascriptLogo } from "./custom-icons/javascript-logo";
import { CssLogo } from "./custom-icons/css-logo";
import { Html5Logo } from "./custom-icons/html5logo";
import { ReduxLogo } from "./custom-icons/redux-logo";
import { NextLogo } from "./custom-icons/next-logo";
import { TsLogo } from "./custom-icons/ts-logo";
import { GnuLinux } from "./custom-icons/gnulinux-logo";

interface Props {
    propWidth: string;
    propMaxWidth: string;
    propMt: number;
    propMb: number;
}

export function Technologies({propWidth, propMaxWidth, propMt, propMb}: Props) {

    // Sets a different color to the variable depending on if the page is in dark or light mode. This variable is then used to set color in some SVGs.
    const svgColor = useColorModeValue('black', 'white');
    
    return (
        <VStack w={propWidth} maxWidth={propMaxWidth} mt={propMt} mb={propMb} ml='auto' mr='auto' spacing='5'>
            <Heading as='h1' size='2xl' textAlign='center'>Technologies</Heading>
            <SimpleGrid columns={[3, 4, 5]} spacing={[6, 6, 10]}>
                <Box>
                    <ReactLogo />
                    <Text position='relative' bottom='2' fontSize={['lg', 'lg', 'xl', 'xl', 'xl']} textAlign='center'>React</Text>
                </Box>
                <Box>
                    <NextLogo svgColor={svgColor} />
                    <Text position='relative' bottom='2' fontSize={['lg', 'lg', 'xl', 'xl', 'xl']} textAlign='center'>Next.js</Text>
                </Box>
                <Box>
                    <TsLogo />
                    <Text position='relative' bottom='2' fontSize={['lg', 'lg', 'xl', 'xl', 'xl']} textAlign='center'>TypeScript</Text>
                </Box>
                <Box>
                    <ReduxLogo />
                    <Text position='relative' bottom='2' fontSize={['lg', 'lg', 'xl', 'xl', 'xl']} textAlign='center'>Redux</Text>
                </Box>
                <Box>
                    <Html5Logo />
                    <Text position='relative' bottom='2' fontSize={['lg', 'lg', 'xl', 'xl', 'xl']} textAlign='center'>HTML</Text>
                </Box>
                <Box>
                    <CssLogo />
                    <Text position='relative' bottom='2' fontSize={['lg', 'lg', 'xl', 'xl', 'xl']} textAlign='center'>CSS</Text>
                </Box>
                <Box>
                    <JavascriptLogo />
                    <Text position='relative' bottom='2' fontSize={['lg', 'lg', 'xl', 'xl', 'xl']} textAlign='center'>JavaScript</Text>
                </Box>
                <Box>
                    <Tailwind />
                    <Text position='relative' bottom='2' fontSize={['lg', 'lg', 'xl', 'xl', 'xl']} textAlign='center'>Tailwind</Text>
                </Box>
                <Hide above='md'>
                    <Hide below="sm">
                        <Spacer />
                    </Hide>
                </Hide>
                <Box>
                    <Chakra />
                    <Text position='relative' bottom='2' fontSize={['lg', 'lg', 'xl', 'xl', 'xl']} textAlign='center'>Chakra UI</Text>
                </Box>
                <Hide above="sm">
                    <Spacer />
                </Hide>
                <Box>
                    <GnuLinux />
                    <Text position='relative' bottom='2' fontSize={['md', 'lg', 'xl', 'xl', 'xl']} textAlign='center'>GNU+Linux</Text>
                </Box>
            </SimpleGrid>
        </VStack>
    )
}