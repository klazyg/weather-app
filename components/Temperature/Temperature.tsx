import styles from "./Temperature.module.scss";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { TiWeatherWindy } from "react-icons/ti";
import { WiHumidity } from "react-icons/wi";
import { TbTemperature } from "react-icons/tb";
interface WeatherData {
    weather: Array<{
        main: string;
        icon: string;
    }>;
    main: {
        temp: number;
        feels_like: number;
        humidity: number;
        temp_max: number;
        temp_min: number;
    };
    wind: {
        speed: number;
    };
}

const iconUrl = (code: string) => {
    const iconCodes = ["01d", "01n", "02d",
        "02n", "03d", "03n", "04d", "04n", "09d", "09n", "10d",
        "10n", "11d", "11n", "13d", "13n", "50d", "50n"];
    if (iconCodes.includes(code)) {
        return `http://openweathermap.org/img/wn/${code}@2x.png`;
    } else {
        return `http://openweathermap.org/img/wn/50d@2x.png`;
    }
};

export { iconUrl };

const Temperature: React.FC<{ data: WeatherData }> = ({ data }) => {
    const { weather, main, wind } = data;
    const { main: weatherMain, icon } = weather[0];
    const { temp, feels_like, humidity, temp_max, temp_min } = main;
    const { speed } = wind;
    return (
        <div className={styles.section}>
            <div className={styles.weatherMain}>
                {weatherMain}
            </div>
            <div className={styles.temperature}>
                <img src={iconUrl(icon)}
                    className={styles.image}
                    alt={weatherMain}
                    width={150}
                    height={150}
                />
                <p className={styles.celsius}>
                    {temp.toFixed(1)}°C
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
                            {feels_like.toFixed(1)}°C
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
                            {humidity.toFixed(1)}%
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
                            {speed.toFixed(1)} km/h
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
                            {temp_max.toFixed(1)}°C
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
                            {temp_min.toFixed(1)}°C
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Temperature;