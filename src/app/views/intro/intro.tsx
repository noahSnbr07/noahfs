'use server';

import Hero from "./components/hero";
import Thumbnail from "./components/thumbnail";

export default async function Intro() {


    return (
        <div className="h-full flex justify-between items-center">
            <Hero />
            <Thumbnail />
        </div>
    );
}