import { BsFillCartPlusFill } from "react-icons/bs";
import styles from "./Card.module.css";

const Card = ({ title, img, description, price, quantity, addOnCart }) => {
    return (
        <div className={styles.card}>
            <div className={styles.img}>
                <img src={img} alt={title} />
            </div>
            <div className={styles.textContainer}>
                {quantity > 0 && <span className={styles.quantityItem}>{quantity}</span>}
                <h3>{title}</h3>
                <p>{description}</p>
                <div className={styles.flexContainer}>
                    <strong>R$ {price.toFixed(2)}</strong>
                    <button onClick={addOnCart}>
                        <BsFillCartPlusFill />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
