const About = () => {
    return (
        <section
            id="sobre"
            className="flex flex-col lg:flex-row items-center justify-center gap-8 px-4 sm:px-6 lg:px-32 py-10 sm:py-16 bg-gradient-to-t from-gray-50 to-red-50 shadow-md"
        >
            <img
                src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&h=500&fit=crop"
                alt="Nossa cozinha"
                className="rounded-lg shadow-2xl w-full max-w-sm sm:max-w-md lg:max-w-lg"
            />

            <article className="max-w-lg">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center lg:text-left">
                    Nossa História
                </h2>
                <p className="text-gray-700 text-sm sm:text-base mb-6 text-center lg:text-left">
                    Desde 2020, a Burger House nasceu da paixão por hambúrgueres
                    artesanais. Nosso segredo? Ingredientes selecionados e muito
                    amor em cada preparo.
                </p>
                <ul className="flex flex-col gap-4 list-none">
                    <li className="flex items-start gap-3">
                        <span className="text-2xl">🥩</span>
                        <div>
                            <strong className="block font-semibold text-gray-800">
                                Carne Fresca
                            </strong>
                            <span className="text-gray-600 text-sm">
                                100% bovina selecionada
                            </span>
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-2xl">🚀</span>
                        <div>
                            <strong className="block font-semibold text-gray-800">
                                Entrega Rápida
                            </strong>
                            <span className="text-gray-600 text-sm">
                                Máximo 40 minutos
                            </span>
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-2xl">💳</span>
                        <div>
                            <strong className="block font-semibold text-gray-800">
                                Pagamento Fácil
                            </strong>
                            <span className="text-gray-600 text-sm">
                                PIX, cartão ou dinheiro
                            </span>
                        </div>
                    </li>
                </ul>
            </article>
        </section>
    );
};

export default About;
