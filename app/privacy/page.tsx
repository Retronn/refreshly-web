export const metadata = {
	title: 'Privacy Policy - ReFreshly',
	description: 'How ReFreshly handles your data.',
};

export default function PrivacyPage() {
	return (
		<section className='mx-auto max-w-4xl px-6 pb-16'>
			<h1 className='text-3xl font-bold text-refreshly-green mb-8'>Privacy Policy</h1>
			<p className='text-sm text-gray-500 mb-12'>
				<strong>Last updated:</strong> 2025
			</p>

			<div className='space-y-10 text-gray-800 leading-relaxed'>
				<div>
					<h2 className='text-xl font-semibold border-l-4 border-refreshly-green pl-3 mb-3'>
						Information We Collect
					</h2>
					<ul className='list-disc list-inside space-y-2'>
						<li>
							<strong>Contact info</strong> you submit via forms (e.g., email).
						</li>
						<li>
							<strong>Basic analytics</strong> such as page views and device info (if enabled).
						</li>
					</ul>
				</div>

				<div>
					<h2 className='text-xl font-semibold border-l-4 border-refreshly-green pl-3 mb-3'>
						How We Use Information
					</h2>
					<ul className='list-disc list-inside space-y-2'>
						<li>To operate and improve the site and service.</li>
						<li>To respond to inquiries and provide support.</li>
						<li>To prevent abuse and ensure reliability.</li>
					</ul>
				</div>

				<div>
					<h2 className='text-xl font-semibold border-l-4 border-refreshly-green pl-3 mb-3'>Sharing</h2>
					<p>
						We use trusted vendors for hosting and operations. We do not sell personal data. We may disclose
						information if required by law.
					</p>
				</div>

				<div>
					<h2 className='text-xl font-semibold border-l-4 border-refreshly-green pl-3 mb-3'>
						Data Retention
					</h2>
					<p>We keep data only as long as necessary for the purposes described above.</p>
				</div>

				<div>
					<h2 className='text-xl font-semibold border-l-4 border-refreshly-green pl-3 mb-3'>Your Rights</h2>
					<p>You may request access, correction, or deletion of your personal data by contacting us.</p>
				</div>
			</div>

			{/* Contact card */}
			<div className='mt-16 border-t border-gray-200 pt-8'>
				<h2 className='text-xl font-semibold mb-4 text-refreshly-green'>Contact Us</h2>
				<div className='bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm space-y-2'>
					<p>
						Email:{' '}
						<a
							href='mailto:support@refreshly.kz'
							className='text-refreshly-green font-medium hover:underline'
						>
							support@refreshly.kz
						</a>
					</p>
					<p>
						Phone:{' '}
						<a href='tel:+77011112353' className='text-refreshly-green font-medium hover:underline'>
							+7 701 111 2353
						</a>
					</p>
					<p>
						Address: Almaty, Bostandyk District, Nauryzbay Batyr St., Building 127, Apt. 612, 050000,
						Kazakhstan
					</p>
				</div>
			</div>
		</section>
	);
}
