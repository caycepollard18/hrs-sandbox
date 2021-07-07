/** @jsxImportSource theme-ui */
import { Button } from '@components/ui'
import PropTypes from 'prop-types'
import {
  Flex,
  Heading,
  Text
} from 'theme-ui'

const propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  link: PropTypes.string,
  href: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  image: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  backgroundPosition: PropTypes.string,
  justifyContent: PropTypes.string,
  size: PropTypes.oneOf(['small', 'default', 'large']),
}

const defaultProps = {
  title: '',
  subtitle: '',
  link: '',
  href: '/',
  image: '/campaign/101.jpg',
  backgroundPosition: null,
  justifyContent: 'center',
  size: 'default',
}

const HeroContainer = ({
  backgroundPosition,
  children,
  image,
  size,
  ...props
}) => {
  const smallSizes = ['330px', '330px', '330px', '330px', '550px']
  const defaultSizes = ['550px', '550px', '550px', '550px', '720px']
  const largeSizes = ['550px', '550px', '640px', '720px']
  
  return (
    <Flex
      sx={{
        width: ['100%'],
        height: size === "large" ? largeSizes : size === "small" ? smallSizes : defaultSizes,
        alignItems: 'center',
        backgroundImage: `url(${image})`,
        backgroundPosition: backgroundPosition ? backgroundPosition : 'center 75%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        flexDirection: 'column',
        px: [5, 7, 7],
        py: 9,
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
    <Heading as="h1" m={0}>
      {title}
    </Heading>
    <Text as="span" m={0} sx={{ minHeight: 3, }}>
      {subtitle}
    </Text>
  </Flex>
)

const Hero = ({
  title,
  subtitle,
  link,
  href,
  image,
  backgroundPosition,
  justifyContent,
  size,
  ...props
}) => {
  
  return (
    <HeroContainer
      backgroundPosition={backgroundPosition}
      image={image}
      size={size}
      sx={{ justifyContent: justifyContent }}
      {...props}
    >
      <Headline
        title={title}
        subtitle={subtitle}
      />
      {link && 
        <Button href={href}>
          {link}
        </Button>
      }
    </HeroContainer>
  )
}

Hero.propTypes = propTypes
Hero.defaultProps = defaultProps

export default Hero