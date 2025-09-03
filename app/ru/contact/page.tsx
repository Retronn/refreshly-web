export const metadata = {
	title: 'Контакты — ReFreshly',
	description: 'Свяжитесь с командой ReFreshly.',
};

export default function ContactPageRu() {
	return (
		<section className='mx-auto max-w-4xl px-6 pb-16'>
			<h1 className='text-3xl font-bold text-refreshly-green mb-8'>Контакты</h1>
			<p className='text-gray-700 mb-12'>
				Есть вопросы, предложения или хотите обсудить партнёрство? Свяжитесь с нами любым удобным способом ниже.
			</p>

			{/* Карточка контактов */}
			<div className='bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm space-y-4'>
				<p>
					<strong>E-mail:</strong>{' '}
					<a href='mailto:support@refreshly.kz' className='text-refreshly-green font-medium hover:underline'>
						support@refreshly.kz
					</a>
				</p>
				<p>
					<strong>Телефон:</strong>{' '}
					<a href='tel:+77011112353' className='text-refreshly-green font-medium hover:underline'>
						+7 701 111 2353
					</a>
				</p>
				<p>
					<strong>Адрес:</strong>
					<br />
					г. Алматы, Бостандыкский район,
					<br />
					ул. Наурызбай батыра, д. 127,
					<br />
					кв. 612, 050000, Казахстан
				</p>
			</div>

			{/*
      // Необязательно: простая форма обратной связи
      <div className="mt-12">
        <h2 className="text-xl font-semibold text-refreshly-green mb-4">Напишите нам</h2>
        <form action="https://formspree.io/f/yourFormId" method="POST" className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Ваше имя</label>
            <input
              type="text"
              name="name"
              required
              className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-refreshly-green focus:ring focus:ring-refreshly-green/30"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Ваш e-mail</label>
            <input
              type="email"
              name="email"
              required
              className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-refreshly-green focus:ring focus:ring-refreshly-green/30"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Сообщение</label>
            <textarea
              name="message"
              rows={4}
              required
              className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-refreshly-green focus:ring focus:ring-refreshly-green/30"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-refreshly-green text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
          >
            Отправить
          </button>
        </form>
      </div>
      */}
		</section>
	);
}
