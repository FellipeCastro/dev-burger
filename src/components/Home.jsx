import { FaWhatsapp } from "react-icons/fa";
import logo from "../assets/hamb-1.png";

const Home = () => {
    const phone = import.meta.env.VITE_PHONE_NUMBER;

    return (
        <section
            id="home"
            className="bg-gradient-to-b from-gray-50 to-red-100 pt-16 md:pt-20 shadow-lg"
        >
            <article className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
                <div className="order-2 lg:order-1">
                    <h1 className="text-gray-900 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                        O Melhor Hamburguer da Cidade
                    </h1>
                    <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8">
                        Ingredientes frescos, receitas especiais e entrega
                        rápida. Peça agora e receba em até 40 minutos!
                    </p>
                    <nav className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
                        <a
                            href="#cardapio"
                            className="w-full sm:w-fit bg-red-600 px-6 py-3 text-white rounded-md font-semibold text-sm hover:bg-red-700 transition-all duration-300 cursor-pointer text-center"
                        >
                            Ver cardápio
                        </a>
                        <a
                            href={`https://wa.me/${phone}`}
                            target="_blank"
                            className="w-full flex items-center justify-center gap-2 sm:w-fit border-2 border-red-600 bg-transparent px-6 py-3 text-red-600 rounded-md font-semibold text-sm hover:bg-red-600 hover:text-white transition-all duration-300 cursor-pointer text-center"
                        >
                            <FaWhatsapp className="text-base" /> WhatsApp
                        </a>
                    </nav>
                    <ul className="flex flex-wrap justify-center sm:justify-start gap-6 sm:gap-10">
                        <li className="flex flex-col items-center sm:items-start">
                            <strong className="text-2xl sm:text-3xl text-red-600">
                                +500
                            </strong>
                            <span className="text-gray-700 text-sm">
                                Clientes felizes
                            </span>
                        </li>
                        <li className="flex flex-col items-center sm:items-start">
                            <strong className="text-2xl sm:text-3xl text-red-600">
                                4.9
                            </strong>
                            <span className="text-gray-700 text-sm">
                                Avaliação ⭐
                            </span>
                        </li>
                        <li className="flex flex-col items-center sm:items-start">
                            <strong className="text-2xl sm:text-3xl text-red-600">
                                40min
                            </strong>
                            <span className="text-gray-700 text-sm">
                                Ou seu dinheiro de volta
                            </span>
                        </li>
                    </ul>
                </div>

                <div className="order-1 lg:order-2">
                    <img
                        alt="hamburger"
                        src={logo}
                        className="rounded-lg shadow-2xl w-full h-auto max-w-sm sm:max-w-md mx-auto"
                    />
                </div>
            </article>
        </section>
    );
};

export default Home;
