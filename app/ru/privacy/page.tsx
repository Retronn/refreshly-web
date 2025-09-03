export const metadata = {
	title: 'Политика конфиденциальности — ReFreshly',
	description: 'Как ReFreshly обрабатывает и защищает ваши данные.',
};

export default function PrivacyPageRu() {
	return (
		<section className='mx-auto max-w-4xl px-6 pb-16'>
			<h1 className='text-3xl font-bold text-refreshly-green mb-8'>Политика конфиденциальности</h1>
			<p className='text-sm text-gray-500 mb-12'>
				<strong>Последнее обновление:</strong> 2025
			</p>

			<div className='space-y-10 text-gray-800 leading-relaxed'>
				<div>
					<h2 className='text-xl font-semibold border-l-4 border-refreshly-green pl-3 mb-3'>
						Какие данные мы собираем
					</h2>
					<ul className='list-disc list-inside space-y-2'>
						<li>
							<strong>Контактные данные</strong>, которые вы оставляете через формы (например, адрес
							электронной почты).
						</li>
						<li>
							<strong>Базовая аналитика</strong>, включая количество посещений и данные об устройстве
							(если включено).
						</li>
					</ul>
				</div>

				<div>
					<h2 className='text-xl font-semibold border-l-4 border-refreshly-green pl-3 mb-3'>
						Как мы используем данные
					</h2>
					<ul className='list-disc list-inside space-y-2'>
						<li>Для работы и улучшения сайта и сервиса.</li>
						<li>Для ответа на запросы и предоставления поддержки.</li>
						<li>Для предотвращения злоупотреблений и обеспечения надежности.</li>
					</ul>
				</div>

				<div>
					<h2 className='text-xl font-semibold border-l-4 border-refreshly-green pl-3 mb-3'>
						Передача данных
					</h2>
					<p>
						Мы используем проверенных поставщиков для хостинга и работы сервиса. Мы не продаём персональные
						данные. Данные могут быть раскрыты только в случаях, предусмотренных законом.
					</p>
				</div>

				<div>
					<h2 className='text-xl font-semibold border-l-4 border-refreshly-green pl-3 mb-3'>
						Хранение данных
					</h2>
					<p>Мы храним данные только столько времени, сколько необходимо для целей, описанных выше.</p>
				</div>

				<div>
					<h2 className='text-xl font-semibold border-l-4 border-refreshly-green pl-3 mb-3'>Ваши права</h2>
					<p>
						Вы можете запросить доступ, исправление или удаление ваших персональных данных, связавшись с
						нами.
					</p>
				</div>
			</div>

			{/* Контакты */}
			<div className='mt-16 border-t border-gray-200 pt-8'>
				<h2 className='text-xl font-semibold mb-4 text-refreshly-green'>Контакты</h2>
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
						Телефон:{' '}
						<a href='tel:+77011112353' className='text-refreshly-green font-medium hover:underline'>
							+7 701 111 2353
						</a>
					</p>
					<p>
						Адрес: г. Алматы, Бостандыкский район, ул. Наурызбай батыра, д. 127, кв. 612, 050000, Казахстан
					</p>
				</div>
			</div>
		</section>
	);
}
