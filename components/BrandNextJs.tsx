import { Box, Flex, useColorMode } from '@chakra-ui/react';
import NextImage from 'next/image';

const BrandNextJs = () => {
    const { colorMode } = useColorMode();
    const isDarkMode = colorMode === 'dark';

    const beforeAndAfter = {
        content: '""',
        left: '50%',
        position: 'absolute',
        filter: 'blur(45px)',
        transform: 'translateZ(0)',
        zIndex: 'hide',
    };

    return (
        <Flex
            justifyContent='center'
            justifyItems='center'
            position='relative'
            _before={{
                background: 'brandBackgroundAlt',
                borderRadius: '50%',
                width: '480px',
                height: '360px',
                marginLeft: '-400px',
                marginTop: '-200px',
                ...beforeAndAfter,
            }}
            _after={{
                background: 'brandBackground',
                width: '240px',
                height: '180px',
                ...beforeAndAfter,
            }}
        >
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
