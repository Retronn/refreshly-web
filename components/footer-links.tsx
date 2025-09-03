'use client';

import { Link } from '@heroui/link';
import { usePathname } from 'next/navigation';

export default function FooterLinks() {
	const pathname = usePathname() || '/';
	const isRU = pathname.startsWith('/ru');

	return (
		<nav className='flex gap-6'>
			<Link href={isRU ? '/ru/privacy' : '/privacy'} className='hover:text-gray-900'>
				{isRU ? 'Конфиденциальность' : 'Privacy'}
			</Link>
			<Link href={isRU ? '/ru/terms' : '/terms'} className='hover:text-gray-900'>
				{isRU ? 'Условия' : 'Terms'}
			</Link>
			<Link href={isRU ? '/ru/contact' : '/contact'} className='hover:text-gray-900'>
				{isRU ? 'Контакты' : 'Contact'}
			</Link>
		</nav>
	);
}
