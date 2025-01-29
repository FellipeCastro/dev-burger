import { useEffect, useState } from "react";

import burger1 from "./assets/hamb-1.png";
import burger2 from "./assets/hamb-2.png";
import burger3 from "./assets/hamb-3.png";
import burger4 from "./assets/hamb-4.png";
import burger5 from "./assets/hamb-5.png";
import burger6 from "./assets/hamb-6.png";
import burger7 from "./assets/hamb-7.png";
import burger8 from "./assets/hamb-8.png";
import refri1 from "./assets/refri-1.png";
import refri2 from "./assets/refri-2.png";

import CartModal from "./components/CartModal/CartModal";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";

const App = () => {
    const menuItems = [
        {
            id: 1,
            category: "Hambúrgueres",
            title: "Hamburguer Smash",
            img: burger1,
            description:
                "Pão brioche, hambúrguer smash, queijo cheddar, cebola caramelizada e molho especial.",
            price: 18.9,
        },
        {
            id: 2,
            category: "Hambúrgueres",
            title: "Cheddar Bacon",
            img: burger2,
            description:
                "Hambúrguer de 180g, queijo cheddar, bacon crocante, e molho barbecue.",
            price: 21.9,
        },
        {
            id: 3,
            category: "Hambúrgueres",
            title: "Clássico",
            img: burger3,
            description:
                "Pão artesanal, carne suculenta, alface, tomate, e maionese da casa.",
            price: 16.5,
        },
        {
            id: 4,
            category: "Hambúrgueres",
            title: "Double Smash",
            img: burger4,
            description:
                "Dois hambúrgueres smash, queijo prato duplo e molho especial.",
            price: 24.9,
        },
        {
            id: 5,
            category: "Hambúrgueres",
            title: "Vegetariano",
            img: burger5,
            description:
                "Hambúrguer de grão-de-bico, alface americana, tomate e molho de ervas.",
            price: 19.5,
        },
        {
            id: 6,
            category: "Hambúrgueres",
            title: "Frango Crispy",
            img: burger6,
            description: "Frango crocante, alface, molho ranch e pão brioche.",
            price: 20.9,
        },
        {
            id: 7,
            category: "Hambúrgueres",
            title: "Picanha Burger",
            img: burger7,
            description:
                "Hambúrguer de picanha, queijo prato, cebola caramelizada e molho chimichurri.",
            price: 25.9,
        },
        {
            id: 8,
            category: "Hambúrgueres",
            title: "Trufado",
            img: burger8,
            description:
                "Carne de Angus, queijo gruyère, cebola caramelizada e maionese trufada.",
            price: 29.9,
        },
        {
            id: 9,
            category: "Bebidas",
            title: "Coca-Cola",
            img: refri1,
            description:
                "Refrigerante lata de Coca-Cola, ideal para acompanhar seu lanche.",
            price: 5.5,
        },
        {
            id: 10,
            category: "Bebidas",
            title: "Guaraná Antarctica",
            img: refri2,
            description:
                "Refrigerante lata de Guaraná Antarctica, perfeito para refrescar.",
            price: 5.5,
        },
    ];

    const [cart, setCart] = useState([]);
    const [cartIsOpen, setCartIsOpen] = useState(false);

    useEffect(() => {
        console.log(cart);
    });

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

    return (
        <>
            <Header />
            <Menu menuItems={menuItems} addOnCart={addOnCart} />
            <Footer setCartIsOpen={setCartIsOpen} cart={cart} />

            {cartIsOpen && (
                <CartModal
                    cart={cart}
                    setCartIsOpen={setCartIsOpen}
                    removeToCart={removeToCart}
                />
            )}
        </>
    );
};

export default App;
