import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About',
};

export default function About() {
    return (
        <div className='container mx-auto mt-5 mb-28'>
            <div className='w-full h-screen'>
                <h1 className='text-4xl font-bold text-center'>About Me</h1>

                <div className='w-10/12 flex flex-col mx-auto mt-10'>
                    <article className='text-lg text-justify'>
                        <span className='mr-10'></span>I am a person who likes a lot working with computer. Before
                        changing this career, I worked as an IT Assistant in Tech Paradise for two years. I helped to
                        install, operate, and maintain computer networks, communication systems, and so on... But I
                        think, it is not suitable with me because I like critical thinking, problem solving, innovation,
                        more and more. So, I choose this career which is a developer. In 2020, I started learning about
                        web development, continuously. Now, I can work as a{' '}
                        <span className='font-bold text-teal-500'>Full Stack Developer</span> with one year of
                        experience in designing, developing, and maintaining web applications and mobile applications. I
                        am proficient in{' '}
                        <span className='font-bold'>
                            HTML, CSS, JavaScript, TypeScript, React, React Native, Next.js and various frameworks
                        </span>
                        . Certainly, I am so passionate about creating user-friendly interfaces and optimizing
                        performance.
                    </article>
                </div>
            </div>
        </div>
    );
}
