import { IconButton, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const ToggleTheme = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <IconButton
            variant='ghost'
            onClick={toggleColorMode}
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            aria-label='Toggle color mode'
        />
    );
};

export default ToggleTheme;
