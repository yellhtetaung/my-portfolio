import Image from 'next/image';
import Link from 'next/link';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

import { getBlog } from '@/lib/contentful';
import { Blog } from '@/types/types';

export default async function Articles() {
    const data = await getBlog();

    return (
        <section className='container mx-auto mt-5 mb-28'>
            <div className='w-full'>
                <h1 className='text-4xl font-bold text-center'>My Articles</h1>

                <div className='container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
                    {data.map(item => {
                        const { title, coverImage, date, author } = item.fields as unknown as Blog;
                        const tags = item.metadata.tags;

                        return (
                            <Link
                                href={`/articles/${item.sys.id}`}
                                key={title}
                            >
                                <Card className='cursor-pointer md:hover:scale-105 transition-all'>
                                    <CardHeader>
                                        <Image
                                            src={`https:${coverImage.fields.file.url}`}
                                            width={1920}
                                            height={1080}
                                            className='w-full h-52 xl:h-60 object-cover'
                                            alt={title}
                                        />
                                    </CardHeader>

                                    <Separator className='my-4' />

                                    <CardContent>
                                        <CardTitle>{title}</CardTitle>

                                        <div className='w-full flex flex-wrap gap-3 p-3'>
                                            {tags.map(tag => (
                                                <Badge
                                                    key={tag.sys.id}
                                                    variant={'default'}
                                                >
                                                    # {tag.sys.id}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>

                                    <CardFooter className='justify-between'>
                                        <CardDescription>{new Date(date).toLocaleDateString()}</CardDescription>
                                        <CardTitle>{author.fields.name}</CardTitle>
                                    </CardFooter>
                                </Card>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
