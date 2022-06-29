import { Heading, VStack, Text, Box } from "@chakra-ui/react";
import NextImage from 'next/image';

interface Props {
    propWidth: string,
    propMaxWidth: string,
    propMt: number,
    propMb: number
}

export function About({ propWidth, propMaxWidth, propMt, propMb }: Props) {
    return (
        <VStack w={propWidth} maxWidth={propMaxWidth} mt={propMt} mb={propMb} ml='auto' mr='auto' spacing='5'>
            <Box>
                <Heading as='h1' size='2xl' textAlign='center'>Dvartic</Heading>
                <Text textAlign='center' fontSize={{ base: 'md', sm: 'md', md: 'lg' }}>Front-End Web Developer</Text>
            </Box>
            <Box>
                <NextImage src='/images/pfp.png' alt='Profile Picture' width={100} height={100} style={{ borderRadius: '100%' }} />
            </Box>
            <Text textAlign='center'>I am a front-end web developer with specialties in React and Next.js. I like to develop projects that enable great user experiences on the web. Aside from web, I also hold interests in GNU/Linux and PC hardware.</Text>
        </VStack>
    )
}
