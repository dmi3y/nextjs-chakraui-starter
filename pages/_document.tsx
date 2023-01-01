import { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript, ChakraProvider } from '@chakra-ui/react';
import theme from '~/styles/theme';

export default function Document() {
    return (
        <Html lang='en'>
            <Head />
            <body>
                <ChakraProvider theme={theme}>
                    <ColorModeScript
                        initialColorMode={theme.config.initialColorMode}
                    />
                    <Main />
                    <NextScript />
                </ChakraProvider>
            </body>
        </Html>
    );
}
