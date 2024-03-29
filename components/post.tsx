import { Box, Flex, Text, VStack, useColorModeValue, Heading, Spacer } from "@chakra-ui/react";
import NextImage from "next/image";
import { MDXRemote } from "next-mdx-remote";
import MDXComponents from "../components/MDXComponents";
import { getFormatDate } from "../lib/date";
import { QNA } from "./tfjs-qna-comp";

interface Props {
    frontmatter: {
        title: string;
        subtitle: string;
        date: string;
        tag: Array<string>;
        slug: string;
        image: string;
    };
    src: {
        compiledSource: string;
        frontmatter: {};
        scope: {};
    };
    strippedContent: string;
}

export function Post({ frontmatter, src, strippedContent }: Props) {
    // Sets different color variables depending on if the page is in dark or light mode. These variables are then used to set color in components.
    const bgOuterCont = useColorModeValue("white", "gray.700");
    const bgInsCont = useColorModeValue("gray.100", "gray.500");
    const borderCont = useColorModeValue("gray.100", "black");

    // Uses the helper function getFormatDate to format the date into a more readable form. useConst ensures the function is executed only when needed (the post changes).
    const formattedDate = getFormatDate(frontmatter.date);

    return (
        <article>
            <Box
                w="90%"
                maxWidth="1200px"
                mt={14}
                mb={14}
                ml="auto"
                mr="auto"
                backgroundColor={bgOuterCont}
                border="1px"
                borderColor={borderCont}
                borderRadius="xl"
            >
                <Box
                    h="sm"
                    backgroundColor={bgInsCont}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    borderTop="1px"
                    borderColor={borderCont}
                    borderTopRadius="xl"
                >
                    <Box boxSize={"85%"} position="relative">
                        <NextImage src={frontmatter.image} alt="Post Image" layout="fill" objectFit="contain" />
                    </Box>
                </Box>
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    pt={5}
                    pb={5}
                    maxWidth="900px"
                    mr="auto"
                    ml="auto"
                >
                    <VStack w="85%" spacing="8">
                        <Flex justifyContent="space-between" w="100%">
                            <Text>{frontmatter.tag.join(", ")}</Text>
                            <Text>{formattedDate}</Text>
                        </Flex>
                        <Box w="100%">
                            <Heading textAlign="center" as={"h1"}>
                                {frontmatter.title}
                            </Heading>
                            <Spacer h="2" />
                            <Text textAlign="center">{frontmatter.subtitle}</Text>
                        </Box>
                        <QNA strippedContent={strippedContent} />
                        <Box w="100%">
                            <MDXRemote {...src} components={MDXComponents} />
                        </Box>
                    </VStack>
                </Box>
            </Box>
        </article>
    );
}
