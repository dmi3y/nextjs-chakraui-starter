import Head from 'next/head';
import Details from '~/layouts/Details';

export default function Home() {
    return (
        <>
            <Head>
                <title>Next App with Chakra UI</title>
                <meta
                    name='description'
                    content='Next.js app starter with Chakra UI setup.'
                />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Details />
        </>
    );
}
