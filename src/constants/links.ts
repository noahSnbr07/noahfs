import { discord, github, instagram } from "@/assets/assets";

interface LinkInterface {
    id: number;
    href: string;
    title: string;
    svg: string;
}

const links: LinkInterface[] = [
    { id: 0, href: "https://github.com/noahSnbr07/", title: "GitHub", svg: github },
    { id: 1, href: "https://instagram.com/noahsnbr/", title: "Instagram", svg: instagram },
    { id: 2, href: "https://discord.gg/RVWDN2PFsj", title: "Discord", svg: discord },
];

export default links;