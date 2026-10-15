import * as React from 'react';
import { ThemeProvider, createTheme, CssBaseline, Divider } from '@mui/material';
import { Navbar, Hero, Statistics, Downloads, Search, FAQ, Footer, About, Highlights, Team } from './components';
import { scrollToSection, sectionForPath } from './components/sections';
import getLPTheme from './getLPTheme';

export default function LandingPage() {
    const [mode, setMode] = React.useState('light');
    const LPtheme = createTheme(getLPTheme(mode));

    // Old links like /search land on the matching section, then the URL is reset to the root.
    const [legacySection] = React.useState(() => sectionForPath(window.location.pathname));
    React.useEffect(() => {
        const id = legacySection;
        if (!id) return undefined;

        window.history.replaceState(null, '', '/' + window.location.search);
        const jump = () => scrollToSection(id, 'instant');
        jump();
        // Images above the section shift the layout as they load, so jump again once they have.
        if (document.readyState === 'complete') return undefined;
        window.addEventListener('load', jump, { once: true });
        return () => window.removeEventListener('load', jump);
    }, [legacySection]);

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
