import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    DialogTitle,
} from "@headlessui/react";
import cookingBro from "../assets/cooking-bro.png";

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
    const [observation, setObservation] = useState("");
    const [address, setAddress] = useState({
        street: "",
        number: "",
        neighborhood: "",
        city: "",
        state: "",
        cep: "",
    });
    const [name, setName] = useState("");

    const handleChange = (e) => {
        setAddress({ ...address, [e.target.name]: e.target.value });
    };

    const closeModal = () => {
        setCartIsOpen(false);
    };

    const handleFinalizeOrder = () => {
        const { street, number, neighborhood, city, state, cep } = address;

        if (!isRestaurantOpen) {
            setError("O restaurante está fechado.");
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

        let orderMessage = "Novo Pedido Realizado!\n\n";

        orderMessage += "Endereço de Entrega:\n";
        orderMessage += `Rua: ${street}, Nº: ${number}\n`;
        orderMessage += `Bairro: ${neighborhood}\n`;
        orderMessage += `Cidade: ${city} - ${state}\n`;
        orderMessage += `CEP: ${cep}\n\n`;

        orderMessage += "Itens do Pedido:\n";
        cart.forEach((item) => {
            orderMessage += `- ${item.quantity}x ${item.title} (R$${(
                item.price * item.quantity
            ).toFixed(2)})\n`;
        });

        const totalPrice = cart.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
        orderMessage += `\nTotal: R$ ${totalPrice.toFixed(2)}\n${
            observation.trim() ? "" : "\n"
        }`;

        if (observation.trim()) {
            orderMessage += `\nComentário: ${observation}\n\n`;
        }

        orderMessage += `Nome: ${name}\n`;

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
            setAddress({
                street: "",
                number: "",
                neighborhood: "",
                city: "",
                state: "",
            });
            return;
        }

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then((res) => res.json())
            .then((data) => {
                if (data.erro) {
                    setError("CEP não encontrado!");
                    setAddress({
                        street: "",
                        number: "",
                        neighborhood: "",
                        city: "",
                        state: "",
                    });
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
                setAddress({
                    street: "",
                    number: "",
                    neighborhood: "",
                    city: "",
                    state: "",
                });
            });
    };

    return (
        <Dialog open={true} onClose={closeModal} className="relative z-50">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-black/40 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                    >
                        <div className="bg-white p-4 sm:p-6">
                            <div className="flex items-center justify-between mb-4">
                                <DialogTitle
                                    as="h3"
                                    className="text-left text-2xl font-bold text-gray-900 flex-1"
                                >
                                    Seu Carrinho
                                </DialogTitle>
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="px-3 py-2 text-sm border-none rounded text-gray-500 bg-transparent font-bold cursor-pointer transition-colors duration-200 hover:text-gray-400"
                                >
                                    Fechar
                                </button>
                            </div>

                            <div className="overflow-y-auto max-h-[40vh] mb-4 pr-2">
                                {cart.map((cartItem) => (
                                    <div
                                        key={cartItem.id}
                                        className="flex items-center justify-between py-2 border-b border-gray-300"
                                    >
                                        <div className="flex flex-col gap-2">
                                            <h3 className="text-base font-bold text-sm text-gray-800">
                                                {cartItem.title}
                                            </h3>
                                            <div className="w-20 flex items-center justify-between border border-gray-300 rounded px-1">
                                                <button
                                                    onClick={() =>
                                                        updateQuantity(
                                                            cartItem.id,
                                                            -1
                                                        )
                                                    }
                                                    className="text-gray-500 text-base font-bold px-1 py-0.5 bg-transparent border-none cursor-pointer hover:text-gray-700"
                                                >
                                                    -
                                                </button>
                                                <span className="font-bold text-sm">
                                                    {cartItem.quantity}
                                                </span>
                                                <button
                                                    onClick={() =>
                                                        updateQuantity(
                                                            cartItem.id,
                                                            1
                                                        )
                                                    }
                                                    className="text-gray-500 text-base font-bold px-1 py-0.5 bg-transparent border-none cursor-pointer hover:text-gray-700"
                                                >
                                                    +
                                                </button>
                                            </div>
                                            <strong className="text-base text-sm">
                                                R${" "}
                                                {(
                                                    cartItem.price *
                                                    cartItem.quantity
                                                ).toFixed(2)}
                                            </strong>
                                        </div>

                                        <button
                                            className="border-none bg-transparent p-2 text-base cursor-pointer transition-colors duration-200 hover:text-gray-500"
                                            onClick={() =>
                                                removeToCart(cartItem.id)
                                            }
                                        >
                                            <FaTrashAlt />
                                        </button>
                                    </div>
                                ))}
                                {cart.length === 0 && (
                                    <>
                                        <p className="text-center font-bold text-gray-500 mt-4">
                                            Opsss! Seu carrinho está vazio.
                                        </p>
                                        <img
                                            src={cookingBro}
                                            alt="Carrinho Vazio"
                                            className="block mx-auto h-[30vh] mt-2"
                                        />
                                    </>
                                )}
                            </div>

                            <div className="flex flex-col mb-4">
                                <label
                                    htmlFor="observation"
                                    className="font-bold text-sm mb-1 text-gray-700"
                                >
                                    Observação:{" "}
                                </label>
                                <input
                                    type="text"
                                    name="observation"
                                    id="observation"
                                    placeholder="Ex. Lanche sem cebola"
                                    value={observation}
                                    onChange={(e) =>
                                        setObservation(e.target.value)
                                    }
                                    className="w-full py-2 px-4 outline-none border border-gray-300 rounded"
                                />
                            </div>

                            <h3 className="font-bold text-sm mb-1 text-gray-700">
                                Endereço de Entrega
                            </h3>
                            <div className="grid grid-cols-2 gap-2 mb-4">
                                <input
                                    type="text"
                                    name="cep"
                                    placeholder="CEP"
                                    value={address.cep}
                                    onChange={handleChange}
                                    onBlur={onBlurCep}
                                    className="w-full py-2 px-4 outline-none border border-gray-300 rounded"
                                />
                                <input
                                    type="text"
                                    name="number"
                                    placeholder="Número"
                                    value={address.number}
                                    onChange={handleChange}
                                    className="w-full py-2 px-4 outline-none border border-gray-300 rounded"
                                />
                                <input
                                    type="text"
                                    name="street"
                                    placeholder="Rua"
                                    value={address.street}
                                    onChange={handleChange}
                                    className="w-full py-2 px-4 outline-none border border-gray-300 rounded"
                                />
                                <input
                                    type="text"
                                    name="neighborhood"
                                    placeholder="Bairro"
                                    value={address.neighborhood}
                                    onChange={handleChange}
                                    className="w-full py-2 px-4 outline-none border border-gray-300 rounded"
                                />
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="Cidade"
                                    value={address.city}
                                    onChange={handleChange}
                                    className="w-full py-2 px-4 outline-none border border-gray-300 rounded"
                                />
                                <input
                                    type="text"
                                    name="state"
                                    placeholder="Estado"
                                    value={address.state}
                                    onChange={handleChange}
                                    className="w-full py-2 px-4 outline-none border border-gray-300 rounded"
                                />
                            </div>

                            <div className="flex flex-col mb-4">
                                <label
                                    htmlFor="name"
                                    className="font-bold text-sm mb-1 text-gray-700"
                                >
                                    Seu nome:{" "}
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Nome e sobrenome"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full py-2 px-4 outline-none border border-gray-300 rounded"
                                />
                            </div>

                            {error !== null && (
                                <div className="w-full text-center font-bold text-sm bg-red-100 text-red-600 rounded p-4 mb-2">
                                    <p>{error}</p>
                                </div>
                            )}

                            <div className="flex items-center justify-between my-4">
                                <strong className="text-base text-gray-900">
                                    Total: R${" "}
                                    {cart
                                        .reduce(
                                            (total, item) =>
                                                total +
                                                item.price * item.quantity,
                                            0
                                        )
                                        .toFixed(2)}
                                </strong>

                                <button
                                    type="button"
                                    onClick={handleFinalizeOrder}
                                    className="inline-flex justify-center rounded-md bg-green-700 px-4 py-2 text-sm font-semibold text-white hover:bg-green-800"
                                >
                                    Finalizar pedido
                                </button>
                            </div>

                            <div className="w-full text-justify font-bold text-sm text-gray-500">
                                <p>
                                    Após finalizar o pedido, você será
                                    redirecionado para o nosso WhatsApp, onde
                                    poderá acompanhá-lo em tempo real! 📲🚀
                                </p>
                            </div>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    );
};

export default CartModal;
