import { extendTheme, StyleFunctionProps, ThemeConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools'

const config: ThemeConfig = {
  initialColorMode: 'system'
}

const colors = {
};

const fonts = {
  'mono': `ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono', 'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro', 'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace`
};

const fontSizes = {};

const fontWeights = {};

const lineHeight = {};

const letterSpacing = {};

const breakpoints = {};

const space = {};

const sizes = {
  layoutWidth: '1100px'
};

// Border radius
const radii = {};

const zIndices = {};

const semanticTokens = {
  colors: {
    callout: {
      default: "gray.300",
      _dark: "purple.800"
    },
    calloutBorder: {
      default: "gray.400",
      _dark: "purple.500"
    },
    brandBackground: {
      default: "green.100",
      _dark: "blue.900"
    },
    brandBackgroundAlt: {
      default: "blue.100",
      _dark: "green.900"
    },
  }
}

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      fontFamily: 'body',
      color: mode('gray.800', 'gray.50')(props),
      bg: mode('gray.50', 'gray.800')(props),
      lineHeight: 'base',
    },
    '*::placeholder': {
      color: mode('gray.400', 'whiteAlpha.400')(props),
    },
    '*, *::before, &::after': {
      borderColor: mode('gray.200', 'whiteAlpha.300')(props),
      wordWrap: 'break-word',
    },
  }),
}

const layerStyles = {
  main: {
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'auto 1fr auto',
    gridTemplateAreas: `"header"
                        "main"
                        "footer"`,
    minHeight: "100vh",
  },
  resource: {
    gridTemplateColumns: ['repeat(2, 1fr)', null, 'repeat(4, 1fr)'],
  }
};

export default extendTheme({ config, colors, fonts, sizes, semanticTokens, styles, layerStyles, });
