import * as React from 'react';
import { Box, Container, useTheme, Link as MuiLink } from '@mui/material';
import { scrollToSection } from './sections';
import { ll, dl } from '../images';

const logoStyle = {
    width: '52%',
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
};

export default function Footer() {
    const theme = useTheme();

    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                py: 1,
                gap: { xs: 4, sm: 8 },
                textAlign: { sm: 'center', md: 'left' },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    width: '100%',
                    justifyContent: 'space-around',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        minWidth: { xs: '100%', sm: '60%' },
                    }}
                >
                    <Box sx={{ width: { xs: '100%', sm: '60%' }, justifyContent: 'center', alignItems: 'center' }}>
                        <Box sx={{ justifyContent: 'center', alignItems: 'center' }}>
                            {theme.palette.mode === 'light' ? (
                                <>
                                    <img src={ll} alt="Hero" style={logoStyle} />
                                </>
                            ) : (
                                <>
                                    <img src={dl} alt="Hero" style={logoStyle} />
                                </>
                            )}
                        </Box>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: { xs: 'none', sm: 'flex' },
                        flexDirection: 'column',
                        gap: 1,
                        mt: 8
                    }}
                >
                    <MuiLink color="text.secondary" sx={{ cursor: 'pointer' }} onClick={() => scrollToSection('search')}>
                        Search
                    </MuiLink>
                    <MuiLink color="text.secondary" sx={{ cursor: 'pointer' }} onClick={() => scrollToSection('downloads')}>
                        Downloads
                    </MuiLink>
                    <MuiLink color="text.secondary" sx={{ cursor: 'pointer' }} onClick={() => scrollToSection('about')}>
                        About Us
                    </MuiLink>
                    <MuiLink color="text.secondary" sx={{ cursor: 'pointer' }} onClick={() => scrollToSection('team')}>
                        Team
                    </MuiLink>
                </Box>
                <Box
                    sx={{
                        display: { xs: 'none', sm: 'flex' },
                        flexDirection: 'column',
                        gap: 1,
                        mt: 8
                    }}
                >
                    <MuiLink color="text.secondary" sx={{ cursor: 'pointer' }} onClick={() => scrollToSection('faq')}>
                        FAQs
                    </MuiLink>
                    <MuiLink color="text.secondary" sx={{ cursor: 'pointer' }} onClick={() => scrollToSection('statistics')}>
                        Statistics
                    </MuiLink>
                    <MuiLink color="text.secondary" sx={{ cursor: 'pointer' }} onClick={() => scrollToSection('highlights')}>
                        Highlights
                    </MuiLink>
                </Box>
            </Box>
        </Container>
    );
}
