import { FaTrashAlt } from "react-icons/fa";

import styles from "./CartModal.module.css";

const CartModal = ({ cart, setCartIsOpen, removeToCart, updateQuantity }) => {
    const closeModal = () => {
        setCartIsOpen(false);
    };

    return (
        <>
            <div className={styles.modalFade} onClick={closeModal}></div>

            <div className={styles.modal}>
                <div className={styles.flexContainer}>
                    <h2>Seu Carrinho</h2>{" "}
                    <button className={styles.closeBtn} onClick={closeModal}>
                        Fechar
                    </button>
                </div>
                <div className={styles.itemsContainer}>
                    {cart.map((cartItem) => (
                        <div className={styles.item} key={cartItem.id}>
                            <div className={styles.textContainer}>
                                <h3>{cartItem.title}</h3>
                                <div className={styles.quantityItem}>
                                    <button
                                        onClick={() =>
                                            updateQuantity(cartItem.id, -1)
                                        }
                                    >
                                        -
                                    </button>
                                    <span>{cartItem.quantity}</span>
                                    <button
                                        onClick={() =>
                                            updateQuantity(cartItem.id, 1)
                                        }
                                    >
                                        +
                                    </button>
                                </div>

                                <strong>
                                    R${" "}
                                    {(
                                        cartItem.price * cartItem.quantity
                                    ).toFixed(2)}
                                </strong>
                            </div>

                            <button
                                className={styles.removeBtn}
                                onClick={() => removeToCart(cartItem.id)}
                            >
                                <FaTrashAlt />
                            </button>
                        </div>
                    ))}
                    {cart.length === 0 && (
                        <p className={styles.emptyCart}>
                            Opsss! Seu carrinho está vazio.
                        </p>
                    )}
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="comment">Comentário: </label>
                    <input
                        type="text"
                        name="comment"
                        id="comment"
                        placeholder="Ex. Lanche sem cebola"
                    />
                </div>
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
                    <strong className={styles.totalPrice}>
                        Total: R${" "}
                        {cart
                            .reduce(
                                (total, item) =>
                                    total + item.price * item.quantity,
                                0
                            )
                            .toFixed(2)}
                    </strong>

                    <button className={styles.finalizeOrderBtn}>
                        Finalizar pedido
                    </button>
                </div>
            </div>
        </>
    );
};

export default CartModal;
