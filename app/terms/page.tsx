export const metadata = {
	title: 'Terms of Use - ReFreshly',
	description: 'The terms that govern your use of our website.',
};

export default function TermsPage() {
	return (
		<section className='mx-auto max-w-4xl px-6 pb-16'>
			<h1 className='text-3xl font-bold text-refreshly-green mb-8'>Terms of Use</h1>
			<p className='text-sm text-gray-500 mb-12'>
				<strong>Last updated:</strong> 2025
			</p>

			<div className='space-y-10 text-gray-800 leading-relaxed'>
				<div>
					<h2 className='text-xl font-semibold border-l-4 border-refreshly-green pl-3 mb-3'>
						Agreement to Terms
					</h2>
					<p>
						By accessing our website, you agree to these Terms. If you do not agree, please do not use the
						site.
					</p>
				</div>

				<div>
					<h2 className='text-xl font-semibold border-l-4 border-refreshly-green pl-3 mb-3'>
						Use of the Site
					</h2>
					<ul className='list-disc list-inside space-y-2'>
						<li>Use the site only for lawful purposes.</li>
						<li>Do not attempt to disrupt or interfere with the site.</li>
					</ul>
				</div>

				<div>
					<h2 className='text-xl font-semibold border-l-4 border-refreshly-green pl-3 mb-3'>Content</h2>
					<p>Content on this site is provided for general information and may change without notice.</p>
				</div>

				<div>
					<h2 className='text-xl font-semibold border-l-4 border-refreshly-green pl-3 mb-3'>
						Third-Party Services
					</h2>
					<p>
						We may link to or integrate with third-party services. Their terms and policies apply to their
						services.
					</p>
				</div>

				<div>
					<h2 className='text-xl font-semibold border-l-4 border-refreshly-green pl-3 mb-3'>
						Disclaimer & Limitation of Liability
					</h2>
					<p>
						The site is provided “as is” without warranties. To the fullest extent permitted by law, we are
						not liable for any indirect or consequential damages arising from your use of the site.
					</p>
				</div>

				<div>
					<h2 className='text-xl font-semibold border-l-4 border-refreshly-green pl-3 mb-3'>
						Payments & Currency
					</h2>
					<p>
						All prices, transactions, and settlements on ReFreshly are processed in{' '}
						<strong>Kazakhstani Tenge (KZT)</strong>. If you access the service from another country, your
						bank or payment provider may apply conversion rates and fees according to their policies.
						ReFreshly is not responsible for exchange rate differences or additional charges applied by your
						provider.
					</p>
				</div>

				<div>
					<h2 className='text-xl font-semibold border-l-4 border-refreshly-green pl-3 mb-3'>Changes</h2>
					<p>
						We may update these Terms from time to time. Continued use of the site constitutes acceptance of
						the changes.
					</p>
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
