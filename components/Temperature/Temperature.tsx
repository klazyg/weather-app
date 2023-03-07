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

    const weatherData = [
        {
            icon: (
                <>
                    <TbTemperature size={50} className={styles.icon} />
                    <TbTemperature size={30} className={styles.icon_mobile} />
                </>
            ),
            title: "Real feel",
            value: feels_like.toFixed(1),
            unit: "°C"
        },
        {
            icon: (
                <>
                    <WiHumidity size={50} className={styles.icon} />
                    <WiHumidity size={30} className={styles.icon_mobile} />
                </>
            ),
            title: "Humidity",
            value: humidity.toFixed(1),
            unit: "%"
        },
        {
            icon: (
                <>
                    <TiWeatherWindy size={50} className={styles.icon} />
                    <TiWeatherWindy size={30} className={styles.icon_mobile} />
                </>
            ),
            title: "Wind",
            value: speed.toFixed(1),
            unit: "km/h"
        },
        {
            icon: (
                <>
                    <AiOutlineArrowUp size={50} className={styles.icon} />
                    <AiOutlineArrowUp size={30} className={styles.icon_mobile} />
                </>
            ),
            title: "High",
            value: temp_max.toFixed(1),
            unit: "°C"
        },
        {
            icon: (
                <>
                    <AiOutlineArrowDown size={50} className={styles.icon} />
                    <AiOutlineArrowDown size={30} className={styles.icon_mobile} />
                </>
            ),
            title: "Low",
            value: temp_min.toFixed(1),
            unit: "°C"
        },
    ];

    return (
        <div className={styles.section}>
            <div className={styles.weatherMain}>
                {weatherMain}
            </div>
            <div className={styles.temperature}>
                <img src={iconUrl(icon)}
                    className={styles.image_mobile}
                    alt={weatherMain}
                    width={100}
                    height={100}
                />
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
                {weatherData.map(({ icon, title, value, unit }, index) => (
                    <div className={styles.position} key={index}>
                        {icon}
                        <div className={styles.text}>
                            <div className={styles.title}>
                                {title}:
                            </div>
                            <span className={styles.value}>
                                {value}{unit}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Temperature;