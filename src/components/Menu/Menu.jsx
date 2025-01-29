import Card from "../Card/Card";
import styles from "./Menu.module.css";

const Menu = ({ menuItems, addOnCart, cart }) => {
    return (
        <section className={styles.menuContainer}>
            <h1>Conheça nosso cardápio</h1>

            <h2>Hambúrgueres</h2>
            <div className={styles.cardsContainer}>
                {menuItems
                    .filter((item) => item.category === "Hambúrgueres")
                    .map((item) => {
                        const cartItem = cart.find((cartItem) => cartItem.id === item.id);
                        return (
                            <Card
                                key={item.id}
                                title={item.title}
                                img={item.img}
                                description={item.description}
                                price={item.price}
                                quantity={cartItem ? cartItem.quantity : 0} // Se existir no carrinho, pega a quantidade
                                addOnCart={() => addOnCart(item)}
                            />
                        );
                    })}
            </div>

            <h2>Bebidas</h2>
            <div className={styles.cardsContainer}>
                {menuItems
                    .filter((item) => item.category === "Bebidas")
                    .map((item) => {
                        const cartItem = cart.find((cartItem) => cartItem.id === item.id);
                        return (
                            <Card
                                key={item.id}
                                title={item.title}
                                img={item.img}
                                description={item.description}
                                price={item.price}
                                quantity={cartItem ? cartItem.quantity : 0}
                                addOnCart={() => addOnCart(item)}
                            />
                        );
                    })}
            </div>
        </section>
    );
};

export default Menu;
