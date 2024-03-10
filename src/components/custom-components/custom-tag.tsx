'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui/button';

interface CustomTagProps {
    children: React.ReactNode;
    link: string;
}

const CustomTag: React.FC<CustomTagProps> = ({ children, link }) => {
    const pathname = usePathname();

    return (
        <Button
            variant={pathname === link ? 'default' : 'secondary'}
            size={'sm'}
            asChild
            className='rounded-full font-bold'
        >
            <Link href={link}>{children}</Link>
        </Button>
    );
};

export default CustomTag;
