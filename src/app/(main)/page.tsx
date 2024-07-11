import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import '@/app/globals.css';

import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
    title: 'Home',
};

export default async function Home() {
    return (
        <section className='container mx-auto mt-5'>
            <div className='w-full lg:h-screen lg:flex justify-between items-center'>
                <div className='lg:w-1/2 h-full flex flex-col justify-center p-5'>
                    <div className='w-full'>
                        <svg className='job-position'>
                            <text
                                x='50%'
                                y='50%'
                                dy='.35em'
                                textAnchor='middle'
                                className='text-2xl md:text-5xl xl:text-6xl tracking-wider text-center'
                            >
                                Software Engineer
                            </text>
                        </svg>
                    </div>

                    <article className='text-center sm:text-md'>
                        I&apos;m <span className='font-bold'>Ye Htet Aung</span> who is a full stack developer with
                        almost three years of experience. I&apos;m providing smarter websites and applications. If you
                        can dream it, I can do it. A perfection of creativity. Always in working.
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
                    <div className='w-[20rem] lg:w-[25rem] h-auto relative group'>
                        <div className='hidden lg:block before:content[""] before:bg-gradient-to-bl from-green-400 to-blue-500 before:w-full before:h-full before:absolute before:scale-0 before:rounded-3xl before:shadow-2xl lg:group-hover:w-full lg:group-hover:before:-rotate-[10deg] lg:group-hover:before:scale-105 transition-all before:delay-100 before:duration-300'></div>
                        <div className='hidden lg:block after:content[""] after:bg-gradient-to-tr from-yellow-500 via-pink-500 to-violet-600 after:w-full after:h-full after:absolute after:scale-0 after:rounded-3xl after:shadow-2xl lg:group-hover:w-full lg:group-hover:after:-rotate-[28deg] lg:group-hover:after:scale-105 transition-all  after:delay-75 after:duration-200'></div>
                        <Image
                            src='/my-image-2.jpg'
                            width={1920}
                            height={1080}
                            alt='my image'
                            className='w-full h-auto rounded-3xl shadow-xl relative lg:group-hover:rotate-12 lg:group-hover:scale-105 lg:group-hover:duration-100 cursor-pointer transition-all'
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
