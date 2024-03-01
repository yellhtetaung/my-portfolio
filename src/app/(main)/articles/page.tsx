import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Article',
};

export default function Article() {
    return (
        <div className='container mx-auto mt-5 mb-28'>
            <div className='w-full'>
                <h1 className='text-4xl font-bold text-center'>My Articles</h1>

                <div className='w-full h-screen flex justify-center items-center'>
                    <h1 className='text-2xl font-bold text-center'>Comming Soon...</h1>
                </div>
            </div>
        </div>
    );
}
