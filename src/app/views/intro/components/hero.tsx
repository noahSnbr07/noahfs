'use server';

import Link from "next/link";

export default async function Hero() {


    return (
        <div className="flex flex-col gap-2">
            <h1 className="text-[48px] font-bold"> Hi, I'm Noah </h1>
            <p className="text-accent font-bold text-xl"> Full Stack Web Developer </p>
            <Link
                className="p-4 bg-accent rounded-full text-center text-2xl font-bold text-black"
                href={`/#contact`}> Contact </Link>
        </div>
    );
}