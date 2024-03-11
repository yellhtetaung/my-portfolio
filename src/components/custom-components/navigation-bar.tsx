'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ModeToggle } from './toggle-theme';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { Button } from '../ui/button';

import { MdMenuOpen } from 'react-icons/md';

import { navItems } from '@/lib/data';

export default function NavigationBar() {
    const pathname = usePathname();

    return (
        <div className='container mx-auto p-5 flex justify-between md:justify-around items-center'>
            <Link
                href='/'
                className='flex items-center gap-3'
            >
                <Image
                    src='/my-avatar.png'
                    width={1920}
                    height={1080}
                    alt='my avatar'
                    className='w-[2.5rem] h-[2.5rem] rounded-full border-4 border-foreground'
                />

                <span className='text-lg font-bold hover:text-teal-500 group cursor-pointer transition-all text-foreground hidden md:block'>
                    Ye Htet Aung <span className='text-teal-500 group-hover:text-foreground transition-all'>Dev</span>
                </span>
            </Link>

            <ul className='md:flex items-center gap-x-7 hidden'>
                {navItems.map(nav => (
                    <Link
                        href={nav.link}
                        key={nav.title}
                        className={`font-bold ${pathname === nav.link && 'text-teal-500'} hover:text-teal-500 transition-all`}
                        target={nav.title === 'Articles' ? '_blank' : '_self'}
                    >
                        {nav.title}
                    </Link>
                ))}

                <ModeToggle />
            </ul>

            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        variant={'outline'}
                        size={'icon'}
                        className='md:hidden'
                    >
                        <MdMenuOpen size={25} />
                    </Button>
                </SheetTrigger>
                <SheetContent>
                    <div className='h-full mt-10'>
                        {navItems.map(nav => (
                            <Link
                                href={nav.link}
                                key={nav.title}
                                className={`font-bold ${pathname === nav.link && 'text-teal-500'} hover:text-teal-500 transition-all block p-3 border my-2 rounded-lg`}
                            >
                                {nav.title}
                            </Link>
                        ))}

                        <div className='flex justify-center mt-10'>
                            <ModeToggle />
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
}
