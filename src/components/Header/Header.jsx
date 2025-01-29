import logo from "../../assets/hamb-1.png";
import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <img src={logo} alt="Logo" />
            <h1>Dev Burger</h1>
            <span className={styles.address}>Rua dos Bobos 00, São Paulo - SP</span>
            <span className={styles.businessHours}>Seg. a Dom. – 18h às 22h</span>
        </header>
    );
};

export default Header;
