import { IoClose } from "react-icons/io5";

const FlashMsg = ({ flashMsg, setFlashMsg }) => {
    return (
        <div
            className={`fixed top-4 left-4 px-6 py-4 sm:px-8 sm:py-4 bg-green-100 text-green-700 text-xs sm:text-sm font-bold rounded shadow-lg z-[9999] transition-all duration-500 ease-in-out ${
                flashMsg ? "left-4 opacity-100" : "left-[-100%] opacity-0"
            }`}
            style={{
                transform: flashMsg ? "translateX(0)" : "translateX(-100%)",
            }}
        >
            <span>Acompanhe seu pedido pelo Whatsapp!</span>
            <button
                onClick={() => setFlashMsg(false)}
                className="absolute top-1 right-1 p-1 bg-transparent border-none text-green-700 cursor-pointer hover:text-green-900 transition-colors"
            >
                <IoClose className="text-base sm:text-lg" />
            </button>
        </div>
    );
};

export default FlashMsg;
