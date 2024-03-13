import Image from 'next/image';
import Link from 'next/link';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

import { getPostsMeta } from '@/lib/posts';

export default async function Articles() {
    const files = await getPostsMeta();

    return (
        <section className='container mx-auto mt-5 mb-28'>
            <div className='w-full'>
                <h1 className='text-4xl font-bold text-center'>My Articles</h1>

                <div className='container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
                    {files &&
                        files.map(file => {
                            const { id, title, cover, tags, date, author } = file;
                            return (
                                <Link
                                    href={`/articles/${id}`}
                                    key={title}
                                >
                                    <Card className='cursor-pointer md:hover:scale-105 transition-all'>
                                        <CardHeader>
                                            <Image
                                                src={process.env.GITHUB_IMAGE_URL + cover}
                                                width={1920}
                                                height={1080}
                                                className='w-full h-52 xl:h-60 object-cover'
                                                alt={title}
                                            />
                                        </CardHeader>

                                        <Separator className='my-4' />

                                        <CardContent>
                                            <CardTitle>{title}</CardTitle>
                                            <CardDescription>
                                                Author - <span>{author}</span>
                                            </CardDescription>
                                        </CardContent>

                                        <CardFooter className='flex-col justify-start items-start'>
                                            <div className='w-full flex flex-wrap gap-3 py-3'>
                                                {tags &&
                                                    tags.map(tag => (
                                                        <Badge
                                                            key={tag}
                                                            variant={'default'}
                                                        >
                                                            # {tag}
                                                        </Badge>
                                                    ))}
                                            </div>

                                            <CardDescription>{new Date(date).toLocaleDateString()}</CardDescription>
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
