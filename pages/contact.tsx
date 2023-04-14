import type { NextPage } from "next";
import Head from "next/head";
import { ContactComp } from "../components/contact-comp";

const Contact: NextPage = () => {
    return (
        <>
            <Head>
                <title>Dvartic - Contact</title>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="description" content="Get in contact with Dvartic" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:title" content="Dvartic - Contact" />
                <meta property="og:description" content="Get in contact with Dvartic" />
                <meta property="og:image" content="/images/pfp.png" />
            </Head>
            <ContactComp />
        </>
    );
};

export default Contact;
