import Providers from '@/lib/Providers';
import ToastProvider from '@/lib/ToastProvider';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
    title: 'LensShot',
    description: 'LensShot is a photography website',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <Providers>
            <html lang="en">
                <body>
                    {children}
                    <ToastProvider />
                </body>
            </html>
        </Providers>
    );
}
