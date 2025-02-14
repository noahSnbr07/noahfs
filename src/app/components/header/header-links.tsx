import links from '@/libs/links';
import Image from 'next/image';
import Link from 'next/link';

export default function HeaderLinks() {


    return (
        <div className='flex gap-4'>
            {links.map(link => (
                <Link
                    key={link.id}
                    href={link.href}>
                    <Image
                        src={link.svg}
                        height={32}
                        width={32}
                        title={`Hyperlink "${link.title}"`}
                        alt={`Hyperlink "${link.title}"`}
                        priority
                        className='invert opacity-50 hover:opacity-100 transition-all'
                    />
                </Link>
            ))}
        </div>
    );
}