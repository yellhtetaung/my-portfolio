import { Metadata } from 'next';

import { educations } from '@/lib/data';

export const metadata: Metadata = {
    title: 'About',
};

export default function About() {
    return (
        <div className='container mx-auto mt-5 mb-28'>
            <div className='w-full'>
                <div className='w-full'>
                    <h1 className='text-4xl font-bold text-center'>About Me</h1>

                    <div className='w-10/12 flex flex-col mx-auto mt-10'>
                        <article className='text-lg text-justify'>
                            <span className='mr-10'></span>I am a person who likes a lot working with computer. Before
                            changing this career, I worked as an IT Assistant in Tech Paradise for two years. I helped
                            to install, operate, and maintain computer networks, communication systems, and so on... But
                            I think, it is not suitable with me because I like critical thinking, problem solving,
                            innovation, more and more. So, I choose this career which is a developer. In 2020, I started
                            learning about web development, continuously. Now, I can work as a{' '}
                            <span className='font-bold underline'>Full Stack Developer</span> with one and a half years
                            of experience in designing, developing, and maintaining web applications and mobile
                            applications. I am proficient in{' '}
                            <span className='font-bold'>
                                HTML, CSS, JavaScript, TypeScript, React, React Native, Next.js and various frameworks
                            </span>
                            . Certainly, I am so passionate about creating user-friendly interfaces and optimizing
                            performance.
                        </article>
                    </div>
                </div>

                <div className='w-full mt-20'>
                    <h1 className='text-4xl font-bold text-center'>Education</h1>

                    {educations.map(education => (
                        <div
                            key={education.school}
                            className='w-10/12 mx-auto mt-10'
                        >
                            <h1 className='text-xl font-bold'>{education.school}</h1>

                            {education.courses.map(course => (
                                <ul
                                    key={course}
                                    className='my-5 list-disc ml-10'
                                >
                                    <li>{course}</li>
                                </ul>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
