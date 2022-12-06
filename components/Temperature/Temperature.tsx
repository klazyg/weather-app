import React from "react";
import styles from "./Temperature.module.scss";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { TiWeatherWindy } from "react-icons/ti";
import { WiHumidity } from "react-icons/wi";
import { TbTemperature } from "react-icons/tb";

const iconUrlFromCode = (code: string) => {
    const iconCodes = ["01d", "01n", "02d",
        "02n", "03d", "03n", "04d", "04n", "09d", "09n", "10d",
        "10n", "11d", "11n", "13d", "13n", "50d", "50n"];
    if (iconCodes.includes(code)) {
        return `http://openweathermap.org/img/wn/${code}@2x.png`;
    } else {
        return `http://openweathermap.org/img/wn/50d@2x.png`;
    }
};

export { iconUrlFromCode };

function Temperature({ data }) {
    return (
        <div className={styles.section}>
            <div className={styles.weather}>
                {data.weather[0].main}
            </div>
            <div className={styles.temperature}>
                <img src={iconUrlFromCode(data.weather[0].icon)}
                    className={styles.image}
                    alt={data.weather[0].main}
                    width={150}
                    height={150}
                />
                <p className={styles.celsius}>
                    {data.main.temp.toFixed(0)}°C
                </p>
            </div>
            <div className={styles.dsp}>
                <div className={styles.icons}>
                    <TbTemperature
                        size={50}
                        className={styles.icon} />
                    <div className={styles.text}>
                        <div className={styles.title}>
                            Real fell:
                        </div>
                        <span className={styles.icon_text}>
                            {data.main.feels_like.toFixed(0)}°C
                        </span>
                    </div>
                </div>
                <div className={styles.icons}>
                    <WiHumidity
                        size={50}
                        className={styles.icon} />
                    <div className={styles.text}>
                        <div className={styles.title}>
                            Humidity:
                        </div>
                        <span className={styles.icon_text}>
                            {data.main.humidity.toFixed(0)}%
                        </span>
                    </div>
                </div>
                <div className={styles.icons}>
                    <TiWeatherWindy
                        size={50}
                        className={styles.icon} />
                    <div className={styles.text}>
                        <div className={styles.title}>
                            Wind:
                        </div>
                        <span className={styles.icon_text}>
                            {data.wind.speed.toFixed(0)} km/h
                        </span>
                    </div>
                </div>
                <div className={styles.icons}>
                    <AiOutlineArrowUp
                        size={50}
                        className={styles.icon} />
                    <div className={styles.text}>
                        <div className={styles.title}>
                            High:
                        </div>
                        <span className={styles.icon_text}>
                            {data.main.temp_max.toFixed(0)}°C
                        </span>
                    </div>
                </div>
                <div className={styles.icons}>
                    <AiOutlineArrowDown
                        size={50}
                        className={styles.icon} />
                    <div className={styles.text}>
                        <div className={styles.title}>
                            Low:
                        </div>
                        <span className={styles.icon_text}>
                            {data.main.temp_min.toFixed(0)}°C
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Temperature;