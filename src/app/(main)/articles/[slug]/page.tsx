import Image from 'next/image';
import Link from 'next/link';

import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkFormatter from 'remark-frontmatter';

import { getBlogById } from '@/lib/contentful';

import { Blog } from '@/types/types';
import { Button } from '@/components/ui/button';

import { IoArrowBack, IoCalendarOutline } from 'react-icons/io5';

export default async function ArticleById({ params }: { params: { slug: string } }) {
    const { title, excerpt, coverImage, date, author } = (await getBlogById(params.slug)) as unknown as Blog;

    return (
        <div className='container mx-auto mt-10'>
            <div className='w-10/12 mx-auto'>
                <Button
                    size='lg'
                    className='rounded-full'
                    asChild
                >
                    <Link href='/articles'>
                        <IoArrowBack className='mr-5' />
                        Go to articles
                    </Link>
                </Button>
            </div>
            <div className='w-10/12 mx-auto'>
                <div className='w-full flex justify-between items-center my-10'>
                    <h1 className='text-3xl font-bold'>{title}</h1>
                    <span className='text-foreground-secondary flex items-center gap-3'>
                        <IoCalendarOutline />
                        {new Date(date).toLocaleDateString()}
                    </span>
                </div>

                <Image
                    src={`https:${coverImage.fields.file.url}`}
                    width={1920}
                    height={1080}
                    className='w-full h-auto object-cover my-10 rounded-lg'
                    alt={title}
                />

                <Markdown
                    remarkPlugins={[remarkGfm, remarkFormatter]}
                    className='prose dark:prose-invert max-w-none container mx-auto dark:prose-pre:bg-slate-100 dark:prose-pre:text-black prose-img:rounded-xl'
                >
                    {excerpt}
                </Markdown>

                <div className='mt-10'>
                    <h1 className='text-lg text-center'>
                        Author - <span className='font-bold'>{author.fields.name}</span>
                    </h1>
                </div>
            </div>
        </div>
    );
}
