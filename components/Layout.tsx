import React, { useState } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import Container from './Container';
import Footer from './Footer';
import NavBar from './NavBar';
import styles from '@styles/Home.module.css';
import { useDarkMode } from './ThemeToggle';
import { darkTheme, lightTheme } from '@styles/themes';
import { GlobalStyles } from './GlobalStyles';

type LayoutProps = {
  children?: React.ReactNode;
  title?: string;
};

const Layout: React.FC<LayoutProps> = ({
  title = 'Siddhant Sharma',
  children,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  // const [theme, themeToggler] = useDarkMode();
  // const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme }>
      <GlobalStyles />
      <div className={styles.container}>
        <Head>
          <title>{title}</title>
          <link rel="icon" href="/favicon.ico" />
          <meta charSet="utf-8" />
          <meta name="author" content="Siddhant Sharma" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta property="og:title" content="Siddhant Sharma" />
          {/* <meta
            property="og:description"
            content="I'm a Full Stack developer with experience in DevOps, Backend, Frontend and mobile development."
          /> */}
          <meta property="og:type" content="website" />
          <meta property="twitter:site" content="@clearlynotsid" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            property="og:image"
            content="https://shellbear.me/img/preview.png"
          />
        </Head>
        <NavBar
          isOpen={isOpen}
          onOpen={() => setIsOpen(true)}
          onClose={() => setIsOpen(false)}
          theme={theme}
          setTheme={toggleTheme}
        />
        <Container justifyContent="space-between" alignContent="space-between">
          {!isOpen && <main className={styles.main}>{children}</main>}
          <Footer />
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default Layout;