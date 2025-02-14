"use client";

import { me } from '@/assets/assets';
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';


export default function Thumbnail() {


    return (
        <figure>
            <Tilt>
                <Image
                    src={me}
                    height={512}
                    width={512}
                    alt=''
                    title=''
                    priority
                    className='saturate-50 hover:saturate-100 transition-all rounded-lg'
                />
            </Tilt>
        </figure>
    );
}