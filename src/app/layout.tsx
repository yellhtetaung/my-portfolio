import { Inter as FontSans } from 'next/font/google';
import { Metadata } from 'next';
import './globals.css';

import { cn } from '@/lib/utils';

import { ThemeProvider } from '@/components/theme-provider';
import NavigationBar from '@/components/custom-components/navigation-bar';

export const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
});

export const metadata: Metadata = {
    title: {
        default: 'Ye Htet Aung',
        template: 'Ye Htet Aung | %s',
    },
    description: '',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang='en'
            suppressHydrationWarning
        >
            <head />
            <body
                className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}
                suppressHydrationWarning
            >
                <ThemeProvider
                    attribute='class'
                    defaultTheme='system'
                    enableSystem
                    disableTransitionOnChange
                >
                    <NavigationBar />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
