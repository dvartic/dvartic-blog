# Personal Page/Blog created using React and Next.js SSG
This website is a simple personal page that includes a landing page and a blog. Blog posts are stored in Markdown files, which are processed at build time to generate JavaScript/HTML.

## Who am I?
I am a front-end web developer currently working on React-based projects. I am self-taught. Before learning web development I studied Accounting and worked on the business-side. In tech, I also hold interests in GNU/Linux and PC hardware.

## What technologies did I use and why?
* [React.js](https://reactjs.org/): React is very flexible, has great support and is one of the prime libraries used to build user interfaces.
* [Next.js](https://nextjs.org/): Next is a framework that works with React to enable functionalities such as Server Side Rendering (SSR) and Static Site Generation (SSG). Due to the nature of this site, where data is only updated when a new post is created, all pages are generated using SSG.
* [ChakraUI](https://chakra-ui.com/): Chakra is one of the main component libraries for React and allows fast development.
* [TypeScript](https://www.typescriptlang.org/): provides static typing to JavaScript.
* [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote): efficiently loads MarkdownX content through getStaticProps in Next.js.
* [MarkdownX](https://mdxjs.com/): allows injecting of JSX in Markdown files.
* [rehype-highlight](https://github.com/rehypejs/rehype-highlight) with custom [highlight.js](https://highlightjs.org/) stylesheet with support for light/dark theme.

## Why I made this website?
I was inspired by blogs made by other developers and how useful they were in my journey. I too wanted to share my knowledge with others.

## What are some of the features of this site?
* Light and dark theme support, with system color theme detection.
* Full Static Site Generation for performance and SEO.
* Full responsive design.
* MarkdownX support.
* Search/Filter function for posts, that appropiately waits until the user stops writing to start searching.
* Post ordered by date (located in post metadata). Latest post section that shows the 6 latest posts.
* Syntax highlighting for code blocks, with custom stylesheet for dark/light mode.
* Use of React `useMemo()` and `useEffect()` where appropiate to avoid executing code on every re-render when not necessary.

## How is the project's folder structure organized?
The project follows Next.js guidelines and is structured as follows:
* `/pages` folder holds the main pages of the site. `/pages/blog` holds the blog index and each blog post. Next.js routes automatically based on the folder structure inside the `/pages` folder.
* `/components` folder holds reusable React components, both components that are imported directly to `/pages` and components imported by other components. The folder `/components/custom-icons` holds various SVG files that are used throughout the page. Some of these SVGs are configured programatically.
* `/public` folder holds static assets (images). In Next.js static assets should be placed in this folder.
* `/src/theme` holds ChakraUI Theme configuration.
* `/styles` holds a dark and light modifyed CSS stylesheet from `highlight.js` for use with `rehype-highlight`
* `/lib` holds helper functions that are imported throughout the project.
* `/data` holds the posts in MarkdownX format.

## See also:
* Server Side Rendering vs Static Site Generation vs Client Side Rendering: https://www.hackingnote.com/en/versus/ssg-vs-ssr-vs-csr
* Dan Abramov blog: https://overreacted.io/