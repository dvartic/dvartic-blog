import type { NextPage } from "next";
import Head from "next/head";
import { Banner } from "../components/projects-banner";
import { ProjectsCards } from "../components/projects-cards";

const Projects: NextPage = () => {
    return (
        <>
            <Head>
                <title>Dvartic - Projects</title>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="description" content="Explore Dvartic's projects" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:title" content="Dvartic - Projects" />
                <meta property="og:description" content="Explore Dvartic's projects" />
                <meta property="og:image" content="/images/pfp.png" />
            </Head>
            <Banner />
            <ProjectsCards propWidth={"90%"} propMaxWidth={"750px"} propMt={20} propMb={20} />
        </>
    );
};

export default Projects;
