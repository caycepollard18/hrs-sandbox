const palette = {
  white: '#ffffff',
  gray: '#36393D',
  lightGray: '#35353A50',
  offBlack: '#161616',
  offBlack20: '#16161620',
  offBlack50: '#16161650',
  black: '#000000',
  bone: '#f3efec',
  darkBone: '#F6F1EE',
  funnyName: '#ff0000',
}

const theme = {
  breakpoints: ['650px', '960px', '1280px', '1920px'],
  space: [0, 4, 8, 16, 24, 32, 48, 64, 72, 80, 128, 256, 512],
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
  initialColorModeName: 'light',
  colors: {
    ...palette,
    text: palette.offBlack,
    background: palette.bone,
    primary: palette.offBlack,
    accent: palette.white,
    muted: palette.gray,
    superMuted: palette.lightGray,
    softPrimary: palette.offBlack20,
    softSecondary: palette.offBlack50,
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
  shadows: {
    0: 'none',
    card: 'inset 1px 1px 0px 0 #16161620',
    cardHover: 'inset 8px 8px 0px 0 #FFFFFF, inset -8px -8px 0px 0 #FFFFFF, 0px 3px 22px #00000059',
    inactiveButton: '1px 1px 1px #00000040',
    activeButton: '0px 3px 6px #00000029',
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
      color: 'accent',
      homepage: {
        h1: {
          variant: 'text.title'
        },
        span: {
          variant: 'text.subtitle'
        }
      },
      collection: {
        h1: {
          variant: 'text.heading',
          fontSize: [5, 5, 6],
          textTransform: 'uppercase',
        },
        span: {
          variant: 'text.subtitle'
        }
      }
    },
    main: {
      color: 'muted',
      fontSize: 1,
      fontWeight: 400,
    },
    product: {
      backgroundColor: 'white',
    },
    footer: {
      color: 'accent',
      backgroundColor: 'primary',
      fontSize: 1,
      fontWeight: 400,
      lineHeight: 'heading',
    },
    collection: {
      card: {
        boxShadow: [0, 'card'],
        '&:hover': {
          border: ['none'],
          boxShadow: [0, 'cardHover'],
        },
        a: {
          '&:hover': {
            opacity: 1,
          },
        },
        description: {
          color: 'superMuted',
        }
      },
    },
    selector: {
      swatch: {
        border: '1px solid #ffffff00',
        boxShadow: '1px 1px 1px #00000040',
        '&:hover': {
          border: '1px solid #ffffff40',
          boxShadow: '1px 1px 1px #00000040, 0px 2px 4px #00000029',
        },
        active: {
          border: '1px solid white',
          boxShadow: '0px 3px 6px #00000029',
        }
      }
    }
  },
  buttons: {
    primary: {
      bg: 'primary',
      color: 'accent',
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