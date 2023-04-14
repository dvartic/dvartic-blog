import { VStack, Heading, Link, Flex } from "@chakra-ui/react";
import NextLink from "next/link";
import { PostPreview } from "./post-preview";

interface Props {
    pageSrc: string;
    posts: {
        title: string;
        subtitle: string;
        date: string;
        tag: Array<string>;
        slug: string;
        image: string;
    }[];
}

export function BlogPosts({ pageSrc, posts }: Props) {
    // Gets a different Heading for the component based on which page is rendering the component
    const heading = () =>
        pageSrc === "index" ? (
            <Heading as="h1" size="2xl" textAlign="center">
                Latest{" "}
                <NextLink href="/blog" passHref scroll={false}>
                    <Link color="blue.600">Blog</Link>
                </NextLink>{" "}
                Posts
            </Heading>
        ) : (
            <Heading as="h1" size="2xl" textAlign="center">
                Posts
            </Heading>
        );

    return (
        <VStack w="90%" maxWidth="1200px" mt={20} mb={20} ml="auto" mr="auto" spacing="5">
            {heading()}
            <Flex flexWrap="wrap" justifyContent="center">
                {posts.map((element, index) => {
                    return <PostPreview post={element} key={index} />;
                })}
            </Flex>
        </VStack>
    );
}
