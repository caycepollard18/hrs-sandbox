const palette = {
  white: '#ffffff',
  gray: '#36393D',
  offBlack: '#161616',
  offBlack20: 'rgba(22, 22, 22, 0.2)',
  offBlack50: 'rgba(22, 22, 22, 0.5)',
  black: '#000000',
  cream: '#f3efec',
  bone: '#F7F4F2',
  darkBone: '#F6F1EE',
  night: '#35353A',
}

const theme = {
  breakpoints: ['650px', '960px', '1280px', '1920px'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: 'GranbyEF, system-ui, sans-serif',
    heading: 'inherit',
    accent: 'Playfair Display, serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.3125,
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
      fontSize: [4, 5, 7],
      fontWeight: 'heading',
      lineHeight: 'heading',
      textTransform: 'uppercase',
    },
    subtitle: {
      fontFamily: 'accent',
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
    },
    micro: {
      fontFamily: 'body',
      fontWeight: '300',
      fontSize: 0,
      lineHeight: 'heading',
      textTransform: 'uppercase'
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
      'a': {
        color: 'inherit',
        fontSize: 'inherit',
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'none',
          opacity: '0.75',
        },
      },
      'svg': {
        display: 'block',
      }
    },
    p: {
      my: 2,
    },
    h1: {
      variant: 'text.heading',
      fontSize: [4, 4, 5],
      textTransform: 'uppercase',
    },
    h2: {
      variant: 'text.heading',
      fontSize: [3, 3, 4],
      textTransform: 'uppercase',
    },
    h3: {
      variant: 'text.heading',
      fontSize: [2, 2, 3],
      textTransform: 'uppercase',
    },
    h4: {
      variant: 'text.heading',
      fontSize: 2,
    },
    h5: {
      variant: 'text.heading',
      fontSize: 1,
    },
    h6: {
      variant: 'text.heading',
      fontSize: 0,
    },
  },
  layout: {
    header: {
      color: ['darkBone', 'darkBone', 'white'],
      opacity: ['0.5', '0.5', '1.0'],
      fontSize: 2,
      fontWeight: '700',
      lineHeight: 'heading',
      textTransform: 'uppercase',
    },
    hero: {
      color: 'white',
    },
    main: {
      color: 'gray',
      fontSize: 1,
      fontWeight: 400,
    },
    footer: {
      color: 'white',
      backgroundColor: 'offBlack',
      fontSize: 1,
      fontWeight: 400,
      lineHeight: 'heading',
    },
  },
  buttons: {
    primary: {
      bg: 'offBlack',
      color: 'white',
      fontFamily: 'body',
      fontSize: 1,
      fontWeight: 'bold',
      lineHeight: 'heading',
      outline: 'none',
      textTransform: 'uppercase',
    }
  },
  links: {
    footer: {
      borderBottom: ['1px solid #434343', 'none'],
    },
  }
}

export default theme