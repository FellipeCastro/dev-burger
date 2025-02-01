import { MdClose } from "react-icons/md";
import styles from "./FlashMsg.module.css";

const FlashMsg = ({ setFlashMsg }) => {
    return (
        <div className={styles.flashMsg}>
            <span>Acompoanhe seu pedido pelo Whatsapp!</span>
            <button onClick={() => setFlashMsg(false)}>
                <MdClose />
            </button>
        </div>
    );
};

export default FlashMsg;
