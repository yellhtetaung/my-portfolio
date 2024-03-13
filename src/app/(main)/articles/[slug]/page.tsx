import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import { getPostByName } from '@/lib/posts';

import { IoCalendarOutline, IoArrowBackOutline } from 'react-icons/io5';
import { Button } from '@/components/ui/button';

export default async function ArticleById({ params }: { params: { slug: string } }) {
    const post = await getPostByName(`${params.slug}.mdx`);

    if (!post) notFound();

    const { content, meta } = post;

    return (
        <div className='container mx-auto mt-10'>
            <div className='md:w-10/12 lg:w-8/12 mx-auto'>
                <div className='w-full'>
                    <Button
                        asChild
                        size='lg'
                        className='rounded-full'
                    >
                        <Link href='/articles'>
                            <IoArrowBackOutline className='mr-3' />
                            <span>Go back articles</span>
                        </Link>
                    </Button>
                </div>

                <div className='w-full my-10'>
                    <h1 className='text-3xl font-bold'>{meta.title}</h1>
                    <div className='flex items-center text-lg gap-5 mt-5'>
                        <IoCalendarOutline />
                        {new Date(meta.date).toLocaleDateString()}
                    </div>
                </div>

                <Image
                    src={process.env.GITHUB_IMAGE_URL + meta.cover}
                    alt={meta.title}
                    width={1920}
                    height={1080}
                    className='w-full h-auto object-cover mx-auto rounded-xl'
                />

                <article className='prose dark:prose-invert max-w-none my-10 dark:prose-pre:bg-slate-100 dark:prose-pre:text-black'>
                    {content}
                </article>

                <h1 className='text-lg font-bold'>Author - {meta.author}</h1>
            </div>
        </div>
    );
}
