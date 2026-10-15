// Landing page sections, in page order. Each id matches the root element id of its component.
export const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'statistics', label: 'Statistics' },
    { id: 'highlights', label: 'Highlights' },
    { id: 'search', label: 'Search' },
    { id: 'downloads', label: 'Downloads' },
    { id: 'faq', label: 'FAQs' },
    { id: 'about', label: 'About Us' },
    { id: 'team', label: 'Team' },
];

// Paths of the old multi-page site, mapped to the section that replaced each page.
const legacyPaths = {
    '/search': 'search',
    '/downloads': 'downloads',
    '/stats': 'statistics',
    '/highlights': 'highlights',
    '/faq': 'faq',
    '/about': 'about',
    '/team': 'team',
};

export function scrollToSection(id, behavior = 'smooth') {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior, block: 'start' });
    }
}

export function sectionForPath(pathname) {
    return legacyPaths[pathname.replace(/\/+$/, '').toLowerCase()];
}
