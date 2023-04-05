import { Wrap, WrapItem, VStack, Box, Text, LinkBox, LinkOverlay, useMediaQuery } from "@chakra-ui/react";
import NextImage from "next/image";
import edepoImage from "../public/images/projects-images/edepo_eyecatch.png";
import opodatosImage from "../public/images/projects-images/opodatos_eyecatch.png";

interface Props {
    propWidth: string;
    propMaxWidth: string;
    propMt: number;
    propMb: number;
}

export function ProjectsCards({ propWidth, propMaxWidth, propMt, propMb }: Props) {
    const [isSmallerThan786] = useMediaQuery("(max-width: 800px)");
    return (
        <>
            <Wrap
                w={propWidth}
                maxWidth={propMaxWidth}
                mt={propMt}
                mb={propMb}
                ml="auto"
                mr="auto"
                spacing={16}
                justify="center"
                align="start"
            >
                {/* EDEPO */}
                <WrapItem>
                    <LinkBox>
                        <VStack maxW={isSmallerThan786 ? "550px" : "xs"} w="100%" spacing={6} _hover={{ opacity: 0.8 }}>
                            <Box position="relative" w="100%">
                                <NextImage
                                    src={edepoImage}
                                    alt="EDEPO Web Screenshot"
                                    objectFit="contain"
                                    style={{ borderRadius: "0.75rem" }}
                                />
                            </Box>
                            <VStack textAlign="center" align="center">
                                <LinkOverlay
                                    href="https://www.edepo.es"
                                    target="_blank"
                                    fontWeight="bold"
                                    fontSize="3xl"
                                >
                                    EDEPO Asesoría
                                </LinkOverlay>
                                <Text>
                                    A website and blog for the accounting firm EDEPO, based in Pontevedra. Made using
                                    React, Next and Strapi.
                                </Text>
                            </VStack>
                        </VStack>
                    </LinkBox>
                </WrapItem>

                {/* OpoDatos */}
                <WrapItem>
                    <LinkBox>
                        <VStack maxW={isSmallerThan786 ? "550px" : "xs"} w="100%" spacing={6} _hover={{ opacity: 0.8 }}>
                            <Box position="relative" w="100%">
                                <NextImage
                                    src={opodatosImage}
                                    alt="EDEPO Web Screenshot"
                                    objectFit="contain"
                                    style={{ borderRadius: "0.75rem" }}
                                />
                            </Box>
                            <VStack textAlign="center" align="center">
                                <LinkOverlay
                                    href="https://www.opodatos.com"
                                    target="_blank"
                                    fontWeight="bold"
                                    fontSize="3xl"
                                >
                                    OpoDatos
                                </LinkOverlay>
                                <Text>
                                    A full-stack data mining project aiming to solve information asymmetry in government
                                    hiring processes. Made using React, Next, Vitess, Scrapy and multiple data analysis
                                    tools.
                                </Text>
                            </VStack>
                        </VStack>
                    </LinkBox>
                </WrapItem>
            </Wrap>
        </>
    );
}
