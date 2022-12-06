import React from "react";
import styles from "./Buttons.module.scss";

interface IButtons {
    setCity: (x: string) => void;
}

const Buttons: React.FC<IButtons> = ({ setCity }) => {

    const cities = [
        'Warsaw',
        'Krakow',
        'Wroclaw',
        'Gdansk',
    ]

    return (
        <div className={styles.section}>
            <p className={styles.text}>Suggestions:</p>
            {cities.map((city, index) => (
                <button
                    className={styles.buttons}
                    key={index}
                    onClick={() => setCity(city)}
                >
                    {city}
                </button>
            ))}

        </div>
    );
}

export default Buttons;