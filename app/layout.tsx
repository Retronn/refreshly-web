import '@/styles/globals.css';
import { Metadata, Viewport } from 'next';
import { Link } from '@heroui/link';
import clsx from 'clsx';

import { Providers } from './providers';

import { siteConfig } from '@/config/site';
import { fontSans } from '@/config/fonts';
import { Navbar } from '@/components/navbar';

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: '/favicon.ico',
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'white' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' },
	],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html suppressHydrationWarning lang='en'>
			<head />
			<body
				className={clsx('min-h-screen text-foreground bg-background font-sans antialiased', fontSans.variable)}
			>
				<Providers themeProps={{ attribute: 'class', defaultTheme: 'light' }}>
					<div className='relative flex flex-col h-screen'>
						<Navbar />
						<main className='container mx-auto max-w-7xl pt-16 flex-grow'>{children}</main>
						<footer className='w-full border-t border-gray-200'>
							<div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-gray-600 md:flex-row'>
								<p>© {new Date().getFullYear()} ReFreshly. All rights reserved.</p>

								<nav className='flex gap-6'>
									<Link href='/privacy' className='hover:text-gray-900'>
										Privacy
									</Link>
									<Link href='/terms' className='hover:text-gray-900'>
										Terms
									</Link>
									<Link href='/contact' className='hover:text-gray-900'>
										Contact
									</Link>
								</nav>
							</div>
						</footer>
					</div>
				</Providers>
			</body>
		</html>
	);
}
