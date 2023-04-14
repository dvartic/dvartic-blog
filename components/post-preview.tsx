import { Box, Flex, Text, VStack, useColorModeValue, Link } from "@chakra-ui/react";
import NextImage from "next/image";
import NextLink from "next/link";
import { getFormatDate } from "../lib/date";

interface Props {
    post: {
        title: string;
        subtitle: string;
        date: string;
        tag: Array<string>;
        slug: string;
        image: string;
    };
}

export function PostPreview({ post }: Props) {
    // Sets different color variables depending on if the page is in dark or light mode. These variables are then used to set color in components.
    const bgOuterCont = useColorModeValue("white", "gray.700");
    const bgInsCont = useColorModeValue("gray.100", "gray.500");
    const borderCont = useColorModeValue("gray.100", "black");

    // Uses the helper function getFormatDate to format the date into a more readable form. useMeme ensures the function is executed only when needed (the post changes).
    const formattedDate = getFormatDate(post.date);

    return (
        <Box
            w="xs"
            h="sm"
            backgroundColor={bgOuterCont}
            border="1px"
            borderColor={borderCont}
            borderRadius="xl"
            margin={4}
        >
            <NextLink href={`/blog/${post.slug}`} passHref scroll={false}>
                <Link variant={"post-preview"}>
                    <Box
                        h="50%"
                        backgroundColor={bgInsCont}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        borderTop="1px"
                        borderColor={borderCont}
                        borderTopRadius="xl"
                    >
                        <Box boxSize={"85%"} position="relative">
                            <NextImage src={post.image} alt="Post Image" layout="fill" objectFit="contain" />
                        </Box>
                    </Box>

                    <Box h="50%" display="flex" justifyContent="center" alignItems="center">
                        <VStack w="85%" h="85%" spacing="3">
                            <Flex justifyContent="space-between" w="100%">
                                <Text>{post.tag.join(", ")}</Text>
                                <Text>{formattedDate}</Text>
                            </Flex>
                            <Text fontSize={["lg"]} fontWeight="bold" textAlign="center">
                                {post.title}
                            </Text>
                            <Text textAlign="center">{post.subtitle}</Text>
                        </VStack>
                    </Box>
                </Link>
            </NextLink>
        </Box>
    );
}
