import React from 'react';
import { Title, Text, Container, Grid, Link, Card } from '@components';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import {
    SiGo,
    SiKubernetes,
    SiElixir,
    SiPostgresql,
    SiTypescript,
    SiAmazonaws,
    SiGooglecloud,
    SiTerraform,
    SiReact,
    SiNextdotjs,
    SiPython,
    SiGraphql,
    SiRust
} from 'react-icons/si';
import { IconContext } from 'react-icons';

import { getPosts, Post } from '@posts';

interface AboutProps {
  experiences: Post[];
}

const About = ({ experiences }: AboutProps) : JSX.Element => {
    const stacks = React.useMemo(
        () => [
            {
                Icon: SiPython,
                url: 'https://www.python.org/'
            }, 
            {
                Icon: SiTypescript,
                url: 'https://www.typescriptlang.org/'
            },
            {
                Icon: SiGo,
                url: 'https://golang.org/'
            }, 
            {
                Icon: SiRust,
                url: 'https://www.rust-lang.org/'
            }, 
            {
                Icon: SiPostgresql,
                url: 'https://postgresql.org/'
            },
            {
                Icon: SiReact,
                url: 'https://reactjs.org/'
            }
        ],
        []
    );
    // const stacks = React.useMemo(
    //   () => [
    //     {
    //       Icon: SiGo,
    //       url: 'https://golang.org/',
    //     },
    //     {
    //       Icon: SiKubernetes,
    //       url: 'https://kubernetes.io/',
    //     },
    //     {
    //       Icon: SiTypescript,
    //       url: 'https://www.typescriptlang.org/',
    //     },
    //     {
    //       Icon: SiReact,
    //       url: 'https://reactjs.org/',
    //     },
    //     {
    //       Icon: SiGraphql,
    //       url: 'https://graphql.org/',
    //     },
    //     {
    //       Icon: SiAmazonaws,
    //       url: 'https://aws.amazon.com/',
    //     },
    //     {
    //       Icon: SiNextdotjs,
    //       url: 'https://nextjs.org/',
    //     },
    //     {
    //       Icon: SiElixir,
    //       url: 'https://elixir-lang.org/',
    //     },
    //     {
    //       Icon: SiGooglecloud,
    //       url: 'https://cloud.google.com/',
    //     },
    //     {
    //       Icon: SiTerraform,
    //       url: 'https://www.terraform.io/',
    //     },
    //     {
    //       Icon: SiPostgresql,
    //       url: 'https://www.postgresql.org/',
    //     },
    //     {
    //       Icon: SiPython,
    //       url: 'https://www.python.org/',
    //     },
    //   ],
    //   [],
    // );

    return (
        <Container>
          <Head>
            <title>
                About
            </title>
          </Head>
          <Container alignContent="center" alignItems="center">
            {/* <Title fontSize={['3rem', '3rem']} color='rgba(116, 161, 248, 1)'> */}
            <Title color='rgba(116, 161, 248, 1)'>
              About Me
            </Title>
            <Container maxWidth={['100%', '720px']} marginY="2rem">
              <Text
                color="white"
                textAlign="center"
              >
                I&apos;m a full-stack engineer in the SF Bay Area.{'\n'}
                I like making useful cool things.
              </Text>
            </Container>
          </Container>
    
          <Container
            paddingY="3rem"
            gridGap="2rem"
            alignContent="center"
            alignItems="center"
            textAlign="center"
            width="100%"
          >
            <Title fontSize={['2.5rem', '2.5rem']} as="h2">
              Technologies I use
            </Title>
            <Grid
              gridTemplateColumns={['repeat(3 , 1fr)', 'repeat(6 , 1fr)']}
              gridGap="1rem"
              justifyItems="center"
              maxWidth="40rem"
            >
              {stacks.map(({ Icon, url }, i) => (
                <Link href={url} key={url}>
                  <Card backgroundColor="rgba(236, 236, 236, 1)" key={i}>
                    <IconContext.Provider value={{ color: 'rgba(110, 161, 248, 1)' }}>
                      <Icon size="2rem" />
                    </IconContext.Provider>
                  </Card>
                </Link>
              ))}
            </Grid>
          </Container>
          <Container
        alignContent="center"
        alignItems="center"
        textAlign="center"
        width="100%"
        paddingBottom="4rem"
        gridGap="3rem"
      >
      <Container
        paddingY='3rem'
      >
        <Title fontSize={['2.5rem', '2.5rem']} as="h2">
          Work Experience
        </Title>
        <Container 
          width="100%"
        >
          {experiences.map(({ data }, i) => (
            <Link href={`/about/${data.slug}`} key={data.slug}>
              <Grid
                key={i}
                gridTemplateColumns="1.3fr 4fr"
                justifyItems="flex-start"
                gridGap="1rem"
                paddingY="2rem"
                borderBottom="1px solid rgba(0,0,0,0.1)"
              >
                <Container width="100%">
                  <Text>{data.date}</Text>
                </Container>
                <Grid width="100%" gridTemplateColumns="4fr 1fr">
                  <Container
                    width="100%"
                    alignItems="flex-start"
                    textAlign="start"
                  >
                    <Grid
                      width="100%"
                      gridTemplateColumns="repeat(2, auto)"
                      justifyItems="flex-start"
                      justifyContent="flex-start"
                      gridGap="1rem"
                    >
                      <Title fontSize="1.5rem" margin={0} as="h3" color='rgba(110, 161, 248, 1)'>
                        {data.company}
                      </Title>
                      <Title fontSize="1.2rem" margin={0} as="h4">
                        {data.role}
                      </Title>
                    </Grid>
                    <Text fontSize="1rem" color="rgba(255, 255, 255, 1)">{data.description}</Text>
                  </Container>
                  <Text fontSize="1.5rem">&rarr;</Text>
                </Grid>
              </Grid>
            </Link>
          ))}
        </Container>
        </Container>
      </Container>
    </Container>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const experiences = await getPosts('experience');

    experiences.sort((a: any, b: any) => {
        const isoA = a.data.isoDate === 'now' ? new Date(Date.now()) : new Date(a.data.isoDate)
        const isoB = b.data.isoDate === 'now' ? new Date(Date.now()) : new Date(b.data.isoDate)
        return isoB.getTime() - isoA.getTime()
    })

    return {
      props: {
        experiences,
      },
    };
  };

export default About;