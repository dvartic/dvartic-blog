// Helper functions to handle Markdown posts. These functions are called by Next getStaticProps and getStaticPaths at build time.
import matter from "gray-matter";
import { serialize } from 'next-mdx-remote/serialize';
import rehypeHighlight from 'rehype-highlight';
import fs from 'fs';
import path from 'path';

// Get current working directory
const root = process.cwd();

// Read content of the directory containing the posts.
export const getFiles = () => fs.readdirSync(path.join(root, 'data'));

// Returns contents of a specified file, using the serialize function from next-mdx-remote to process it.
export const getFileBySlug = async (slug: string) => {
    const mdxSrc = fs.readFileSync(path.join(root, 'data', `${slug}.mdx`), 'utf-8');
    const { data, content } = await matter(mdxSrc);
    const src = await serialize(content, {
        mdxOptions: {
            rehypePlugins: [rehypeHighlight]
        }
    });
    return {
        src,
        frontmatter: {
            slug,
            ...data
        }
    }
};

interface Post {
    title: string;
    subtitle: string;
    date: string;
    tag: Array<string>;
    slug: string;
    image: string;
}

// Returns an array containing all metadata from every post, ordered by date metadata
export const getAllFilesMetadata = () => {
    const files = getFiles();
    const unOrderedData = files.map((element) => {
        const mdxSrc = fs.readFileSync(path.join(root, 'data', element), 'utf-8');
        const { data } = matter(mdxSrc);
        return { ...data, slug: element.replace('.mdx', '') }
    })

    const orderedData = unOrderedData.sort((a, b) => {
        const a2 = a as Post;
        const b2 = b as Post;
        const aDate = new Date(a2.date);
        const bDate = new Date(b2.date);
        if (aDate > bDate) {
            return -1
        }
        else if (aDate < bDate) {
            return 1
        }
        else {
            return 0
        }
    })
    return orderedData;
}