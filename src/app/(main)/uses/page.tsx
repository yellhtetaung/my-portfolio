import { Metadata } from 'next';
import Image from 'next/image';

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';

import { uses } from '@/lib/data';

export const metadata: Metadata = {
    title: 'Uses',
};

export default function Uses() {
    return (
        <div className='container mx-auto mt-5 mb-28'>
            <div className='w-full'>
                <h1 className='text-4xl font-bold text-center'>My Setups</h1>

                <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                    {uses.map(use => (
                        <Card
                            key={use.title}
                            className='hover:scale-105 transition-all cursor-pointer shadow-md select-none'
                        >
                            <CardHeader>
                                <Image
                                    src={use.image}
                                    width={1920}
                                    height={1080}
                                    alt={use.title}
                                    className='w-full h-60 object-cover rounded-sm'
                                />
                            </CardHeader>

                            <CardContent>
                                <CardTitle className='text-center'>{use.title}</CardTitle>
                                <CardDescription className='text-center'>{use.description}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
