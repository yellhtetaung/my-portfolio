import { Inter as FontSans } from 'next/font/google';
import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

import { cn } from '@/lib/utils';

// import theme-provider
import { ThemeProvider } from '@/components/theme-provider';

// import layout sections
import NavigationBar from '@/components/custom-components/navigation-bar';
import Footer from '@/components/custom-components/footer';

const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
});

export const metadata: Metadata = {
    title: {
        default: 'Ye Htet Aung',
        template: 'Ye Htet Aung | %s',
    },
    description: 'I\'m Ye Htet Aung, a full stack developer.',
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
                    <Footer />
                </ThemeProvider>
                <SpeedInsights />
                <Analytics />
            </body>
        </html>
    );
}
