import { useState } from "react";
import cookingBro from "../../assets/cooking-bro.png";
import { FaTrashAlt } from "react-icons/fa";
import styles from "./CartModal.module.css";

const CartModal = ({ cart, setCartIsOpen, removeToCart, updateQuantity }) => {
    const [address, setAddress] = useState({
        street: "",
        number: "",
        neighborhood: "",
        city: "",
        state: "",
        cep: "",
    });

    const handleChange = (e) => {
        setAddress({ ...address, [e.target.name]: e.target.value });
    };

    const closeModal = () => {
        setCartIsOpen(false);
    };

    const handleFinalizeOrder = () => {
        const { street, number, neighborhood, city, state, cep } = address;

        if (!street || !number || !neighborhood || !city || !state || !cep) {
            alert("Por favor, preencha todos os campos do endereço!");
            return;
        }

        console.log("Pedido finalizado com:", address, "Itens:", cart);
        alert("Pedido finalizado! 🚀");
        setCartIsOpen(false);
    };

    return (
        <>
            <div className={styles.modalFade} onClick={closeModal}></div>

            <div className={styles.modal}>
                <div className={styles.flexContainer}>
                    <h2>Seu Carrinho</h2>
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
                        <>
                            <p className={styles.emptyCart}>
                                Opsss! Seu carrinho está vazio.
                            </p>
                            <img
                                src={cookingBro}
                                alt="Carrinho Vazio"
                                className={styles.emptyCartImg}
                            />
                        </>
                    )}
                </div>

                {cart.length !== 0 && (
                    <div className={styles.inputContainer}>
                        <label htmlFor="comment">Comentário: </label>
                        <input
                            type="text"
                            name="comment"
                            id="comment"
                            placeholder="Ex. Lanche sem cebola"
                        />
                    </div>
                )}

                <h3 className={styles.label}>Endereço de Entrega</h3>
                <div className={styles.addressContainer}>
                    <input
                        type="text"
                        name="street"
                        placeholder="Rua"
                        value={address.street}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="number"
                        placeholder="Número"
                        value={address.number}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="neighborhood"
                        placeholder="Bairro"
                        value={address.neighborhood}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="city"
                        placeholder="Cidade"
                        value={address.city}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="state"
                        placeholder="Estado"
                        value={address.state}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="cep"
                        placeholder="CEP"
                        value={address.cep}
                        onChange={handleChange}
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

                    <button
                        className={styles.finalizeOrderBtn}
                        onClick={handleFinalizeOrder}
                    >
                        Finalizar pedido
                    </button>
                </div>
            </div>
        </>
    );
};

export default CartModal;
