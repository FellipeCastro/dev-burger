import Card from "../Card/Card";
import styles from "./Menu.module.css";

const Menu = ({ menuItems }) => {
    return (
        <section className={styles.menuContainer}>
            <h1>Conheça nosso cardápio</h1>

            <h2>Hambúrgueres</h2>
            <div className={styles.cardsContainer}>
                {menuItems
                    .filter((item) => item.category === "Hambúrgueres")
                    .map((item) => (
                        <Card
                            key={item.id}
                            title={item.title}
                            img={item.img}
                            description={item.description}
                            price={item.price}
                        />
                    ))}
            </div>

            <h2>Bebidas</h2>
            <div className={styles.cardsContainer}>
                {menuItems
                    .filter((item) => item.category === "Bebidas")
                    .map((item) => (
                        <Card
                            key={item.id}
                            title={item.title}
                            img={item.img}
                            description={item.description}
                            price={item.price}
                        />
                    ))}
            </div>
        </section>
    );
};

export default Menu;
