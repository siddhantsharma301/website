import styled from 'styled-components';
import Container from './Container';
import Grid from './Grid';
import Link from './Link';
import Text from './Text';
import React from 'react';
import { SiGithub, SiLinkedin, SiTwitter } from 'react-icons/si';
import { MdMail } from 'react-icons/md';
// import { Malt, Instagram } from '@icons';

const StyledFooter = styled.footer`
    width: 100%;
    height: 100px;
    padding: 60px 20px 100px;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
    left: 0;
`;

const FooterGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    margin-bottom: 30px;
    margin-top: 20px;
    justify-content: center;
`;

const FooterText = styled.p`
    color: rgba(153, 153, 153, 1);
    margin: 0; 
    fontSize: 0.9rem;
`

const Footer = (): JSX.Element => {
    const links = React.useMemo(
        () => [
            {
                url: 'https://github.com/siddhantsharma301',
                icon: SiGithub,
            },
            {
                url: 'https://twitter.com/clearlynotsid',
                icon: SiTwitter,
            },
            {
                url: 'mailto:siddhantsharma@berkeley.edu',
                icon: MdMail,
            },
            {
                url: 'https://linkedin.com/in/sharma-sid',
                icon: SiLinkedin,
            },
    //   {
    //     url: 'https://instagram.com/croissant2france',
    //     icon: Instagram,
    //   },
    ],
    [],
  );

  return (
    <StyledFooter>
      <Container paddingY="25px">
        <Grid gridGap="30px">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="mailto:siddhantsharma@berkeley.edu">Contact</Link>
        </Grid>
      </Container>
      <FooterGrid>
        {links.map(({ url, icon: Icon }) => (
          <Link key={url} target="_blank" opacity={0.7} href={url}>
            <Icon size={22} />
          </Link>
        ))}
      </FooterGrid>
      <FooterText>
      © {new Date().getFullYear()} Siddhant Sharma
      </FooterText>
    </StyledFooter>
  );
};

export default Footer;