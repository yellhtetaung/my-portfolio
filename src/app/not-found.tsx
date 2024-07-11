'use client';
import React from 'react';
import Lottie from 'lottie-react';
import animation from '../../public/404.json';

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
