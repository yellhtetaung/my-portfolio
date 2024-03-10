import React from 'react';
import { Metadata } from 'next';

import CustomTag from '@/components/custom-components/custom-tag';

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
                    <CustomTag link={'/projects'}>All</CustomTag>

                    {tags.map(tag => (
                        <CustomTag
                            link={`/projects/${tag.link.toLowerCase()}`}
                            key={tag.title}
                        >
                            {tag.title.toUpperCase()}
                        </CustomTag>
                    ))}
                </div>

                {children}
            </div>
        </section>
    );
}
