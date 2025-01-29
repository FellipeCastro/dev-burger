import { BsFillCartFill } from "react-icons/bs";
import styles from "./Footer.module.css";

const Footer = ({ setCartIsOpen, cart }) => {
    return (
        <footer className={styles.footer}>
            <button onClick={() => setCartIsOpen(true)}>
                ({cart.length}) Veja seu carrinho <BsFillCartFill />
            </button>
        </footer>
    );
};

export default Footer;
