'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import animation from '../../public/loading.json';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function Loading() {
    return (
        <div className='absolute w-screen h-screen bg-background top-0 left-0 flex justify-center items-center'>
            <Lottie
                animationData={animation}
                loop={true}
                className='w-1/2 h-1/2'
            />
        </div>
    );
}
