import { IoClose } from "react-icons/io5";
import styles from "./FlashMsg.module.css";

const FlashMsg = ({ flashMsg, setFlashMsg }) => {
    return (
        <div
            className={`${styles.flashMessage} ${
                flashMsg ? "" : styles.closeMsg
            }`}
        >
            <span>Acompoanhe seu pedido pelo Whatsapp!</span>
            <button onClick={() => setFlashMsg(false)}>
                <IoClose />
            </button>
        </div>
    );
};

export default FlashMsg;
