import '@/styles/globals.css';
import { Metadata, Viewport } from 'next';
import clsx from 'clsx';

import { Providers } from './providers';
import { siteConfig } from '@/config/site';
import { fontSans } from '@/config/fonts';
import { Navbar } from '@/components/navbar';
import { Link } from '@heroui/link';
import FooterLinks from '@/components/footer-links';

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: { icon: '/favicon.ico' },
	// optional SEO hint
	alternates: { languages: { en: '/', ru: '/ru' } },
};

export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'white' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' },
	],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		// default to "en"; a tiny inline script below will switch to "ru" on /ru/*
		<html suppressHydrationWarning lang='en'>
			<head />
			<body
				className={clsx('min-h-screen text-foreground bg-background font-sans antialiased', fontSans.variable)}
			>
				<Providers themeProps={{ attribute: 'class', defaultTheme: 'light' }}>
					{/* Tiny inline script to set <html lang> = ru when path starts with /ru */}
					<script
						dangerouslySetInnerHTML={{
							__html: `(function(){try{var p=location.pathname;document.documentElement.lang=p.indexOf('/ru')===0?'ru':'en';}catch(e){}})();`,
						}}
					/>
					<div className='relative flex min-h-screen flex-col'>
						<Navbar />
						<main className='container mx-auto max-w-7xl pt-16 flex-grow'>{children}</main>

						<footer className='w-full border-t border-gray-200'>
							<div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-gray-600 md:flex-row'>
								<p>© {new Date().getFullYear()} ReFreshly. All rights reserved.</p>

								<FooterLinks />
							</div>
						</footer>
					</div>
				</Providers>
			</body>
		</html>
	);
}
