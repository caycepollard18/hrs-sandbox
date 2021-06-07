const palette = {
  white: '#ffffff',
  gray: '#36393D',
  lightGray: '#35353A80',
  offBlack: '#161616',
  offBlack20: '#16161633',
  offBlack50: '#16161680',
  offBlack80: '#161616CC',
  black: '#000000',
  bone: '#f3efec',
  darkBone: '#F6F1EE',
  funnyName: '#ff0000',
}

const theme = {
  breakpoints: ['648px', '960px', '1280px', '1920px'],
  space: [0, 4, 8, 16, 24, 32, 48, 64, 72, 80, 128, 256, 512],
  fonts: {
    body: 'GranbyEF, system-ui, sans-serif',
    heading: 'inherit',
    accent: 'Playfair Display, serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    light: 300,
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    tight: 1.0,
    body: 1.3125,
    heading: 1.125,
    expanded: 1.5,
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
    emphasis: {
      fontWeight: 'bold',
    },
    small: {
      fontFamily: 'body',
      fontWeight: 'body',
      fontSize: 0,
      lineHeight: 'body',
    },
    micro: {
      fontFamily: 'body',
      fontWeight: 'light',
      fontSize: 0,
      lineHeight: 'heading',
      textTransform: 'uppercase'
    }
  },
  shadows: {
    0: 'none',
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
      padding: 0,
      position: 'relative',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      textRendering: 'optimizeLegibility',
      'a': {
        color: 'inherit',
        fontSize: 'inherit',
        textDecoration: 'none',
      },
      'svg': {
        display: 'block',
      },
      'body': {
        overflow: 'auto',
        overflowX: 'hidden',
      }
    },
    p: {
      marginBlockStart: 0,
      marginBlockEnd: 2,
      mt: 0,
      mb: 2,
    },
    ul: {
      marginBlockStart: 0,
      marginBlockEnd: 0,
    },
    h1: {
      variant: 'text.heading',
      fontSize: [5, 5, 6],
      textTransform: 'uppercase',
    },
    h2: {
      variant: 'text.heading',
      fontSize: [4, 4, 5],
      textTransform: 'uppercase',
    },
    h3: {
      variant: 'text.heading',
      fontSize: [3, 3, 4],
      textTransform: 'uppercase',
    },
    h4: {
      variant: 'text.heading',
      fontSize: 3,
    },
    h5: {
      variant: 'text.heading',
      fontSize: 2,
    },
    h6: {
      variant: 'text.heading',
      fontSize: 1,
    },
  },
  layout: {
    header: {
      color: ['darkBone', 'darkBone', 'white'],
      fontSize: 2,
      fontWeight: '700',
      lineHeight: 'body',
      textTransform: 'uppercase',
      dark: {
        backgroundColor: 'black',
      },
      links: {
        cursor: 'pointer',
        borderBottom: '2px solid',
        borderColor: 'transparent',
        '&:hover': {
          borderBottom: '2px solid',
          borderColor: 'white',
        },
        active: {
          borderBottom: '2px solid',
          borderColor: 'white',
        },
      },
      menu: {
        backgroundColor: 'black',
        fontSize: 3,
        fontWeight: 'body',
        lineHeight: 'expanded',
        opacity: '1',
        transition: '0.25s transform ease-in-out',
      },
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
      backgroundColor: ['offBlack', 'white'],
      borderLeft: '1px solid',
      borderColor: 'offBlack20',
      color: ['white', 'inherit'],
      description: {
        title: {
          variant: 'styles.h1',
          fontSize: [4, 5, 5, 6],
        },
        notice: {
          borderTop: ['none', '1px solid'],
          borderBottom: ['none', '1px solid'],
          borderColor: 'offBlack20',
          color: 'offBlack50'
        },
        details: {
          fontSize: 1,
          textTransform: 'uppercase',
        },
        '& p, ul': {
          mb: 2,
          marginBlockStart: 0,
          marginBlockEnd: 2,
          mt: 0,
        }
      },
      card: {
        details: {
          fontSize: 0,
          fontWeight: 'light',
          textTransform: 'uppercase',
          lineHeight: 1,
        },
        price: {
          fontSize: [0, 1],
          fontWeight: ['light', 'body'],
          textTransform: 'uppercase',
        }
      }
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
        backgroundColor: 'background',
        borderLeft: '1px solid',
        borderTop: '1px solid',
        borderColor: '#16161620',
        position: 'relative',
        transition: 'transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)',
        '&::after': {
          boxShadow: [0, 'cardHover'],
          content: '""',
          display: ['none', 'block'],
          height: '100%',
          left: 0,
          opacity: 0,
          position: 'absolute',
          top: 0,
          transition: 'all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)',
          width: '100%',
          zIndex: '-1',
        },
        '&:hover': {
          borderColor: ['#16161620', '#16161600'],
          transform: ['none', 'scale(1.05, 1.05)'],
          zIndex: [null, '5'],
        },
        '&:hover::after': {
          opacity: 1,
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
      borders: {
        borderTop: '1px solid',
        borderBottom: '1px solid',
        borderColor: 'offBlack20'
      },
      size: {
        cursor: 'pointer',
        fontSize: 2,
        '&:hover': {
          borderBottom: '1px solid',
          borderColor: 'offBlack',
          fontSize: 2,
        },
        active: {
          cursor: 'default',
          borderBottom: '1px solid',
          borderColor: 'offBlack',
          fontSize: 2,
        },
        disabled: {
          cursor: 'default',
          color: 'offBlack20',
          fontSize: 2,
        }
      },
      swatch: {
        border: '1px solid #ffffff00',
        boxShadow: '1px 1px 1px #00000040',
        transition: '0.1s transform ease-out',
        cursor: 'pointer',
        '&:hover': {
          border: '1px solid #ffffff40',
          boxShadow: '1px 1px 1px #00000040, 0px 2px 4px #00000029',
          transform: 'translateY(-1px)',
        },
        active: {
          border: '1px solid white',
          boxShadow: '0px 3px 6px #00000029',
          cursor: 'default',
        }
      }
    },
  },
  buttons: {
    primary: {
      bg: 'primary',
      border: 0,
      borderRadius: 0,
      color: 'accent',
      fontFamily: 'body',
      fontSize: 1,
      fontWeight: 'bold',
      lineHeight: 'tight',
      outline: 'none',
      textTransform: 'uppercase',
      small: {
        fontSize: 0,
      }
    },
    accent: {
      backdropFilter: 'blur(31px)',
      backgroundColor: '#FFFFFF33',
      border: '1px solid',
      borderRadius: 0,
      color: 'accent',
      fontFamily: 'body',
      fontSize: 1,
      fontWeight: 'bold',
      lineHeight: 'tight',
      outline: 'none',
      textTransform: 'uppercase',
      small: {
        fontSize: 0,
      },
    },
    transparent: {
      variant: 'buttons.accent',
      backgroundColor: 'transparent',
      backdropFilter: 'none',
    },
  },
  forms: {
    input: {
      border: 'none',
      background: 'none',
      lineHeight: 1,
      '&:focus': {
        outlineColor: 'lightGray',
      },
      search: {
        background: '#1A1A1A',
        border: '2px solid #1A1A1A',
        borderRadius: '50px',
        fontWeight: 'light',
        lineHeight: 1,
        variant: 'text.small',
        '&:focus': {
          borderColor: 'gray',
          outline: 'none',
        },
      }
    },
    label: {
      display: 'none',
    },
    newsletter: {
      color: 'accent',
      textAlign: 'center',
      subtitle: {
        fontFamily: 'accent',
        fontSize: 2,
        fontStyle: 'italic',
        fontWeight: 'body',
      },
      input: {
        borderBottom: '1px solid',
        borderLeft: 0,
        borderRight: 0,
        borderTop: 0,
        borderRadius: 0,
        fontWeight: 'light',
        mt: '1px',
        textAlign: 'center',
        variant: 'text.small',
        '&::placeholder': {
          color: 'inherit',
          opacity: '0.5',
        },
        '&:focus': {
          border: '1px solid',
          mt: 0,
          outline: 'none',
        },
      },
      modal: {
        backdropFilter: 'blur(31px)',        
        backgroundColor: 'offBlack80',
        boxShadow: ['none', 'none', 'cardHover'],
        color: 'accent',
      },
    }
  },
  links: {
    footer: {
      borderBottom: ['1px solid #434343', 'none'],
    },
    tabs: {
      variant: 'text.micro',
      fontWeight: 'body',
      opacity: '0.5',
      active: {
        borderBottom: '1px solid',
        variant: 'text.micro',
        fontWeight: 'body',
        opacity: '1.0',
      }
    }
  }
}

export default theme