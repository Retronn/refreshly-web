import { Link } from '@heroui/link';
import { Button } from '@heroui/button';
import { Image } from '@heroui/image';

import { title, subtitle } from '@/components/primitives';
import { ForkKnife, Recycle, PigMoney, ArrowRight, Restart, MapMark, Recepeit } from '@/components/icons';

export default function Home() {
	return (
		<div>
			{/* HERO */}
			<section className='flex flex-col items-center justify-center gap-6 py-12 md:py-16'>
				<div className='mx-auto max-w-3xl text-center'>
					<h1 className={title()}>Save Food, Save Money!</h1>
					<p className={subtitle({ class: 'mt-4' })}>
						ReFreshly connects you with local restaurants offering surplus meals at unbeatable prices.
					</p>
				</div>

				<div className='flex flex-wrap items-center justify-center gap-3'>
					<Button
						as={Link}
						href='/contact'
						className='bg-refreshly-green text-neutral-50'
						radius='none'
						variant='solid'
					>
						Download
					</Button>
					<Button as={Link} href='#learn-more' radius='none' variant='bordered'>
						Learn more
					</Button>
				</div>

				<div className='mt-10 w-full px-4 flex justify-center'>
					<Image
						radius='none'
						alt='Restaurant food'
						src='/images/food-header.jpg'
						className='mx-auto w-full max-w-5xl'
					/>
				</div>
			</section>

			{/* ABOUT / HOW IT WORKS */}
			<section id='learn-more' className='my-16 w-full bg-refreshly-neutral-green flex '>
				<div className='mx-auto  flex max-w-6xl flex-col items-center  gap-10 px-12 py-10 md:flex-row'>
					<div className='flex flex-col gap-6 md:w-1/2'>
						<h2 className='text-center text-2xl font-semibold md:text-left md:text-3xl'>
							Discover how ReFreshly connects restaurants and buyers to reduce food waste.
						</h2>

						<p className='text-center text-base md:text-left md:text-lg'>
							ReFreshly is your go-to app for affordable surplus meals from local restaurants. By
							connecting buyers with businesses, we help minimize food waste and save you money.
						</p>

						<ul className='flex flex-col gap-3'>
							<li className='flex items-center gap-2'>
								<ForkKnife aria-hidden />
								<span>Connect with local restaurants for great meal deals.</span>
							</li>
							<li className='flex items-center gap-2'>
								<Recycle aria-hidden />
								<span>Reduce food waste while enjoying delicious meals.</span>
							</li>
							<li className='flex items-center gap-2'>
								<PigMoney aria-hidden />
								<span>Save money on meals and help the environment.</span>
							</li>
						</ul>
					</div>

					<div className='flex w-full justify-center md:w-1/2'>
						<Image
							radius='none'
							alt='ReFreshly app on a device'
							src='/images/refreshly-device-shot.png'
							className='h-auto w-full max-w-[320px] md:max-w-[360px]'
						/>
					</div>
				</div>
			</section>

			{/* FEATURES TRIO */}
			<section className='my-16 flex w-full flex-col items-center gap-12 px-6'>
				<h2 className='max-w-lg text-center text-2xl font-semibold md:text-3xl'>
					Discover Amazing Deals on Surplus Meals with ReFreshly
				</h2>

				<div className='mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-3'>
					{/* Card 1 */}
					<div className='flex flex-col items-center gap-3 text-center'>
						<Restart size={36} aria-hidden />
						<h3 className='text-lg md:text-xl'>Take Action for a Greener Planet with Every Meal</h3>
						<Link href='#learn-more' className='flex items-center gap-1 hover:opacity-80'>
							Learn More <ArrowRight aria-hidden />
						</Link>
					</div>

					{/* Card 2 */}
					<div className='flex flex-col items-center gap-3 text-center md:border-x md:border-refreshly-green md:px-6'>
						<MapMark size={36} aria-hidden />
						<h3 className='text-lg md:text-xl'>Browse Available Meals in Your Area with a Few Clicks</h3>
						<Link href='/contact' className='flex items-center gap-1 hover:opacity-80'>
							Sign Up <ArrowRight aria-hidden />
						</Link>
					</div>

					{/* Card 3 */}
					<div className='flex flex-col items-center gap-3 text-center'>
						<Recepeit size={36} aria-hidden />
						<h3 className='text-lg md:text-xl'>Enjoy Savings While Reducing Food Waste</h3>
						<Link href='/contact' className='flex items-center gap-1 hover:opacity-80'>
							Order Now <ArrowRight aria-hidden />
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
