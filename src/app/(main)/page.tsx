import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
    title: 'Home',
};

export default function Home() {
    return (
        <section className='container mx-auto mt-5'>
            <div className='w-full lg:h-screen lg:flex justify-between items-center'>
                <div className='lg:w-1/2 h-full flex flex-col justify-center p-5'>
                    <div>
                        <svg className='job-position'>
                            <text
                                x='50%'
                                y='50%'
                                dy='.35em'
                                textAnchor='middle'
                                className='text-4xl xl:text-5xl tracking-wider text-center'
                            >
                                Full Stack Developer
                            </text>
                        </svg>
                    </div>

                    <article className='text-center sm:text-md'>
                        I&apos;m <span className='font-bold'>Ye Htet Aung</span> who is a full stack developer with one
                        year of experience. I&apos;m providing smarter websites and applications. If you can dream it, I
                        can do it. A perfection of creativity. Always in working.
                    </article>

                    <div className='flex justify-center items-center gap-4 mt-10'>
                        <Button
                            variant={'outline'}
                            size={'lg'}
                            asChild
                        >
                            <Link href={'/about'}>About Me</Link>
                        </Button>
                        <Button
                            size={'lg'}
                            asChild
                        >
                            <Link
                                href={'/my-resume.pdf'}
                                target='_blank'
                                download={true}
                            >
                                Download CV
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className='lg:w-1/2 h-full flex justify-center items-center'>
                    <Image
                        src='/my-image.jpg'
                        width={1920}
                        height={1080}
                        alt='my image'
                        className='w-[20rem] lg:w-[25rem] h-auto rounded-3xl shadow-xl lg:hover:rotate-12 lg:hover:scale-105 transition-all cursor-pointer'
                    />
                </div>
            </div>
        </section>
    );
}
