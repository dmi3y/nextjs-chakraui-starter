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
    }
  }
}

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      fontFamily: 'body',
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('white', 'gray.800')(props),
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
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 6,
    maxHeight: "100vh",
  },
  description: {
    fontFamily: 'mono',
    maxWidth: 'layoutWidth',
  },
};

export default extendTheme({ config, colors, fonts, sizes, semanticTokens, styles, layerStyles, });
