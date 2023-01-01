import { Box, Flex, useColorMode } from '@chakra-ui/react';
import NextImage from 'next/image';

const BrandNextJs = () => {
    const { colorMode } = useColorMode();
    const isDarkMode = colorMode === 'dark';

    return (
        <Flex justifyContent='center' justifyItems='center' position='relative'>
            <NextImage
                style={{ filter: isDarkMode ? 'invert(1)' : 'invert(0)' }}
                src='/next.svg'
                alt='Next.js Logo'
                width={180}
                height={37}
                priority
            />
            <Box>
                <NextImage
                    style={{ filter: isDarkMode ? 'invert(1)' : 'invert(0)' }}
                    src='/thirteen.svg'
                    alt='13'
                    width={40}
                    height={31}
                    priority
                />
            </Box>
        </Flex>
    );
};

export default BrandNextJs;
