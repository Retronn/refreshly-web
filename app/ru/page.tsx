import { Link } from '@heroui/link';
import { Button } from '@heroui/button';
import { Image } from '@heroui/image';

import { title, subtitle } from '@/components/primitives';
import { ForkKnife, Recycle, PigMoney, ArrowRight, Restart, MapMark, Recepeit } from '@/components/icons';

export const metadata = {
	title: 'ReFreshly — Экономьте на еде, сокращайте отходы',
	description: 'ReFreshly соединяет вас с местными ресторанами, где можно купить избыточные блюда по выгодной цене.',
	alternates: {
		languages: { en: '/', ru: '/ru' },
	},
};

export default function HomeRu() {
	return (
		<div>
			{/* HERO */}
			<section className='flex flex-col items-center justify-center gap-6 py-12 md:py-16'>
				<div className='mx-auto max-w-3xl text-center'>
					<h1 className={title()}>Берегите еду — экономьте деньги!</h1>
					<p className={subtitle({ class: 'mt-4' })}>
						ReFreshly объединяет вас с местными ресторанами, которые предлагают оставшиеся блюда по
						привлекательной цене.
					</p>
				</div>

				<div className='flex flex-wrap items-center justify-center gap-3'>
					<Button
						as={Link}
						href='/ru/contact'
						className='bg-refreshly-green text-neutral-50'
						radius='none'
						variant='solid'
					>
						Скачать
					</Button>
					<Button as={Link} href='#learn-more' radius='none' variant='bordered'>
						Подробнее
					</Button>
				</div>

				<div className='mt-10 w-full px-4 flex justify-center'>
					<Image
						radius='none'
						alt='Ресторанные блюда'
						src='/images/food-header.jpg'
						className='mx-auto w-full max-w-5xl'
					/>
				</div>
			</section>

			{/* ABOUT / HOW IT WORKS */}
			<section id='learn-more' className='my-16 w-full bg-refreshly-neutral-green flex'>
				<div className='mx-auto flex max-w-6xl flex-col items-center gap-10 px-12 py-10 md:flex-row'>
					<div className='flex flex-col gap-6 md:w-1/2'>
						<h2 className='text-center text-2xl font-semibold md:text-left md:text-3xl'>
							Как ReFreshly помогает ресторанам и покупателям сокращать пищевые отходы
						</h2>

						<p className='text-center text-base md:text-left md:text-lg'>
							ReFreshly — это удобное приложение, где можно найти избыточные блюда из местных ресторанов
							со скидкой. Мы соединяем заведения с клиентами и делаем еду доступнее, а города — чище.
						</p>

						<ul className='flex flex-col gap-3'>
							<li className='flex items-center gap-2'>
								<ForkKnife aria-hidden />
								<span>Выбирайте выгодные предложения от ресторанов рядом с вами.</span>
							</li>
							<li className='flex items-center gap-2'>
								<Recycle aria-hidden />
								<span>Помогайте снижать количество отходов, наслаждаясь вкусной едой.</span>
							</li>
							<li className='flex items-center gap-2'>
								<PigMoney aria-hidden />
								<span>Экономьте и поддерживайте экологию одновременно.</span>
							</li>
						</ul>
					</div>

					<div className='flex w-full justify-center md:w-1/2'>
						<Image
							radius='none'
							alt='Приложение ReFreshly на смартфоне'
							src='/images/refreshly-device-shot.png'
							className='h-auto w-full max-w-[320px] md:max-w-[360px]'
						/>
					</div>
				</div>
			</section>

			{/* FEATURES TRIO */}
			<section className='my-16 flex w-full flex-col items-center gap-12 px-6'>
				<h2 className='max-w-lg text-center text-2xl font-semibold md:text-3xl'>
					Выгодные предложения на излишки блюд рядом с вами
				</h2>

				<div className='mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-3'>
					{/* Card 1 */}
					<div className='flex flex-col items-center gap-3 text-center'>
						<Restart size={36} aria-hidden />
						<h3 className='text-lg md:text-xl'>Каждый заказ — вклад в заботу о планете</h3>
						<Link href='#learn-more' className='flex items-center gap-1 hover:opacity-80'>
							Подробнее <ArrowRight aria-hidden />
						</Link>
					</div>

					{/* Card 2 */}
					<div className='flex flex-col items-center gap-3 text-center md:border-x md:border-refreshly-green md:px-6'>
						<MapMark size={36} aria-hidden />
						<h3 className='text-lg md:text-xl'>Просматривайте блюда поблизости всего в пару кликов</h3>
						<Link href='/ru/contact' className='flex items-center gap-1 hover:opacity-80'>
							Регистрация <ArrowRight aria-hidden />
						</Link>
					</div>

					{/* Card 3 */}
					<div className='flex flex-col items-center gap-3 text-center'>
						<Recepeit size={36} aria-hidden />
						<h3 className='text-lg md:text-xl'>Экономия и польза для окружающей среды</h3>
						<Link href='/ru/contact' className='flex items-center gap-1 hover:opacity-80'>
							Заказать <ArrowRight aria-hidden />
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
