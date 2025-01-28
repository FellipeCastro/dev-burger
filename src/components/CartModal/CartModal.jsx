import { FaTrashAlt } from "react-icons/fa";

import styles from "./CartModal.module.css";

const CartModal = () => {
    return (
        <>
            <div className={styles.modalFade}></div>

            <div className={styles.modal}>
                <h2>Seu Carrinho</h2>

                <div className={styles.itemsContainer}>
                    <div className={styles.item}>
                        <div>
                            <h3>Hamburger Smash</h3>
                            <span>(Quantidade: 1)</span>
                            <strong>R$ 18.90</strong>
                        </div>

                        <button className={styles.removeBtn}>
                            <FaTrashAlt />
                        </button>
                    </div>
                    <div className={styles.item}>
                        <div>
                            <h3>Hamburger Smash</h3>
                            <span>(Quantidade: 1)</span>
                            <strong>R$ 18.90</strong>
                        </div>

                        <button className={styles.removeBtn}>
                            <FaTrashAlt />
                        </button>
                    </div>
                    <div className={styles.item}>
                        <div>
                            <h3>Hamburger Smash</h3>
                            <span>(Quantidade: 1)</span>
                            <strong>R$ 18.90</strong>
                        </div>

                        <button className={styles.removeBtn}>
                            <FaTrashAlt />
                        </button>
                    </div>
                    <div className={styles.item}>
                        <div>
                            <h3>Hamburger Smash</h3>
                            <span>(Quantidade: 1)</span>
                            <strong>R$ 18.90</strong>
                        </div>

                        <button className={styles.removeBtn}>
                            <FaTrashAlt />
                        </button>
                    </div>
                    <div className={styles.item}>
                        <div>
                            <h3>Hamburger Smash</h3>
                            <span>(Quantidade: 1)</span>
                            <strong>R$ 18.90</strong>
                        </div>

                        <button className={styles.removeBtn}>
                            <FaTrashAlt />
                        </button>
                    </div>
                    <div className={styles.item}>
                        <div>
                            <h3>Hamburger Smash</h3>
                            <span>(Quantidade: 1)</span>
                            <strong>R$ 18.90</strong>
                        </div>

                        <button className={styles.removeBtn}>
                            <FaTrashAlt />
                        </button>
                    </div>
                    <div className={styles.item}>
                        <div>
                            <h3>Hamburger Smash</h3>
                            <span>(Quantidade: 1)</span>
                            <strong>R$ 18.90</strong>
                        </div>

                        <button className={styles.removeBtn}>
                            <FaTrashAlt />
                        </button>
                    </div>
                    <div className={styles.item}>
                        <div>
                            <h3>Hamburger Smash</h3>
                            <span>(Quantidade: 1)</span>
                            <strong>R$ 18.90</strong>
                        </div>

                        <button className={styles.removeBtn}>
                            <FaTrashAlt />
                        </button>
                    </div>
                    <div className={styles.item}>
                        <div>
                            <h3>Hamburger Smash</h3>
                            <span>(Quantidade: 1)</span>
                            <strong>R$ 18.90</strong>
                        </div>

                        <button className={styles.removeBtn}>
                            <FaTrashAlt />
                        </button>
                    </div>
                    <div className={styles.item}>
                        <div>
                            <h3>Hamburger Smash</h3>
                            <span>(Quantidade: 1)</span>
                            <strong>R$ 18.90</strong>
                        </div>

                        <button className={styles.removeBtn}>
                            <FaTrashAlt />
                        </button>
                    </div>
                    <div className={styles.item}>
                        <div>
                            <h3>Hamburger Smash</h3>
                            <span>(Quantidade: 1)</span>
                            <strong>R$ 18.90</strong>
                        </div>

                        <button className={styles.removeBtn}>
                            <FaTrashAlt />
                        </button>
                    </div>
                    <div className={styles.item}>
                        <div>
                            <h3>Hamburger Smash</h3>
                            <span>(Quantidade: 1)</span>
                            <strong>R$ 18.90</strong>
                        </div>

                        <button className={styles.removeBtn}>
                            <FaTrashAlt />
                        </button>
                    </div>
                </div>

                <strong className={styles.totalPrice}>Total: R$ 123.45</strong>

                <div className={styles.inputContainer}>
                    <label htmlFor="address">Endereço de entrega: </label>
                    <input
                        type="text"
                        name="address"
                        id="address"
                        placeholder="Digite seu endereço completo"
                    />
                </div>

                <div className={styles.flexContainer}>
                    <button className={styles.closeBtn}>Fechar</button>

                    <button className={styles.finalizeOrderBtn}>
                        Finalizar pedido
                    </button>
                </div>
            </div>
        </>
    );
};

export default CartModal;
