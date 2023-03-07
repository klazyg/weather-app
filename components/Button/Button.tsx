import { useCallback } from "react";
import styles from "./Button.module.scss";
import { City } from "./enums";

interface IButton {
    setCity: (x: City) => void;
}

const Button: React.FC<IButton> = ({ setCity }) => {
    const handleClick = useCallback((city: City) => () => setCity(city), [setCity])
    return (
        <div className={styles.section}>
            <span className={styles.text}>Suggestions:</span>
            {Object.values(City).map((city) => (
                <button
                    className={styles.button}
                    key={city}
                    onClick={handleClick(city)}>
                    {city}
                </button>
            ))}
        </div>
    );
}

export default Button;