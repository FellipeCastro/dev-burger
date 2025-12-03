import logo from "../../assets/hamb-1.png";
import styles from "./Header.module.css";

const Header = ({ isRestaurantOpen, openHour, closeHour }) => {
    return (
        <div className={styles.header}>
            <img src={logo} alt="Logo" />
            <h1>Dev Burger</h1>
            <a href="https://www.google.com.br/maps" target="_blank" className={styles.address}>
                Rua dos Hambúrgueres, 00, São Paulo - SP
            </a>
            <span className={isRestaurantOpen ? styles.open : styles.closed}>
                Seg. a Dom. – {openHour}h às {closeHour}h
            </span>
        </div>
    );
};

export default Header;
