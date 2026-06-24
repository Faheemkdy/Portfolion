import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono, Playfair_Display, Alex_Brush } from 'next/font/google';
import { getMessages, getLocale } from 'next-intl/server';
import { ThemeProvider, I18nProvider, SmoothScrollProvider } from '@/providers';

import '@/styles/globals.css';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-jetbrains',
    display: 'swap',
});

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap',
});

const signature = Alex_Brush({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-signature',
    display: 'swap',
});

export const metadata: Metadata = {
    title: {
        default: 'Mohamed Faheem | PHP Developer & Backend Engineer',
        template: '%s | Mohamed Faheem',
    },
    description: 'Portfolio of Mohamed Faheem — PHP Developer, Flutter & Laravel Developer, and System Technician from Kerala, India.',
    keywords: ['PHP developer', 'backend engineer', 'Laravel', 'MySQL', 'system technician', 'portfolio', 'Kerala'],
    authors: [{ name: 'Mohamed Faheem' }],
    creator: 'Mohamed Faheem',
    metadataBase: new URL('https://mohamedfaheem.dev'),
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://mohamedfaheem.dev',
        title: 'Mohamed Faheem | PHP Developer & Backend Engineer',
        description: 'Portfolio of Mohamed Faheem — PHP Developer, System Technician, and Backend Engineer from Kerala, India.',
        siteName: 'Mohamed Faheem Portfolio',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mohamed Faheem | PHP Developer & Backend Engineer',
        description: 'Portfolio of Mohamed Faheem — PHP Developer, System Technician, and Backend Engineer from Kerala, India.',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: [
            { url: '/favicon.svg' },
        ],
    },
};

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#0a0a0f' },
    ],
    width: 'device-width',
    initialScale: 1,
    minimumScale: 1,
    maximumScale: 5,
    userScalable: true,
};

import { ThemeAwareClickSpark } from '@/components/ui/ThemeAwareClickSpark';
import { ConditionalNavigation } from '@/components/layout/ConditionalNavigation';
import { ChatBot } from '@/components/layout/ChatBot';

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const locale = await getLocale();
    const messages = await getMessages();

    return (
        <html lang={locale} data-scroll-behavior="smooth" suppressHydrationWarning>
            <body className={`${inter.variable} ${jetbrainsMono.variable} ${playfair.variable} ${signature.variable} font-sans relative`}>
                <ThemeProvider>
                    <I18nProvider locale={locale} messages={messages}>
                        <SmoothScrollProvider>
                            <ThemeAwareClickSpark>
                                <ConditionalNavigation>
                                    {children}
                                </ConditionalNavigation>
                                <ChatBot headless />
                            </ThemeAwareClickSpark>
                        </SmoothScrollProvider>
                    </I18nProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
