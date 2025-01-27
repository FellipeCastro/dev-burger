import burger from "../../assets/hamb-1.png";
import refri from "../../assets/refri-1.png";

import { BsFillCartPlusFill, BsFillCartDashFill } from "react-icons/bs";

import styles from "./Menu.module.css";

const Menu = () => {
    return (
        <section className={styles.menuContainer}>
            <h1>Conheça nosso cardápio</h1>
            <div className={styles.cardsContainer}>
                <div className={styles.card}>
                    <div className={styles.img}>
                        <img src={burger} alt="Item" />
                    </div>
                    <div className={styles.textContainer}>
                        <h3>Hamburguer Smash</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Quia non rem eius vitae labore a fugit
                            perspiciatis id doloremque illum, magnam qui! Saepe
                            explicabo quo dolor, molestiae esse quos a.
                        </p>
                        <div className={styles.flexContainer}>
                            <strong>R$ 18.90</strong>
                            <button>
                                <BsFillCartPlusFill />
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.img}>
                        <img src={burger} alt="Item" />
                    </div>
                    <div className={styles.textContainer}>
                        <h3>Hamburguer Smash</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Quia non rem eius vitae labore a fugit
                            perspiciatis id doloremque illum, magnam qui! Saepe
                            explicabo quo dolor, molestiae esse quos a.
                        </p>
                        <div className={styles.flexContainer}>
                            <strong>R$ 18.90</strong>
                            <button>
                                <BsFillCartPlusFill />
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.img}>
                        <img src={burger} alt="Item" />
                    </div>
                    <div className={styles.textContainer}>
                        <h3>Hamburguer Smash</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Quia non rem eius vitae labore a fugit
                            perspiciatis id doloremque illum, magnam qui! Saepe
                            explicabo quo dolor, molestiae esse quos a.
                        </p>
                        <div className={styles.flexContainer}>
                            <strong>R$ 18.90</strong>
                            <button>
                                <BsFillCartPlusFill />
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.img}>
                        <img src={burger} alt="Item" />
                    </div>
                    <div className={styles.textContainer}>
                        <h3>Hamburguer Smash</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Quia non rem eius vitae labore a fugit
                            perspiciatis id doloremque illum, magnam qui! Saepe
                            explicabo quo dolor, molestiae esse quos a.
                        </p>
                        <div className={styles.flexContainer}>
                            <strong>R$ 18.90</strong>
                            <button>
                                <BsFillCartPlusFill />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <h2>Bebidas</h2>
            <div className={styles.cardsContainer}>
                <div className={styles.card}>
                    <div className={styles.img}>
                        <img src={refri} alt="Item" />
                    </div>
                    <div className={styles.textContainer}>
                        <h3>Coca-cola</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Quia non rem eius vitae labore a fugit
                            perspiciatis id doloremque illum, magnam qui! Saepe
                            explicabo quo dolor, molestiae esse quos a.
                        </p>
                        <div className={styles.flexContainer}>
                            <strong>R$ 18.90</strong>
                            <button>
                                <BsFillCartPlusFill />
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.img}>
                        <img src={refri} alt="Item" />
                    </div>
                    <div className={styles.textContainer}>
                        <h3>Coca-cola</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Quia non rem eius vitae labore a fugit
                            perspiciatis id doloremque illum, magnam qui! Saepe
                            explicabo quo dolor, molestiae esse quos a.
                        </p>
                        <div className={styles.flexContainer}>
                            <strong>R$ 18.90</strong>
                            <button>
                                <BsFillCartPlusFill />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Menu;
