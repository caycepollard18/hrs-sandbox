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
  const defaultSizes = [550, 550, 550, 800]
  const largeSizes = [550, 550, 720, 1200]
  
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
        px: 60,
        py: 30,
        variant: 'layout.hero',
      }}
      {...props}
    >
      {children}
    </Flex>
  )
}

const Headline = ({ title, subtitle, ...props }) => (
  <Flex
    sx={{
      flexDirection: 'column',
      alignItems: 'center',
      mb: [3, 3, 5],
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
        minHeight: 16,
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