import * as React from 'react';
import { ThemeProvider, createTheme, CssBaseline, Divider } from '@mui/material';
import { Navbar, Hero, Statistics, Downloads, Search, FAQ, Footer, About, Highlights, Team } from './components';
import getLPTheme from './getLPTheme';

export default function LandingPage() {
    const [mode, setMode] = React.useState('light');
    const LPtheme = createTheme(getLPTheme(mode));

    const toggleColorMode = () => {
        setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    return (
        <ThemeProvider theme={LPtheme}>
            <CssBaseline />
            <Navbar mode={mode} toggleColorMode={toggleColorMode} />
            <Hero />
            <Divider />
            <Statistics />
            <Divider />
            <Highlights />
            <Divider />
            <Search />
            <Divider />
            <Downloads />
            <Divider />
            <FAQ />
            <Divider />
            <About />
            <Divider />
            <Team />
            <Divider />
            <Footer />
        </ThemeProvider>
    );
}
