import { useState } from "react";
import cookingBro from "../../assets/cooking-bro.png";
import { FaTrashAlt } from "react-icons/fa";
import styles from "./CartModal.module.css";

const CartModal = ({
    cart,
    setCart,
    setCartIsOpen,
    removeToCart,
    updateQuantity,
    isRestaurantOpen,
    setFlashMsg,
}) => {
    const [error, setError] = useState(null);
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
        const comment = document.getElementById("comment").value;

        if (!isRestaurantOpen) {
            setError("O restaurante esta fechado.");
            return;
        }

        if (cart.length === 0) {
            setError("Seu carrinho está vazio!");
            return;
        }

        if (!street || !number || !neighborhood || !city || !state || !cep) {
            setError("Por favor, preencha todos os campos do endereço!");
            return;
        }

        let orderMessage = "*Novo Pedido Realizado!*\n\n";

        orderMessage += "*Endereço de Entrega:*\n";
        orderMessage += `Rua: ${street}, Nº: ${number}\n`;
        orderMessage += `Bairro: ${neighborhood}\n`;
        orderMessage += `Cidade: ${city} - ${state}\n`;
        orderMessage += `CEP: ${cep}\n\n`;

        orderMessage += "*Itens do Pedido:*\n";
        cart.forEach((item) => {
            orderMessage += `- ${item.quantity}x ${item.title} (R$${(
                item.price * item.quantity
            ).toFixed(2)})\n`;
        });

        const totalPrice = cart.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
        orderMessage += `\n*Total: R$ ${totalPrice.toFixed(2)}*\n`;

        if (comment.trim()) {
            orderMessage += `\n*Comentário:* ${comment}\n`;
        }

        const phone = 5511940618163;
        const encodedMessage = encodeURIComponent(orderMessage);

        window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");

        setCartIsOpen(false);
        setCart([]);
        setFlashMsg(true);
    };

    const onBlurCep = (e) => {
        const { value } = e.target;
        const cep = value.replace(/\D/g, "");

        if (cep.length !== 8) {
            setError("O CEP deve conter 8 dígitos.");
            return;
        }

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then((res) => res.json())
            .then((data) => {
                if (data.erro) {
                    setError("CEP não encontrado!");
                    return;
                }

                setAddress((prev) => ({
                    ...prev,
                    street: data.logradouro || "",
                    neighborhood: data.bairro || "",
                    city: data.localidade || "",
                    state: data.uf || "",
                    cep: value,
                }));
                setError(null);
            })
            .catch(() => {
                setError("Erro ao buscar CEP. Tente novamente.");
            });
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

                <div className={styles.inputContainer}>
                    <label htmlFor="comment">Comentário: </label>
                    <input
                        type="text"
                        name="comment"
                        id="comment"
                        placeholder="Ex. Lanche sem cebola"
                    />
                </div>
                <h3 className={styles.label}>Endereço de Entrega</h3>
                <div className={styles.addressContainer}>
                    <input
                        type="text"
                        name="cep"
                        placeholder="CEP"
                        value={address.cep}
                        onChange={handleChange}
                        onBlur={onBlurCep}
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
                        name="street"
                        placeholder="Rua"
                        value={address.street}
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
                </div>

                {error !== null && (
                    <div className={styles.error}>
                        <p>{error}</p>
                    </div>
                )}

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
                <div className={styles.whatsappMsg}>
                    <p>
                        Após finalizar o pedido, você será redirecionado para o
                        nosso WhatsApp, onde poderá acompanhá-lo em tempo real!
                        📲🚀
                    </p>
                </div>
            </div>
        </>
    );
};

export default CartModal;
