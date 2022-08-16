import { useState, useEffect, useRef } from 'react';
import { Heading, VStack, Button, Flex, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import NET from 'vanta/dist/vanta.net.min.js';
import * as THREE from 'three';

export function Banner() {
    const [vantaEffect, setVantaEffect]: any = useState(0);
    const vantaRef = useRef(null);

    const vantaBg = useColorModeValue('gray.100', 'gray.700');

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(NET({
                el: vantaRef.current,
                THREE: THREE,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 5.00,
                minWidth: 5.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x3182ce,
                backgroundAlpha: 0
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])
    return (
        <>
            <Flex w='100%' h='75vh' minH={500} ref={vantaRef} justifyContent='center' alignItems='center' alignContent='center' backgroundColor={vantaBg}>
                <VStack spacing={4}>
                    <Heading as='h1' size='4xl' textAlign='center'>Dvartic</Heading>
                    <Heading size='md' textAlign='center' as='h2' >Web Developer</Heading>
                    <NextLink href={'/contact'} passHref scroll={false}>
                        <Button colorScheme='blue' size='lg'>Get in Touch</Button>
                    </NextLink>
                </VStack>
            </Flex>
        </>
    )
}