import Image from 'next/image';
import Link from 'next/link';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

import { projects } from '@/lib/data';
import { Separator } from '@/components/ui/separator';

export default function ProjectByTags({ params }: { params: { slug: string } }) {
    const filteredProjects = projects.filter(value => {
        const result = value.tag.find(item => item.split(' ').join('').toLowerCase() === params.slug.toLowerCase());

        if (result) return result;

        return;
    });

    if (filteredProjects.length === 0) {
        return (
            <div className='container h-screen flex justify-center items-center mx-auto'>
                <h1 className='text-2xl'>Coming Soon...</h1>
            </div>
        );
    }

    return (
        <div className='container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10'>
            {filteredProjects.map(project => (
                <Card
                    key={project.title}
                    className='cursor-pointer md:hover:scale-105 transition-all'
                >
                    <CardHeader>
                        <CardTitle>{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Image
                            src={project.image}
                            width={1920}
                            height={1080}
                            className='w-full h-40 object-cover'
                            alt={project.title}
                        />

                        <div className='w-full flex flex-wrap gap-3 p-3'>
                            {project.tag.map((tag: string) => (
                                <Badge
                                    key={tag}
                                    variant={
                                        tag.split(' ').join('').toLowerCase() === params.slug.toLowerCase()
                                            ? 'default'
                                            : 'secondary'
                                    }
                                >
                                    # {tag}
                                </Badge>
                            ))}
                        </div>
                    </CardContent>

                    <Separator className='my-4' />

                    <CardFooter className='flex justify-between items-center'>
                        {project.link && project.link !== null && (
                            <Button
                                variant={'secondary'}
                                asChild
                            >
                                <Link
                                    href={project.link}
                                    target='_blank'
                                >
                                    Live Demo
                                </Link>
                            </Button>
                        )}

                        {project.sourceCode && (
                            <Button
                                variant={'default'}
                                asChild
                            >
                                <Link
                                    href={project.sourceCode}
                                    target='_blank'
                                >
                                    Source Code
                                </Link>
                            </Button>
                        )}
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}
