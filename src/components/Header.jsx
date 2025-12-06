import { BsFillCartFill } from "react-icons/bs";

const Header = ({ cart, setCartIsOpen }) => {
    return (
        <header className="fixed top-0 left-0 right-0 flex items-center justify-between px-4 sm:px-6 lg:px-[5%] py-3 sm:py-4 bg-white shadow-lg z-50">
            <a
                href="#"
                className="text-xl sm:text-2xl font-bold text-gray-900 no-underline whitespace-nowrap"
            >
                DevBurger
            </a>

            <nav className="hidden md:flex gap-6 lg:gap-8">
                <a
                    href="#"
                    className="font-semibold text-gray-900 hover:text-red-600 transition-colors duration-200 text-sm lg:text-base whitespace-nowrap"
                >
                    Início
                </a>
                <a
                    href="#cardapio"
                    className="font-semibold text-gray-900 hover:text-red-600 transition-colors duration-200 text-sm lg:text-base whitespace-nowrap"
                >
                    Cardápio
                </a>
                <a
                    href="#sobre"
                    className="font-semibold text-gray-900 hover:text-red-600 transition-colors duration-200 text-sm lg:text-base whitespace-nowrap"
                >
                    Sobre
                </a>
                <a
                    href="#contato"
                    className="font-semibold text-gray-900 hover:text-red-600 transition-colors duration-200 text-sm lg:text-base whitespace-nowrap"
                >
                    Contato
                </a>
            </nav>

            <button
                className="w-fit p-2 sm:p-3 md:p-4 text-gray-900 text-lg sm:text-xl hover:text-gray-600 transition-all duration-300 relative cursor-pointer"
                onClick={() => setCartIsOpen(true)}
            >
                <BsFillCartFill />
                {cart.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-600 text-white font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center">
                        {cart.length}
                    </span>
                )}
            </button>
        </header>
    );
};

export default Header;
