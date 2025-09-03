'use client';

import { Navbar as HeroUINavbar, NavbarContent, NavbarBrand, NavbarItem } from '@heroui/navbar';
import { Button } from '@heroui/button';
import { Link } from '@heroui/link';
import NextLink from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

import { siteConfig } from '@/config/site';
import { link as linkStyles } from '@heroui/theme';
import { Logo } from '@/components/icons';

export const Navbar = () => {
	const pathname = usePathname() || '/';
	const isRU = pathname.startsWith('/ru');

	// removes leading /ru only once; ensures "/" fallback
	const stripLocale = (p: string) => (p === '/ru' ? '/' : p.replace(/^\/ru(\/|$)/, '/'));
	const currentPathSansLocale = stripLocale(pathname);

	// prefix links with /ru if you’re browsing RU
	const loc = (href: string) => {
		// absolute hashes like "#learn-more" should keep locale on the current page
		if (href.startsWith('#')) return isRU ? `/ru${currentPathSansLocale}${href}` : `${href}`;
		// already localized
		if (href.startsWith('/ru')) return href;
		// root or route
		return isRU ? (href === '/' ? '/ru' : `/ru${href}`) : href;
	};

	// link to the "other" locale, staying on the same page
	const switchToEN = currentPathSansLocale; // e.g. "/privacy"
	const switchToRU = currentPathSansLocale === '/' ? '/ru' : `/ru${currentPathSansLocale}`;

	return (
		<HeroUINavbar className='px-8 bg-neutral-200' maxWidth='xl' position='sticky'>
			<NavbarContent className='basis-1/5 sm:basis-full' justify='start'>
				<NavbarBrand as='li' className='gap-3 max-w-fit'>
					<NextLink className='flex items-center gap-2' href={loc('/')}>
						<Logo />
						<p className='font-bold text-refreshly-green'>ReFreshly</p>
					</NextLink>
				</NavbarBrand>

				<ul className='hidden lg:flex gap-4 justify-start ml-2'>
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={clsx(
									linkStyles({ color: 'foreground' }),
									'data-[active=true]:text-primary data-[active=true]:font-medium'
								)}
								href={loc(item.href)}
							>
								{/* Optional: translate labels if you want quick RU labels */}
								{isRU && item.label === 'Home'
									? 'Главная'
									: isRU && item.label === 'Terms'
										? 'Условия'
										: isRU && item.label === 'Contact'
											? 'Контакты'
											: item.label}
							</NextLink>
						</NavbarItem>
					))}
				</ul>
			</NavbarContent>

			<NavbarContent className='hidden sm:flex basis-1/5 sm:basis-full' justify='end'>
				{/* Language switch */}
				<NavbarItem>
					<div className='flex items-center gap-3 text-sm'>
						{isRU ? (
							<>
								<NextLink href={switchToEN} className='opacity-70 hover:opacity-100'>
									EN
								</NextLink>
								<span className='opacity-40'>|</span>
								<span className='font-medium'>RU</span>
							</>
						) : (
							<>
								<span className='font-medium'>EN</span>
								<span className='opacity-40'>|</span>
								<NextLink href={switchToRU} className='opacity-70 hover:opacity-100'>
									RU
								</NextLink>
							</>
						)}
					</div>
				</NavbarItem>

				<NavbarItem className='hidden sm:flex gap-4'>
					{/* Join -> /contact (localized) */}
					<Button as={Link} href={loc('/contact')} radius='none' variant='bordered'>
						{isRU ? 'Присоединиться' : 'Join'}
					</Button>

					{/* Explore -> anchor on current page (localized) */}
					<Button
						as={Link}
						href={loc('#learn-more')}
						className='bg-refreshly-green text-neutral-50'
						radius='none'
						variant='solid'
					>
						{isRU ? 'Смотреть' : 'Explore'}
					</Button>
				</NavbarItem>
			</NavbarContent>
		</HeroUINavbar>
	);
};
