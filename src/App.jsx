import { useEffect, useState } from "react";
import CartModal from "./components/CartModal.jsx";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Menu from "./components/Menu.jsx";
import FlashMsg from "./components/FlashMsg/FlashMsg";
import menuItems from "./constants/menuItems.js";
import logo from "./assets/hamb-1.png";
import { BsFillCartFill } from "react-icons/bs";
import {
    FaInstagram,
    FaFacebook,
    FaWhatsapp,
    FaMapMarkerAlt,
    FaClock,
} from "react-icons/fa";
import { SiIfood } from "react-icons/si";

const App = () => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const [cartIsOpen, setCartIsOpen] = useState(false);

    const [flashMsg, setFlashMsg] = useState(false);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addOnCart = (item) => {
        setCart((prevCart) => {
            const itemExists = prevCart.find(
                (cartItem) => cartItem.id === item.id
            );

            if (itemExists) {
                return prevCart.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            } else {
                return [...prevCart, { ...item, quantity: 1 }];
            }
        });
    };

    const removeToCart = (itemId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
    };

    const updateQuantity = (itemId, change) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === itemId
                    ? { ...item, quantity: Math.max(1, item.quantity + change) }
                    : item
            )
        );
    };

    const openHour = 13;
    const closeHour = 23;
    const closedDays = []; // 0 = domingo, 1 = segunda, 2 = terça, 3 = quarta, 4 = quinta, 5 = sexta, 6 = sábado

    const checkRestaurantOpen = () => {
        const date = new Date();
        const day = date.getDay();
        const hour = date.getHours();
        const minute = date.getMinutes();

        if (closedDays.includes(day)) {
            return false;
        }

        return (
            hour >= openHour &&
            (hour < closeHour || (hour === closeHour && minute === 0))
        );
    };

    const isRestaurantOpen = checkRestaurantOpen();

    return (
        <>
            <FlashMsg flashMsg={flashMsg} setFlashMsg={setFlashMsg} />

            <header className="fixed top-0 left-0 right-0 flex items-center justify-between px-[5%] py-4 bg-white shadow-lg z-50">
                <a
                    href="#"
                    className="text-2xl font-bold text-gray-900 no-underline"
                >
                    DevBurger
                </a>
                <nav className="flex gap-8">
                    <a
                        href="#"
                        className="font-semibold text-gray-900 hover:text-red-600 transition-colors duration-200"
                    >
                        Início
                    </a>
                    <a
                        href="#cardapio"
                        className="font-semibold text-gray-900 hover:text-red-600 transition-colors duration-200"
                    >
                        Cardápio
                    </a>
                    <a
                        href="#sobre"
                        className="font-semibold text-gray-900 hover:text-red-600 transition-colors duration-200"
                    >
                        Sobre
                    </a>
                    <a
                        href="#contato"
                        className="font-semibold text-gray-900 hover:text-red-600 transition-colors duration-200"
                    >
                        Contato
                    </a>
                </nav>
                <button
                    className="w-fit p-4 text-gray-900 text-xl hover:text-gray-600 transition-all duration-300 relative cursor-pointer"
                    onClick={() => setCartIsOpen(true)}
                >
                    <BsFillCartFill />
                    {cart.length > 0 && (
                        <span className="absolute top-1 right-1 bg-red-600 text-white font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center">
                            {cart.length}
                        </span>
                    )}
                </button>
            </header>

            <section
                id="home"
                className="bg-gradient-to-b from-gray-50 to-red-100 pt-20 shadow-lg"
            >
                <article className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 max-w-6xl mx-auto px-8 py-20">
                    <div>
                        <h1 className="text-gray-900 text-5xl font-bold leading-tight mb-4">
                            O Melhor Hamburguer da Cidade
                        </h1>
                        <p className="text-gray-600 text-sm mb-8">
                            Ingredientes frescos, receitas especiais e entrega
                            rápida. Peça agora e receba em até 40 minutos!
                        </p>
                        <nav className="flex gap-4 mb-12">
                            <a
                                href="#cardapio"
                                className="w-fit bg-red-600 px-6 py-3 text-white rounded-md font-semibold text-sm hover:bg-red-700 transition-all duration-300 cursor-pointer"
                            >
                                Ver cardápio
                            </a>
                            <a
                                href="https://wa.me/5511999999999"
                                className="w-fit border-2 border-red-600 bg-transparent px-6 py-3 text-red-600 rounded-md font-semibold text-sm hover:bg-red-600 hover:text-white transition-all duration-300 cursor-pointer"
                            >
                                📲 WhatsApp
                            </a>
                        </nav>
                        <ul className="flex flex-wrap gap-10">
                            <li className="flex flex-col">
                                <strong className="text-3xl text-red-600">
                                    +500
                                </strong>
                                <span className="text-gray-700 text-sm">
                                    Cliente felizes
                                </span>
                            </li>
                            <li className="flex flex-col">
                                <strong className="text-3xl text-red-600">
                                    4.9
                                </strong>
                                <span className="text-gray-700 text-sm">
                                    Avaliação ⭐
                                </span>
                            </li>
                            <li className="flex flex-col">
                                <strong className="text-3xl text-red-600">
                                    40min
                                </strong>
                                <span className="text-gray-700 text-sm">
                                    Ou seu dinheiro de volta
                                </span>
                            </li>
                        </ul>
                    </div>

                    <img
                        alt="hamburger"
                        src={logo}
                        className="rounded-lg shadow-2xl w-full h-auto max-w-md mx-auto"
                    />
                </article>
            </section>

            <Menu menuItems={menuItems} addOnCart={addOnCart} cart={cart} />

            <section
                id="sobre"
                className="flex flex-col lg:flex-row items-center justify-center gap-8 px-32 py-16 bg-gradient-to-t from-gray-50 to-red-100"
            >
                <img
                    src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&h=500&fit=crop"
                    alt="Nossa cozinha"
                    className="rounded-lg shadow-2xl w-full max-w-md lg:max-w-lg"
                />

                <article className="max-w-lg">
                    <h2 className="text-3xl font-bold mb-4">Nossa História</h2>
                    <p className="text-gray-700 text-sm mb-6">
                        Desde 2020, a Burger House nasceu da paixão por
                        hambúrgueres artesanais. Nosso segredo? Ingredientes
                        selecionados e muito amor em cada preparo.
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

            <section
                id="cta"
                className="px-[5%] py-20 text-center bg-gradient-to-br from-red-600 to-red-800 flex flex-col items-center shadow-lg"
            >
                <h2 className="text-4xl text-white font-bold mb-2">
                    Bateu a Fome?
                </h2>
                <p className="text-white/80 text-sm mb-8 max-w-md">
                    Faça seu pedido agora e receba em casa!
                </p>
                <a
                    href="https://wa.me/5511999999999"
                    className="w-fit bg-white px-6 py-4 text-red-600 rounded-md font-semibold text-sm hover:bg-gray-200 transition-all duration-300 cursor-pointer shadow-md"
                >
                    📲 Pedir pelo WhatsApp
                </a>
            </section>

            <footer id="contato" className="bg-white border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        <section>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                DevBurger
                            </h3>
                            <p className="text-gray-600">
                                O melhor hambúrguer artesanal da cidade.
                            </p>
                        </section>

                        <section>
                            <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                Horário
                            </h4>
                            <p className="text-gray-600">
                                Domingo a Domingo
                                <br />
                                13h às 23h
                            </p>
                        </section>

                        <section>
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">
                                Contato
                            </h4>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-gray-900 hover:underline transition-colors flex items-center gap-2"
                                    >
                                        <FaWhatsapp className="text-gray-600" />
                                        (11) 99999-9999
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-gray-900 hover:underline transition-colors flex items-center gap-2"
                                    >
                                        <FaMapMarkerAlt className="text-gray-600" />
                                        Rua dos Hambúrgueres, 00, São Paulo - SP
                                    </a>
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">
                                Redes Sociais
                            </h4>
                            <ul className="flex align-center justify-start gap-4">
                                <li>
                                    <a
                                        href="#"
                                        className="w-10 h-10 bg-gray-900 rounded-md flex items-center justify-center hover:bg-gray-700"
                                    >
                                        <FaFacebook className="text-white text-md" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="w-10 h-10 bg-gray-900 rounded-md flex items-center justify-center hover:bg-gray-700"
                                    >
                                        <FaInstagram className="text-white text-md" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="w-10 h-10 bg-gray-900 rounded-md flex items-center justify-center hover:bg-gray-700"
                                    >
                                        <SiIfood className="text-white text-md" />
                                    </a>
                                </li>
                            </ul>
                        </section>
                    </div>

                    <div className="border-t border-gray-200 pt-8 text-center">
                        <div className="copy">
                            <p className="text-gray-500">© 2025 - DevBurger</p>
                        </div>
                    </div>
                </div>
            </footer>

            {cartIsOpen && (
                <CartModal
                    cart={cart}
                    setCart={setCart}
                    setCartIsOpen={setCartIsOpen}
                    removeToCart={removeToCart}
                    updateQuantity={updateQuantity}
                    isRestaurantOpen={isRestaurantOpen}
                    setFlashMsg={setFlashMsg}
                />
            )}
        </>
    );
};

export default App;
