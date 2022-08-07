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

    // Sets a variable based on the color mode being used, with the objective to also apply a different color theme for code block syntax highlighting
    const codeStyleClass = useColorModeValue('light', 'dark');

    // Function to generate Structured Data in JSON-LD for each blog post.
    function addBlogJsonLd() {
        return {
            __html: `{
                "@context": "https://schema.org", 
                "@type": "BlogPosting",
                "headline": "${frontmatter.title}",
                "alternativeHeadline": "${frontmatter.subtitle}",
                "image": "${frontmatter.image}",
                "editor": "Dvartic", 
                "genre": "Software Development", 
                "keywords": "software development programming web library framework ${frontmatter.tag.forEach((element: string) => `${element} `)}", 
                "url": "http://www.example.com",
                "datePublished": "${frontmatter.date}",
                "dateCreated": "${frontmatter.date}",
                "dateModified": "${frontmatter.date}",
                "description": "${frontmatter.subtitle}",
                "author": {
                   "@type": "Person",
                   "name": "Dvartic"
                 }
                }`,
        };
    }

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
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={addBlogJsonLd()}
                    key="product-jsonld"
                />
            </Head>
            <Box className={codeStyleClass}>
                <Post propWidth={'90%'} propMaxWidth={'1200px'} propMt={14} propMb={14} src={src} frontmatter={frontmatter} />
            </Box>
        </>
    )
}

export default PostPage