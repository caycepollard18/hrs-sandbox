const palette = {
  offBlack: '#161616',
  gray: '#9a9a9a',
  cream: '#f3efec',
  bone: '#F7F4F2',
  night: '#35353A',
  white: '#fff',
}

const theme = {
  breakpoints: ['650px', '960px', '1280px', '1920px'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body:
      'GranbyEF, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    ...palette,
    text: palette.offBlack,
    background: palette.bone,
  },
  text: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
    title: {
      fontFamily: 'heading',
      fontSize: [3, 5, 5, 7],
      fontWeight: 'heading',
      lineHeight: 'heading',
      textTransform: 'uppercase',
    },
    subtitle: {
      fontFamily: 'heading',
      fontSize: [1, 3, 3, 4],
      fontStyle: 'italic',
      fontWeight: 'body',
      lineHeight: 'heading',
    },
    small: {
      fontFamily: 'body',
      fontWeight: 'body',
      fontSize: 0,
      lineHeight: 'body',
    }
  },
  styles: {
    root: {
      color: 'text',
      backgroundColor: 'background',
      fontFamily: 'body',
      fontSize: '1rem',
      fontWeight: 'body',
      lineHeight: 'body',
      margin: 0,
      minHeight: '100%',
      overflowX: 'hidden',
      padding: 0,
      position: 'relative',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      textRendering: 'optimizeLegibility',
    },
    a: {
      color: 'inherit',
      fontSize: 'inherit',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'none',
      }
    }
  },
  layout: {
    hero: {
      color: 'white',
    },
    footer: {
      backgroundColor: 'offBlack',
      color: 'white',
      fontSize: 1,
      lineHeight: 'heading',
    },
  },
  buttons: {
    primary: {
      height: 40,
      width: 250,
      bg: 'offBlack',
      border: 0,
      borderRadius: 0,
      color: 'white',
      display: 'inline-block',
      fontFamily: 'body',
      fontSize: 1,
      fontWeight: 'bold',
      lineHeight: 'heading',
      outline: 'none',
      textTransform: 'uppercase',
    }
  },
}

export default theme