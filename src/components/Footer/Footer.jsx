import { BsFillCartFill  } from "react-icons/bs";

import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <button>
                (0) Veja seu carrinho <BsFillCartFill />
            </button>
        </footer>
    )
}

export default Footer;
