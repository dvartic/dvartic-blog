import { Heading, Flex, useColorModeValue } from "@chakra-ui/react";

export function Banner() {
    const bg = useColorModeValue("gray.200", "gray.700");

    return (
        <>
            <Flex w="100%" justify="center" align="center" backgroundColor={bg} pt={10} pb={10}>
                <Heading as="h1" fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}>
                    Projects
                </Heading>
            </Flex>
        </>
    );
}
