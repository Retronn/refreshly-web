export const metadata = {
	title: 'Contact Us - ReFreshly',
	description: 'Get in touch with the ReFreshly team.',
};

export default function ContactPage() {
	return (
		<section className='mx-auto max-w-4xl px-6 pb-16'>
			<h1 className='text-3xl font-bold text-refreshly-green mb-8'>Contact Us</h1>
			<p className='text-gray-700 mb-12'>
				Have questions, feedback, or partnership inquiries? Reach out using the information below.
			</p>

			{/* Contact card */}
			<div className='bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm space-y-4'>
				<p>
					<strong>Email:</strong>{' '}
					<a href='mailto:support@refreshly.kz' className='text-refreshly-green font-medium hover:underline'>
						support@refreshly.kz
					</a>
				</p>
				<p>
					<strong>Phone:</strong>{' '}
					<a href='tel:+77011112353' className='text-refreshly-green font-medium hover:underline'>
						+7 701 111 2353
					</a>
				</p>
				<p>
					<strong>Address:</strong>
					<br />
					Almaty, Bostandyk District,
					<br />
					Nauryzbay Batyr St., Building 127,
					<br />
					Apt. 612, 050000, Kazakhstan
				</p>
			</div>

			{/* Optional: simple contact form
			<div className='mt-12'>
				<h2 className='text-xl font-semibold text-refreshly-green mb-4'>Send Us a Message</h2>
				<form action='https://formspree.io/f/yourFormId' method='POST' className='space-y-4'>
					<div>
						<label className='block text-sm font-medium mb-1'>Your Name</label>
						<input
							type='text'
							name='name'
							required
							className='w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-refreshly-green focus:ring focus:ring-refreshly-green/30'
						/>
					</div>
					<div>
						<label className='block text-sm font-medium mb-1'>Your Email</label>
						<input
							type='email'
							name='email'
							required
							className='w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-refreshly-green focus:ring focus:ring-refreshly-green/30'
						/>
					</div>
					<div>
						<label className='block text-sm font-medium mb-1'>Message</label>
						<textarea
							name='message'
							rows={4}
							required
							className='w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-refreshly-green focus:ring focus:ring-refreshly-green/30'
						></textarea>
					</div>
					<button
						type='submit'
						className='bg-refreshly-green text-white px-6 py-2 rounded-md hover:bg-green-700 transition'
					>
						Send Message
					</button>
				</form>
			</div> */}
		</section>
	);
}
