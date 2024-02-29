import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About',
};

export default function About() {
    return (
        <div className='container mx-auto mt-5 mb-28'>
            <div className='w-full h-screen'>
                <h1 className='text-4xl font-bold text-center'>About Me</h1>

                <div className='w-full'>
                    <h1 className='text-2xl font-bold text-center'>Comming Soon...</h1>
                </div>
            </div>
        </div>
    );
}
