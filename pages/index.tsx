import React from 'react';
import Image from 'next/image';

import { Container, Title, Button, Grid, Link, Text } from '@components'

import styles from '@styles/Home.module.css';

const Home = (): JSX.Element => (
  <Container>
    <Container
      justifyContent="center"
      alignContent="center"
      alignItems="center"
      textAlign="center"
      paddingY="25px"
      paddingBottom="40px"
      gridGap="4rem"
    >
      <Container alignItems="center" alignContent="center">
        <Title
          color='rgba(110, 161, 248, 1)'
        >
          Siddhant Sharma
        </Title>
        <Title
          fontSize="2rem"
          color="rgba(153, 153, 153, 1)"
          fontWeight="500"
          as="h2"
        >
          I&apos;m a junior studying EECS at UC Berkeley
        </Title>
      </Container>
    </Container>

    <Container alignItems="center" paddingY="4rem">
      <Container maxWidth="600px" alignItems="center" alignContent="center">
          <Title fontSize="3rem" as="h3">
            Get in touch
          </Title>
          <Text textAlign="center">
            Feel free to ask me anything!
          </Text>
          <Grid
            gridGap="2rem"
            marginTop="2rem"
            gridTemplateColumns={['1fr', 'repeat(2, 1fr)']}
            justifyItems="stretch"
            alignItems="stretch"
          >
            <Link href="mailto:hello@shellbear.me">
              <Button 
                width="100%"
              >
                Hit me up here...
              </Button>
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://calendly.com/sharma-siddhant/15min"
            >
              <Button
                width="100%"
                backgroundColor="rgb(226,232,240)"
                color="black"
                variant="secondary"
              >
                Or we can talk!
              </Button>
            </Link>
          </Grid>
        </Container>
    </Container>
  </Container>
)

export default Home;
