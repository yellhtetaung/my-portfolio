'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import animation from '../../public/404.json';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function NotFound() {
    return (
        <div className='h-screen flex justify-center items-center'>
            <Lottie
                animationData={animation}
                loop
                className='w-1/2 h-1/2'
            />
        </div>
    );
}
