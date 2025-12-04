import { useEffect, useState } from "react";
import CartModal from "./components/CartModal/CartModal";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import FlashMsg from "./components/FlashMsg/FlashMsg";
import menuItems from "./constants/menuItems.js";
import logo from "./assets/hamb-1.png";

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

            <header>
                <a href="#" class="logo">
                    🍔 DevBurger
                </a>
                <nav>
                    <a href="#">Início</a>
                    <a href="#cardapio">Cardápio</a>
                    <a href="#sobre">Sobre</a>
                    <a href="#contato">Contato</a>
                </nav>
                <a href="#cardapio" class="btn">
                    Peça Agora
                </a>
            </header>

            <section id="home" class="hero-wrapper">
                <article class="hero">
                    <div>
                        <h1>O Melhor Hamburguer da Cidade</h1>
                        <p>
                            Ingredientes frescos, receitas especiais e entrega
                            rápida. Peça agora e receba em até 40 minutos!
                        </p>
                        <nav class="hero-buttons">
                            <a id="#cardapio" class="btn">
                                Ver cardápio
                            </a>
                            <a
                                href="https://wa.me/5511999999999"
                                class="btn btn-outline"
                            >
                                📲 WhatsApp
                            </a>
                        </nav>
                        <ul class="hero-stats">
                            <li>
                                <strong>+500</strong>
                                Cliente felizes
                            </li>
                            <li>
                                <strong>4.9</strong>
                                Avaliação ⭐
                            </li>
                            <li>
                                <strong>40min</strong>
                                Ou seu dinheiro de volta
                            </li>
                        </ul>
                    </div>

                    <img alt="hamburger" src={logo} />
                </article>
            </section>

            {/* <Header
                isRestaurantOpen={isRestaurantOpen}
                openHour={openHour}
                closeHour={closeHour}
            /> */}

            <Menu menuItems={menuItems} addOnCart={addOnCart} cart={cart} />

            <section id="sobre" class="about">
                <img
                    src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&h=500&fit=crop"
                    alt="Nossa cozinha"
                />
                
                <article>
                    <h2>Nossa História</h2>
                    <p>
                        Desde 2020, a Burger House nasceu da paixão por
                        hambúrgueres artesanais. Nosso segredo? Ingredientes
                        selecionados e muito amor em cada preparo.
                    </p>
                    <ul>
                        <li>
                            🥩 <strong>Carne Fresca</strong> - 100% bovina
                            selecionada
                        </li>
                        <li>
                            🚀 <strong>Entrega Rápida</strong> - Máximo 40
                            minutos
                        </li>
                        <li>
                            💳 <strong>Pagamento Fácil</strong> - PIX, cartão ou
                            dinheiro
                        </li>
                    </ul>
                </article>
            </section>

            <section id="cta" class="cta">
                <h2>Bateu a Fome?</h2>
                <p>Faça seu pedido agora e receba em casa!</p>
                <a href="https://wa.me/5511999999999" class="btn btn-light">
                    📲 Pedir pelo WhatsApp
                </a>
            </section>

            <Footer setCartIsOpen={setCartIsOpen} cart={cart} />

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
