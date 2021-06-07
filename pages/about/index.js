/** @jsxImportSource theme-ui */
import { Logo } from '@components/ui'
import Image from 'next/image'
import { NextSeo } from 'next-seo'
import {
  Flex,
  Heading,
  Text
} from 'theme-ui'

const AboutContainer = ({ children }) => (
  <Flex
    sx={{
      alignItems: 'flex-start',
      flex: 1,
      flexDirection: ['column', 'row'],
      gap: 4,
      justifyContent: 'center',
      p: [4, 5, 6],
    }}
  >
    {children}
  </Flex>
)

const InnerContainer = ({ children }) => (
  <Flex
    sx={{
      flex: 1,
      flexBasis: '50%',
      flexDirection: 'column',
    }}
  >
    {children}
  </Flex>
)

const About = () => (
  <AboutContainer>
    <NextSeo
      title="ABOUT"
      openGraph={{
        title: "About the Brand - HRS",
      }}
    />
    <InnerContainer>
      <Image
        src="/eriknvaz.png"
        width={1263}
        height={1200}
      />
    </InnerContainer>
    <InnerContainer>
      <Logo
        variant="text"
      />
      <Text as="div">
        <p>
          is a luxury label founded in 2018 by Los Angeles pro skater Erik
          Ellington. After working with skate and streetwear companies for
          more than 20 years, Ellington’s new venture is a collaboration with
          Paris-based fashion designer Vaz Rajan that draws inspiration from
          the lifestyles of its creators.
        </p>
        <p>
          “The people we’ve looked up to, the music, the style, the
          skateboarding community, retro leisure and a nostalgic view of rock
          and roll glamour, it’s a contemporary take on traditional
          gentlemen’s elegance. Everything we’ve grown up with, it all plays a
          big part in the design and aesthetic of the brand”. Rajan’s
          experience with leading high-end houses, including Rick Owens and
          Kiko Kostadinov, has ensured that their vision is executed to the
          utmost level of design and craftsmanship.
        </p>
        <p>
          The collection features loafers, slip-ons, mules, and sneakers,
          which are all handmade in Italy using premium materials like box
          calf leathers, exotic prints, pony hair, and gold-plated hardware —
          quality footwear made to last that reflects Ellington and Rajan’s
          joined aesthetic.
        </p>
      </Text>
    </InnerContainer>
  </AboutContainer>
)

export default About