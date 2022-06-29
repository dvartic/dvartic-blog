import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { Search } from '../../components/search';
import { BlogPosts } from '../../components/blog-posts';
import { getAllFilesMetadata } from '../../lib/mdx';

// Get post metadata to display on page. Generates at build time only.
export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllFilesMetadata();
  return {
    props: { posts }
  }
}

interface Props {
  posts: [
    {
      title: string,
      subtitle: string,
      date: string,
      tag: Array<string>,
      slug: string,
      image: string
    }
  ]
}

type Posts = {
  title: string,
  subtitle: string,
  date: string,
  tag: Array<string>,
  slug: string,
  image: string
}[]

const Blog: NextPage<Props> = ({ posts }) => {
  const [searchStr, setSearchStr] = useState('')
  const [filteredPosts, setFilteredPosts] = useState<Posts>(posts)

  // Sets the state searchStr of the component based on the input made by the user in the <Search> component. handleChange is passed to this <Search> component to achieve this.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchStr(e.target.value);
  }

  // Waits until the user stops writing (100ms) to then perform a search and update the filteredPosts state with the results of the search. The 100ms counter is restarted every time the user makes a new input.
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchStr === '') {
        setFilteredPosts(posts);
      }
      else {
        const filteredArr = posts.filter((element) => {
          const isInTitle = element.title.toLowerCase().includes(searchStr.toLowerCase());
          const isInSubtitle = element.subtitle.toLowerCase().includes(searchStr.toLowerCase());
          const isInTag = element.tag.join(' ').toLowerCase().includes(searchStr.toLowerCase());
          return (isInTitle || isInSubtitle || isInTag);
        })
        setFilteredPosts(filteredArr);
      }
    }, 100);
    return () => clearTimeout(timeoutId);
  }, [searchStr]);

  return (
    <>
      <Head>
        <title>Dvartic - Blog</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="Welcome to my blog! I am a front-end web developer with specialties in React and Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Search propWidth={'90%'} propMaxWidth={'1200px'} propMt={14} propMb={14} handleChange={handleChange} />
      <BlogPosts propWidth={'90%'} propMaxWidth={'1200px'} propMt={14} propMb={14} pageSrc={'blog'} posts={filteredPosts} />
    </>
  )
}

export default Blog