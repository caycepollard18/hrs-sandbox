/** @jsxImportSource theme-ui */
import {
  Flex
} from 'theme-ui'
import Button from '../ui/Button'

// todo: create height option for different sizes of hero image
// e.g. homepage top hero vs. bottom "hero"


const Hero = ({ title, subtitle, link, size, ...props }) => {
  
  const defaultSizes = [550, 550, 550, 800]
  const largeSizes = [550, 550, 550, 1200]
  
  return (
    <Flex
      sx={{
        width: ['100%'],
        height: size === "lg" ? largeSizes : defaultSizes,
        px: 60,
        py: 30,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        variant: 'layout.hero',
        bg: '#0A200F',
      }}
      {...props}
    >
      <h1
        sx={{
          m: 0,
          variant: 'text.title'
        }}
      >
        {title}
      </h1>
      <p
        sx={{
          m: 0,
          variant: 'text.subtitle'
        }}
      >
        {subtitle}
      </p>
      <Button
        sx={{
          mt: 5,
        }}
      >
        {link}
      </Button>
    </Flex>
  )
}

export default Hero