import { useEffect, useState } from "react";
import FlashMsg from "./components/FlashMsg.jsx";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Menu from "./components/Menu.jsx";
import Cta from "./components/Cta.jsx";
import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";
import CartModal from "./components/CartModal.jsx";
import menuItems from "./constants/menuItems.js";

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

            <Header cart={cart} setCartIsOpen={setCartIsOpen} />

            <Home />

            <Menu menuItems={menuItems} addOnCart={addOnCart} cart={cart} />

            <About />

            <Cta />

            <Footer isRestaurantOpen={isRestaurantOpen} />

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
