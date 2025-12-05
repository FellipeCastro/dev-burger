import { BsFillCartPlusFill } from "react-icons/bs";

const Card = ({ title, img, description, price, quantity, addOnCart }) => {
    return (
        <div className="w-full grid grid-cols-3 lg:grid-cols-5 gap-4 bg-white">
            <div className="col-span-1 rounded-lg overflow-hidden aspect-square">
                <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
            </div>

            <div className="col-span-2 lg:col-span-4 flex flex-col justify-between gap-2 relative">
                {quantity > 0 && (
                    <span className="absolute top-1 right-1 bg-red-600 text-white font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center">
                        {quantity}
                    </span>
                )}

                <h3 className="text-md font-bold text-gray-900">{title}</h3>

                <p className="text-sm text-gray-600 flex-grow">{description}</p>

                <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-red-600">
                            R$ {price.toFixed(2)}
                        </span>
                        {quantity > 0 && (
                            <span className="text-sm font-medium text-gray-500">
                                • {quantity} no carrinho
                            </span>
                        )}
                    </div>
                    <button
                        onClick={addOnCart}
                        className="flex items-center justify-center p-2 bg-black text-white rounded-sm hover:bg-gray-800 active:scale-95 transition-all duration-200 cursor-pointer shadow-md"
                        title="Adicionar ao carrinho"
                    >
                        <BsFillCartPlusFill className="text-sm" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
