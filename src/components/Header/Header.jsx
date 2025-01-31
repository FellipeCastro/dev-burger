import logo from "../../assets/hamb-1.png";
import styles from "./Header.module.css";

const Header = ({ isRestaurantOpen }) => {
    return (
        <header className={styles.header}>
            <img src={logo} alt="Logo" />
            <h1>Dev Burger</h1>
            <a href="#" target="_blank" className={styles.address}>Rua dos Hambúrgueres, 00, São Paulo - SP</a>
            <span className={isRestaurantOpen ? styles.open : styles.closed}>Seg. a Dom. – 13h às 23h</span>
        </header>
    );
};

export default Header;
