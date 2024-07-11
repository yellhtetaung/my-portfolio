'use client';
import React from 'react';
import Lottie from 'lottie-react';
import animation from '../../public/error.json';

export default function Error() {
    return (
        <div className='absolute w-screen h-screen bg-background top-0 left-0 flex justify-center items-center overflow-hidden overscroll-none'>
            <Lottie
                animationData={animation}
                loop={true}
                className='w-1/2 h-1/2'
            />
        </div>
    );
}
