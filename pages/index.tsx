import { useState, useEffect } from "react";
import Layout from '../components/Layout/Layout';
import Buttons from '../components/Buttons/Buttons';
import Input from '../components/Input/Input';
import Currentdata from '../components/Currentdata/Currentdata';
import Temperature from '../components/Temperature/Temperature';
import axios from "axios";

const BASE_URL = "http://api.openweathermap.org/data/2.5/weather/?q=";

//DELETED API
const API_KEY = "&units=metric&appid=";

function Weather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('Las Palmas');

  const getWeather = async (city: string) => {
    try {
      const response = await axios.get((BASE_URL + city + API_KEY));
      setWeather(response.data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getWeather(city);
  }, []);


  useEffect(() => {
    getWeather(city);
  }, [city]);

  return (
    <Layout>
      <Buttons setCity={setCity} />
      <Input setCity={setCity} />
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post weather - ${error}`}</div>
      )}
      {weather && (
        <div>
          <Currentdata data={{ ...weather }} />
          <Temperature data={{ ...weather }} />
        </div>
      )};
    </Layout>
  )
};

export default Weather;