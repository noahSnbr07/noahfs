'use server';

import HeaderLinks from "./header-links";
import Main from "../main";
import HeaderSections from "./header-sections";

export default async function Header() {

    return (
        <header className="w-full py-4">
            <div className="flex gap-4 justify-between">
                <Main />
                <HeaderSections />
                <HeaderLinks />
            </div>
        </header>
    );
}