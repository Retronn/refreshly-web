export const metadata = {
	title: 'Условия использования — ReFreshly',
	description: 'Правила, регулирующие использование сайта ReFreshly.',
};

export default function TermsPageRu() {
	return (
		<section className='mx-auto max-w-4xl px-6 pb-16'>
			<h1 className='text-3xl font-bold text-refreshly-green mb-8'>Условия использования</h1>
			<p className='text-sm text-gray-500 mb-12'>
				<strong>Последнее обновление:</strong> 2025
			</p>

			<div className='space-y-10 text-gray-800 leading-relaxed'>
				<div>
					<h2 className='text-xl font-semibold border-l-4 border-refreshly-green pl-3 mb-3'>
						Принятие условий
					</h2>
					<p>
						Получая доступ к нашему сайту, вы соглашаетесь с настоящими Условиями. Если вы не согласны —
						пожалуйста, не используйте сайт.
					</p>
				</div>

				<div>
					<h2 className='text-xl font-semibold border-l-4 border-refreshly-green pl-3 mb-3'>
						Использование сайта
					</h2>
					<ul className='list-disc list-inside space-y-2'>
						<li>Используйте сайт только в законных целях.</li>
						<li>Не пытайтесь нарушить работу сайта или вмешиваться в его функционирование.</li>
					</ul>
				</div>

				<div>
					<h2 className='text-xl font-semibold border-l-4 border-refreshly-green pl-3 mb-3'>Контент</h2>
					<p>
						Информация на сайте предоставляется в ознакомительных целях и может изменяться без
						предварительного уведомления.
					</p>
				</div>

				<div>
					<h2 className='text-xl font-semibold border-l-4 border-refreshly-green pl-3 mb-3'>
						Сторонние сервисы
					</h2>
					<p>
						Мы можем размещать ссылки на сторонние сервисы или интегрироваться с ними. На использование
						таких сервисов распространяются их собственные правила и условия.
					</p>
				</div>

				<div>
					<h2 className='text-xl font-semibold border-l-4 border-refreshly-green pl-3 mb-3'>
						Ограничение ответственности
					</h2>
					<p>
						Сайт предоставляется «как есть» без гарантий. В максимальной степени, разрешённой законом, мы не
						несем ответственности за любые косвенные или последующие убытки, возникшие в связи с
						использованием сайта.
					</p>
				</div>

				<div>
					<h2 className='text-xl font-semibold border-l-4 border-refreshly-green pl-3 mb-3'>
						Платежи и валюта
					</h2>
					<p>
						Все цены, транзакции и расчёты на ReFreshly осуществляются в{' '}
						<strong>казахстанских тенге (KZT)</strong>. Если вы пользуетесь сервисом из другой страны, ваш
						банк или платёжный провайдер может применить собственные курсы конверсии и комиссии. ReFreshly
						не несёт ответственности за курсовые разницы и дополнительные сборы, применяемые вашим
						провайдером.
					</p>
				</div>

				<div>
					<h2 className='text-xl font-semibold border-l-4 border-refreshly-green pl-3 mb-3'>Изменения</h2>
					<p>
						Мы можем время от времени обновлять настоящие Условия. Продолжение использования сайта означает
						ваше согласие с изменениями.
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
