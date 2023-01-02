import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '~/styles/theme';
import TopLayout from '~/layouts/TopLayout';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <TopLayout>
                <Component {...pageProps} />
            </TopLayout>
        </ChakraProvider>
    );
}
