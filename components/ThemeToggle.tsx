import { useEffect, useState } from 'react';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';

import Button from './Button';

interface ToggleButtonProps {
    theme: string,
    setTheme: () => void,
}

const ThemeToggle = ({ theme, setTheme }: ToggleButtonProps) : JSX.Element => {
    return (
        <Button onClick={setTheme}>
            {theme === 'light' ?
                <MdDarkMode/> :
                <MdOutlineLightMode/>
            }
        </Button>
    );
}

export const useDarkMode = () => {
    const [theme, setTheme] = useState('dark');
    const [mountedComponent, setMountedComponent] = useState(false)
    const setMode = (mode: string) => {
        // window.localStorage.setItem('theme', mode)
        setTheme(mode)
    };

    const themeToggler = () => {
        theme === 'dark' ? setMode('light') : setMode('dark')
    };

    // useEffect(() => {
    //     const localTheme = window.localStorage.getItem('theme');
    //     localTheme ? setTheme(localTheme) : setMode('light')
    //     setMountedComponent(true)
    // }, []);

    return [theme as string, themeToggler as any];
}

export default ThemeToggle;
