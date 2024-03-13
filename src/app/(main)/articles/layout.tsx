import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Articles',
};

export default function RootArticleLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <main>{children}</main>;
}
