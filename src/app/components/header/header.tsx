'use server';

import HeaderLinks from "./header-links";
import Main from "./main";

export default async function Header() {


    return (
        <header className="w-full bg-stack p-4">
            <div className="flex gap-4 justify-between">
                <Main />
                <HeaderLinks />
            </div>
        </header>
    );
}