import { Metadata } from 'next';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

import { tags } from '@/lib/data';

export const metadata: Metadata = {
    title: 'Projects',
};

export default async function ProjectLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section className='container mx-auto mt-5 mb-28'>
            <div className='w-full'>
                <h1 className='text-4xl font-bold text-center'>My Projects</h1>

                <div className='w-full flex flex-wrap items-center gap-3 my-10'>
                    <Button
                        variant={'secondary'}
                        size={'sm'}
                        asChild
                        className='rounded-full'
                    >
                        <Link href={`/projects`}>All</Link>
                    </Button>

                    {tags.map(tag => (
                        <Button
                            variant={'secondary'}
                            size={'sm'}
                            asChild
                            className='rounded-full'
                            key={tag}
                        >
                            <Link href={`/projects/${tag}`}>{tag.toUpperCase()}</Link>
                        </Button>
                    ))}
                </div>

                {children}
            </div>
        </section>
    );
}
