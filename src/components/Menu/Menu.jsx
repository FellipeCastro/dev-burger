import Card from "../Card/Card";
import styles from "./Menu.module.css";

const Menu = ({ menuItems, addOnCart, cart }) => {
    const categories = [...new Set(menuItems.map((item) => item.category))];

    return (
        <section className={styles.menuContainer}>
            <h1>Conheça nosso cardápio</h1>
            {categories.map((category) => (
                <div key={category}>
                    <h2>{category}</h2>
                    <div className={styles.cardsContainer}>
                        {menuItems
                            .filter((item) => item.category === category)
                            .map((item) => {
                                const cartItem = cart.find(
                                    (cartItem) => cartItem.id === item.id
                                );
                                return (
                                    <Card
                                        key={item.id}
                                        title={item.title}
                                        img={item.img}
                                        description={item.description}
                                        price={item.price}
                                        quantity={
                                            cartItem ? cartItem.quantity : 0
                                        }
                                        addOnCart={() => addOnCart(item)}
                                    />
                                );
                            })}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Menu;
