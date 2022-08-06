import type { NextPage, GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from 'next';
import { Box, useColorModeValue } from '@chakra-ui/react';
import Head from 'next/head';
import { Post } from '../../components/post';
import { getFileBySlug, getFiles } from '../../lib/mdx';
import { ParsedUrlQuery } from 'querystring';


interface Params extends ParsedUrlQuery {
    slug: string,
}

// Get post metadata to display on page. Generates at build time only.
export const getStaticProps: GetStaticProps = async (context) => {
    const params = context.params as Params
    const { src, frontmatter } = await getFileBySlug(params.slug);
    return {
        props: { src, frontmatter }
    }
}

// Generate pages and routes for every post. Executes at build time only.
export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await getFiles();
    const paths = posts.map((element) => {
        return ({
            params: {
                slug: element.replace(/\.mdx/, ''),
            }
        })
    });
    return {
        paths,
        fallback: false
    }
}

const PostPage: NextPage = ({ src, frontmatter }: InferGetStaticPropsType<typeof getStaticProps>) => {
    const codeStyleClass = useColorModeValue('light', 'dark')
    return (
        <>
            <Head>
                <title>{frontmatter.title}</title>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="description" content={frontmatter.subtitle} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:title" content={frontmatter.title} />
                <meta property="og:description" content={frontmatter.subtitle} />
                <meta property="og:image" content={frontmatter.image} />
            </Head>
            <Box className={codeStyleClass}>
                <Post propWidth={'90%'} propMaxWidth={'1200px'} propMt={14} propMb={14} src={src} frontmatter={frontmatter} />
            </Box>
        </>
    )
}

export default PostPage