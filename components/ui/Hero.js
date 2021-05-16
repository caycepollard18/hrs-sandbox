/** @jsxImportSource theme-ui */
import {
  Flex,
  Heading,
  Text
} from 'theme-ui'
import {
  Button
} from '.'

// todo: create height option for different sizes of hero image
// e.g. homepage top hero vs. bottom "hero"

const HeroContainer = ({
  backgroundPosition,
  children,
  image = '/campaign/101.jpg',
  size,
  ...props
}) => {
  const defaultSizes = ['550px', '550px', '550px', '800px']
  const largeSizes = ['550px', '550px', '720px', '1200px']
  
  return (
    <Flex
      sx={{
        width: ['100%'],
        height: size === "large" ? largeSizes : defaultSizes,
        alignItems: 'center',
        backgroundImage: `url(${image})`,
        backgroundPosition: backgroundPosition ? backgroundPosition : 'center 75%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        flexDirection: 'column',
        justifyContent: 'center',
        px: 7,
        py: 5,
        variant: 'layout.hero',
      }}
      {...props}
    >
      {children}
    </Flex>
  )
}

const Headline = ({ title, subtitle }) => (
  <Flex
    sx={{
      flexDirection: 'column',
      alignItems: 'center',
      mb: [3, 3, 6],
    }}
  >
    <Heading
      as="h1"
      sx={{
        m: 0
      }}
      variant="text.title"
    >
      {title}
    </Heading>
    <Text
      as="span"
      sx={{
        m: 0,
        minHeight: 3,
        variant: 'text.subtitle'
      }}
    >
      {subtitle}
    </Text>
  </Flex>
)

const Hero = ({ title, subtitle, link, size, ...props }) => {
  
  return (
    <HeroContainer
      size={size}
      {...props}
    >
      <Headline
        title={title}
        subtitle={subtitle}
      />
      <Button>
        {link}
      </Button>
    </HeroContainer>
  )
}

export default Hero