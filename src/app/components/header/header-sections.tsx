import Link from 'next/link';
import sections from '@/constants/sections';

export default function HeaderSections() {

    return (
        <div className='flex gap-4'>
            {sections.map(section => (
                <Link
                    key={section.id}
                    href={`#${section.href}`}>
                    <p
                        className='transition-all text-sm italic opacity-50 hover:underline hover:opacity-100'>
                        {section.title}
                    </p>
                </Link>
            ))}
        </div>
    );
}