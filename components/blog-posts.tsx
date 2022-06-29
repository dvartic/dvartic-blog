import { VStack, Heading, Link, Flex } from "@chakra-ui/react";
import { useMemo } from "react";
import NextLink from "next/link"
import { PostPreview } from "./post-preview";

interface Props {
    propWidth: string,
    propMaxWidth: string,
    propMt: number,
    propMb: number,
    pageSrc: string,
    posts: {
        title: string,
        subtitle: string,
        date: string,
        tag: Array<string>,
        slug: string,
        image: string
    }[],
}

export function BlogPosts({ propWidth, propMaxWidth, propMt, propMb, pageSrc, posts }: Props) {

    // Gets a different Heading for the component based on which page is rendering the component. useMemo ensures the heading is only recalculated if the page source changes.
    const heading = useMemo(() => pageSrc === 'index' ? <Heading as='h1' size='2xl' textAlign='center'>Latest <NextLink href='/blog' passHref><Link color='blue.600'>Blog</Link></NextLink> Posts</Heading> : <Heading as='h1' size='2xl' textAlign='center'>Posts</Heading>, [pageSrc])

    return (
        <VStack w={propWidth} maxWidth={propMaxWidth} mt={propMt} mb={propMb} ml='auto' mr='auto' spacing='5'>
            {heading}
            <Flex flexWrap='wrap' justifyContent='center'>
                {posts.map((element, index) => {
                    return (
                        <PostPreview post={element} key={index} />
                    )
                })}
            </Flex>
        </VStack>
    )
}