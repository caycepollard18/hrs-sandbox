/** @jsxImportSource theme-ui */
import React from 'react'
import Image from 'next/image'

import {
  Box,
  Button,
  Flex,
  Themed
} from 'theme-ui'

import Hero from '../components/common/Hero'

import styled from '@emotion/styled'


const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Caption = styled.div``

const ImageWrapper = styled.div``

const ProductSection = styled(Section)`
  min-height: 360px;
  background-color: #F5F2F3;

  ${Caption} {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    width: 370px;
    padding: 2rem;
  }

  ${ImageWrapper} {
    align-self: stretch;
    width: 745px;
    position: relative;
    background-color: #9D8673;
  }
`

const GridSection = styled(Section)`
  flex-wrap: wrap;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`

const Card = styled.a`
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  width: 45%;

  &:hover, &:focus, &:active {
    color: #0070f3;
    border-color: #0070f3;
  }

  h2 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }

  p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
  }
`

export default function Home() {
  return (
    <>
      <Hero
        title="A Dream Escape"
        subtitle="Discover Chapter Two"
        link="Shop The Collection"
        variant="layout.hero.homepage"
      />

      <ProductSection>
        <ImageWrapper />
        <Caption>
          <h2>Belmont</h2>
          <p>
            Inspired by the legendary Los Angeles skate spot, the Belmont is a skate take on a classic apron front derby. Woven, waxed, gold-tipped laces tie it all together with a louche elegance.  
          </p>
          <Button>Shop Now</Button>
        </Caption>
      </ProductSection>

      <GridSection>
        <Card href="https://nextjs.org/docs">
          <h2>Documentation &rarr;</h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </Card>

        <Card href="https://nextjs.org/learn">
          <h2>Learn &rarr;</h2>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </Card>

        <Card
          href="https://github.com/vercel/next.js/tree/master/examples">
          <h2>Examples &rarr;</h2>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </Card>

        <Card
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
          <h2>Deploy &rarr;</h2>
          <p>
            Instantly deploy your Next.js site to a public URL with Vercel.
          </p>
        </Card>
      </GridSection>

      <ProductSection>
        <ImageWrapper />
        <Caption>
          <h2>Mongoose</h2>
          <p>
            Our spin on the classic sneaker featuring striking combination of richly textured Italian calfskin leathers adorned with our signature goldplated dog tags.
          </p>
          <Button>Shop Now</Button>
        </Caption>
      </ProductSection>
    </>
  )
}
