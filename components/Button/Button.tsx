import { useCallback } from "react";
import styles from "./Button.module.scss";

interface IButton {
    setCity: (x: City) => void;
}

enum City {
    Warsaw = 'Warsaw',
    Krakow = 'Krakow',
    Wroclaw = 'Wroclaw',
    Gdansk = 'Gdansk',
}

const Button: React.FC<IButton> = ({ setCity }) => {
    const handleClick = useCallback((city: City) => () => setCity(city), [setCity])
    return (
        <div className={styles.section}>
            <p className={styles.text}>Suggestions:</p>
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