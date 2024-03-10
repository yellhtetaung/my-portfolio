import { Metadata } from 'next';

import { skills } from '@/lib/data';

export const metadata: Metadata = {
    title: 'Skills',
};

export default function Skills() {
    return (
        <section className='container mx-auto mt-5 mb-28'>
            <div className='w-full'>
                <h1 className='text-4xl font-bold text-center'>My Skills</h1>

                {skills.map(skill => (
                    <div
                        className='w-full mt-10'
                        key={skill.title}
                    >
                        <h1 className='text-2xl'>{skill.title}</h1>

                        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5'>
                            {skill.lists.map(list => (
                                <div
                                    key={list.title}
                                    className='flex justify-center items-center border p-5 bg-background hover:bg-foreground hover:text-background hover:scale-105 rounded-xl cursor-pointer shadow-md gap-3 transition-all'
                                >
                                    {list.icon && <list.icon size={35} />}
                                    <span>{list.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
