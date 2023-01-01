import { Box, useColorMode, Center, Text } from '@chakra-ui/react';
import NextImage from 'next/image';
import NextLink from 'next/link';

const Credits = () => {
    const { colorMode } = useColorMode();
    const isDarkMode = colorMode === 'dark';

    return (
        <Center width='full' fontFamily='mono'>
            <Box
                as={NextLink}
                href='https://vercel.com'
                target='_blank'
                rel='noopener noreferrer'
                display='flex'
                justifyContent='center'
                alignItems='center'
                gap={0.5}
            >
                <Text>Deployed by:</Text>
                <NextImage
                    style={{ filter: isDarkMode ? 'invert(1)' : 'invert(0)' }}
                    src='/vercel.svg'
                    alt='Vercel Logo'
                    width={100}
                    height={24}
                    priority
                />
            </Box>
        </Center>
    );
};

export default Credits;
