import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { About } from '../components/about';
import { Technologies } from '../components/technologies';
import { BlogPosts } from '../components/blog-posts';
import { getAllFilesMetadata } from '../lib/mdx';

// Get post metadata to display on page. Generates at build time only. Slices the array to get only the 6 latest posts.
export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllFilesMetadata();
  const slicedPosts = await posts.slice(0, 6);
  return {
    props: { slicedPosts }
  }
}

const Home: NextPage = ({ slicedPosts }: InferGetStaticPropsType<typeof getStaticProps>) => {

  return (
    <>
      <Head>
        <title>Dvartic - Homepage</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="Hello! I am a front-end web developer with specialties in React and Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <About propWidth={'90%'} propMaxWidth={'420px'} propMt={14} propMb={14} />
      <Technologies propWidth={'90%'} propMaxWidth={'750px'} propMt={14} propMb={14} />
      <BlogPosts propWidth={'90%'} propMaxWidth={'1200px'} propMt={20} propMb={14} pageSrc={'index'} posts={slicedPosts} />
    </>
  )
}

export default Home
