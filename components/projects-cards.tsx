import { Wrap, WrapItem, VStack, Box, Text, LinkBox, LinkOverlay, useMediaQuery } from "@chakra-ui/react";
import NextImage from "next/image";
import edepoImage from "../public/images/projects-images/edepo_eyecatch.png";
import opodatosImage from "../public/images/projects-images/opodatos_eyecatch.png";
import terryadavisImage from "../public/images/projects-images/terryadavis_eyecatch.png";

const cardData = [
    {
        image: edepoImage,
        alt: "EDEPO Web Screenshot",
        link: "https://www.edepo.es",
        title: "EDEPO Asesoría",
        subtitle:
            "A website and blog for the accounting firm EDEPO, based in Pontevedra. Made using React, Next and Strapi.",
    },
    {
        image: opodatosImage,
        alt: "OpoDatos Web Screenshot",
        link: "https://www.opodatos.com",
        title: "OpoDatos",
        subtitle:
            "A full-stack data mining project that aims to solve information asymmetry in government hiring processes. Made using React, Next, Vitess, Scrapy and multiple data analysis tools.",
    },
    {
        image: terryadavisImage,
        alt: "TerryADavis Web Screenshot",
        link: "https://dvartic.github.io/terrydavis-website/",
        title: "Terry A. Davis Tribute Website",
        subtitle:
            "A simple, TempleOS inspired website made as a tribute to Terry A. Davis, a very talented programmer that suffered from schizophrenia. Built without using any library or framework, just HTML, CSS and JavaScript.",
    },
];

export function ProjectsCards() {
    const [isSmallerThan786] = useMediaQuery("(max-width: 800px)");

    return (
        <>
            <Wrap
                w="90%"
                maxWidth="750px"
                mt={20}
                mb={20}
                ml="auto"
                mr="auto"
                spacing={16}
                justify="center"
                align="start"
            >
                {cardData.map((card, index) => {
                    return (
                        <WrapItem key={index}>
                            <LinkBox>
                                <VStack
                                    maxW={isSmallerThan786 ? "550px" : "xs"}
                                    w="100%"
                                    spacing={6}
                                    _hover={{ opacity: 0.8 }}
                                >
                                    <Box position="relative" w="100%">
                                        <NextImage
                                            src={card.image}
                                            alt={card.alt}
                                            objectFit="contain"
                                            style={{ borderRadius: "0.75rem" }}
                                        />
                                    </Box>
                                    <VStack textAlign="center" align="center">
                                        <LinkOverlay href={card.link} target="_blank" fontWeight="bold" fontSize="3xl">
                                            {card.title}
                                        </LinkOverlay>
                                        <Text>{card.subtitle}</Text>
                                    </VStack>
                                </VStack>
                            </LinkBox>
                        </WrapItem>
                    );
                })}
            </Wrap>
        </>
    );
}
