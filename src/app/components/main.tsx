'use server';

import { noah } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

export default async function Main() {


    return (
        <Link
            href={"/"}>
            <Image
                src={noah}
                title={`Hyperlink Home`}
                alt={`Hyperlink Home`}
                height={32}
                priority
                className='opacity-50 hover:opacity-100 transition-all'
            />
        </Link>
    );
}