interface SectionInterface {
    id: number;
    title: string;
    href: string;
}

const sections: SectionInterface[] = [
    { id: 0, title: "Intro", href: "/", },
    { id: 1, title: "Projects", href: "/projects", },
    { id: 2, title: "Tech", href: "/tech", },
    { id: 3, title: "Contact", href: "/contact", },
];

export default sections;