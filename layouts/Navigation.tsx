import { HStack, Spacer, Link, Box } from '@chakra-ui/react';
import NextLink from 'next/link';
import ToggleTheme from '~/components/ToggleTheme';

const Navigation = () => {
    return (
        <HStack width='full' fontFamily='mono'>
            <Link as={NextLink} href='/'>
                Home
            </Link>
            <Box fontSize='sm' opacity='0.5'>
                ■
            </Box>
            <Link
                as={NextLink}
                href='https://github.com/dmi3y/nextjs-chakraui-starter'
            >
                Source
            </Link>
            <Spacer />
            <ToggleTheme />
        </HStack>
    );
};

export default Navigation;
