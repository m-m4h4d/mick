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

export function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
