import { FaWhatsapp } from "react-icons/fa";

const Cta = () => {
    const phone = import.meta.env.VITE_PHONE_NUMBER;

    return (
        <section
            id="cta"
            className="px-4 sm:px-[5%] py-16 sm:py-20 text-center bg-gradient-to-br from-red-600 to-red-800 flex flex-col items-center shadow-lg"
        >
            <h2 className="text-3xl sm:text-4xl text-white font-bold mb-2">
                Bateu a Fome?
            </h2>
            <p className="text-white/80 text-sm sm:text-base mb-6 sm:mb-8 max-w-md">
                Faça seu pedido agora e receba em casa!
            </p>
            <a
                href={`https://wa.me/${phone}`}
                target="_blank"
                className="w-full flex items-center justify-center gap-2 sm:w-fit bg-white px-6 py-3 sm:py-4 text-red-600 rounded-md font-semibold text-sm hover:bg-gray-200 transition-all duration-300 cursor-pointer shadow-md text-center"
            >
                <FaWhatsapp className="text-xl" /> Pedir pelo WhatsApp
            </a>
        </section>
    );
};

export default Cta;
