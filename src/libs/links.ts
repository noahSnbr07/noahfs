import { discord, github, instagram } from "@/assets/assets";

interface LinkInterface {
    id: number;
    title: string;
    svg: string;
    href: string;
}

const links: LinkInterface[] = [
    { id: 0, title: "GitHub", svg: github, href: "https://github.com/noahSnbr07" },
    { id: 1, title: "Instagram", svg: instagram, href: "https://instagram.com/noahsnbr/" },
    { id: 2, title: "Discord", svg: discord, href: "https://discord.gg/RVWDN2PFsj" },
]

export default links;