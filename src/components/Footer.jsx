import {
    FaInstagram,
    FaFacebook,
    FaWhatsapp,
    FaMapMarkerAlt,
} from "react-icons/fa";
import { SiIfood } from "react-icons/si";

const Footer = ({ isRestaurantOpen }) => {
    return (
        <footer id="contato" className="bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
                    <section>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                            DevBurger
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base">
                            O melhor hambúrguer artesanal da cidade.
                        </p>
                    </section>

                    <section>
                        <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
                            Horário
                        </h4>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 mb-2">
                                <div
                                    className={`w-2 h-2 rounded-full ${
                                        isRestaurantOpen
                                            ? "bg-green-500 animate-pulse"
                                            : "bg-red-500"
                                    }`}
                                ></div>
                                <span
                                    className={`font-medium text-sm sm:text-base ${
                                        isRestaurantOpen
                                            ? "text-green-600"
                                            : "text-red-600"
                                    }`}
                                >
                                    {isRestaurantOpen
                                        ? "Aberto agora"
                                        : "Fechado"}
                                </span>
                            </div>
                            <p className="text-gray-600 text-sm sm:text-base">
                                Domingo a Domingo
                                <br />
                                13h às 23h
                            </p>
                        </div>
                    </section>

                    <section>
                        <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
                            Contato
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#"
                                    target="_blank"
                                    className="text-gray-600 hover:text-gray-900 hover:underline transition-colors flex items-center gap-2 text-sm sm:text-base"
                                >
                                    <FaWhatsapp className="text-gray-600 flex-shrink-0" />
                                    (11) 99999-9999
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    target="_blank"
                                    className="text-gray-600 hover:text-gray-900 hover:underline transition-colors flex items-center gap-2 text-sm sm:text-base"
                                >
                                    <FaMapMarkerAlt className="text-gray-600 flex-shrink-0" />
                                    Rua dos Hambúrgueres, 00, São Paulo - SP
                                </a>
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
                            Redes Sociais
                        </h4>
                        <ul className="flex gap-3 sm:gap-4">
                            <li>
                                <a
                                    href="#"
                                    target="_blank"
                                    className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-900 rounded-md flex items-center justify-center hover:bg-gray-700 transition-colors"
                                    aria-label="Facebook"
                                >
                                    <FaFacebook className="text-white text-sm sm:text-base" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    target="_blank"
                                    className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-900 rounded-md flex items-center justify-center hover:bg-gray-700 transition-colors"
                                    aria-label="Instagram"
                                >
                                    <FaInstagram className="text-white text-sm sm:text-base" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    target="_blank"
                                    className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-900 rounded-md flex items-center justify-center hover:bg-gray-700 transition-colors"
                                    aria-label="iFood"
                                >
                                    <SiIfood className="text-white text-sm sm:text-base" />
                                </a>
                            </li>
                        </ul>
                    </section>
                </div>

                <div className="border-t border-gray-200 pt-6 sm:pt-8 text-center">
                    <div className="copy">
                        <p className="text-gray-500 text-sm sm:text-base">
                            © 2025 - DevBurger
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
