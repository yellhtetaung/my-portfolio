'use client';
import React from 'react';
import Lottie from 'lottie-react';
import animation from '../../public/loading.json';

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
