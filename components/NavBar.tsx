import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { IoClose as Close, IoMenu as Menu } from 'react-icons/io5';

import Grid from './Grid';
import Container from './Container';

const states: { [key: string]: React.CSSProperties } = {
    '/': {
      left: '6px',
      width: '61px',
    },
    '/about': {
      left: '81px',
      width: '65px',
    },
    '/projects': {
      left: '157px',
      width: '81px',
    },
    '/blog': {
      left: '250px',
      width: '55px',
    },
};

const NavLink = styled.a`
  color: ${props => props.color};
  text-decoration: none;
  cursor: pointer;
  border-bottom: none;
  margin: 0;
  padding: 0;
  z-index: 1;
  font-weight: 500;
  transition: opacity 0.3s ease 0s;
  &:hover {
    color: rgb(116, 161, 248);
  }
`;

const MenuContainer = styled(Container)`
  cursor: pointer;
`;

interface NavProps {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const Links = (): JSX.Element => (
    <>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/projects">Projects</NavLink>
      <NavLink href="/blog">Blog</NavLink>
    </>
);

const NavBar = ({ isOpen, onOpen, onClose }: NavProps): JSX.Element => {
    const router = useRouter();
    let navStyle = states['/'];
  
    if (router.asPath !== '/') {
      for (const path of Object.keys(states).slice(1)) {
        if (router.asPath.startsWith(path)) {
          navStyle = states[path];
          break;
        }
      }
    }
  
    return (
      <Grid
        as="nav"
        px={['2rem', '2rem', '2rem', '0']}
        gridTemplateColumns={['1fr', '1fr', '1fr 1fr 1fr']}
        alignContent="center"
        justifyContent={['center', 'center', 'space-between']}
        margin="3rem 0"
      >
        <Container display={['none', 'none', 'flex']}>
          <NavLink href="/" color='rgba(110, 161, 248, 1)'>Siddhant Sharma</NavLink>
        </Container>
        <MenuContainer display={['flex', 'none', 'none']} marginBottom="1rem" marginLeft="1rem" >
          {isOpen ? (
            <IconContext.Provider value={{ color: 'white' }}>
              <Close
                size="2rem"
                style={{ margin: '-0.3rem' }}
                onClick={(evt: any) => evt.type === 'click' && onClose()}
              />
            </IconContext.Provider>
          ) : (
            <IconContext.Provider value={{ color: 'white' }}>
              <Menu
                size="1.6rem"
                onClick={(evt: any) => evt.type === 'click' && onOpen()}
              />
            </IconContext.Provider>
          )}
        </MenuContainer>
        {isOpen && (
          <Grid 
            gridTemplateColumns="1fr" 
            style={{ 
              fontSize: '2rem',
              background: 'rgb(29, 29, 33)'
            }}
             py="3rem">
            <Links />
          </Grid>
        )}
        <Container alignContent="center" display={['flex', 'flex', 'flex']}>
          <Grid
            width="fit-content"
            gridGap="2rem"
            alignItems="center"
            justifyItems="center"
            gridTemplateColumns="repeat(4, auto)"
            style={{
              borderRadius: '25px',
              background: 'rgb(29, 29, 33)',
              padding: '15px',
              position: 'relative',
              color: 'white'
            }}
          >
            <div
              style={{
                background: 'rgba(48, 48, 48, 1)',
                position: 'absolute',
                borderRadius: '25px',
                height: '85%',
                left: '6px',
                width: '60px',
                ...navStyle
              }}
            />
            <Links />
          </Grid>
        </Container>
        <Container alignContent="flex-end" display={['none', 'none', 'flex']}>
          <NavLink href="mailto:siddhantsharma@berkeley.edu">Contact</NavLink>
        </Container>
      </Grid>
    );
  };
  
  export default NavBar;
